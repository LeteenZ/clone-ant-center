document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("head-container");
    if (header) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                header.classList.add("scrolled"); 
            } else {
                header.classList.remove("scrolled"); 
            }
        });
    } else {
        console.error("Phần tử với ID 'header-main' không tìm thấy.");
    }
});

function smoothScrollTo(target, duration) {
    const start = window.scrollY || window.pageYOffset;
    const end = target.offsetTop;
    const change = end - start;
    let currentTime = 0;
    const increment = 20; // Độ trễ trong mỗi lần lặp

    function animateScroll() {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    animateScroll();
}

document.querySelectorAll('.btnSign_up').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        smoothScrollTo(targetElement, 500);  // 1000ms = 1 giây
    });
});
document.querySelectorAll('.btnSign_up2').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        smoothScrollTo(targetElement, 500);  // 1000ms = 1 giây
    });
});

document.querySelectorAll('.btnSign_up3').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        smoothScrollTo(targetElement, 500);  // 1000ms = 1 giây
    });
});

window.addEventListener('resize', function() {
    window.location.reload();
});
