let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slideInterval = 5000; // เวลาสำหรับการเลื่อนอัตโนมัติ (มิลลิวินาที)
let slideTimer;

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startSlideTimer() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

function stopSlideTimer() {
    clearInterval(slideTimer);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopSlideTimer(); // หยุดการเลื่อนอัตโนมัติเมื่อคลิกที่ dot
    });
});

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        const link = slide.getAttribute('data-link');
        if (link) window.open(link, '_blank');
    });
});

prevButton.addEventListener('click', () => {
    prevSlide();
    stopSlideTimer(); // หยุดการเลื่อนอัตโนมัติเมื่อคลิกปุ่มย้อนกลับ
});

nextButton.addEventListener('click', () => {
    nextSlide();
    stopSlideTimer(); // หยุดการเลื่อนอัตโนมัติเมื่อคลิกปุ่มถัดไป
});

showSlide(currentSlide);
startSlideTimer(); // เริ่มการเลื่อนอัตโนมัติ
