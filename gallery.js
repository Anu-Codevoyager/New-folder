const sparkleContainer = document.createElement('div');
sparkleContainer.classList.add('sparkles');
document.body.appendChild(sparkleContainer);

for (let i = 0; i < 40; i++) {
  const s = document.createElement('div');
  s.classList.add('spark');
  s.style.left = `${Math.random() * 100}vw`;
  s.style.animationDelay = `${Math.random() * 5}s`;
  s.style.animationDuration = `${6 + Math.random() * 5}s`;
  sparkleContainer.appendChild(s);
}

const style = document.createElement('style');
style.innerHTML = `
  .spark {
    position: fixed;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle, #ff99cc 0%, transparent 70%);
    border-radius: 50%;
    top: 100vh;
    animation: floatUp linear infinite;
    opacity: 0.6;
    pointer-events: none;
  }
  @keyframes floatUp {
    from { transform: translateY(0) scale(1); opacity: 0.8; }
    to { transform: translateY(-110vh) scale(0.3); opacity: 0; }
  }
`;
document.head.appendChild(style);
