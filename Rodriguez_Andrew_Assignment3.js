// alert("JavaScript works!");

// Andrew Rodriguez
// SDI - 1407
// Assignement 1 Project 1
// JavaScript - FlowChart
// "wolfs" "Hunting" "weapons"

// Preparing to Hunt some wolfs! Deciding what kind of protection to wear and weapon to use.

// Variables

var myname = "Andrew";
var protection1 = "Long harden sleeves";
var protection2 = "face mask";
var weapon1 = "hunting rifle";
var weapon2 = "Bow and arrow";
var numberofwolfs = 1;
var huntingawolf = true;
var myprompt;

// Output

console.log("afternoon everyone, my name is" ,myname, "Arod for short.");
console.log("this afternoon I will be going hunting for" ,numberofwolfs, "wolf");
console.log("first I will need to decide what kind of protection I will be using");
console.log("if I use" ,protection1, "for protection my choice of weapon is a" ,weapon2, ".");
console.log("the reason for this combination is I need something to protect my forearms from the bowstring, this is also good protection against close combat with a wolf in the event it was trying to bite my arms.");
console.log("if I decide to go with" ,protection2, "as protection my choice of weapon would be" ,weapon1, ".");
console.log("the" ,protection2, "is to protect my face and eyes because I would be using a" ,weapon1, "to hunt the wolf.");
console.log("the" ,weapon2, "makes good for long distances and can be just as accurte as an" ,weapon1, "is.");
console.log("Time to pick my combination of protection and weapon.");

// Boolean

huntingawolf = confirm("Am I going to hunt a wolf this afternoon?");

// Conditionals

if (huntingawolf === true) {
	myprompt = prompt("how many wolfs am I going to hunt this afternoon?", "type number of wolfs");
	myprompt = parseInt("1");
	   if (myprompt <= 1)
	   alert("its time to hunt a single wolf with my bow and arrow along with my long harden sleeves equiped.!!");
	   else
	   alert("its a wolf pack!! good thing my hunting rifle has a quick fire rate and I have my face and eye protected.!");	
} else {
	myprompt = prompt(" if its a wolf pack then what weapon will I choose?","type a weapon of choice");
	   if (myprompt === "hunting rifle")
	   	   alert("Great I will kill and servive the wolf pack because I used my hunting rifle..!!" ,myprompt);
	   	else
        alert(myname + " will lose the fight agaisnt the wolf pack.! Did not servive the wolf pack" ,myprompt);
    
}

// Jason data

var jasondata = {

	"person": [
	    }
	       "myname": "Andrew"
	       "I like to go wolf hunting: "Bow and arrow"
	       },
	       {
	       	"favorite time of day": Night
	        }
]
}:

// Math
if (numberofwolfs >= numberofbows) {
	numberofwolfs -= numberofbows;
	console.log("I will make sure i have enough bows just incase i encounter more then one wolf.")
}
