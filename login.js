document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("dateInput").value.trim();
  const correctDate = "07-09-2025";

  if (date === correctDate) {
     window.location.href = "main.html";
  } else {
    alert("Oops 🌸 That’s not the right date, try again!");
  }
});

// 🌷 Floating hearts
const heartsContainer = document.querySelector('.floating-hearts');
const heartEmojis = ["💗", "💖", "💕", "💞", "💘"];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
  // Random placement and animation
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.animationDuration = (Math.random() * 4 + 6) + 's'; // 6–10s
  heart.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2); // soft transparency
  
  heartsContainer.appendChild(heart);

  // Remove after animation
  setTimeout(() => heart.remove(), 10000);
}

// 💞 Gentle heart flow — one every 500ms
setInterval(createHeart, 500);
