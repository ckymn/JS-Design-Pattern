class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return "Woof!";
  }
}

const dog1 = new Dog("Fido");
const dog2 = new Dog("Spot");
const dog3 = new Dog("Buddy");

Dog.prototype.play = (name) => {
  console.log("Playing...", name);
};

dog1.play("Fido");

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log("Flying...");
  }
}

const dog4 = new SuperDog("Bella");
dog4.play("Bella");
dog4.bark();
dog4.fly();
