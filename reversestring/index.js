// Method 1
function reverse(str) {
return str.split('').reverse().join('')
}
console.log(reverse('cathy'))
// Method 2
function reverse(str) {
let reversed = '';
for (let character of str) {
reversed = character + reversed
}
return reversed;
}
console.log(reverse('erico'))
// Method 3
function reverse(str) {
return str.split('').reduce((rev, char) =>char + rev,'')
}
console.log(reverse('cathy'));
