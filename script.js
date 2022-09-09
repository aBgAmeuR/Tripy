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
