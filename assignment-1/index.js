// Your code here
const start=document.querySelector(".start")
const display = document.querySelector(".alertbtn")
const countNum = () => {
  console.log("Start loading....");
  for (let i = 1; i < 1000000; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);

  }
  console.log("Loading....");
}

start.addEventListener("click", ()=>countNum());
display.addEventListener("click", ()=>alert("hi"));
