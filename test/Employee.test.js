const Employee = require("../classes/Employee");
describe("Employee", () => {
  it("Can create an employee object", () => {
    const test = new Employee();
    expect(typeof test).toBe("object");
  });

  it("Can set name", () => {
    const name = "John";
    const test = new Employee(name);
    expect(test.name).toBe(name);
  });

  it("Can set id ", () => {
    const testValue = 100;
    const test = new Employee("Meow", testValue);
    expect(test.id).toBe(testValue);
  });

  it("Can set email", () => {
    const testValue = "clark7382@hotmail.com";
    const test = new Employee("Meow", 1, testValue);
    expect(test.email).toBe(testValue);
  });

  describe("getName", () => {
    it("Can get name via getName()", () => {
      const testValue = "John";
      const test = new Employee(testValue);
      expect(test.getName()).toBe(testValue);
    });
  });

  describe("getId", () => {
    it("Can get id via getId()", () => {
      const testValue = 100;
      const test = new Employee("Meow", testValue);
      expect(test.getId()).toBe(testValue);
    });
  });

  describe("getEmail", () => {
    it("Can get email via getEmail()", () => {
      const testValue = "clark7382@hotmail.com";
      const test = new Employee("Meow", 1, testValue);
      expect(test.getEmail()).toBe(testValue);
    });
  });

  describe("getRole", () => {
    it('getRole() should return "Employee"', () => {
      const testValue = "Employee";
      const test = new Employee("John", 1, "clark7382@hotmail.com");
      expect(test.getRole()).toBe(testValue);
    });
  });
});
