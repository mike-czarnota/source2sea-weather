const fs = require('fs');
const path = require('path');

const envFileExist = fs.existsSync(path.join(__dirname, '..', '.env'));

if (!envFileExist) {
  throw new Error('Ensure that you have your .env file setup');
}
