// Data
const dolphinsScores = [96, 108, 89]
const koalasScores = [88, 91, 110]

// Tính toán điểm trung bình
const calculateAverage = (scores) => {
  let sum = 0
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i]
  }
  return sum / scores.length
}

// Tính điểm trung bình cho Dolphins và Koalas
const dolphinsAverage = calculateAverage(dolphinsScores)
const koalasAverage = calculateAverage(koalasScores)

// Xác định người chiến thắng và in kết quả ra màn hình
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(`Dolphins win with an average score of ${dolphinsAverage}`)
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(`Koalas win with an average score of ${koalasAverage}`)
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(`It's a draw with an average score of ${dolphinsAverage}`)
} else {
  console.log('No team wins the trophy')
}
