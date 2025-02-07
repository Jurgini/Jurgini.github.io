const textElement = document.getElementById('text');
const wave = document.getElementById('wave');
const startBtn = document.getElementById('startBtn');
const whiteOverlay = document.getElementById('white-overlay');
const gifContainer = document.getElementById('gif-container');
const buttonLabel = document.getElementById('button-label');
const buttonContainer = document.getElementById('button-container');
const noButton = document.getElementById('noBtn');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
let clickCount = 0;

const messages = [
  "Angel, will you be my valentine :)"
];

let index = 0;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  console.log(clickCount);
  if (clickCount < 17) {
    const buttonTexts = ["ANGEEEL",
      "I have something to tell you...",
      "Im scared you won't feel the same way",
      "But im going to tell you anywayyy",
      "You're a really amazing person",
      "I adore the way you are",
      "Love your little laugh :)",
      "Amazed by your hobbies and interests",
      "And i Love your cute little face too hihi",
      "All i want is for you to be happy :)",
      "There are so many more reasons i like you",
      "And... i've been feeling like...",
      "I'm falling in love with you",
      "I just wanted to let you know how i feel",
      "I don't want you to feel pressured",
      "And since you're here already",
      "There's something i wanted to ask you.."];

    // Fade out the current text
    textElement.classList.add('fade-out');

    // Increment clickCount immediately
    clickCount++;

    // Change the text after fade-out
    setTimeout(() => {
      textElement.textContent = buttonTexts[clickCount - 1]; // Use updated clickCount
      textElement.classList.remove('fade-out');
      textElement.classList.add('fade-in');

      // Remove the fade-in class after the animation completes
      setTimeout(() => {
        textElement.classList.remove('fade-in');
      }, 1000); // Match the duration of the fade-in animation
      startBtn.disabled = false;
    }, 1000); // Wait for fade-out animation

  }

  else if (clickCount >= 18) {

    textElement.textContent = "YAAAYYYYY ❤️❤️❤️";

    noButton.classList.add('hidden');
    startBtn.classList.add('hidden');
  }

  else {
    waveAnimation();
    clickCount++;

  }

  function waveAnimation() {
    // Start the wave animation
    wave.style.animation = 'wave 7s linear forwards, waveUpDown 4s ease-in-out infinite';
    whiteOverlay.style.animation = 'wave 7s linear forwards';
    whiteOverlay.style.animationDelay = '0.625s'; // Delay the start by 1 second
    whiteOverlay.style.zIndex = 100;
    wave.style.zIndex = 100;

    setTimeout(() => {
      textElement.textContent = "";
      buttonLabel.textContent = "...";

      while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
      }

      startBtn.classList.add('hidden');
      startBtn.textContent = "";
    }, 3000); // Wait for fade-out animation

    wave.addEventListener('animationend', () => {
      // Fade out the current text
      textElement.classList.add('fade-out');
      buttonLabel.classList.add('fade-out');
      startBtn.classList.add('fade-out');
      noButton.classList.add('fade-out');

      // Change the text after fade-out
      setTimeout(() => {
        index = (index + 1) % messages.length;
        gif1.src = "images/hearts-falling-bunny.gif";
        gif2.src = "images/hearts-falling-bunny.gif";
        textElement.textContent = "Angel, will you be my valentine";
        buttonLabel.textContent = "Tell me your answer in chat hehe";
        startBtn.textContent = "YESS";


        textElement.classList.remove('fade-out');
        textElement.classList.add('fade-in');

        buttonLabel.classList.remove('fade-out');
        buttonLabel.classList.add('fade-in');

        startBtn.classList.remove('fade-out');
        startBtn.classList.add('fade-in');

        noButton.classList.remove('fade-out');
        noButton.classList.add('fade-in');

        startBtn.classList.remove('start-btn');
        startBtn.classList.add('yes-btn');
        startBtn.classList.remove('hidden');
        noButton.classList.add('no-btn');
        noButton.classList.remove('hidden');
        startBtn.disabled = false;
      }, 1000); // Wait for fade-out animation
    });

    // Disable the button after the animation starts
  }
});

  noButton.addEventListener('click', () => {
    textElement.textContent = "awwh man, maybe next time then :(";

    noButton.classList.add('hidden');
    startBtn.classList.add('hidden');
  });

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Set random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';

    // Set random animation duration for falling and swaying
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // Between 3-6 seconds

    // Append the heart to the body
    document.body.appendChild(heart);

    // Remove the heart after its animation is done
    setTimeout(() => {
      heart.remove();
    }, 6000); // Matches the max animation duration
  }

// Generate a new heart every 300ms
  setInterval(createHeart, 300);




