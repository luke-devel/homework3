var password = document.getElementById("password");
var lengthQ;
var symbolChoice;
var numChoice;
var lowerChoice;
var upperChoice;

var passwordOptionsArr = [];
var passwordArray = [];
var reset = "";
var finalPassword = "";

makeChoices();
passwordOptions();


function makeChoices() {
    lengthQ = prompt("What do you want your password length? Enter a number between 8 and 128.");
    if (lengthQ < 8 || lengthQ > 128) {
        lengthQ = prompt("please enter a number between 8 and 128.");
        if (lengthQ < 8 || lengthQ > 128) {
            makeChoices();
        }
    }

    symbolChoice = confirm("would you like special symbols in your password? Click OK for yes CANCEL for no.");
    numChoice = confirm("would you like numbers in your password? Click OK for yes CANCEL for no.");
    lowerChoice = confirm("would you like lower case letters in your password? Click OK for yes CANCEL for no.");
    upperChoice = confirm("would you like upper case letters in your password? Click OK for yes CANCEL for no.");
}

function passwordOptions() {


    var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var symbols = [';', ':', '<', '=', '!', '#', '$', '~', '%', '&', '(', ')', '+', '*', '>', '@', '?', '_', '[', ']', '^', '{', '}'];

    if (symbolChoice) {
        passwordOptionsArr = passwordOptionsArr.concat(symbols);
    }
    if (numChoice) {
        passwordOptionsArr = passwordOptionsArr.concat(numbers);
    }
    if (lowerChoice) {
        passwordOptionsArr = passwordOptionsArr.concat(lowerCharacters);
    }
    if (upperChoice) {
        passwordOptionsArr = passwordOptionsArr.concat(upperCharacters);
    }
}

function setPassword() {

    password.value = " ";
    for (var i = 0; i < lengthQ; i++) {
        passwordArray[i] = passwordOptionsArr[Math.floor(Math.random() * passwordOptionsArr.length)];
    }

    for (var i = 0; i < lengthQ; i++) {
        finalPassword += passwordArray[i];
    }

    password.value = finalPassword;

}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("your password is copied to the clipboard");
}
