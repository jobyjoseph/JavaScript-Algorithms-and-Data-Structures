import Stack from "./stack";

describe("Stack", () => {
  test("Stack push", () => {
    const newStack = new Stack();
    newStack.push("Apple");
    newStack.push("Banana");
    expect(newStack.length).toEqual(2);
  });
  test("Stack pop", () => {
    const newStack = new Stack();
    newStack.push("Apple");
    newStack.push("Banana");
    expect(newStack.pop()).toEqual("Banana");
    expect(newStack.length).toEqual(1);
  });
  test("Popping from empty stack", () => {
    const newStack = new Stack();
    expect(newStack.pop()).toEqual(undefined);
    expect(newStack.length).toEqual(0);
  });
  test("Stack peek", () => {
    const newStack = new Stack();
    newStack.push("Apple");
    newStack.push("Banana");
    expect(newStack.peek()).toEqual("Banana");
  });
  test("Peeking from empty stack", () => {
    const newStack = new Stack();
    expect(newStack.peek()).toEqual(undefined);
  });
});
