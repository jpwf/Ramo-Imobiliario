const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function importDotEnv(envPath) {
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'File .env not found. Try to copy .env.example to .env and fill it with your own data.');
        return 1;
    }
}

function startServer(indexPath) {
    require('child_process').spawn(indexPath, { stdio: 'inherit', shell: true });
}

if (!importDotEnv(path.join(__dirname, '..', '.env'))) {
    startServer(`nodemon ${path.join(__dirname, '..', 'src', 'index.js')}`);
}
