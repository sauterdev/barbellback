import * as knex from "knex";

const environment = process.env.NODE_ENV || "development";
const configOptions = require("../knexfile")[environment];

module.exports = knex(configOptions);
