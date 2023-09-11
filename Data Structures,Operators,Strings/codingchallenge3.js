// Data for game events
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
])

// 1. Create an array of unique game events
const events = [...new Set(gameEvents.values())]
console.log(events)

// 2. Remove the unfair yellow card event (minute 64)
gameEvents.delete(64)

// 3. Compute and log the average event frequency
const minutes = [...gameEvents.keys()]
const averageInterval = 90 / minutes.length
console.log(
  `An event happened, on average, every ${averageInterval.toFixed(2)} minutes`
)

// 4. Loop over gameEvents and log each element with the half indicator
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF'
  console.log(`[${half}] ${minute}: ${event}`)
}
