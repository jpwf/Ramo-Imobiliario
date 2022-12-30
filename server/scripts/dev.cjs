const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function importDotEnv(envPath) {
    if (fs.existsSync(envPath))
        dotenv.config({ path: envPath });
    else {
        console.log('\x1b[31m%s\x1b[0m', 'Try to copy \".env.example\" to \".env\" and fill it with your own data');
        throw new Error('.env file not found');
    }
}

function ensureEnvVariables() {
    process.env.port = Number(process.env.port) || 3000;
    process.env.enviroment = process.env.enviroment || 'development';
    if (!process.env.secret)
        notFound('Secret', 'secret');
    if (!process.env.mongodb_uri)
        notFound('MongoDB URI', 'mongodb_uri');

    function notFound(name, varName) {
        throw new Error(`Environment variable "${varName}" not found. Set the environment variable "${varName}" with your ${name}.`);
    }
}

importDotEnv(path.join(__dirname, '..', '.env'));
ensureEnvVariables();

import('../src/index.js');
