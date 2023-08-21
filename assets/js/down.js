// Lấy tất cả các hình ảnh sách trong danh sách
const bookImages = document.querySelectorAll('.book-list li img');

// Xử lý sự kiện click cho mỗi hình ảnh sách
bookImages.forEach((image) => {
  image.addEventListener('click', function () {
    // Lấy liên kết tải về từ thuộc tính data-link
    const downloadLink = image.getAttribute('data-link');
    
    // Mở liên kết tải về trong một cửa sổ mới hoặc thực hiện các hành động khác
    window.open(downloadLink);
  });
});