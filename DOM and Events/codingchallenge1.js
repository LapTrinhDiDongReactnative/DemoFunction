// Select the 'again' button element
const againButton = document.querySelector('.again')

// Attach a click event handler to the button
againButton.addEventListener('click', function () {
  // Reset the game variables
  score = 20
  secretNumber = Math.floor(Math.random() * 20) + 1

  // Reset the message
  displayMessage('Start guessing...')

  // Reset the input field
  document.querySelector('.guess').value = ''

  // Reset the score
  document.querySelector('.score').textContent = score

  // Reset the number display
  document.querySelector('.number').textContent = '?'

  // Restore the original background color and number width
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
