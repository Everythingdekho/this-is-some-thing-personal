// ===== PASSWORD =====
const correctPassword = "21072024";
let attempts = 0;

function checkPassword() {
    const entered = document.getElementById("passwordInput").value;
    const error = document.getElementById("errorMsg");

    attempts++;

    if (entered === correctPassword) {

        // Flash effect
        const flash = document.getElementById("flash");
        if (flash) {
            flash.style.opacity = "1";
            setTimeout(() => flash.style.opacity = "0", 200);
        }

        // Hide password screen
        setTimeout(() => {
            document.getElementById("passwordScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";

            // Start everything
            document.getElementById("bgMusic").play();
            updateCounter();
            startSlideshow();
            startHearts();

        }, 300);

    } else {
        error.innerHTML =
            attempts >= 3
                ? "It was 21 July 2024 ❤️"
                : "Think about our special day 💕";
    }
}

// ===== LOVE COUNTER =====
function updateCounter() {
    const startDate = new Date(2024, 6, 21); // July = 6
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const counter = document.getElementById("loveCounter");
    if (counter) {
        counter.innerHTML = days + " Days Together ❤️";
    }
}

setInterval(updateCounter, 60000);

// ===== AUTO SLIDESHOW =====
let current = 1;
const total = 157;
let startX = 0;

function startSlideshow() {
    const slide = document.getElementById("slide");

    function changeImage(direction = 1) {
        slide.style.opacity = 0;

        setTimeout(() => {
            current += direction;

            if (current > total) current = 1;
            if (current < 1) current = total;

            slide.src = "images/" + current + ".jpg";
            slide.style.opacity = 1;
        }, 300);
    }

    // Auto slide
    setInterval(() => {
        changeImage(1);
    }, 4000);

    // Swipe support
    slide.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slide.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) changeImage(1);   // swipe left
        if (endX - startX > 50) changeImage(-1);  // swipe right
    });
}
// ===== FLOATING HEARTS =====
function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.querySelector(".hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 600);
}

// ===== SCROLL FUNCTION =====
function scrollToGallery() {
    document.getElementById("gallery")
        .scrollIntoView({ behavior: "smooth" });
}

// ===== FINAL MESSAGE =====
function finalSurprise() {
    const msg = document.getElementById("finalMessage");
    msg.innerHTML = "I Will Love You Forever & Always ❤️✨";
}