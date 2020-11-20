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
       	$("miles").nextElementSibling.firstChild.nodeValue = "Miles must be numeric and greater than zero";
        isValid = false;
    }
    if (isNaN(gallons) || gallons <= 0) {
       	$("gallons").nextElementSibling.firstChild.nodeValue = "Gallons must be numeric and greater than zero";
       	isValid = false;
    }
    if (isValid) {
        $("mpg").value = calculateMpg(miles, gallons);
        $("miles").nextElementSibling.firstChild.nodeValue = "";
        $("gallons").nextElementSibling.firstChild.nodeValue = "";
    }
};

let clearEntries = function() {
	$("miles").value = "";
	$("gallons").value = "";
	$("mpg").value = "";
    $("miles").nextElementSibling.firstChild.nodeValue = "*";
    $("gallons").nextElementSibling.firstChild.nodeValue = "*";
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
	$("miles").ondblclick = clearEntries;
    $("miles").focus();
};