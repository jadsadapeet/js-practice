// รัน test เฉพาะชุดที่เริ่มทำแล้ว
// "เริ่มทำแล้ว" = ไฟล์คำตอบ (exercise.js หรือ code.js) ต่างจากตอนเริ่มต้นใน commit แรกของ repo
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

const firstCommit = git('rev-list', '--max-parents=0', 'HEAD').split('\n')[0];

const sets = [
  ...readdirSync('exercises').map((d) => ({ dir: join('exercises', d), file: 'exercise.js' })),
  ...readdirSync('review')
    .filter((d) => existsSync(join('review', d, 'code.js')))
    .map((d) => ({ dir: join('review', d), file: 'code.js' })),
];

function isStarted({ dir, file }) {
  try {
    execFileSync('git', ['diff', '--quiet', firstCommit, '--', join(dir, file)]);
    return false; // ไม่มีอะไรต่างจากตอนเริ่ม
  } catch {
    return true; // git diff --quiet คืนค่า 1 เมื่อไฟล์ถูกแก้
  }
}

const started = sets.filter(isStarted);
const skipped = sets.filter((s) => !started.includes(s));

console.log('ชุดที่ตรวจ:', started.map((s) => s.dir).join(', ') || '-');
console.log('ชุดที่ข้าม (ยังไม่เริ่ม):', skipped.map((s) => s.dir).join(', ') || '-');

if (started.length === 0) {
  console.log('ยังไม่มีชุดไหนเริ่มทำ ไม่มีอะไรให้ตรวจ');
  process.exit(0);
}

const testFiles = started.flatMap(({ dir }) =>
  readdirSync(dir)
    .filter((f) => f.endsWith('.test.js'))
    .map((f) => join(dir, f)),
);

try {
  execFileSync(process.execPath, ['--test', ...testFiles], { stdio: 'inherit' });
} catch {
  process.exit(1);
}
