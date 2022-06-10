let result = document.getElementById("result");
let weightResult = document.getElementById("weightResult");
let newResult;

function calculate(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    height = height/100;
    newResult = weight/(height*height)
    result.innerHTML = newResult + " kg/m2";
    printResult();
}

function printResult(){
    switch(true){
        case (newResult < 16):
            weightResult.innerText = "Severe thinness"
        break;
        case (newResult == 16 || newResult == 17):
            weightResult.innerText = "Moderate thinness"
        break;
        case (newResult > 17 && newResult <= 18.5):
            weightResult.innerText = "Mild thinness"
        break;
        case (newResult > 18.5 && newResult <= 25):
            weightResult.innerText = "Normal"
        break;
        case (newResult > 25 && newResult <= 30):
            weightResult.innerText = "Overweight"
        break;
        case (newResult > 30 && newResult <= 35):
            weightResult.innerText = "Obese Class 1"
        break;
        case (newResult > 35 && newResult <= 40):
            weightResult.innerText = "Obese Class 2"
        break;
        case (newResult > 40):
            weightResult.innerText = "Obese Class 3"
        break;
    }
}