export function response() {
  return { statusCode: 200, headers: {}, body: null,
    setHeader(k,v) { this.headers[k.toLowerCase()] = v; },
    status(n) { this.statusCode = n; return this; },
    json(data) { this.body = data; return this; },
    end(data = '') { this.body = data; return this; },
  };
}

export function database(rows = [], { error = null, rpcError = null } = {}) {
  const calls = [];
  return { rows, calls,
    from(table) {
      let filters = [], mutation, action;
      const q = {
        select() { return q; },
        eq(k,v) { filters.push([k,v]); return q; },
        insert(value) { mutation = value; action = 'insert'; return q; },
        update(value) { mutation = value; action = 'update'; return q; },
        async maybeSingle() { return { data: rows.find(r => filters.every(([k,v]) => r[k] === v)) ?? null, error }; },
        then(resolve, reject) {
          calls.push({ table, action, mutation, filters });
          if (!error) {
            if (action === 'insert') rows.push(mutation);
            if (action === 'update') for (const r of rows.filter(r => filters.every(([k,v]) => r[k] === v))) Object.assign(r, mutation);
          }
          return Promise.resolve({ error }).then(resolve,reject);
        },
      };
      return q;
    },
    async rpc(name, args) { calls.push({ rpc: name, args }); return { error: rpcError }; },
  };
}
