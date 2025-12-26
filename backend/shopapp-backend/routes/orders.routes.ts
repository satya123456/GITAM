import { Application} from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import orderController from "../controllers/order.controller";

export default class OrderRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "Order Routes");
    }
    getName(): string {
        return this.name;
    }
    configureRoutes(): Application {
        this.app.route('/api/orders')
            .get(orderController.getOrders)
            .post(orderController.createOrder);
        this.app.route('/api/orders/report/:id')
            .get(orderController.getReport);
        return this.app;
    }
    
}