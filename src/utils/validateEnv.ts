import { cleanEnv, str, port } from "envalid";

export default function validateEnv(): void {
    cleanEnv(process.env, {
        NODE_ENV: str({ choices: ["development", "production"] }),
        MYSQL_PASSWORD: str(),
        MYSQL_HOST: str(),
        MYSQL_DBNAME: str(),
        MYSQL_USER: str(),
        PORT: port({ default: 3000 }),
    });
}
