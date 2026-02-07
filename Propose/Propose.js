const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300);

const modal = document.getElementById("proposalModal");
const modalMessage = document.getElementById("modalMessage");

function openModal(answer) {
  if (answer === "yes") {
    modalMessage.innerText =
      "I knew you would say Yes!\nI just Love you meri jaan\nYou just made my world brighter 💖\nI promise to cherish you forever 🥹❤️";
  } else {
    modalMessage.innerText =
      "Haha😅 mujhe pata tha ye karne wali ho.\nPlease YES kardo na meri jaan 💕";
  }

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
