import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import Customer from "../models/customer.model";
import { Sequelize } from "sequelize";
import sequelize from "sequelize";

export default class CustomerRoutes extends CommonRoutesConfig {
      constructor(app: Application) {
            super(app, "Customer Routes");
        }
    
        configureRoutes(): Application {
            this.app.route("/api/customers")
                .post( async (req:Request, res: Response) => {
                    try {
                    res.status(201).send(await Customer.create(req.body));
                    }  catch (error) {
                        if (error instanceof sequelize.ValidationError) {
                            const messages = error.errors.map(err => err.message);
                            return res.status(400).json({ errors: messages });
                        }
                    // Handle other types of errors (e.g., database connection errors)
                    return res.status(500).json({ error: 'Internal server error' });
}
                });

            return this.app;
        }
}