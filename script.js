const music = document.getElementById('bgMusic');
let isPlaying = true;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
}

function submitWish() {
  const wish = document.getElementById("userWish").value;
  const thanks = document.getElementById("thanksMessage");
  if (wish.trim() !== "") {
    thanks.textContent = "❤️ Thank you for your sweet wish!";
    document.getElementById("userWish").value = "";
  } else {
    thanks.textContent = "Please write something first!";
  }
}

// Floating hearts animation
function createHearts() {
  const hearts = document.getElementById('hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
createHearts();
