// Tạo đối tượng cho Mark và John
const mark = {
  fullName: 'Mark Miller',
  mass: 78, // khối lượng (kg)
  height: 1.69, // chiều cao (m)
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92, // khối lượng (kg)
  height: 1.95, // chiều cao (m)
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

// Tính chỉ số BMI cho cả Mark và John
mark.calcBMI()
john.calcBMI()

// So sánh và hiển thị kết quả
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  )
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  )
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is equal to ${john.fullName}'s (${john.bmi})!`
  )
}
