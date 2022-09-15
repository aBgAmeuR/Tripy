document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("load");
  },
  false
);

function getDate() {
  var val = document.querySelector("#dateInput").value;
  const sortieDate = document.querySelector(".sortieDate");
  var month = Number(val.substring(5, 7));
  var year = Number(val.substring(0, 4));
  var day = Number(val.substring(8, 10));
  sortieDate.innerHTML = day + " " + toMonthName(month) + ", " + year;
}

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "short",
  });
}

function getLoc() {
  var select = document.querySelector("#locInput");
  var val = select.options[select.selectedIndex].value;
  const sortieLoc = document.querySelector(".sortieLoc");
  sortieLoc.innerHTML = val;
}

const slides = document.querySelector(".slides");

fetch("./data/cards.json")
  .then((data) => data.json())
  .then((data) => {
    Array.from(data).forEach((e) => {
      slides.innerHTML =
        slides.innerHTML +
        `
      <li class="slide">
      <img src="${e.image}" alt="Image de présentation" />
      <article>
        <h1>${e.desc}</h1>
        <p>${e.location}</p>
        <div class="rate">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.29723 2.9858L9.36729 4.92086C9.5139 5.18647 9.88186 5.43879 10.1845 5.4729L11.9856 5.69931C13.1389 5.84177 13.4363 6.66023 12.6514 7.5175L11.3143 8.96982C11.0911 9.2132 10.9752 9.67751 11.0649 9.99619L11.5334 11.706C11.9019 13.0559 11.2011 13.6155 9.96958 12.9524L8.24921 12.026C7.93589 11.8566 7.4382 11.8812 7.14384 12.0714L5.50612 13.1315C4.33374 13.8892 3.58771 13.3903 3.84496 12.0159L4.17439 10.2765C4.23589 9.95135 4.08844 9.49762 3.84506 9.2744L2.38477 7.93512C1.53255 7.14735 1.76179 6.30775 2.89742 6.06971L4.67062 5.69932C4.96987 5.63432 5.31668 5.36 5.43844 5.08089L6.3469 3.06105C6.84347 1.9728 7.71952 1.93851 8.29723 2.9858Z"
              fill="#FFBD39"
            />
          </svg>
          <p>${e.rate}</p>
        </div>
        <div class="buttom">
          <h2>${e.price}</h2>
          <p>${e.time}</p>
        </div>
      </article>
    </li>`;
    });
  });

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const cards = document.getElementsByClassName("slides");

arrowLeft.addEventListener("click", function () {
  Slider(0);
});
arrowRight.addEventListener("click", function () {
  Slider(1);
});
var valeurcards = 1;
function Slider(val) {
  if (val == 1) {
    valeurcards -= 1;
  } else if (val == 0) {
    valeurcards += 1;
  } else {
    console.log("nn");
  }
  console.log(valeurcards);
  if (valeurcards == 1) {
    slides.style.transform = "translateX(0)";
  }
  if (valeurcards == 2) {
    slides.style.transform = "translateX(-392.5px)";
  }
  if (valeurcards == 3) {
    slides.style.transform = "translateX(-785px)";
  }
  // if (valeurcards == 4) {
  //   slides.style.transform = "translateX(-1177.5px)"
  // }
  if (valeurcards < 1) {
    valeurcards = 1;
  }
  if (valeurcards > 3) {
    valeurcards = 3;
  }
}

const slider = document.querySelector(".slider");

