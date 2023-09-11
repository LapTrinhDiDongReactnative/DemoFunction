const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3]
const data2 = [16, 6, 10, 5, 6, 1, 4]

// Running the function for test datasets
console.log('---- Data 1 ----')
const average1 = calcAverageHumanAge(data1)
console.log(`Average human age for data 1: ${average1}`)

console.log('---- Data 2 ----')
const average2 = calcAverageHumanAge(data2)
console.log(`Average human age for data 2: ${average2}`)
