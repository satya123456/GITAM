import { describe, it, expect } from "vitest"; // jest
import {add} from './lib'

// test suite
// Assemble
describe("testing library", () => {
    // test spec
    it("add two positive numbers", () => {
        let result = add(4,5); // Action
        expect(result).toBe(9); // Assert
    });

    // test spec
    it("add negative  numbers", () => {
        let result = add(-4, -5); // Action
        expect(result).toBe(-9);
    })
});