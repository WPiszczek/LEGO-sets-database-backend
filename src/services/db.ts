import config from "../config";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: config.db.host,
    port: parseInt(config.db.port || "3306"),
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
  }
});

export default db;
