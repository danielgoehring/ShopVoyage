// // import { Pool } from "pg";
// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "shopvoyageuser",
//   host: "localhost",
//   database: "ShopVoyagedatabase",
//   password: "password",
//   port: 5432, // Default PostgreSQL port
// });

// module.exports = pool;

// db.js or wherever you set up the PostgreSQL connection
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER, // Database username
  host: process.env.DB_HOST, // Database host
  database: process.env.DB_NAME, // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: process.env.DB_PORT || 5432, // Database port
});

module.exports = pool;
