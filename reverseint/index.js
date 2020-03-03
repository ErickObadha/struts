function reverseInt (num) {
const reversed = num.toString().split('').reverse().join('');
//return reversed
return parseInt(reversed) * Math.sign(num)
}
console.log(reverseInt(-123456789));
