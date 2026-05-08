const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];

// сердце
for (let t = 0; t < Math.PI * 2; t += 0.04) {

  const x = 16 * Math.pow(Math.sin(t), 3);

  const y =
    13 * Math.cos(t)
    - 5 * Math.cos(2 * t)
    - 2 * Math.cos(3 * t)
    - Math.cos(4 * t);

  particles.push({ x: x * 20, y: -y * 20 });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {

    const pulse = Math.sin(Date.now() * 0.003 + i) * 5;

    // 💖 СЕРДЦЕ (розовое)
    ctx.fillStyle = "#550422a0";

    ctx.font = "16px Arial";
    ctx.fillText(
      "Love You",
      canvas.width / 2 + p.x + pulse,
      canvas.height / 2 + p.y + pulse
    );
  });

  requestAnimationFrame(animate);
}

animate();


// 💌 ОТКРЫТИЕ ПИСЬМА
const modal = document.getElementById("letterModal");
const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};