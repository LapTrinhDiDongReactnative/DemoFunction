const checkDogs = function (dogsJulia, dogsKate) {
  // Shallow copy of Julia's array and remove cat ages
  const correctedJulia = dogsJulia.slice(1, -2)

  // Create an array with both Julia's corrected and Kate's data
  const allDogs = [...correctedJulia, ...dogsKate]

  // Log whether each dog is an adult or a puppy
  allDogs.forEach((age, i) => {
    const status = age >= 3 ? 'adult' : 'puppy'
    console.log(`Dog number ${i + 1} is an ${status}, and is ${age} years old.`)
  })
}

// Test data
const dogsJulia1 = [3, 5, 2, 12, 7]
const dogsKate1 = [4, 1, 15, 8, 3]
const dogsJulia2 = [9, 16, 6, 8, 3]
const dogsKate2 = [10, 5, 6, 1, 4]

// Running the function for test datasets
console.log('---- Data 1 ----')
checkDogs(dogsJulia1, dogsKate1)

console.log('---- Data 2 ----')
checkDogs(dogsJulia2, dogsKate2)
