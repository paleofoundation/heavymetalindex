import { required } from "./config.mjs";

export function clerkFrontend() {
  const key = required("CLERK_PUBLISHABLE_KEY");
  if (!/^pk_(test|live)_[A-Za-z0-9_-]+={0,2}$/.test(key))
    throw Error("Invalid Clerk publishable key");
  const domain = Buffer.from(key.replace(/^pk_(test|live)_/, ""), "base64")
    .toString()
    .replace(/\$$/, "");
  if (!/^[a-z0-9.-]+$/.test(domain))
    throw Error("Invalid Clerk frontend domain");
  return { key, domain };
}
