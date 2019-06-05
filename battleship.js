/* Battleship JS Code 
	V1 Written 25/05/2019, edited  04/06/2019, added location randomiser variables.  
		PseudoCode is in game_pseudoCode.txt 
			NOTE: There is a LOT of commenting on this document, this is to help clarity when I come back later.  
					I assume most programs I write will have a lot of commenting, albeit perhaps not this much(?). 
*/


// Variable Declarations

/* Note - This random location section was added on the 04th of the 06th, it works, but i'm not sure why incrementing
	doesn't work in this case.  I'll have to screw around with it to figure it out.  */
let randomLoc = Math.floor(Math.random() * 5);		// Generate a number up to 4.99 , clip off the decimal.  

// Now we use the above to assign locations:  
		let location1 = randomLoc; 	// randomLoc is assigned to location1
		let location2 = randomLoc+1 ; 	// location2 is randomLoc plus 1. 
		let location3 = location2+1 ;  // Location 3 is location 2 plus 1.  
let guess; 	// User guess stored here.  Undefined before user enters a guess, then reassigned with the users entered value. 
let hits = 0 ;	// How many hits have occured (how many of the users entered numbers match the location numbers)
let guesses = 0 ; 	// Stores how many attempts the user has made
let isSunk = false ; 	// Boolean value, will be changed to true when the hits counter equals 3 
let shipLife = 3; 	//Not part of the program in the book , just my personal touch.  Displays ship life, tells user how many hits to win. 

 /* Display the locations each time it generates, just for testing purposes, can remove it later: */
 document.write("Location 1 is : " + location1 + ". Location 2 is: " + location2 + ". Location 3 is: " + location3 + ".");

while(isSunk == false) { 	// While loop starts here
	guess = prompt("Ready, Aim, Fire!", "Enter a number from 0 - 6");
		// Takes the users input and puts it into the guess variable (guess changes from undefined to whatever the guess is)
			
		 if(guess < 0 || guess > 6) {	//If start: check users entered value is valid.
		 	

		alert("You didn\'t enter a value from 0 - 6");		//Tell the user their input was invalid.  
	}		
		else { 	/* Else start:  The users entered input is valid, so: 
					  */	
			guesses++ ;	// Increment the variable guesses value by 1.  

	/*  These nested ifs can get confusing, here's how to follow them:  
			IF the user enters a correct value, add 1 to the guesses variable, 
				IF the location is a match, take one from the ship's life and add one to hits variable.
					IF the ship has been hit three times, change the isSunk boolean to true. 
						ELSE, the user hasn't hit the ship, and the loop will start again, 
			IF the ships life reaches 0, the hits counter = 3, 
			THEN we will tell the user they've sank the ship and break out of the loop. 
			Where we will tell them they've won, and display their stats.     */	
	
	if(guess == location1 || guess == location2 || guess == location3) {	//Nested IF start:  check user input matches ship location.
		shipLife-- ;    // Take one away from the ship's life.  
		alert("That's a hit!  You need " + shipLife + " more hits to win!");  // Alert the user they've hit the ship.  
			hits++ ;	// Increment hits by 1 if it's a match.
			
				if(hits == 3) { 	//IF start: check if the hits counter has reached 3 yet.  
					isSunk = true;  	// Boolean switch:  if the previous IF returns true, switch the isSunk boolean expression to true.  
						alert("You\'ve sank my battleship!") ; 	// ((The user has sunk the battleship and won the game))

						} 		

		}	//IF END: Checked match, checked hits counter

			 else { 	// ELSE statement: If the user guess doesn't match a location, do this:  
				alert("Miss!  Try again!");
			}	//ELSE END:  Displayed the miss message, went back to start of the loop.  

	}		/*ELSE END:  We've added 1 to guess, checked the input to see if it's a match or not, displayed the appropriate message.  
					If all this is done, and the hit counter hasn't hit 3 yet, the game is going on, so we go back up to line 31
						and loop through it all again till those conditions are met. */  	
}		/* WHILE END:  We've met all our conditions to win the game, isSunk is now true so our WHILE loop condition has been met, 
			so we have now exited the loop entirely.  

/* User stats:  these stats aren't essential to the game function, just a nice touch to let the user know how they did.
		I'm going to copy this directly from the text, found at page 58, but this can be personalised later:  */

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
			"which means your shooting accuracy was " + (Math.floor((3/guesses)*100)) + "%";	// This is my way of providing a percentage.
			// The book doesn't do this, it just gives it as a decimal, or the highest being "1", didn't make sense. 
			// I also used math.floor to round any decimal percentages down to the nearest integer.   
			document.write("<br>" + stats);	// write the user stats to the DOM instead of alerting it. 



//END OF PROGRAM 