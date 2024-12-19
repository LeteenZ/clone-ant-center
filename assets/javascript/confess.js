const danhSach = [
    {
        "title": "Kể từ khi triển khai Ant Center, chúng tôi đã chứng kiến một sự thay đổi đáng kể trong hoạt động của MoyArt. Các tính năng mạnh mẽ của phần mềm này cho phép chúng tôi dễ dàng theo dõi tiến trình học tập của học viên, quản lý phân công giảng viên và tạo ra báo cáo chi tiết.",
        "img": "./assets/images/icon-main_confess/MoyArt.jpg",
        "name": "Võ Mai Thương",
        "name_position": "Founder & CEO - MoyArt"
    },
    {
        "title": "Chúng tôi rất hài lòng với phần mềm Ant Center. Giao diện thân thiện và các tính năng mạnh mẽ của nó đã đơn giản hóa các công việc quản lý của chúng tôi.",
        "img": "./assets/images/icon-main_confess/AtSchool.jpg",
        "name": "Tùng Đàm",
        "name_position": "Founder & CEO - AtSchool"
    },
    {
        "title": "Chúng tôi đã tiết kiệm rất nhiều thời gian và công sức kể từ khi sử dụng Ant Center. Nhiều tính năng linh hoạt và dễ sử dụng giúp chúng tôi dễ dàng theo dõi học viên, quản lý lớp học và tạo lịch học một cách hiệu quả.",
        "img": "./assets/images/icon-main_confess/BrainSTEM.jpg",
        "name": "Ngân JP",
        "name_position": "Founder & CEO - BrainSTEM"
    },
    {
        "title": "Ant Center đã giúp chúng tôi tối ưu xếp lịch dạy và quản lý công việc một cách hiệu quả. Bảng công tự động và tính năng đánh giá kết quả giảng dạy toàn diện đã giúp chúng tôi tiết kiệm thời gian và nâng cao hiệu suất làm việc của giáo viên.",
        "img": "./assets/images/icon-main_confess/BZEnglish.jpg",
        "name": "Linh Đặng",
        "name_position": "Founder & CEO - BZ English"
    },
    {
        "title": "Ant Center đã thực sự làm thay đổi cách quản lý trung tâm đào tạo của chúng tôi. Với những tính năng toàn diện, chúng tôi có thể dễ dàng quản lý việc đăng ký học viên, lịch học và tài liệu đào tạo. Phần mềm này đã tối ưu hóa quy trình làm việc của chúng tôi và cải thiện hiệu suất làm việc tổng thể.",
        "img": "./assets/images/icon-main_confess/amslink.jpg",
        "name": "Quỳnh Anh",
        "name_position": "Founder & CEO - Amslink"
    }
];

let currentIndex = 2;
let indexs = currentIndex;

// Khởi tạo slide
const slideContainer = document.querySelector('.cf-slide');
danhSach.forEach((item, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide1');
    
    const img = document.createElement('img');
    img.setAttribute('src', item.img);
    img.setAttribute('alt', `Slide ${index + 1}`);
    if (index === currentIndex) img.classList.add('active');

    img.addEventListener('click', () => {
        while(indexs != index){
            if(indexs > index){
                prevSlide();
            }else{
                nextSlide();
            }
        }
    });

    slideDiv.appendChild(img);
    slideContainer.appendChild(slideDiv);
});

let allSlides = Array.from(document.querySelectorAll('.cf-slide .slide1'));

