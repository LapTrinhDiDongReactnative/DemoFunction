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

// 1. Create player arrays for each team
const players1 = [...game.players.slice(0, 11)]
const players2 = [...game.players.slice(11)]

// 2. Create variables for goalkeeper and field players for Bayern Munich
const [gk, ...fieldPlayers] = players1

// 3. Create an array containing all players of both teams
const allPlayers = [...players1, ...players2]

// 4. Create an array for Bayern Munich players with substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']

// 5. Create variables for odds
const { team1, x: draw, team2 } = game.odds

// 6. Write a function to print goals and count them
function printGoals(...playerNames) {
  playerNames.forEach((player) => {
    const goals = game.scored.filter((name) => name === player).length
    console.log(`${player} scored ${goals} goals`)
  })
}

// Test data for 6
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
printGoals(...game.scored)

// 7. Determine which team is more likely to win
team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')
