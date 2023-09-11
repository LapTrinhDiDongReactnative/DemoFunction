// Parent class 'Car'
class Car {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  accelerate() {
    this.speed += 10
    console.log(`${this.make} is now going at ${this.speed} km/h.`)
  }

  brake() {
    this.speed -= 5
    console.log(`${this.make} is now going at ${this.speed} km/h.`)
  }
}

// Child class 'EV' (Electric Car) extending 'Car'
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed)
    this.charge = charge
  }

  // Method to charge the battery
  chargeBattery(chargeTo) {
    this.charge = chargeTo
    console.log(`${this.make}'s battery is now charged to ${this.charge}%.`)
  }

  // Overridden method to accelerate with battery charge decrease
  accelerate() {
    this.speed += 20
    this.charge -= 1
    console.log(
      `${this.make} is now going at ${this.speed} km/h, with a charge of ${this.charge}%.`
    )
  }
}

// Create an electric car object
const electricCar1 = new EV('Tesla', 120, 23)

// Test the methods on the electric car
console.log(
  `Car 1: ${electricCar1.make} is going at ${electricCar1.speed} km/h, with a charge of ${electricCar1.charge}%.`
)
electricCar1.accelerate()
electricCar1.brake()
electricCar1.chargeBattery(90)
