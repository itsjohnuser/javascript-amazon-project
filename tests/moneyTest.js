import { formatCurrency } from "../script/utils/money.js";

console.log('test suit : formatCurrency')

if (formatCurrency(2095) === '20.95'){
  console.log('Test passed: formatCurrency function works correctly');
} else{
  console.log('Test failed: formatCurrency function does not work correctly');
}

if (formatCurrency(0) === '0.00'){
  console.log('Test passed: formatCurrency function works correctly with zero');
}else{
  console.log('Test failed: formatCurrency function does not work correctly with zero');
}

if(formatCurrency(2000.5)==='20.01'){
  console.log('Test passed: formatCurrency function works correctly with decimal');

}else {
  console.log('Test failed: formatCurrency function does not work correctly with decimal');
}