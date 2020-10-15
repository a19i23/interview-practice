









const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];


function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  const sizeOfBoth = array1.length + array2.length;

  while(mergedArray.length < sizeOfBoth){
    if (array2.length === 0 || array1[0]< array2[0] ){
      mergedArray.push(array1.shift());
    } else if (array1.length === 0 || array2[0] < array1[0]) {
      mergedArray.push(array2.shift());
    }
  }
return mergedArray;
}

console.log(mergeSortedArrays(myArray, alicesArray))