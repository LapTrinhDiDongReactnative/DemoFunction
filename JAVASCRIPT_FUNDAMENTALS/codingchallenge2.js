// Lưu trữ khối lượng và chiều cao của Mark và John
const markWeight = 78 // kg
const markHeight = 1.69 // mét

const johnWeight = 92 // kg
const johnHeight = 1.95 // mét

// Tính chỉ số BMI của Mark và John
const markBMI = markWeight / (markHeight * markHeight)
const johnBMI = johnWeight / (johnHeight * johnHeight)

// So sánh chỉ số BMI và tạo biến Boolean 'markHigherBMI'
const markHigherBMI = markBMI > johnBMI

// In kết quả ra màn hình
if (markHigherBMI) {
  console.log(
    `Chỉ số BMI của Mark (${markBMI.toFixed(
      1
    )}) cao hơn John (${johnBMI.toFixed(1)})!`
  )
} else {
  console.log(
    `Chỉ số BMI của John (${johnBMI.toFixed(
      1
    )}) cao hơn Mark (${markBMI.toFixed(1)})!`
  )
}
