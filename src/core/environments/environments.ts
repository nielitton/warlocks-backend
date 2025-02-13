import { configDotenv } from "dotenv";

configDotenv()

const { APP_PORT, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

export {
    APP_PORT,
    JWT_SECRET,
    JWT_EXPIRES_IN,
}