class EVCl extends CarCl {
  #charge

  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    console.log(`${this.make}'s battery is now charged to ${this.#charge}%.`)
    return this // Cho phép chuỗi phương thức
  }

  getCharge() {
    return this.#charge // Phương thức này trả về giá trị của thuộc tính #charge
  }

  accelerate() {
    this.speed += 20
    this.#charge -= 1
    console.log(
      `${this.make} is now going at ${
        this.speed
      } km/h, with a charge of ${this.getCharge()}%.`
    )
    return this // Cho phép chuỗi phương thức
  }
}

const electricCar1 = new EVCl('Rivian', 120, 23)

console.log(
  `Car 1: ${electricCar1.make} is going at ${
    electricCar1.speed
  } km/h, with a charge of ${electricCar1.getCharge()}%.`
)
electricCar1.accelerate().chargeBattery(90).brake()
