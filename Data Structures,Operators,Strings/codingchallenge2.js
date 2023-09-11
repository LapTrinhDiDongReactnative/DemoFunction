// Data from the web service
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Witsel',
    'Schulz',
    'Hakimi',
    'Weigl',
    'Brandt',
    'Sancho',
    'Akanji',
    'Balerdi',
    'Schmelzer',
    'Gotze',
    'Reus',
    'Burki',
    'Hits',
    'Oelschlagel',
    'Hazard',
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// 1. Loop over the game.scored array and print player names with goal numbers
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`)
})

// 2. Calculate the average odd
const odds = Object.values(game.odds)
const averageOdd = odds.reduce((total, odd) => total + odd, 0) / odds.length
console.log(`Average odd: ${averageOdd}`)

// 3. Print the odds in a nice formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`)
console.log(`Odd of draw: ${game.odds.x}`)
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`)

// 4. Bonus: Create an object with player names as properties and goal counts as values
const scorers = {}
game.scored.forEach((player) => {
  scorers[player] = (scorers[player] || 0) + 1
})
console.log(scorers)
