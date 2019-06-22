/* Bottles of beer program - OOP based.  
TO-DO: 
Correct the 0 bottles display word to "bottles" after it was changed to "bottle" for singular 1 bottle. 
Look at the resetSong logic, as you have to manually reset it for things to work.  Something to do with logical order more than anything.  
*/
let bottles = {
    number: 99,
    word: "bottles",

    //method to return current number of bottles left.  
    checkBottles: function() {
        return this.number; // grab the number value stored in the number property
    },

    // checkWord method to decide whether we display plural or singular word bottle. 
    checkWord: function() {
        let bottlesEqualsOne = (this.checkBottles() == 1); // evaluates to true if the return value from checkBottles method is true.  
        if (bottlesEqualsOne) { // if true, changes the word property value to singular. 
            this.word = "bottle";
            return this.word; // then returns it to us.  
        } else {
            return this.word;
        }
    },

    playSong: function() {
        let numberAt = this.checkBottles();
        let word = this.checkWord();

        console.log(`${numberAt} ${word} of beer on the wall, ${numberAt} ${word} of beer`);
        this.number--; // decrement the number of bottles.  eventually reaches 0 and breaks out of the while loop in continueSong method.

        console.log(`You take one down, you pass it around, and now there\'s  ${numberAt} ${word} of beer on the wall.`);
    },


    //Loop through the song while the number of bottles is greater than zero.  
    continueSong: function() {
        if (this.checkBottles() == 0) {
            this.resetSong();
        } else {
            while (this.number >= 0) {
                this.playSong(); // call the playSong method to keep the song going till we run out. 
            }
        }
    },

    // method to reset property values to beginning.  
    resetSong: function() {
        this.number = 99;
        this.word = "bottles";
        alert("The song is finished, the values are reset!");
    }

};