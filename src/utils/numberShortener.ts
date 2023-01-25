interface ShortSymbols {
  [key: number]: string;
}

const shortSymbols: ShortSymbols = {
  4: "t", //trillionths
  3: "b", //billionths
  2: "m", //millionths
  1: "k", //thousandths
};

export default function formatNumber(number: number): string {
  if (number > 9999999999999999) {
    return number.toExponential();
  } else {
    let numberString = number.toString();

    let commaCount = Math.floor((numberString.length - 1) / 3);

    if (commaCount > 0) {
      let symbol = shortSymbols[commaCount];

      let dotPlacement = numberString.length % 3;
      if (dotPlacement === 0) dotPlacement = 3;

      numberString =
        numberString.substr(0, dotPlacement) +
        "." +
        numberString.substr(dotPlacement);

      numberString = (Math.floor(Number(numberString) * 10) / 10).toString();

      numberString += symbol;
    }
    return numberString;
  }
}
