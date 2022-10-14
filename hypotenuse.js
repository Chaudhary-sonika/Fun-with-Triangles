const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

 function calculateSumOfSqrOfSide(a,b) {
  const sumOfSqr = a*a + b*b;
  return sumOfSqr;
 }
  
  function calculateHypoOfTriangle() {
    if(sides[0].value > 0 && sides[1].value > 0) {
    const sumOfSqr = calculateSumOfSqrOfSide(
        Number(sides[0].value), Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSqr);    

    output.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(2) + "cm";
 }
  else {
   output.innerText = "Enter the valid input Which is greater than 0.";
  }
 }



hypotenuseBtn.addEventListener("click", calculateHypoOfTriangle);