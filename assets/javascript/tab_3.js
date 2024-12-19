(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    
    const tabs = $$(".tab-link-3");
    const panes = $$(".content-item-3");
    const tabActive = $(".tab-link-3.active");
    const line = $(".tabs-3 .line_3");
    
    requestIdleCallback(function () {
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = (tabActive.offsetWidth - 40) + "px";
    });
    
    tabs.forEach((tab, index) => {
        const pane = panes[index];
        tab.onclick = function () {
        $(".tab-link-3.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = (this.offsetWidth - 40) + "px";

        this.classList.add("active");

        $(".content-item-3.active").classList.remove("active");
        
        pane.classList.add("active");
    };
    });
})(); 
document.querySelectorAll('.tab-link-3').forEach(button => {
    button.addEventListener('click', function () {
        const tabsContainer = document.querySelector('.tabs-container-3'); // Thanh chứa các tab
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
    const tabsContainer = document.querySelector('.tabs-container-3');
    const prevBtn = document.querySelector('.prev-btn-3 button');
    const nextBtn = document.querySelector('.next-btn-3 button');

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