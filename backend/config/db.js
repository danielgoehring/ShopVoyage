// import { Pool } from "pg";
const { Pool } = require("pg");

const pool = new Pool({
  user: "shopvoyageuser",
  host: "localhost",
  database: "ShopVoyagedatabase",
  password: "password",
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
