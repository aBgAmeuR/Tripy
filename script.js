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
      slides.innerHTML = slides.innerHTML + `
      <div class="slide slide1">
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
    </div>`;
    });
  });
