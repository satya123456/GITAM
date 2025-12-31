import type { NextApiRequest, NextApiResponse } from 'next';
import {Customer} from '@/database/models';
// import sequelize from '@/database/database';

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



export default async function login(request:NextApiRequest, response: NextApiResponse) {
    try { 
        const {email, password} = request.body;
      
        const user = await Customer.findByPk(email);

        if(!user){
           response.status(400).json({error: "User doesn't exists"});
           return;
        }

        //hash password
        const validPassword = await bcryptjs.compare(password, user!.password);

        if(!validPassword){
            response.status(401).json({error: "Invalid User/password"})
        }

        //create token data
        // The library automatically adds 'iat'
        const tokenData = {
            subject: user.email,
            username: user.name,
            authorities: ['ADMIN', 'MANAGER']
        }

        //create token
        const token = await jwt.sign(tokenData, "TopSecretSecretValieHasToBe256Characters",
             { expiresIn: "1d" })

       response.status(200).json({
        token
       })     

    } catch (error:any) {
         response.status(500).json({error: error.message})
    }
}