import {Request, Response} from 'express'
import orderService from '../services/order.service'

class OrderController {
    async getOrders(req: Request, res: Response) {
        const orders = await orderService.getOrders();
        res.status(200).send(orders);
    }

    async createOrder(req:Request, res: Response) {
        const order = await orderService.createOrder(req.body.email, req.body.items);
        res.status(201).send(order);
    }

    async getReport(req:Request, res: Response) {
        const order = await orderService.getReport(+req.params.id);
        res.status(200).send(order);
    }

}

export default new OrderController();