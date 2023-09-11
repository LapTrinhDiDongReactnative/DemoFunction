class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }

  // Getter for speed in mi/h
  get speedUS() {
    return this.speed / 1.6
  }

  // Setter for speed in mi/h
  set speedUS(speed) {
    this.speed = speed * 1.6
  }

  // Method to accelerate the car's speed
  accelerate() {
    this.speed += 10
    console.log(`${this.make} is now going at ${this.speed} km/h.`)
  }

  // Method to brake and decrease the car's speed
  brake() {
    this.speed -= 5
    console.log(`${this.make} is now going at ${this.speed} km/h.`)
  }
}

// Create a new car
const car1 = new CarCl('Ford', 120)

// Test the methods on the car
console.log(`Car 1: ${car1.make} is going at ${car1.speed} km/h.`)
console.log(`Car 1: ${car1.make} is going at ${car1.speedUS} mi/h.`)

// Accelerate and brake the car
car1.accelerate()
car1.accelerate()
car1.brake()

// Set and get speed in mi/h
car1.speedUS = 75
console.log(`Car 1: ${car1.make} is going at ${car1.speed} km/h.`)
console.log(`Car 1: ${car1.make} is going at ${car1.speedUS} mi/h.`)
