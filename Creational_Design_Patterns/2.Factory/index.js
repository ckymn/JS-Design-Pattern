class FullTime {
  constructor(hourly) {
    this.say = function () {
      console.log("FullTime : rate " + hourly + "/hour");
    };
  }
}
class PartTime {
  constructor(hourly) {
    this.say = function () {
      console.log("PartTime : rate " + hourly + "/hour");
    };
  }
}
class Temporary {
  constructor(hourly) {
    this.say = function () {
      console.log("Temporary : rate " + hourly + "/hour");
    };
  }
}
class Contractor {
  constructor(hourly) {
    this.say = function () {
      console.log("Contractor : rate " + hourly + "/hour");
    };
  }
}
class Factory {
  constructor() {
    this.create = function (type, hourly) {
      switch (type) {
        case "FullTime":
          return new FullTime(hourly);
        case "PartTime":
          return new PartTime(hourly);
        case "Temporary":
          return new Temporary(hourly);
        case "Contractor":
          return new Contractor(hourly);
      }
    };
  }
}

function run() {
  const employees = [];
  const factory = new Factory();
  employees.push(factory.create("FullTime", 20));
  employees.push(factory.create("PartTime", 10));
  employees.push(factory.create("Temporary", 15));
  employees.push(factory.create("Contractor", 5));

  employees.forEach((item) => {
    item.say();
  });
}

run();
