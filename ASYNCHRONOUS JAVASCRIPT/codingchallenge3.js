const Jimp = require('jimp')
const fs = require('fs').promises

// Function to create an image
function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    Jimp.read(imgPath, (err, image) => {
      if (err) {
        reject(new Error('Image not found'))
      } else {
        resolve(image)
      }
    })
  })
}

// Function to wait for a specified number of seconds
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

// PART 1: loadNPause using async/await
async function loadNPause() {
  try {
    const img1 = await createImage('img/img-1.jpg')
    console.log('Image 1 loaded')
    await wait(2)

    // Hide the current image
    img1.bitmap.data = Buffer.alloc(img1.bitmap.data.length, 0) // Set all pixel data to 0

    const img2 = await createImage('img/img-2.jpg')
    console.log('Image 2 loaded')
    await wait(2)

    // Hide the current image
    img2.bitmap.data = Buffer.alloc(img2.bitmap.data.length, 0) // Set all pixel data to 0
  } catch (error) {
    console.error(error.message)
  }
}

// PART 2: loadAll using async/await
async function loadAll(imgArr) {
  const imgs = await Promise.all(imgArr.map((imgPath) => createImage(imgPath)))

  // Add the 'parallel' class to all images
  imgs.forEach((img) => {
    img.getBase64Async(Jimp.AUTO).then((base64) => {
      const imgElement = document.createElement('img')
      imgElement.src = base64
      imgElement.classList.add('parallel')
      document.querySelector('.images').appendChild(imgElement)
    })
  })

  return imgs
}

// Test data Part 2
const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']
loadAll(imgPaths).then((images) => {
  // You can access the loaded images here if needed
  console.log('All images loaded:', images)
})
