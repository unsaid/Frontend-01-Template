function convertNumberToString(number, x) {
    var cNumber = Number(number)
    var integer = Math.floor(cNumber)
    var fraction = parseFloat((cNumber - integer).toFixed(10))
    var string = ''
    while(integer > 0) {
        string = integer % x + string
        integer = Math.floor(integer/x)
    }
    var fString = '.'
    while(fraction > 0) {
        fString += Math.floor(fraction*x)
        fraction = parseFloat((fraction*x - Math.floor(fraction*x)).toFixed(10))
    }
    return string + fString
}

function convertStringToNumber(string, radix = 10) {
    if (radix > 10) {
      return;
    }
    let flag = /e|E/.test(string);
    if (!flag) {
      let chars = string.split('');
      let number = 0;
      let i = 0;
      while (i < chars.length && chars[i] != '.') {
        number = number * radix;
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
      }
      if (chars[i] === '.') {
        i++;
      }
      let fraction = 1;
      while (i < chars.length) {
        fraction /= radix;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
        i++;
      }
      return number;
    } else {
      let logNumber = Number(string.match(/\d+$/)[0]);
      let number = string.match(/^[\d\.]+/)[0].replace(/\./, '');
      if (/e-|E-/.test(string)) {
        return Number(number.padEnd(logNumber + 1, 0));
      } else {
        return Number(number.padStart(logNumber + number.length, 0).replace(/^0/, '0.'));
      }
    }
  }

