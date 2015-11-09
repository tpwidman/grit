import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import TasksViewControl from '../tasks/tasks.vc';
import ListsViewControl from '../lists/lists.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {};

    goToTasks(): void {
      //this needs to navigate to Tasks Page//
        this.navigator.navigate(TasksViewControl);
    }

    goToLists(): void {
      //this needs to navigate to Lists Page//
        this.navigator.navigate(ListsViewControl);
    };
    
// function time(secondsRemaing:number, intervalHandle:number){
//     var secondsRemaining;
//     var intervalHandle;
//     return secondsRemaing + intervalHandle;
// }
// function resetPage(){

// 	document.getElementById("inputArea").style.display = "block";

// }

// function tick(){
// 	// grab the h1
// 	var timeDisplay = document.getElementById("time");

// 	// turn the seconds into mm:ss
// 	var min = Math.floor(secondsRemaining / 60);
// 	var sec = secondsRemaining - (min * 60);

// 	//add a leading zero (as a string value) if seconds less than 10
// 	if (sec < 10) {
// 		sec = "0" + sec;
// 	}

// 	// concatenate with colon
// 	var message = min.toString() + ":" + sec;

// 	// now change the display
// 	timeDisplay.innerHTML = message;

// 	// stop is down to zero
// 	if (secondsRemaining === 0){
// 		alert("Done!");
// 		clearInterval(intervalHandle);
// 		resetPage();
// 	}

// 	//subtract from seconds remaining
// 	secondsRemaining--;

// }

// function startCountdown(){

// 	function resetPage(){
// 		document.getElementById("inputArea").style.display = "block";
// 	}

// 	// get countents of the "minutes" text box
// 	var minutes = document.getElementById("minutes").value;
	
// 	// check if not a number
// 	if (isNaN(minutes)){
// 		alert("Please enter a number");
// 		return; // stops function if true
// 	}

// 	// how many seconds
// 	secondsRemaining = minutes * 60;
	
// 	//every second, call the "tick" function
// 	// have to make it into a variable so that you can stop the interval later!!!
// 	intervalHandle = setInterval(tick, 1000);

// 	// hide the form
// 	document.getElementById("inputArea").style.display = "none";


// }

// window.onload = function(){

// 	// create input text box and give it an id of "min"
// 	var inputMinutes = document.createElement("input");
// 	inputMinutes.setAttribute("id", "minutes");
// 	inputMinutes.setAttribute("type", "text");
	
// 	//create a button
// 	var startButton = document.createElement("input");
// 	startButton.setAttribute("type","button");
// 	startButton.setAttribute("value","Start Countdown");
// 	startButton.onclick = function(){
// 		startCountdown();
// 	};

// 	//add to the DOM, to the div called "inputArea"
// 	document.getElementById("inputArea").appendChild(inputMinutes);
// 	document.getElementById("inputArea").appendChild(startButton)		


// function getTime(){
//     return "minutes" + ":" + "seconds";
// }

// interface ITimeInterface {  
//     minutes: number;
//     seconds: number;
//     }
// }

// register.viewControl('home-vc', HomeViewControl);
}
=======
    }

    // function time(secondsRemaing:number, intervalHandle:number){
    //     var secondsRemaining : number;
    //     var intervalHandle : number;
    //     return secondsRemaing + intervalHandle;
    // }
    // function resetPage(){

    //     document.getElementById("inputArea").style.display = "block";

    // }

    // function tick(){
    //     // grab the h1
    //     var timeDisplay = document.getElementById("time");

    //     // turn the seconds into mm:ss
    //     var min = Math.floor(secondsRemaining / 60);
    //     var sec = secondsRemaining - (min * 60);

    //     //add a leading zero (as a string value) if seconds less than 10
    //     if (sec < 10) {
    //         sec = "0" + sec;
    //     }

    //     // concatenate with colon
    //     var message = min.toString() + ":" + sec;

    //     // now change the display
    //     timeDisplay.innerHTML = message;

    //     // stop is down to zero
    //     if (secondsRemaining === 0){
    //         alert("Done!");
    //         clearInterval(intervalHandle);
    //         resetPage();
    //     }

    //     //subtract from seconds remaining
    //     secondsRemaining--;

    // }

    // function startCountdown(){

    //     function resetPage(){
    //         document.getElementById("inputArea").style.display = "block";
    //     }

    //     // get countents of the "minutes" text box
    //     var minutes = document.getElementById("minutes").value;

    //     // check if not a number
    //     if (isNaN(minutes)){
    //         alert("Please enter a number");
    //         return; // stops function if true
    //     }

    //     // how many seconds
    //     secondsRemaining = minutes * 60;

    //     //every second, call the "tick" function
    //     // have to make it into a variable so that you can stop the interval later!!!
    //     intervalHandle = setInterval(tick, 1000);

    //     // hide the form
    //     document.getElementById("inputArea").style.display = "none";


    // }

    // window.onload = function(){

    //     // create input text box and give it an id of "min"
    //     var inputMinutes = document.createElement("input");
    //     inputMinutes.setAttribute("id", "minutes");
    //     inputMinutes.setAttribute("type", "text");

    //     //create a button
    //     var startButton = document.createElement("input");
    //     startButton.setAttribute("type","button");
    //     startButton.setAttribute("value","Start Countdown");
    //     startButton.onclick = function(){
    //         startCountdown();
    //     };

    //     //add to the DOM, to the div called "inputArea"
    //     document.getElementById("inputArea").appendChild(inputMinutes);
    //     document.getElementById("inputArea").appendChild(startButton)

    // }
    // function getTime(){
    //     return "minutes" + ":" + "seconds";
    // }

    // interface ITimeInterface {
    //     minutes: number;
    //     seconds: number;
    // }

};
register.viewControl('home-vc', HomeViewControl);
>>>>>>> 2a052849aac6262da5619005c8f268ed446ed53a
