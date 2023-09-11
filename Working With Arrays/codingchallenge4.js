const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

// Task 1: Calculate recommended food portion for each dog
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)
})

// Task 2: Find Sarah's dog and log if it's eating too much or too little
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'))
if (sarahDog) {
  if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) {
    console.log("Sarah's dog is eating too much!")
  } else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9) {
    console.log("Sarah's dog is eating too little!")
  } else {
    console.log("Sarah's dog is eating an okay amount.")
  }
}

// Task 3: Create arrays of owners with dogs eating too much or too little
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap((dog) => dog.owners)

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap((dog) => dog.owners)

// Task 4: Log owners with dogs eating too much or too little
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`)
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`)

// Task 5: Check if any dog eats the recommended amount
const anyEatingRecommended = dogs.some(
  (dog) =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
)
console.log(`Any dog eating the recommended amount: ${anyEatingRecommended}`)

// Task 6: Check if any dog eats an okay amount
const anyEatingOkay = dogs.some(
  (dog) =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
)
console.log(`Any dog eating an okay amount: ${anyEatingOkay}`)

// Task 7: Create an array of dogs eating an okay amount
const dogsEatingOkay = dogs.filter(
  (dog) =>
    dog.curFood >= dog.recommendedFood * 0.9 &&
    dog.curFood <= dog.recommendedFood * 1.1
)

// Task 8: Create a shallow copy of dogs array and sort by recommended food portion
const sortedDogs = [...dogs].sort(
  (a, b) => a.recommendedFood - b.recommendedFood
)
console.log(sortedDogs)
