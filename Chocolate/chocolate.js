const chocolateContainer = document.getElementById("chocolates");

function createChocolate() {
  const choco = document.createElement("div");
  choco.classList.add("chocolate");

  choco.style.left = Math.random() * 100 + "vw";
  choco.style.animationDuration = 5 + Math.random() * 5 + "s";
  choco.style.opacity = Math.random();

  chocolateContainer.appendChild(choco);

  setTimeout(() => {
    choco.remove();
  }, 10000);
}

setInterval(createChocolate, 350);
