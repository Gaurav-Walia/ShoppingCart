const { Client } = require("pg");

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "123456",
    port: 5432
});

client.connect();