"use strict";
let $ = function(id) {
    return document.getElementById(id);
};
function calculateMpg(miles, gallons) {
	let mpg = (miles / gallons);
	mpg = mpg.toFixed(1);
	return mpg;
};
let processEntries = function() {
    let miles = $("miles").value;
    let gallons = $("gallons").value;
    let isValid = true;

    if (isNaN(miles) || miles <= 0) {
        alert("Miles must be numeric and greater than zero");
        isValid = false;
    }
    if (isNaN(gallons) || gallons <= 0) {
       	alert("Gallons must be numeric and greater than zero");
       	isValid = false;
    }
    if (isValid) {
        $("mpg").value = calculateMpg(miles, gallons);
    }
};
let clearEntries = function() {
	$("miles").value = "";
	$("gallons").value = "";
	$("mpg").value = "";
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
	$("miles").ondblclick = clearEntries;
    $("miles").focus();
};