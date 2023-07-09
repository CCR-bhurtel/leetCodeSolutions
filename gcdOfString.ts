function checkIfDivides(dividend: string, divisor: string): boolean {
  while (dividend) {
    if (dividend.substring(0, divisor.length) !== divisor) {
      return false;
    }
    if (divisor.length === dividend.length) {
      dividend = "";
    } else {
      dividend = dividend.substring(divisor.length, dividend.length);
    }
  }

  return true;
}

function gcdOfStrings(str1: string, str2: string): string {
  // check whose length is greater and swap accordingly
  // if (str1.length < str2.length) {
  //   let temp: string = str2;
  //   str2 = str1;
  //   str1 = temp;
  // }

  for (let i = 0; i < str2.length; i++) {
    let subStringForStr2 = str2.substring(0, str2.length - i);
    if (
      checkIfDivides(str1, subStringForStr2) &&
      checkIfDivides(str2, subStringForStr2)
    ) {
      return subStringForStr2;
    }
  }
  return "";
}

const keyValuePairs1 = {
  ABCABC: "ABC",
  ABABAB: "ABAB",
  LEET: "CODE",
  TAUXXTAUXXTAUXXTAUXXTAUXX:"TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
};

Object.entries(keyValuePairs1).forEach((entry) => {
  console.log(entry[0], entry[1], gcdOfStrings(entry[0], entry[1]));
});
