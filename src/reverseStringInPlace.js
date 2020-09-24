function reverseStringInPlace(arrayOfChars){
  const sizeOfArray = arrayOfChars.length;
  let j = sizeOfArray - 1;

  const midpoint  = sizeOfArray % 2 === 0 ? 
    sizeOfArray/2 :  Math.floor(sizeOfArray/2);

  for (let i = 0; i < midpoint; i++) { 
    const temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[j];
    arrayOfChars[j] = temp;
    j-=1;
  }
  return arrayOfChars;
}

//even number of chars 
                //  0   1   2   3
// const inputArray = ['a','l','a','n'];

// odd number of chars
//                      0   1   2   3   4
const inputArray = ['a','l','a','n','a'];

console.log(reverseStringInPlace(inputArray));

