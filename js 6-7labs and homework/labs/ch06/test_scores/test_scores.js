var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { 
	return document.getElementById(id); 
};

let addScore = function () {
	// get user entries
	let name = $("name").value;
    let score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name === "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("name").value = "";
	    $("score").value = "";
	}
	$("scores_display").value = "";
    $("name").focus();
};

let displayScores = function(){
	let scoresDisplay = "";
	for (let i = 0; i < scores.length; ++i)
	{
		scoresDisplay += names[i] + " = " + scores[i] + "\n";
	}
	
	$("scores_display").value = scoresDisplay;
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


