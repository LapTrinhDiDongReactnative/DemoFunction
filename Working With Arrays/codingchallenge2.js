const calcAverageHumanAge = function (ages) {
  // Calculate human ages for all dogs
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))

  // Exclude dogs that are less than 18 human years old
  const adults = humanAges.filter((age) => age >= 18)

  // Calculate the average human age of adult dogs
  if (adults.length === 0) return 0
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length

  return average
}

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