fetch("./data/slider.json")
  .then((data) => data.json())
  .then((data) => {
    Array.from(data).forEach((e) => {
      slider.innerHTML =
        slider.innerHTML +
        `<div class="slide">
        <svg class="icon" width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33331C10.8 3.33331 3.33333 10.8 3.33333 20C3.33333 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM19.35 24.7333C19.35 26.55 17.9333 27.9666 16.1167 27.9666H13.65C11.8667 27.9666 10.4167 26.5166 10.4167 24.7333V20.2833C10.4167 15.15 11.5333 14 14.5167 12.2333C14.7167 12.1166 14.9333 12.0666 15.15 12.0666C15.5833 12.0666 16 12.2833 16.2333 12.6833C16.5833 13.2833 16.3833 14.05 15.8 14.4C13.7833 15.5666 13.0833 16 12.95 19.0166H16.1333C17.95 19.0166 19.3667 20.4333 19.3667 22.25V24.7333H19.35ZM29.5833 24.7333C29.5833 26.55 28.1667 27.9666 26.35 27.9666H23.8667C22.0833 27.9666 20.6333 26.5166 20.6333 24.7333V20.2833C20.6333 15.15 21.75 14 24.7333 12.2333C24.9333 12.1166 25.15 12.0666 25.3667 12.0666C25.8 12.0666 26.2167 12.2833 26.45 12.6833C26.8 13.2833 26.6 14.05 26.0167 14.4C24 15.6 23.3 16.0333 23.1667 19.05H26.35C28.1667 19.05 29.5833 20.4666 29.5833 22.2833V24.7333Z" fill="#E61C5D"/>
        </svg>
        <img
          src="${e.img}"
          alt="Profil Picture"
          width="80px"
          height="80px"
        />
        <b>${e.name}</b>
        <p>${e.job}</p>
        <div class="rate">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53475 1.35749L8.63543 3.33758C8.78624 3.60937 9.16473 3.86757 9.47599 3.90247L11.3287 4.13415C12.515 4.27993 12.8209 5.11743 12.0136 5.99466L10.6382 7.48078C10.4086 7.72983 10.2894 8.20494 10.3816 8.53104L10.8635 10.2807C11.2426 11.662 10.5217 12.2346 9.25497 11.5561L7.48535 10.6081C7.16306 10.4348 6.65112 10.46 6.34834 10.6546L4.66373 11.7393C3.45779 12.5146 2.69041 12.0042 2.95503 10.5978L3.29388 8.81787C3.35714 8.48516 3.20547 8.02087 2.95512 7.79246L1.45304 6.422C0.576417 5.6159 0.812221 4.75675 1.98036 4.51317L3.80432 4.13416C4.11214 4.06764 4.46887 3.78694 4.59411 3.50134L5.52858 1.43449C6.03936 0.320909 6.9405 0.285821 7.53475 1.35749Z" fill="#FFBD39"/>
          </svg>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53475 1.35749L8.63543 3.33758C8.78624 3.60937 9.16473 3.86757 9.47599 3.90247L11.3287 4.13415C12.515 4.27993 12.8209 5.11743 12.0136 5.99466L10.6382 7.48078C10.4086 7.72983 10.2894 8.20494 10.3816 8.53104L10.8635 10.2807C11.2426 11.662 10.5217 12.2346 9.25497 11.5561L7.48535 10.6081C7.16306 10.4348 6.65112 10.46 6.34834 10.6546L4.66373 11.7393C3.45779 12.5146 2.69041 12.0042 2.95503 10.5978L3.29388 8.81787C3.35714 8.48516 3.20547 8.02087 2.95512 7.79246L1.45304 6.422C0.576417 5.6159 0.812221 4.75675 1.98036 4.51317L3.80432 4.13416C4.11214 4.06764 4.46887 3.78694 4.59411 3.50134L5.52858 1.43449C6.03936 0.320909 6.9405 0.285821 7.53475 1.35749Z" fill="#FFBD39"/>
          </svg>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53475 1.35749L8.63543 3.33758C8.78624 3.60937 9.16473 3.86757 9.47599 3.90247L11.3287 4.13415C12.515 4.27993 12.8209 5.11743 12.0136 5.99466L10.6382 7.48078C10.4086 7.72983 10.2894 8.20494 10.3816 8.53104L10.8635 10.2807C11.2426 11.662 10.5217 12.2346 9.25497 11.5561L7.48535 10.6081C7.16306 10.4348 6.65112 10.46 6.34834 10.6546L4.66373 11.7393C3.45779 12.5146 2.69041 12.0042 2.95503 10.5978L3.29388 8.81787C3.35714 8.48516 3.20547 8.02087 2.95512 7.79246L1.45304 6.422C0.576417 5.6159 0.812221 4.75675 1.98036 4.51317L3.80432 4.13416C4.11214 4.06764 4.46887 3.78694 4.59411 3.50134L5.52858 1.43449C6.03936 0.320909 6.9405 0.285821 7.53475 1.35749Z" fill="#FFBD39"/>
          </svg>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53475 1.35749L8.63543 3.33758C8.78624 3.60937 9.16473 3.86757 9.47599 3.90247L11.3287 4.13415C12.515 4.27993 12.8209 5.11743 12.0136 5.99466L10.6382 7.48078C10.4086 7.72983 10.2894 8.20494 10.3816 8.53104L10.8635 10.2807C11.2426 11.662 10.5217 12.2346 9.25497 11.5561L7.48535 10.6081C7.16306 10.4348 6.65112 10.46 6.34834 10.6546L4.66373 11.7393C3.45779 12.5146 2.69041 12.0042 2.95503 10.5978L3.29388 8.81787C3.35714 8.48516 3.20547 8.02087 2.95512 7.79246L1.45304 6.422C0.576417 5.6159 0.812221 4.75675 1.98036 4.51317L3.80432 4.13416C4.11214 4.06764 4.46887 3.78694 4.59411 3.50134L5.52858 1.43449C6.03936 0.320909 6.9405 0.285821 7.53475 1.35749Z" fill="#FFBD39"/>
          </svg>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.53475 1.35749L8.63543 3.33758C8.78624 3.60937 9.16473 3.86757 9.47599 3.90247L11.3287 4.13415C12.515 4.27993 12.8209 5.11743 12.0136 5.99466L10.6382 7.48078C10.4086 7.72983 10.2894 8.20494 10.3816 8.53104L10.8635 10.2807C11.2426 11.662 10.5217 12.2346 9.25497 11.5561L7.48535 10.6081C7.16306 10.4348 6.65112 10.46 6.34834 10.6546L4.66373 11.7393C3.45779 12.5146 2.69041 12.0042 2.95503 10.5978L3.29388 8.81787C3.35714 8.48516 3.20547 8.02087 2.95512 7.79246L1.45304 6.422C0.576417 5.6159 0.812221 4.75675 1.98036 4.51317L3.80432 4.13416C4.11214 4.06764 4.46887 3.78694 4.59411 3.50134L5.52858 1.43449C6.03936 0.320909 6.9405 0.285821 7.53475 1.35749Z" fill="#FFBD39"/>
          </svg>
        </div>
        <p class="texte">
          ${e.text}
        </p>
      </div>`;
    });
  });

// import { tns } from "./src/tiny-slider.js";

// var slider = tns({
//   container: ".my-slider",
//   items: 3,
//   slideBy: "page",
//   autoplay: true,
// });
