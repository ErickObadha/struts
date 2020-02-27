// Method 1
function anagrams(stringA, stringB) {
return cleanString(stringA) === cleanString(stringB)
}
function cleanString(str) {
return str
.replace(/[^w]/g, '')
.toLowerCase()
.split('')
.sort()
.join('')
}

console.log(anagrams('road safety', 'fairy tales'))
console.log(anagrams('RAIL SAFETY !', 'fairy tales'))


// Method 2

function anagrams(stringA, stringB) {
const aCharMap = buildCharMap(stringA);
const bCharMap = buildCharMap(stringB);

if (Object.keys(aCharMap).length !== Object.keys(bCharMap)
.length) {
return false;
}
for (let char in aCharMap) {
if (aCharMap[char] !== bCharMap[char]) {
return false;
}
}
return true
}
function buildCharMap(str) {
const CharMap = {};
for (let char of str.replace(/[^w]/g, '').toLowerCase()) {
charMap[char] = CharMap + 1 || 1
}
return CharMap;
}

console.log(anagrams('rOAD safety', 'fairy tales'))
console.log(anagrams('Road SAFETY !', 'fairy tales'))
