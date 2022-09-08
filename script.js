function getVal() {
  const val = document.querySelector('#dateInput').value;
  const sortieDate = document.querySelector(".sortieDate");
  const month = Number(val.substring(5, 7));
  const year = Number(val.substring(0, 4));
  const day = Number(val.substring(8, 10));
  sortieDate.innerHTML = day + " " + toMonthName(month) + ", " + year;
}

function toMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'short',
  });
}