import {IncomingHttpHeaders} from 'http'
import {  Request, Response, NextFunction } from 'express'

import customerService from './services/customer.service'

function getTokenFromHeaders(headers:IncomingHttpHeaders) {
    const header = headers.authorization as string;
    if(!header) {
        return header;
    }
    return header.split(' ')[1]; //token, 0 is Bearer
}

export  async function tokenGuard(req:Request, res: Response, next: NextFunction){
    const token = getTokenFromHeaders(req.headers);
    const hasAccess = await customerService.verifyToken(token);
    if(hasAccess) {
        next();
    } else {
        res.status(403).send({message: 'No Access'});
    }
}
