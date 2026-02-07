const hugContainer = document.getElementById("hugs");

function createHug() {
  const hug = document.createElement("div");
  hug.classList.add("hug");

  hug.style.left = Math.random() * 100 + "vw";
  hug.style.animationDuration = 4 + Math.random() * 4 + "s";
  hug.style.opacity = Math.random();

  hugContainer.appendChild(hug);

  setTimeout(() => {
    hug.remove();
  }, 8000);
}

setInterval(createHug, 350);
