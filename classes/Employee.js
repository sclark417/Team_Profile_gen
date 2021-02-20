class Employee {
  //Constructor function using name, id, and email.
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //Get name method
  getName() {
    return this.name;
  }

  //Get id method
  getId() {
    return this.id;
  }
  //Get email method
  getEmail() {
    return this.email;
  }

  //Get role method
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
