

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3", "The End"];

let activeText = 0;
let activeLeter = -5;

const addLetter = () => {
    if (activeLeter >= 0){
  spnText.textContent += txt[activeText][activeLeter];
}
  activeLeter++;
  if (activeLeter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLeter = -5;
      spnText.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 200);
};

addLetter(); 
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
