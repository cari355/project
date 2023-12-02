const card = document.querySelectorAll('.card');
const previousCard = document.getElementById("prev");
const nextCard = document.getElementById("next");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  card[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = card.length - 1;
  }
  card[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= card.length) {
    currentIndex = 0;
  }
  card[currentIndex].classList.add('active');
}

initializeSlider();

previousCard.addEventListener('click', function() {
  slideLeft();
});

nextCard.addEventListener('click', function() {
  slideRight();
});
