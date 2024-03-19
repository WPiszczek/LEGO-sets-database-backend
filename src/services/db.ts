import config from "../config";
import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: config.db.host || "localhost",
    port: parseInt(config.db.port || "5432"),
    user: config.db.user || "postgres",
    password: config.db.password || "postgres",
    database: config.db.database || "postgres"
  }
});

export default db;
