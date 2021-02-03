console.log('---MOVE ZEROES---')

function moveZeroes(arr) {
  // move all zeroes to the end of the array.
  // first I'd like to try the in place way that DOESN'T involve 2 pointers and
  // a max2 counter....
  //
  //
  let output = []; // the output gets built up as I arr.forEach
  //                  looking for all NON-zeros....
  //                  
  let zeroCount = 0;
  arr.forEach(digit => { // any zeros would not get added to output....
    if(digit === 0) {
      zeroCount++;      // instead added to a zero count.
    } else {
      output.push(digit);
    }
  })
  // now I can deal with adding all of the zeros onto the end.
  while(zeroCount > 0) {
    zeroCount--;
    output.push(0)
  }
  return output;
}


console.log('expects [0,1,0,3,9] to return [1, 3, 9, 0, 0]')
console.log('our function returns         ', moveZeroes([0,1,0,3,9]))
console.log('----------')
console.log('------')
console.log('---')
console.log('-')
console.log('expects [0,0,0,3,8] to return [3, 8, 0, 0, 0]')
console.log('our function returns         ', moveZeroes([0,0,0,3,8]))
console.log('----------')
console.log('------')
console.log('---')
console.log('-')
console.log('expects [0,0,0,1,0] to return [1, 0, 0, 0, 0]')
console.log('our function returns         ', moveZeroes([0,0,0,1,0]))
console.log('----------')
console.log('------')
console.log('---')
console.log('-')
