

const { Client } = require('pg');

const client = new Client({ user: 'your_username', host: 'your_host', database: 'your_database', password: 'your_password', port: 'your_port', });

client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });