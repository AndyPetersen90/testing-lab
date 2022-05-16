let myFunctions = require(`./functions`);

test("test to see if 2 is equal to 2", () => {
    expect(myFunctions.returnTwo()).toBe(2);
});

test("Testing the greeting response", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James');
})

test('Testing the sum function', () => {
    expect(myFunctions.add(2, 4)).toBe(6);
})

