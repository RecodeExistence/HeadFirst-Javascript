/* This code is from page 176 brain power exercise on HFJS book.  
    Things to remember from this:  
  
    Functions can be called within other functions. 
    Variables can be assigned the results of those function calls within functions.  
    Make sure to return values from a function, or we have nothing to work with.  
    Functions can be chained (method chaining), such as arrayLength(getHighest(scores));
        THAT EXAMPLE ABOVE DOESN'T DO ANYTHING HERE, BUT THE SYNTAX/UNDERSTANDING IS VALID. 
    Be selective with function, parameter and variable names.  
    Don't populate global scope where possible.  
*/

var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

  // function to display all scores one after the other: 
    function listScores(array) {
        for(let i = 0 ; i < array.length ; i++) {
        document.write(`Bubble solution # ${i} score: ${array[i]} <br>`);

        }
    }

// function to calculate total number of bubble scores
function arrayLength(array) {
    let totalNumScores = array.length ;
    return totalNumScores;
    }

// function to find the highest value in an array
function getHighest(array) {
let highestNumber = 0;
  for(let i = 0 ; i < array.length ; i++) { //loop through the array, check if each number is higher, reassign highestNumber if it is.
    if(array[i] >= highestNumber) {
            highestNumber = array[i];
            }
        }
    // Assign highest score to a variable, return for later use.  
     let returnedHighest = highestNumber; 
        return returnedHighest;
}


// function to gather the indexes of each highest score. (Can this be improved by calling getHighest then pushing each index?
function indexAt(array) {
        let highestNumber = 0;
    let indexAt = [] ;  //array to save indexes of high scores. 
  for(let i = 0 ; i < array.length ; i++) {
    if(array[i] >= highestNumber) {
            highestNumber = array[i];
      indexAt.push(`#${i}, `);
            }
        }  
    return indexAt;
}  

//function to output info needed: 
function displayResults(array) {	//I've changed this to an anonymous function, as all it's arguments are pulled from other function calls?))
listScores(array);	// display all scores 
numOfTests = arrayLength(array);  // run arrayLength on our function, save it to numOfTests (maybe let so local, no param)
document.write(`Bubble tests: ${numOfTests} <br>`);
highest = getHighest(array); 
document.write(`Highest bubble score: ${highest} <br>`);
indexes = indexAt(array);
document.write(`Solutions with highest score: ${indexes}`);

}
