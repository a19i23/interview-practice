function isPermutationPalindrome(input){
  const determinant = new Set()

  for(const char of input){
    if (determinant.has(char)){
       determinant.delete(char)
    } else {
      determinant.add(char)
    }
  }

  return determinant.size === 1
}

const input1 = "civic" //should be true
const input2 = "civil" // should be false

console.log(isPermutationPalindrome(input1))
console.log(isPermutationPalindrome(input2))