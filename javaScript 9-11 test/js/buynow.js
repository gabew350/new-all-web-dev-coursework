"use strict";
let $ = function(id) { return document.getElementById(id); };

let processEntries = function() {
    let isValid = true;
	
    // get values for user entries   
    
    let number = $("number").value;
    let currency = $("currency").value;

    // check user entries for validity
    if (number == "") {
        $("number").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("number").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (currency == "") {
        $("currency").nextElementSibling.firstChild.nodeValue = "Please select a currency.";
        isValid = false;
    } else {
        $("currency").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (isValid == true) {
        $("diolog_box").submit();
    }
};

window.onload = function() {
    $("register").onclick = processEntries;    
    $("currency").focus();
};