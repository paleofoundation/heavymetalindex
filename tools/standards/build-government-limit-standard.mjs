#!/usr/bin/env node
// Compatibility entry point, S-DOI-1. Occurrence never supplies a ceiling.
// Use --product=<slug>[,<slug>] to inspect; no files written by this command.
import { main } from './build-regulatory-floor-table.mjs';
main([...process.argv.slice(2), '--print', '--strict']);
