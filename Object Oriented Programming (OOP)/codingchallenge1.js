// Constructor function for Car
function Car(make, speed) {
  this.make = make
  this.speed = speed
}

// Method to accelerate the car's speed
Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} is now going at ${this.speed} km/h.`)
}

// Method to brake and decrease the car's speed
Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} is now going at ${this.speed} km/h.`)
}

// Create two Car objects
const car1 = new Car('BMW', 120)
const car2 = new Car('Mercedes', 95)

// Test the methods on the cars
console.log(`Car 1: ${car1.make} is going at ${car1.speed} km/h.`)
console.log(`Car 2: ${car2.make} is going at ${car2.speed} km/h.`)

// Accelerate and brake car 1
car1.accelerate()
car1.accelerate()
car1.brake()

// Accelerate and brake car 2
car2.accelerate()
car2.brake()
