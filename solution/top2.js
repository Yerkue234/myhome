function calculatePowerDigitSum(exponent) {
    let result = BigInt(2) ** BigInt(exponent);
    let sum = 0;
  
    while (result > 0n) {
      sum += Number(result % 10n);
      result = result / 10n;
    }
  
    return sum;
  }
  
  let digitSum = calculatePowerDigitSum(1337);
  console.log("The value of the sum of the digits of 2^1337 is:", digitSum);