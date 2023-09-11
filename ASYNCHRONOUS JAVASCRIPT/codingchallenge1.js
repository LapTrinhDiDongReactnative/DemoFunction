function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Problem with geocoding (${response.status}): ${response.statusText}`
        )
      }
      return response.json()
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`)
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Problem with country data (${response.status}): ${response.statusText}`
        )
      }
      return response.json()
    })
    .then((countryData) => {
      renderCountry(countryData[0])
    })
    .catch((error) => {
      console.error(`Something went wrong: ${error.message}`)
    })
}

// Test data
whereAmI(52.508, 13.381) // Berlin, Germany
whereAmI(19.037, 72.873) // Mumbai, India
whereAmI(-33.933, 18.474) // Cape Town, South Africa
