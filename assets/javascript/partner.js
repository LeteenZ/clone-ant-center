document.addEventListener('DOMContentLoaded', () => {
    const partnerSlide = document.querySelector('.partner-slide');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth + 16; // Slide width + margin

    // Sao chép tất cả các slide để nối vòng lặp
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        partnerSlide.appendChild(clone);
    });

    let position = 0;

    function loopSlides() {
        position -= 0.5; // Di chuyển 1px mỗi frame
        if (Math.abs(position) >= slides.length * slideWidth) {
            position = 0; // Reset khi chạy hết vòng
        }
        partnerSlide.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(loopSlides); // Gọi lặp lại liên tục
    }
    loopSlides();
});