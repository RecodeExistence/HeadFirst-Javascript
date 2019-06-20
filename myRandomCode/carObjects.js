/* It took me several goes to get this working.  Most of the methods etc worked well , but there was some trouble with the driveAway method.
It wasn't responding negatively when some of the booleans were in the incorrect state. 
Mainly, the getReady method seemed to be being called within the driveAway function, instead of just checking if all booleans
were in the correct state needed.  This was kind of obsolete, and made it so that driveAway could never return false/negatively.  

The solution was to dynamically create a property-value pair , boolean in value, that could be checked when driveAway is invoked, and
dynamically deleted when parkUp is invoked after.  This gives us a way to switch in and out of states, 
and the program just feels more.. **reactive**.  This was pretty fun to build!  */

var car = {
    engineOn: false,
    handbrakeOn: true ,
    seatBeltOn: false , 
    isNight: false, 
    lightsOn: false,
     
    
  		getReady: function() {    // switch everything so that the car can drive away.
        this.engineOn = true; this.handbrakeOn = false ; this.seatBeltOn = true;
		car.allReady = true ;
        console.log("Engine is on, handbrake is off, seatbelt is on too!"); 
        
    }, 
 
    
    driveAway: function() {  // check all switches are set to drive, then conditionally log messages depending on true/false (the allReady is dynamically generated by getReady.
            (car.allReady) ?
			console.log("Okay, all set to drive, let\'s go!") : 
            console.log("You didn't get ready to drive!");
    }, 


	
    parkUp: function() {	// reset all booleans, dynamically delete the allReady property, so that driveAway won't work if getReady hasn't been run.
        this.engineOn = false ; this.handbrakeOn = true ; this.seatBeltOn = false; this.isReady = false ; delete this.allReady ; 
    console.log(car); 
    console.log("You're all parked up, you can leave the car now.");
	console.log(this.allReady); 
	console.log(car);
    }
};
