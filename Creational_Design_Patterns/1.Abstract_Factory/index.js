class Employee {
  constructor(name) {
    this.name = name;
    this.say = function () {
      console.log("I am Employee", name);
    };
  }
}
class EmployeeFactory {
  constructor() {
    this.create = function (name) {
      return new Employee(name);
    };
  }
}

class Vendor {
  constructor(name) {
    this.name = name;
    this.say = function () {
      console.log("I am Vendor", name);
    };
  }
}

class VendorFactory {
  constructor() {
    this.create = function (name) {
      return new Vendor(name);
    };
  }
}

function run() {
  const person = [];
  const employeeFactory = new EmployeeFactory();
  const vendorFactory = new VendorFactory();

  person.push(employeeFactory.create("John"));
  person.push(vendorFactory.create("John"));

  console.log(person);
  person.forEach((item) => {
    item.say();
  });
}

run();
