import app from './express.js';
import chalk from 'chalk';

import { db } from './db/index.js';

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => console.log(chalk.cyanBright('db synced')))
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening at localhost:${ PORT }`);
    });
  })
  .catch(e => console.log('error syncing db ', e));
