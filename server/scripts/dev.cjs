const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function importDotEnv(envPath) {
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'Try to copy .env.example to .env and fill it with your own data.');
        throw new Error('.env file not found');
    }
}

if (!importDotEnv(path.join(__dirname, '..', '.env'))) {
    import('../src/index.js');
}
