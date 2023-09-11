// Tạo hàm tính tiền tip dựa trên quy tắc
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

// Tạo một mảng chứa dữ liệu thử nghiệm
const bills = [125, 555, 44]

// Tạo một mảng chứa giá trị tiền tip cho mỗi hóa đơn
const tips = bills.map((bill) => calcTip(bill))

// Tạo một mảng chứa giá trị tổng cộng của mỗi hóa đơn
const totals = bills.map((bill, index) => bill + tips[index])

console.log('Tips:', tips)
console.log('Totals:', totals)
