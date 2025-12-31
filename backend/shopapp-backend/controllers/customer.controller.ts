import {Request, Response} from 'express'
import customerService from '../services/customer.service';

class CustomerController {
    async register(req:Request, res: Response) {
            const customer = await customerService.addCustomer(req.body);
            res.status(200).send(customer);
    }

     async login(req:Request, res: Response) {
            const token = await customerService.login(req.body);
            res.status(200).send(token);
    }
}

export default new CustomerController();