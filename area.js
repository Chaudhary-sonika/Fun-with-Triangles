const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

function calculateMultiplyOfSides(a,b) {
  const multiplyOfSides = a*b;
  return multiplyOfSides;
}

function calculateArea() {
  if(sides[0].value > 0 && sides[1].value > 0){
    const multiplyOfSides = calculateMultiplyOfSides(
      Number(sides[0].value), Number(sides[1].value));
  const areaOfTriangle = multiplyOfSides/2;    

  output.innerText = "The area of a Triangle is " + areaOfTriangle.toFixed(2) +"cm²";
  } else {
    output.innerText = "Enter valid values.";
  }
   
}


areaBtn.addEventListener("click", calculateArea);