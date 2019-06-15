/* This code is from page 176 brain power exercise on HFJS book.
/ Things to remember from this:

    Functions can be called within other functions.
    Variables can be assigned the results of those function calls within functions.
    Make sure to return values from a function, or we have nothing to work with.
    Functions can be chained (method chaining), such as arrayLength(getHighest(scores));
        THAT EXAMPLE ABOVE DOESN'T DO ANYTHING HERE, BUT THE SYNTAX/UNDERSTANDING IS VALID.
    Be selective with function, parameter and variable names.
    Don't populate global scope where possible.
*/

// scores array, for the first section.  
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
function getHighScore(array) {
    let highScore = 0 ;  

    for(let i = 0 ; i < array.length ; i++) {
        if(array[i] > highScore) {
            highScore = array[i] ; 
        }

    }
return highScore;
}


// function to gather the indexes of each highest score. (Can this be improved by calling getHighest then pushing each index?
function highScoresIndexes(array) {
    let topScoresAt = [] ;
	highScore = getHighScore(array);
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i] == highScore) {
            topScoresAt.push(i);
        }
    }
        return topScoresAt ; 
}

//function to output info needed:
function displayResults(array) {    //I've changed this to an anonymous function, as all it's arguments are pulled from other function calls?))
listScores(array);  // display all scores
numOfTests = arrayLength(array);  // run arrayLength on our function, save it to numOfTests (maybe let so local, no param)
document.write(`Bubble tests: ${numOfTests} <br>`);
highScore = getHighScore(array); 
document.write(`Highest bubble score: ${highScore} <br>`);
indexes = highScoresIndexes(array, highScore);
document.write(`Solutions with highest score: ${indexes}`);

}

