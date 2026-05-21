const { execFileSync } = require('node:child_process');

try {
  console.log('Configuring local Git merge driver for built files...');
  
  execFileSync('git', ['config', 'merge.ours-built.name', 'Keep ours merge driver for built files']);
  execFileSync('git', ['config', 'merge.ours-built.driver', 'node -e "process.exit(0)"']);
  
  console.log('Successfully configured ours-built merge driver!');
  console.log('Git will now automatically resolve conflicts in dist/, sw.js, and js/version.js.');
} catch (error) {
  console.error('Failed to configure Git merge driver:', error.message);
  process.exit(1);
}
