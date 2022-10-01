const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateMultiplyOfSides(a,b) {
  const multiplyOfSides = a*b;
  return multiplyOfSides;
}

function calculateArea() {
    const multiplyOfSides = calculateMultiplyOfSides(
        Number(sides[0].value), Number(sides[1].value));
    const areaOfTriangle = multiplyOfSides/2;    

    outputEl.innerText = "The area of a Triangle is " + areaOfTriangle +"cm²";
}


areaBtn.addEventListener("click", calculateArea);