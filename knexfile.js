import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DEV_DB_URL,
    migrations: {
      directory: "./server/data/migrations",
    },
    seeds: {
      directory: "./server/data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.PROD_DB_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./server/data/migrations",
    },
    seeds: {
      directory: "./server/data/seeds",
    },
  },
};
