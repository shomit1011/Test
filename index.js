// const roseDayCard = document.getElementById("roseDay");
// const modal = document.getElementById("loveModal");
// const closeModal = document.getElementById("closeModal");

// roseDayCard.addEventListener("click", function (e) {
//   const today = new Date();
//   const date = today.getDate();
//   const month = today.getMonth(); // Feb = 1

//   // Allow only on 7th Feb
//   if (!(date === 7 && month === 1)) {
//     e.preventDefault();
//     modal.style.display = "flex";
//   }
// });

// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

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
