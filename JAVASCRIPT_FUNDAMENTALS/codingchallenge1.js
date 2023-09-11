// Dữ liệu cho Mark
var markWeight1 = 78 // kg
var markHeight1 = 1.69 // mét

var markWeight2 = 95 // kg
var markHeight2 = 1.88 // mét

// Dữ liệu cho John
var johnWeight1 = 92 // kg
var johnHeight1 = 1.95 // mét

var johnWeight2 = 85 // kg
var johnHeight2 = 1.76 // mét

// Tính chỉ số BMI
var markBMI1 = markWeight1 / (markHeight1 * markHeight1)
var markBMI2 = markWeight2 / (markHeight2 * markHeight2)

var johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1)
var johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2)

// So sánh chỉ số BMI
var markHigherBMI1 = markBMI1 > johnBMI1
var markHigherBMI2 = markBMI2 > johnBMI2

// Hiển thị kết quả
console.log('Dữ liệu 1:')
console.log('Mark có chỉ số BMI cao hơn John:', markHigherBMI1)

console.log('Dữ liệu 2:')
console.log('Mark có chỉ số BMI cao hơn John:', markHigherBMI2)
