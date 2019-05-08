import fs from 'fs';

export default function readFile(path: string): string {
  return fs.readFileSync(path, 'utf-8');
};
