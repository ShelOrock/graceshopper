import chalk from 'chalk';

import db from '../server/db/database.js';

import productionSeed from './seed.js';

db.sync({ force: true })
  .then(() => productionSeed())
  .then(() => {
    console.log(chalk.blue('new seed created successfully'));
    process.exit(0);
  })
  .catch((e) => {
    console.log(chalk.red('problem creating a new seed', e));
    process.exit(1);
});