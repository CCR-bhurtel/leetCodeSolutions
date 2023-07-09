var countAndSay = function (n: number): string {
  if (n == 1) {
    return "1";
  }

  let returnedString: string = countAndSay(n - 1);

  let lastNumber: string = returnedString[0];

  let lastNumberCount: number = 0;

  //   let stringToReturn = lastNumberCount + lastNumber;
  let stringToReturn: string = "";

  for (let i: number = 0; i < returnedString.length; i++) {
    if (returnedString[i] === lastNumber) {
      lastNumberCount++;
    } else {
      stringToReturn += lastNumberCount + lastNumber;

      lastNumber = returnedString[i];
      lastNumberCount = 1;
    }
  }
  stringToReturn += lastNumberCount + lastNumber;

  return stringToReturn;
};
