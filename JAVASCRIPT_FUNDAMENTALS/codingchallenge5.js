// Tính trung bình của 3 điểm số
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// Tạo hàm kiểm tra người chiến thắng
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No team wins!')
  }
}

// Test data
const dolphinsScore1 = 44
const dolphinsScore2 = 23
const dolphinsScore3 = 71
const koalasScore1 = 65
const koalasScore2 = 54
const koalasScore3 = 49

// Tính trung bình cho cả hai đội
const avgDolphins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3)

// Kiểm tra người chiến thắng
checkWinner(avgDolphins, avgKoalas)
