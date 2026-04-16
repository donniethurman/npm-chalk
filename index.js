// Import the chalk package
const chalk = require('chalk');

// Use chalk to print colorful text
console.log(chalk.blue('Hello from npm!'));
console.log(chalk.green('✓ You successfully installed and used a package!'));
console.log(chalk.yellow('Package name: chalk'));
console.log(chalk.magenta('This package makes your console output colorful!'));

// Example of combining colors
console.log('\n' + chalk.bgBlue.white(' SUCCESS ') + ' ' + chalk.bold('npm basics learned!'));