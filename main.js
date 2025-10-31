const heart = document.getElementById('heart');
const envelopeContainer = document.getElementById('envelopeContainer');
const letterContainer = document.getElementById('letterContainer');
const typedText = document.getElementById('typedText');

const message = "Happy Birthday, Ajith 💖\n Wishing you the absolute best in the year ahead — may it bring you endless love, good health, success, and happiness 😊\n I can’t wait to celebrate every birthday with you from now on👻 \n PS: I am beyond excited for our journey together, filled with mad and passionate love, laughter, and adventure 😇\n\nCheers to you, from Anu 🥂✨"

// Envelope click
heart.addEventListener('click', () => {
  document.querySelector('.flap').style.transform = 'rotateX(180deg)';
  setTimeout(() => {
    envelopeContainer.style.opacity = '0';
    setTimeout(() => {
      envelopeContainer.classList.add('hidden');
      letterContainer.classList.remove('hidden');
      letterContainer.classList.add('show');
      startTyping();
      startFireworks();
    }, 800);
  }, 500);
});

// Typewriter effect
function startTyping() {
  let i = 0;
  function type() {
    if (i < message.length) {
      typedText.textContent += message.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      showGalleryButton(); // show button after typing
    }
  }
  type();
}

// --- Show Photo Gallery Button ---
function showGalleryButton() {
  // Create the button element (if it doesn’t exist already)
  let button = document.querySelector('.gallery-btn');
  if (!button) {
    button = document.createElement("a");
    button.textContent = "Go to Gallery 🎉";
    button.href = "gallery.html"; // 🔗 your link here
    button.className = "gallery-btn";
    typedText.insertAdjacentElement("afterend", button);
  }

  // Add a small delay before showing for smooth transition
  setTimeout(() => {
    button.classList.add("show");
  }, 500);
}



/* 🌟 STARFIELD BACKGROUND */
const starCanvas = document.getElementById("stars");
const starCtx = starCanvas.getContext("2d");
starCanvas.width = window.innerWidth;
starCanvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * starCanvas.width,
    y: Math.random() * starCanvas.height,
    size: Math.random() * 1.8,
    alpha: Math.random(),
    speed: Math.random() * 0.02 + 0.005
  });
}

function animateStars() {
  starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
  stars.forEach(star => {
    star.alpha += star.speed;
    if (star.alpha >= 1 || star.alpha <= 0) star.speed *= -1;
    starCtx.globalAlpha = star.alpha;
    starCtx.fillStyle = "#ffffff";
    starCtx.beginPath();
    starCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    starCtx.fill();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

/* 🎆 FIREWORKS */
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let particles = [];
const colors = ['#ff4d6d', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#f72585'];

function createParticle(x, y) {
  return {
    x,
    y,
    color: colors[Math.floor(Math.random() * colors.length)],
    radius: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 6,
    speedY: (Math.random() - 0.5) * 6,
    alpha: 1
  };
}

function createBurst(x, y) {
  for (let i = 0; i < 60; i++) {
    particles.push(createParticle(x, y));
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.speedX;
    p.y += p.speedY;
    p.alpha -= 0.01;
    if (p.alpha <= 0) particles.splice(i, 1);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  setInterval(() => {
    const positions = [
      [Math.random() * canvas.width, Math.random() * canvas.height * 0.8],
      [Math.random() * canvas.width, Math.random() * canvas.height],
      [Math.random() * canvas.width, canvas.height * 0.9]
    ];
    positions.forEach(([x, y]) => createBurst(x, y));
  }, 800);
  animateFireworks();
}

// --- Soft glow follows mouse slightly ---
const glow = document.querySelector(".glow-overlay");
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});
