const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function importDotEnv(envPath) {
    if (fs.existsSync(envPath)) {
        dotenv.config({ path: envPath });
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'Try to copy \".env.example\" to \".env\" and fill it with your own data');
        throw new Error('.env file not found');
    }
}

function ensureEnvVariables() {
    process.env.port = Number(process.env.port) || 3000;
    process.env.enviroment = process.env.enviroment || 'development';
    if (!process.env.mongodb_uri)
        throw new Error('MongoDB URI not found. Set the environment variable "mongodb_uri" with your MongoDB URI.');
}

importDotEnv(path.join(__dirname, '..', '.env'));
ensureEnvVariables();

import('../src/index.js');
