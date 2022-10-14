const questionForm = document.querySelector(".question-form");
const subBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const crtAns = [ "right-angled", "isosceles", "acute-angled", "isosceles", "65°", "false", "45°", "scalene", "90", "right angled"];

function checkScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(questionForm);
    for (let value of formResults.values()){
        if(value === crtAns[index]){
            score = score +1;
        } 
         index = index +1;
    }
    output.innerText = "Your score is " + score;
}
subBtn.addEventListener("click", checkScore);