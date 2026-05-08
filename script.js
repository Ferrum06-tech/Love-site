const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
let time = 0;

function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    time += 0.008;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2 - 20;

    ctx.save();
    ctx.translate(centerX, centerY);

    ctx.font = "bold 15px 'Playfair Display', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const points = [];
    const a = 18;
    const b = 16;

    for (let i = 0; i < 360; i += 1.8) {
        const angle = i * Math.PI / 180;
        const x = a * Math.pow(Math.sin(angle), 3);
        const y = b * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
        points.push({ x: x * 8.5, y: -y * 8.5 });
    }

    points.forEach((p, index) => {
        const alpha = 0.85 + Math.sin(time * 3 + index) * 0.15;
        const hue = (index * 2 + time * 30) % 360;

        // Чередование цветов: розовый и золотой
        ctx.fillStyle = (index % 2 === 0) 
            ? `hsla(330, 95%, 68%, ${alpha})`   // розовый
            : `hsla(45, 100%, 78%, ${alpha})`;  // золотой

        const rot = Math.sin(time * 2 + index * 0.1) * 6;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(rot * Math.PI / 180);
        ctx.fillText(index % 3 === 0 ? "Люблю тебя" : "I love you", 0, 0);
        ctx.restore();
    });

    ctx.restore();
    requestAnimationFrame(drawHeart);
}

// Запуск анимации сердца
drawHeart();

// Кнопка открытия открытки
const button = document.getElementById('loveButton');
const envelope = document.getElementById('envelope');
const closeBtn = document.getElementById('closeBtn');

button.addEventListener('click', () => {
    envelope.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    envelope.classList.remove('show');
});

// Закрытие по клику вне открытки
envelope.addEventListener('click', (e) => {
    if (e.target === envelope) {
        envelope.classList.remove('show');
    }
});