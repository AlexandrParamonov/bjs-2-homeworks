"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-(4*a*c);
  if (d === 0){
    arr[0] = -b/(2*a);
    console.log(arr[0]);
  }
  else if (d > 0){
    arr[0] = (-b + Math.sqrt(d) ) / (2*a);
    arr[1] = (-b - Math.sqrt(d) ) / (2*a);
    console.log(arr[0],arr[1]);
  }
  else {
    console.log('корней нет');
  }
  return arr;
}
//solveEquation(4, 1, 1);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   
  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  } 
  let P = (percent / 100) / 12;
  let n = countMonths;
  let S = amount - contribution;
  let paymentPerMonth = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = (paymentPerMonth * n).toFixed(2);
  return Number(totalAmount);
}