// Cập nhật thông tin slide
function updateSlide() {
    // clearInterval(autoSlideInterval); // Xóa interval khi nhấn nút
    // Xoay vòng danh sách
    const firstSlide = allSlides.shift(); // Lấy ảnh đầu tiên
    allSlides.push(firstSlide); // Đẩy ảnh đầu tiên xuống cuối

    // Cập nhật currentIndex
    indexs = (indexs + 1) % danhSach.length;

    // Gán lại vào slide container
    const slideContainer = document.querySelector('.cf-slide');
    slideContainer.innerHTML = ''; // Xóa nội dung cũ
    allSlides.forEach(slide => slideContainer.appendChild(slide));

    // Cập nhật trạng thái active
    allSlides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        img.classList.toggle('active', index === currentIndex); // Ảnh hiện tại luôn ở vị trí `currentIndex`
    });

    // Cập nhật thông tin chi tiết (title, name, name_position)
    const descriptionElement = document.querySelector('.cf-description .description');
    // const des = document.querySelector('.form_cf_description');
    // // Thêm hiệu ứng slideout cho nội dung hiện tại
    // des.classList.add('slideout');

    // Đợi hiệu ứng hoàn tất, sau đó cập nhật nội dung và thêm hiệu ứng slidein
    // setTimeout(() => {
    //     // Cập nhật nội dung mới
        descriptionElement.textContent = danhSach[indexs].title;

    //     // Loại bỏ lớp slideout và thêm lớp slidein
    //     des.classList.remove('slideout');

    //     des.classList.add('slidein');
    //     setTimeout(() => {
    //         des.classList.remove('slidein');
    //     }, 300);
    // }, 300); // Thời gian trùng với thời gian hiệu ứng slideout
    const nameElement = document.querySelector('.cf-name .name');
    nameElement.textContent = danhSach[indexs].name;

    const namePositionElement = document.querySelector('.cf-name .name_position');
    namePositionElement.textContent = danhSach[indexs].name_position;
    // setTimeout(() => {
    //     autoSlideInterval = setInterval(updateSlide, 4000);
    // },300);
}

// Đặt interval để tự động xoay vòng
let autoSlideInterval = setInterval(updateSlide, 4000);

// Điều hướng slide
function nextSlide() {
    clearInterval(autoSlideInterval); // Xóa interval khi nhấn nút
    // currentIndex = (currentIndex + 1) % danhSach.length;
    updateSlide();
    autoSlideInterval = setInterval(updateSlide, 4000);
}

function prevSlide() {
    clearInterval(autoSlideInterval); // Xóa interval khi nhấn nút

    // Đảo ngược danh sách ba lần liên tiếp
    const lastSlide1 = allSlides.pop(); // Lấy ảnh cuối cùng
    allSlides.unshift(lastSlide1); // Đẩy ảnh cuối cùng lên đầu

    const lastSlide2 = allSlides.pop(); // Lấy ảnh cuối cùng
    allSlides.unshift(lastSlide2); // Đẩy ảnh cuối cùng lên đầu
    indexs = (indexs - 2 + 5) % danhSach.length;

    // Xoay vòng danh sách
    const firstSlide = allSlides.shift(); // Lấy ảnh đầu tiên
    allSlides.push(firstSlide); // Đẩy ảnh đầu tiên xuống cuối

    // Cập nhật currentIndex
    indexs = (indexs + 1) % danhSach.length;

    // Gán lại vào slide container
    const slideContainer = document.querySelector('.cf-slide');
    slideContainer.innerHTML = ''; // Xóa nội dung cũ
    allSlides.forEach(slide => slideContainer.appendChild(slide));

    // Cập nhật trạng thái active
    allSlides.forEach((slide, index) => {
        const img = slide.querySelector('img');
        img.classList.toggle('active', index === currentIndex); // Ảnh hiện tại luôn ở vị trí `currentIndex`
    });

    // Cập nhật thông tin chi tiết (title, name, name_position)
    const descriptionElement = document.querySelector('.cf-description .description');
    // const des = document.querySelector('.form_cf_description');
    // // Thêm hiệu ứng slideout cho nội dung hiện tại
    // des.classList.add('slideout1');

    // // Đợi hiệu ứng hoàn tất, sau đó cập nhật nội dung và thêm hiệu ứng slidein
    // setTimeout(() => {
    //     // Cập nhật nội dung mới
        descriptionElement.textContent = danhSach[indexs].title;

    //     // Loại bỏ lớp slideout và thêm lớp slidein
    //     // des.classList.remove('slideout1');

    //     des.classList.remove('slideout1');
    // }, 300); // Thời gian trùng với thời gian hiệu ứng slideout
    const nameElement = document.querySelector('.cf-name .name');
    nameElement.textContent = danhSach[indexs].name;

    const namePositionElement = document.querySelector('.cf-name .name_position');
    namePositionElement.textContent = danhSach[indexs].name_position;
    setTimeout(() => {
        autoSlideInterval = setInterval(updateSlide, 4000);
    },300);
}


// Gắn sự kiện cho nút
document.querySelector('.next-cf button').addEventListener('click', nextSlide);
document.querySelector('.prev-cf button').addEventListener('click', prevSlide);

// Hiển thị thông tin ban đầu
updateSlide(currentIndex);