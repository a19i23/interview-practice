function reverseString(stringArray,spaceArray ){
  let leftIndex = 0;
  let rightIndex = stringArray.length -1;
  let leftSpaceArray = [];
  let rightSpaceArray = [];

  while(leftIndex < rightIndex){
    const temp = stringArray[leftIndex];
    stringArray[leftIndex] = stringArray[rightIndex];
    stringArray[rightIndex] = temp;

    //check for spaces
    if(stringArray[leftIndex] === ' '){
      leftSpaceArray.push(leftIndex);
    } 
    if (stringArray[rightIndex] === ' '){
      rightSpaceArray.unshift(rightIndex);
    }

    leftIndex++;
    rightIndex--;
  }
  spaceArray.push( ...leftSpaceArray, ...rightSpaceArray)
}

function reverseWords(inputArray, spaceArray){
  let leftIndex = 0;
  let rightIndex = spaceArray[0] - 1;
  
  while(leftIndex < rightIndex){
    const temp = inputArray[leftIndex];
    inputArray[leftIndex] = inputArray[rightIndex];
    inputArray[rightIndex] = temp;
    leftIndex++;
    rightIndex--;

    if(leftIndex >= rightIndex && spaceArray.length > 0){
      leftIndex = spaceArray.shift();
      leftIndex++;
      if(spaceArray.length === 0){
        rightIndex = inputArray.length - 1;
      } else {
        rightIndex = spaceArray[0] - 1;
      }
    }
  }


}

const inputArray = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

let spaceArray = [];

reverseString(inputArray, spaceArray);
console.log(inputArray);
console.log(spaceArray);

reverseWords(inputArray, spaceArray);
console.log(inputArray);
console.log(spaceArray)

