const colors = [
  "#3C0538",
  "#2985E1",
  "#11048A",
  "#DD7198",
  "#90E07A",
  "#E18173",
  "#A164F8",
  "#229EED",
  "#060A39",
];

const button = document.querySelector(".color-changer");
const displayColor = document.querySelector('#color')
button.addEventListener("click", () => {
  const index = getRandomInt(0, colors.length);
  document.body.style.backgroundColor = colors[index];
  displayColor.textContent = colors[index]
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
