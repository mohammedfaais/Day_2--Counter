const count = document.getElementById("count");
const btn  = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");

let countNum = 0;

btn.addEventListener("click", function(){
   countNum++;
   count.innerText = countNum;
})

resetBtn.addEventListener("click", function(){
  countNum = 0;
  count.innerText = countNum;
})