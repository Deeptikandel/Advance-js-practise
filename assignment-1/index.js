// Your code here
const start = document.querySelector(".start");
const display = document.querySelector(".alertbtn");
const countNum = () => {
  let num = 10e5;
  let i = 1;
  let myTimeout;
  const startCount = () => {
    if (i < num) {
      console.log(i);
      myTimeout = setTimeout(() => {
        i++;
        startCount();
      }, 0);
    } else {
      clearTimeout(myTimeout);
    }
  };
  startCount();
};

start.addEventListener("click", () => countNum());
display.addEventListener("click", () => alert("hi"));
