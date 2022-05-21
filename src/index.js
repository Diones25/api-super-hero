import express from "express";
import cors from 'cors';
import routes from "./routes/routes.js";
import chalk from "chalk";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(chalk.bgGreenBright.black(`Servidor rodando no endereço: http://localhost:${port}`));
});