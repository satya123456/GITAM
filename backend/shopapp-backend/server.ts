import express, {Application, Request, Response} from 'express' // installed
import {Server, createServer} from 'http' // built-in NodeJS module
import cors from 'cors';
import { CommonRoutesConfig } from './routes/CommonRoutesConfig';
import ProductRoutes from './routes/products.routes';
import CustomerRoutes from './routes/customers.routes';
import orderService from './services/order.service';

const app:Application = express();
const server:Server = createServer(app);
const routes: CommonRoutesConfig[]= []; // array of routes like api/products, api/customers
const port = 1234;

app.use(express.json()); // middleware
app.use(cors()); // middleware

routes.push(new ProductRoutes(app));
routes.push(new CustomerRoutes(app));
// http://localhost:1234/
// app.get("/api/products", (req:Request, res: Response) => {

// })

// app.post("/api/product", (req:Request, res: Response) => {

// });

app.post("/newOrder", async (req:Request, res:Response) => {

    await orderService.createOrder("roger@gmail.com",  [
            {"product": 4, qty: 2},
            {"product": 1, qty: 3}
        ]);

    res.status(201).send("Order placed!!!")
});
app.get("/", (req:Request, res: Response) => {
    res.status(200).send("Server is Running on Port 1234");
});


server.listen(port, () => {
    console.log("server started!!!");
})