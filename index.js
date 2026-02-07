const cards = document.querySelectorAll(".day-card");
const modal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth(); // Feb = 1

cards.forEach(card => {
  const unlockDay = parseInt(card.dataset.day);
  const unlockMonth = parseInt(card.dataset.month);

  const isUnlocked =
    currentMonth > unlockMonth ||
    (currentMonth === unlockMonth && currentDay >= unlockDay);

  if (!isUnlocked) {
    card.classList.add("locked");

    card.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const heartsContainer = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 600);
