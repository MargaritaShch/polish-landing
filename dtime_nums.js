function dtime_nums(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString();
}


document.addEventListener("DOMContentLoaded", function () {
  let dateElements = document.querySelectorAll('.comment__date');
  dateElements.forEach(function(element) {
    let textContent = element.textContent.trim();
    let offset = 0;

  if (textContent === "wczoraj") {
    offset = -1; 
  } else if (textContent === "przedwczoraj") {
    offset = -2; 
  }

  let dateString = dtime_nums(offset);
  element.textContent = dateString;
  });
});