function processEntries() {
    let cents = document.getElementById("cents").value;
    if(cents >=0 && cents <=99){
 makeChange(cents);
    }
    else{
        alert("vale should be between 0 and 99");
        document.getElementById("quarters").value = "";
 document.getElementById("dimes").value = "";
 document.getElementById("nickels").value = "";
 document.getElementById("pennies").value = "";
    }
 }
 
 function makeChange (cents) {
    let quarters = parseInt(cents / 25);
    cents = cents % 25;
    let dimes = parseInt(cents / 10);
        cents = cents % 10;
    let nickels = parseInt(cents / 5);
        cents = cents % 5;
    let pennies = parseInt(cents / 1);
 document.getElementById("quarters").value = quarters;
 document.getElementById("dimes").value = dimes;
 document.getElementById("nickels").value = nickels;
 document.getElementById("pennies").value = pennies;
 }