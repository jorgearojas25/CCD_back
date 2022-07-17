import "dotenv/config";
import "module-alias/register";
import validateEnv from "@/utils/validateEnv";
import App from "./app";
import ThingNetwork from "@/network/thing.network";
import Network from "@/network/index.network";

validateEnv();

const app = new App(Network, Number(process.env.PORT));

app.listen();
