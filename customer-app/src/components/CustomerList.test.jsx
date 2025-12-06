import {fireEvent, render, screen} from '@testing-library/react'

import { describe, expect } from "vitest";
import CustomerList from "./CustomerList";

// test suite
describe("testing <CustomerList />", () => {
    it("renders <CustomerList />", () => {
        render(<CustomerList />); 
        let btns = screen.queryAllByRole('button'); // get all buttons
        expect(btns.length).toBe(6);
    });

     it("delete a customer <CustomerList />", () => {
        render(<CustomerList />); 
        let btns = screen.queryAllByRole('button'); // get all buttons
        fireEvent.click(btns[3]) ; // 4th customer is deleted
        // screen.debug();
        btns = screen.queryAllByRole('button'); 
        expect(btns.length).toBe(5); // one of the customer is deleted!!!

        let elem = screen.queryByText(/Joey/);
        expect(elem).toBeFalsy();
    });

    it("filter customers <CustomerList/> ", () => {
         render(<CustomerList />); 
         let txtBox = screen.queryByPlaceholderText('search by name');
         fireEvent.change(txtBox, {"target": {"value": "Geller"}});  
         screen.debug(); 
          let btns = screen.queryAllByRole('button');
           expect(btns.length).toBe(2);
    })
})