"use strict";
let $ = function(id) { return document.getElementById(id); };

let processEntries = function() {
    let isValid = true;
	
    // get values for user entries   
    let email = $("email_address").value;
    let password = $("password").value;

    // check user entries for validity
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "Email is required.";
        isValid = false;
    } else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (password == "") {
        $("password").nextElementSibling.firstChild.nodeValue = "Password is required / Invalid Email or Password";
        isValid = false;
    } else {
        $("password").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (isValid == true) {
        $("registration_form").submit();
    }
};

window.onload = function() {
    $("register").onclick = processEntries;    
    $("email_address").focus();
};