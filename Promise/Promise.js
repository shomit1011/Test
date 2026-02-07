const promiseContainer = document.getElementById("promises");

function createPromise() {
  const promise = document.createElement("div");
  promise.classList.add("promise");

  promise.style.left = Math.random() * 100 + "vw";
  promise.style.animationDuration = 5 + Math.random() * 5 + "s";
  promise.style.opacity = Math.random();

  promiseContainer.appendChild(promise);

  setTimeout(() => {
    promise.remove();
  }, 9000);
}

setInterval(createPromise, 450);
