import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import Customer from "../models/customer.model";

export default class CustomerRoutes extends CommonRoutesConfig {
      constructor(app: Application) {
            super(app, "Customer Routes");
        }
    
        configureRoutes(): Application {
            this.app.route("/api/customers")
                .post( async (req:Request, res: Response) => {
                    res.status(201).send(await Customer.create(req.body));
                });

            return this.app;
        }
}