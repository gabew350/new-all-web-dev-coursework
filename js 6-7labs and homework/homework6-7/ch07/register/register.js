"use strict";
let $ = function(id) { return document.getElementById(id); };

let processEntries = function() {
    let isValid = true;
	
    // get values for user entries   
    let email = $("email_address").value;
    let phone = $("phone").value;
    let country = $("country").value;
    let contact = "Text";
    if ($("email").checked) { contact = "Email"; }
    if ($("none").checked) { contact = "None"; }
    let terms = $("terms").checked;

    // check user entries for validity
    if (email == "") {
        $("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("email_address").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (phone == "") {
        $("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        $("phone").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (country == "") {
        $("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
        isValid = false;
    } else {
        $("country").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (terms == false) {
        $("terms").nextElementSibling.firstChild.nodeValue = "This box must be checked.";
        isValid = false;
    } else {
        $("terms").nextElementSibling.firstChild.nodeValue = "";	
    }
    
    if (isValid == true) {
        $("registration_form").submit();
    }
};
let resetForm = function() {
    $("registration_form").reset();
    $("email_address").nextElementSibling.firstChild.nodeValue = "*";
    $("phone").nextElementSibling.firstChild.nodeValue = "*";	
    $("country").nextElementSibling.firstChild.nodeValue = "*";	
    $("terms").nextElementSibling.firstChild.nodeValue = "*";
    $("email_address").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
};