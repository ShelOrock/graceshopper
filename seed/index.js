import chalk from 'chalk';

import seed from './seed.js';
import { db } from '../server/db/index.js';

db.sync({ force: true })
.then(() => seed())
.then(() => {
  console.log(chalk.magenta('New seed creation successful'));
  process.exit(0);
})
.catch(e => { 
  console.log(chalk.red('Problem creating seed', e));
  process.exit(1);
});