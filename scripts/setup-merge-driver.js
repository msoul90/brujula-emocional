const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const gitExecutable = process.env.GIT_EXECUTABLE || path.join(
  process.env.ProgramW6432 || process.env.ProgramFiles || '',
  'Git',
  'cmd',
  'git.exe'
);

const nodeExecutable = JSON.stringify(process.execPath);

try {
  if (!path.isAbsolute(gitExecutable) || !fs.existsSync(gitExecutable)) {
    throw new Error('Git executable not found. Set GIT_EXECUTABLE to its absolute path.');
  }

  console.log('Configuring local Git merge driver for built files...');
  
  execFileSync(gitExecutable, ['config', 'merge.ours-built.name', 'Keep ours merge driver for built files']);
  execFileSync(gitExecutable, ['config', 'merge.ours-built.driver', `${nodeExecutable} -e "process.exit(0)"`]);
  
  console.log('Successfully configured ours-built merge driver!');
  console.log('Git will now automatically resolve conflicts in dist/, sw.js, and js/version.js.');
} catch (error) {
  console.error('Failed to configure Git merge driver:', error.message);
  process.exit(1);
}
