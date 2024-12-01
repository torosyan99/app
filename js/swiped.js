const swipedButton = document.querySelector(".swiped-button");
const swiped = document.querySelector(".swiped");
const swipedClose = document.querySelector(".swiped__close");

if (swipedButton) {
  swipedButton.addEventListener("click", () => {
    classAdd(swiped, "swiped--active");
    classAdd(body, "body-overflow");
  });
}
if (swipedClose) {
  swipedClose.addEventListener("click", () => {
    classRemove(swiped, "swiped--active");
    classRemove(body, "body-overflow");
  });
}

const swipedInnerButton = document.querySelector(".swiped .swiped__button");

if (swipedInnerButton) {
  swipedInnerButton.addEventListener("swiped-down", (e) => {
    classRemove(swiped, "swiped--active");
    classRemove(body, "body-overflow");
  });
}

const swipedInnerButton2 = document.querySelector(
  ".recipes-swiped .swiped__button"
);

console.log(swipedInnerButton2)
if (swipedInnerButton2) {
  swipedInnerButton2.addEventListener("swiped-up", () => {
    classAdd(swiped, "recipes-swiped--open");
    classAdd(body, "body-overflow");
  });

  swipedInnerButton2.addEventListener("swiped-down", () => {
    classRemove(swiped, "recipes-swiped--open");
    classRemove(body, "body-overflow");
  });
}
