const env = process.env;

const config = {
  db: {
    host: env.DB_HOST as string,
    port: env.DB_PORT as string,
    user: env.DB_USER as string,
    password: env.DB_PASSWORD as string,
    database: env.DB_NAME as string
  }
};

export default config;
