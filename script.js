const canvas = document.getElementById("heart");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

function heartShape(t) {

    const x =
        16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    return {
        x: x,
        y: -y
    };
}

for (let i = 0; i < 700; i++) {

    const t =
        Math.random() * Math.PI * 2;

    const pos =
        heartShape(t);

    particles.push({
        x: pos.x,
        y: pos.y,
        size: 14 + Math.random() * 10,
        offset: Math.random() * 1000
    });
}

function animate(time) {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for (let i = 0; i < particles.length; i++) {

        const p = particles[i];

        const scale = 20;

        const move =
            Math.sin(time * 0.002 + p.offset) * 5;

        const drawX =
            canvas.width / 2 + p.x * scale;

        const drawY =
            canvas.height / 2 + p.y * scale + move;

        ctx.font =
            p.size + "px Arial";

        ctx.fillStyle =
            "rgba(255,100,150,0.9)";

        ctx.fillText(
            "I Love You",
            drawX,
            drawY
        );
    }

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

const openBtn =
    document.getElementById("openBtn");

const closeBtn =
    document.getElementById("closeBtn");

const letter =
    document.getElementById("letter");

openBtn.addEventListener("click", function () {
    letter.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    letter.classList.remove("show");
});