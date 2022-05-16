let myFunctions = require(`./functions`);

// test("test to see if 2 is equal to 2", () => {
//     expect(myFunctions.returnTwo()).toBe(2);
// });

// test("Testing the greeting response", () => {
//     expect(myFunctions.greeting('James')).toBe('Hello, James');
// })


describe("Math Functions", () => {
    
    test('Testing the sum function', () => {
        expect(myFunctions.add(2, 4)).toBe(6);
    })
    
    test('Testing the Multiply function', () => {
        expect(myFunctions.multiply(3, 4)).toBe(12);
    })

    test('Testing the divide function', () => {
        expect(myFunctions.divide(8, 2)).toBe(4);
    })

    test('Testing the subtract function', () => {
        expect(myFunctions.subtract(10, 4)).toBe(6);
    })
});    