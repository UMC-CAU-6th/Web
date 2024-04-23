increase.addEventListener('click',()=>{
  console.log("increase가 클릭됨")
  let score=parseInt(number.textContent);
  number.textContent=score+1;
});

decrease.addEventListener('click',()=>{
  console.log("decrease가 클릭됨")
  let score=parseInt(number.textContent);
  number.textContent=score-1;
});