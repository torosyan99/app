function contains(tag, className) {
  return tag.classList.contains(className);
}

function classAdd(tag, className) {
  tag.classList.add(className);
}

function classToggle(tag, className) {
  tag.classList.toggle(className);
}
function classRemove(tag, className) {
  tag.classList.remove(className);
}

const body = document.body;
const popup = document.querySelector(".popup");
const formTime = document.querySelector(".popup__form-time");

if (formTime) {

  formTime.addEventListener("submit", (e) => {
    e.preventDefault();

    classAdd(formTime, "popup__form-time--success");
  });
}

body.addEventListener("click", (e) => {
  const target = e.target;
  if (popup) {
    if (contains(target, "popup-button")) {
      classAdd(popup, "popup--visible");
      classAdd(body, "body-overflow");
    } else if (contains(target, "popup")) {
      classRemove(popup, "popup--visible");
      classRemove(body, "body-overflow");

      if (contains(formTime, "popup__form-time--success")) {
        classRemove(formTime, "popup__form-time--success");
        classRemove(target, "popup__select-button--active");
      }
    }

    if (contains(target, "popup__select-button")) {
      classToggle(target, "popup__select-button--active");
    }
  }

  if(contains(target,'switch')) {
    classToggle(target,'switch--active')
  }
});

const listButtons = document.querySelectorAll(".list__button");
let activeButton;
[...listButtons].forEach((button) => {
  if (button.classList.contains("list__button--active")) {
    activeButton = button;
  }
  button.addEventListener("click", () => {
    if (activeButton && button !== activeButton) {
      activeButton.classList.remove("list__button--active");
    }
    button.classList.toggle("list__button--active");
    activeButton = button;
  });
});

class Content {
  constructor() {
    this.buttons = document.querySelectorAll(".content-choice__button");
    if (!this.buttons.length) return;

    this.content = {};
    this.activeButton;

    [...document.querySelectorAll(".content")].forEach((el) => {
      this.content[el.dataset.index] = el;
    });

    [...this.buttons].forEach((button) => {
      if (contains(button, "content-choice__button--active")) {
        this.activeButton = button;
      }

      button.addEventListener("click", () => this.showContent(button));
    });
    this.showContent(this.activeButton);
  }
  showContent = (button) => {
    if (this.activeButton && this.activeButton !== button) {
      classRemove(this.activeButton, "content-choice__button--active");
      classRemove(
        this.content[this.activeButton.dataset.index],
        "content--active"
      );
    }
    classAdd(button, "content-choice__button--active");
    classAdd(this.content[button.dataset.index], "content--active");

    this.activeButton = button;
  };
}

new Content();
