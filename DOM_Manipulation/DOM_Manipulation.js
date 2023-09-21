function alertFunction() {
  alert("You did it!");
}

function three (elem) {
  for(let i = 0; i <= 3; i++){
    return elem
  };
};

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey, I'm red!";

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";

const pinkContent = document.createElement("div");
pinkContent.style.backgroundColor = "pink";
pinkContent.style.border = "1px solid black";

const innerH1 = document.createElement("h1");
innerH1.textContent = "I'm a div";

const innerP = document.createElement("p");
innerP.textContent = "Me too!";

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction
);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueH3);
pinkContent.appendChild(innerH1);
pinkContent.appendChild(innerP);
container.appendChild(pinkContent);
