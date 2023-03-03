/*
  Background
*/

images = [
  "choonsik01.jpeg",
  "choonsik02.jpeg",
  "choonsik03.jpeg",
  "choonsik04.jpeg",
  "choonsik05.jpeg",
];

const chooseBackground = () => {
  const page = Math.floor(Math.random() * images.length);
  document.body.style.backgroundImage = `url('./src/img/${images[page]}'), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172))`;
};

chooseBackground();
