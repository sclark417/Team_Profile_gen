const Manager = require("../classes/Manager");

test("Can set office number", () => {
  const testValue = 100;
  const test = new Manager("name", 1, "email", testValue);
  expect(test.officenumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const test = new Manager("name", 1, "email", 100);
  expect(test.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const test = new Manager("name", 1, "email", testValue);
  expect(test.getOfficeNumber()).toBe(testValue);
});
