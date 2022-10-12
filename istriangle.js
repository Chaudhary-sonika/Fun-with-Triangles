const input = document.querySelectorAll(".angle-input");
const triangleBtn = document.querySelector("#triangle-btn");
const output = document.querySelector("#output-area");

function calculateSumOfAngles( angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle() {
const sumOfAngles = calculateSumOfAngles(Number(input[0].value), Number(input[1].value), 
Number(input[2].value));
if (input[0].value > 0 && input[1].value > 0 && input[2].value > 0) {
    if (sumOfAngles ===180) {
        output.innerText = "Yay! The angles form a triangle";
    }
    else{
        output.innerText = "Oh Oh! The angles don't form a triangle" ;
    }
} else {
    output.innerText="Enter valid values which is greater than 0.";
}

}

triangleBtn.addEventListener("click", isTriangle)