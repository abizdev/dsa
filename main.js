/* ================================================================================================================== */
/*
RULE BOOK
  1: Worst Case
  2: Remove Constants
  3: Different terms of inputs
  4: Drop Non Dominants
*/

/* ================================================================================================================== */


const nemo = ['nemo']
const array = new Array(1000).fill('nemo')

function findNemo() {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log(array[i])
    }
  }
}

findNemo(array) // O(n) - linear time when operation increase proportionally

/* ================================================================================================================== */
function compressFirstBox(boxes) {
  console.log(boxes[0])
}

compressFirstBox(array) // O(1) - Constant time
/*
no matter how many elements we have or how much times elements increase, we
are always just grabbing the first item
*/

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
}

logFirstTwoBoxes(boxes) // O(2)

/*
It doesn't matter how big are our inputes, we are always doing constant amount of time on function

Each time this function runs two operation so in total it runs O(2) operations.
In graph in will be flat line

! Keep in mind: Inputs can be any type of data. Not just arrays
*/


/* ================================================================================================================== */

// Log all pairs of array
const boxes = [1, 2, 3, 4, 5]


function logAllPairsOfArray(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; i++) {
      console.log(`${array[i]} - ${array[j]}`)
    }
  }
}
logAllPairsOfArray(array) // O(n^2) - Quadratic times
/*
If we have nested arrays  we multiply n * n and get n^2
That means elements increases quadratically for example
if we have 2 element the program will do 4 operations, if we have 3 elemnts the program will do 9 operations and so on

*/

/* ================================================================================================================== */
function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are numbers')
  numbers.forEach(function(number) {
    console.log(number)
  })

  console.log('and these are their sums')
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber)
    })
  })
}

/*
The BigO is going to be O(n + n^2) but the rule 4 state that we can Drop Non Dominants tha mean we care about most
important term, we can drop ( n + ) and the BigO will be O(n^2)

But what if we have the next BigO:

O(x^2 + 3x + 100 + x/2) - in this case the result will be O(x^2) because as we mention before 4th rule worries
 about the most significant, if x = 5 then
 5^2 = 25
 3*5 = 15
 100 ( dominant term )
 5*2 = 10

 Remember in BigO we worried about scale and as things go larger and larger, that is why we can drop 3x + 100 + x/2
*/

/*
Which code is best ?
1 Readable
2 Scalabel - When we come to machines there are 2 valuable resourses
  2.1 Speed - how fast is our runtime, mow much time it takes ( time complexity )
  2.2 Memory - space complexity

*/