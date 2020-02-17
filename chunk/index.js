function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
// Split in group of 3 items
var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);

//Method 1
function chunk(array, size) {
const chunked = []
let index = 0;
while (index < array.length) {
chunked.push(array.slice(index, index + size))
index += size;
}
return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8],3))
//data.slice(0,3)
//data.slice(3,6)
//data.slice(6,9)

//Method 2
function chunk(array, size) {
const chunked = [];
for (let element of array) {
const last = chunked[chunked.length -1];

if (!last || last.length === size) {
chunked.push([element])
} else {
last.push(element)
}
}
return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8],2.5))
