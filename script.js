const input = document.querySelector("input");
// let calculated = false;

function appendToDisplay(char) {
    input.value += char;
}

function calculate() {
    try{
        input.value +=  "=" + eval(input.value);
    }
    catch(error){
        // input.value = "Error !";
        alert("Error !");
        clearDisplay();
    }
    // finally{
    //     // calculated = true;
    // }
}

function clearDisplay() {
    input.value = "";
}

// const box = document.querySelector(".box");

// box.addEventListener("click", event => {
//     if(calculated){
//         clearDisplay();
//     }
// });