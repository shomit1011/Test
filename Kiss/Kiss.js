const kissContainer = document.getElementById("kisses");

function createKiss() {
  const kiss = document.createElement("div");
  kiss.classList.add("kiss");
  kiss.innerText = "💋";

  kiss.style.left = Math.random() * 100 + "vw";
  kiss.style.animationDuration = 3 + Math.random() * 3 + "s";
  kiss.style.opacity = Math.random();

  kissContainer.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 7000);
}

setInterval(createKiss, 300);
