import { describe, expect, test } from 'bun:test';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dir, '..');
const DEMO = path.join(ROOT, 'demos', 'northstar-pantry');

describe('Northstar Pantry demo scaffold', () => {
  test('package.json exposes a runnable demo script', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
    expect(pkg.scripts['demo:northstar']).toBe('python demos/northstar-pantry/run_demo.py');
  });

  test('contains agent logic, gbrain memory, and business state', () => {
    expect(fs.existsSync(path.join(DEMO, 'agent-logic', 'README.md'))).toBe(true);
    expect(fs.existsSync(path.join(DEMO, 'gbrain', 'memory.jsonl'))).toBe(true);
    expect(fs.existsSync(path.join(DEMO, 'data', 'business-state.json'))).toBe(true);
  });
});
