import { configDotenv } from "dotenv";

configDotenv()

const { APP_PORT } = process.env;

export {
    APP_PORT
}