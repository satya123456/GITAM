// import Customer from "../models/customer.model";
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { Customer } from "../models"; // index.ts

class CustomerService {
  private readonly __saltRounds = 12;
  private readonly __jwtSecret = 'TopSecretSaltValueShouldbeVeryLengthyOnminimumof256Characters';
  //   async  addCustomer(customer: Customer) {
  //     return await Customer.create({...customer}); // insert into
  // }
  addCustomer = async (customer: Customer) => {
    const { email, name, password } = customer;

    // Generate a salt (10 rounds is a common starting point)
    const salt = await bcrypt.genSalt(this.__saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user with the hashed password
    const newUser = new Customer({ email, name, password: hashedPassword });
    return await newUser.save();

    //res.status(201).json({ message: 'User created successfully!' })
    //  let {email, name, password} = customer;
    //  return bcrypt.hash(password,this.__saltRounds)
    //  .then(hash => {
    //   console.log(hash);
    //   return Customer.create({email, name, password: hash});
    //  })
    // return await Customer.create({...customer}); // insert into
  }

  async login({email, password}:Customer) {
    const iat = Math.floor(Date.now() / 1000);
    let customer: Customer = await Customer.findByPk(email) as Customer;
    // if(bcrypt.compareSync(customer.password,password)){
     return {
      token: jwt.sign({
        subject: customer.email,
        iat,
        exp: iat + (60*60), // 1 hour
        roles: ["ADMIN", "MANAGER"]
      },
    this.__jwtSecret)
    }
  // }
  }

  async verifyToken(token:string) {
    try {
    let decoded = await jwt.verify(token, this.__jwtSecret);
    console.log(decoded);
    return true;
    } catch(error) {
      return false;
    }
  }
}

export default new CustomerService(); 