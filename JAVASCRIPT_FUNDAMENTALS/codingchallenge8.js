// Tạo một hàm tính chỉ số BMI
function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  return tip
}

// Tạo một mảng chứa các giá trị hóa đơn
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// Tạo mảng rỗng để lưu giá trị tiền tip và tổng cộng
const tips = []
const totals = []

// Tính tip và tổng cộng cho mỗi hóa đơn trong mảng 'bills' và lưu vào 'tips' và 'totals'
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(bills[i] + tip)
}

console.log('Tips:', tips)
console.log('Totals:', totals)

// Bonus: Tạo một hàm tính giá trị trung bình của một mảng
function calcAverage(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

// Tính giá trị trung bình của mảng 'totals' và hiển thị nó
const average = calcAverage(totals)
console.log('Average:', average)
