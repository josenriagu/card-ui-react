export default function toggle(iconId) {
  let elByClass = document.getElementsByClassName("active");
  let elById = document.getElementById(iconId);

  if (
    (elByClass[0] !== elById.parentElement.parentElement) &
    (elByClass[0] !== undefined)
  ) {
    elByClass[0].classList.toggle("active");
  }
  elById.parentElement.parentElement.classList.toggle("active");
}
