const teddyContainer = document.getElementById("teddies");

function createTeddy() {
  const teddy = document.createElement("div");
  teddy.classList.add("teddy");

  teddy.style.left = Math.random() * 100 + "vw";
  teddy.style.animationDuration = 4 + Math.random() * 4 + "s";
  teddy.style.opacity = Math.random();

  teddyContainer.appendChild(teddy);

  setTimeout(() => {
    teddy.remove();
  }, 8000);
}

setInterval(createTeddy, 400);
