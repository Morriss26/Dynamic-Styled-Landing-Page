const userInput = document.getElementById("user-input");
const actionButton = document.getElementById("call-to-action button");
const ctah=Header = document.getElementById("cta-header");

actionButton.addEventListener("click",function()){
    if(userInput.value){
        ctaHeader.innerText = `Welcome, ${userInput.value}!`;
    }
}