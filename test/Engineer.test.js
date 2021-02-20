const Engineer = require("../classes/Employee");

test("Can set GitHUb account", () => {
  const testValue = "Stephen Clark";
  const test = new Engineer("Meow", 1, "sclark417", testValue);
  expect(test.gitHub).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const test = new Engineer("Meow", 1, "sclark417", "Stephen Clark");
  expect(test.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "sclark417";
  const test = new Engineer("Meow", 1, "sclark417", testValue);
  expect(test.getGithub()).toBe(testValue);
});
