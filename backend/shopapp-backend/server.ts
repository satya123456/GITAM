import express, {Application, Request, Response} from 'express' // installed
import {Server, createServer} from 'http' // built-in NodeJS module
import cors from 'cors';
import { CommonRoutesConfig } from './routes/CommonRoutesConfig';
import ProductRoutes from './routes/products.routes';

const app:Application = express();
const server:Server = createServer(app);
const routes: CommonRoutesConfig[]= []; // array of routes like api/products, api/customers
const port = 1234;

app.use(express.json()); // middleware
app.use(cors()); 

routes.push(new ProductRoutes(app));

// http://localhost:1234/

app.get("/", (req:Request, res: Response) => {
    res.status(200).send("Server is Running on Port 1234");
});

server.listen(port, () => {
    console.log("server started!!!");
})