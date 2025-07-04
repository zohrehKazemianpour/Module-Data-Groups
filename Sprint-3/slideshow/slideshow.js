const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
];

const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");
const img = document.getElementById("carousel-img");
const autoBackwardBtn = document.getElementById("auto-backward");
const autoForwardBtn = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop");
let currentIndex = 0;

function displayCurrentImage() {
  img.setAttribute("src", images[currentIndex]);
}
function moveForward() {
  currentIndex += 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  displayCurrentImage();
}

function moveBackward() {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  displayCurrentImage();
}

forwardBtn.addEventListener("click", () => {
  moveForward();
});

backwardBtn.addEventListener("click", () => {
  moveBackward();
});
let intervalId;

autoBackwardBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    moveBackward();
  }, 5000);
});

autoForwardBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    moveForward();
  }, 5000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});
