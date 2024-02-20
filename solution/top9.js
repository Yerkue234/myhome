function calculateSum() {
  let totalSum = 0;

  for (let i = 2; i <= 100; i++) {
      for (let j = 2; j <= 100; j++) {
          totalSum += Math.pow(i, j);
      }
  }

  return totalSum;
}

const result = calculateSum();
console.log(result);
