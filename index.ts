import express from "express";
import * as http from "http";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import "reflect-metadata";
import bodyParser from "body-parser";
import morgan from "morgan";
import { RegisterRoutes } from "./src/routes/routes";
import { initializeDatabase } from "./src/entities";
import { start } from "./src/services/promises.services";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: string | number = 4001;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      explorer: true,
      validatorUrl: null
    },
    customSiteTitle: "API Documentation",
    customfavIcon: "/favicon.ico",
    customCssUrl: "/swag.css",
  }),
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("Nothing will see here. But it works!");
});

server.listen(port, () => {
	//new RegisterRoutes(app);

  //initializeDatabase();

  start();
});