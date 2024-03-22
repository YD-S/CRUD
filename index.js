

const { Client } = require('pg');

const client = new Client({ user: 'postgres', host: 'postgres', database: 'mydatabase', password: 'postgres', port: '5432', });

client.connect() .then(() => { console.log('Connected to PostgreSQL database!'); }) .catch((err) => { console.error('Error connecting to the database:', err); });