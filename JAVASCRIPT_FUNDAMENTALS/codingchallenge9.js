function printForecast(arr) {
  let forecastString = ''

  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} days `
  }

  console.log(forecastString)
}

// Test data
const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

printForecast(data1)
printForecast(data2)
