let box = document.querySelector("#box")

let randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let width = 1300
let height = 600

box.onmouseover = () => {
	box.style.marginLeft = randomInteger(0,width) + "px";
	box.style.marginTop = randomInteger(0,height) + "px";
	document.getElementById('meow').play();
}

