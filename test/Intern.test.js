const Intern = require("../classes/Employee");

test("Can set school", () => {
  const testValue = "UVM";
  const test = new Intern("Meow", 1, "sclark417", testValue);
  expect(test.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const test = new Intern("Meow", 1, "sclark417", "UVM");
  expect(test.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UVM";
  const test = new Intern("Meow", 1, "sclark417", testValue);
  expect(test.getSchool()).toBe(testValue);
});
