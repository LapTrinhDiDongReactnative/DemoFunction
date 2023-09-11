const fs = require('fs').promises // Import the fs module for file operations

const imagesContainer = '.images' // Simulate the container element as a string

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}

function createImage(imgPath) {
  return new Promise(async function (resolve, reject) {
    try {
      const imgBuffer = await fs.readFile(imgPath)
      const img = `<img src="data:image/jpeg;base64,${imgBuffer.toString(
        'base64'
      )}">`
      console.log('Image 1 loaded')
      console.log('Displaying the image for 2 seconds...')
      console.log(img) // Simulate displaying the image
      setTimeout(() => {
        console.log('Hiding the image.')
        console.log('Image 2 loaded')
        resolve()
      }, 2000)
    } catch (error) {
      reject(new Error('Image not found'))
    }
  })
}

createImage('img/img-1.jpg')
  .then(() => wait(2))
  .then(() => createImage('img/img-2.jpg'))
  .then(() => wait(2))
  .catch((error) => console.error(error))
