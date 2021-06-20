// Input: x = 123
// Output: 321
//constraints :-231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    x = -x;
    let array = x.toString().split("");
    let n = array.length;
    for (i = 0; i < n / 2; i++) {
      const temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
    }
    return -parseInt(array.join("").replace(/(^0+)/, "")) >= -Math.pow(2, 31)
      ? -parseInt(array.join("").replace(/(^0+)/, ""))
      : 0;
  } else if (x === 0) {
    return 0;
  } else {
    let array = x.toString().split("");
    let n = array.length;
    for (i = 0; i < n / 2; i++) {
      const temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
    }
    return parseInt(array.join("").replace(/(^0+)/, "")) < Math.pow(2, 31)
      ? parseInt(array.join("").replace(/(^0+)/, ""))
      : 0;
  }
};
