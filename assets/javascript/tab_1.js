const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let width = window.innerWidth;
const tabs = $$(".tab-link-1");
const panes = $$(".content-item-1");
const tabsContainer = $(".tabs-container-1");
const line = $(".tabs-1 .line_1");
const prevBtn = $(".prev-btn-1 button");
const nextBtn = $(".next-btn-1 button");

function updateLinePosition(tab) {
    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";
}

function handleTabClick(tab, index) {
    $(".tab-link-1.active").classList.remove("active");
    tab.classList.add("active");
    
    $(".content-item-1.active").classList.remove("active");
    panes[index].classList.add("active");

    updateLinePosition(tab);
}

function handleScroll() {
    const containerWidth = tabsContainer.offsetWidth;
    const scrollLeft = tabsContainer.scrollLeft;
    const scrollWidth = tabsContainer.scrollWidth;

    prevBtn.style.display = scrollLeft > 0 ? 'block' : 'none';
    nextBtn.style.display = scrollLeft < scrollWidth - containerWidth ? 'block' : 'none';
}

if (width <= 900) {
    requestIdleCallback(function () {
        let tabActive = document.querySelector('.tab-link-1.active');

        if (tabActive) {
            line.style.left = tabActive.offsetLeft + "px";
            line.style.width = (tabActive.offsetWidth - 40) + "px";
        }
    });

    let tabs = document.querySelectorAll('.tab-link-1');
    let panes = document.querySelectorAll('.content-item-1');

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
            document.querySelector('.tab-link-1.active').classList.remove("active");

            line.style.left = this.offsetLeft + "px";
            line.style.width = (this.offsetWidth - 40) + "px";

            this.classList.add("active");

            document.querySelector('.content-item-1.active').classList.remove("active");

            pane.classList.add("active");
        };
    });
}else{
    requestIdleCallback(function() {
        let tabActive = $(".tab-link-1.active");
        updateLinePosition(tabActive);
    });
    tabs.forEach((tab, index) => {
        const pane = panes[index];
        tab.onclick = function() {
            handleTabClick(tab, index);
        };
    });
}
document.querySelectorAll('.tab-link-1').forEach(button => {
    button.addEventListener('click', function () {
        const tabsContainer = document.querySelector('.tabs-container-1'); // Thanh chứa các tab
        const tabRect = this.getBoundingClientRect(); // Kích thước của nút
        const containerRect = tabsContainer.getBoundingClientRect(); // Kích thước container

        // Tính khoảng cách để nút hiển thị đầy đủ
        let offset = 0;

        if (tabRect.left < containerRect.left) {
            // Nếu nút nằm ngoài bên trái, cuộn sang phải
            offset = tabRect.left - containerRect.left;
        } else if (tabRect.right > containerRect.right) {
            // Nếu nút nằm ngoài bên phải, cuộn sang trái
            offset = tabRect.right - containerRect.right;
        }

        // Cuộn container theo khoảng cách đã tính toán
        tabsContainer.scrollBy({
            left: offset,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const tabsContainer = document.querySelector('.tabs-container-1');
    const prevBtn = document.querySelector('.prev-btn-1 button');
    const nextBtn = document.querySelector('.next-btn-1 button');

    function updateNavButtons() {
        const containerWidth = tabsContainer.offsetWidth;
        const scrollLeft = tabsContainer.scrollLeft;
        const scrollWidth = tabsContainer.scrollWidth;

        if (scrollLeft > 0) {
            prevBtn.style.display = 'block';
        } else {
            prevBtn.style.display = 'none';
        }

        if (scrollLeft < scrollWidth - containerWidth) {
            nextBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'none';
        }
    }

    tabsContainer.addEventListener('scroll', updateNavButtons);
    updateNavButtons();

    prevBtn.addEventListener('click', function() {
        tabsContainer.scrollBy({ left: -tabsContainer.offsetWidth, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', function() {
        tabsContainer.scrollBy({ left: tabsContainer.offsetWidth, behavior: 'smooth' });
    });
});
window.addEventListener('resize', function() {

    
});
