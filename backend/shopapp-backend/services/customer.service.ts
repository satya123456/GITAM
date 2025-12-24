// import Customer from "../models/customer.model";

import { Customer } from "../models"; // index.ts

class CustomerService {
      async  addCustomer(customer: Customer) {
        return await Customer.create({...customer}); // insert into
    }
}

export default new CustomerService(); 