const poll = {
  question: 'What is your favorite programming language?',
  options: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Display the poll question with options
    const input = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )

    // Check if input is a number and within a valid range
    const option = Number(input)
    if (!isNaN(option) && option >= 0 && option < this.options.length) {
      // Increment the corresponding answer count
      this.answers[option]++
    } else {
      console.log('Invalid option. Please enter a valid number.')
    }

    // Display poll results
    this.displayResults()
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`)
    } else {
      console.log('Invalid display type. Please use "array" or "string".')
    }
  },
}

// Test the poll app
document.getElementById('poll-btn').addEventListener('click', () => {
  poll.registerNewAnswer()
})

// Bonus: Display results using both 'array' and 'string' options
const testData1 = [5, 2, 3]
const testData2 = [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: testData1 }, 'array')
poll.displayResults.call({ answers: testData2 }, 'string')
