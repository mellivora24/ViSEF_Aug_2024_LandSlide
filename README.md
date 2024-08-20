# Cảnh Báo Sạt Lở Trực Tuyến (Landslide Warning System)

Dự án này là một ứng dụng dựa trên web được thiết kế để giám sát và cảnh báo người dùng về nguy cơ sạt lở đất. Nó tích hợp giao diện bản đồ frontend với API backend để lấy, hiển thị và quản lý các điểm dữ liệu địa lý liên quan đến rủi ro sạt lở đất.

## Mục lục

- [Tổng quan về dự án](#project-overview)
- [Tính năng](#features)
- [Công nghệ đã sử dụng](#technologies-used)
- [Thiết lập và cài đặt](#setup-and-installation)
- [Biến môi trường](#environment-variables)
- [Chạy dự án](#running-the-project)
- [Điểm cuối API](#api-endpoints)
- [Cấu trúc giao diện người dùng](#frontend-structure)
- [Cấu trúc giao diện người dùng](#backend-structure)
- [Đóng góp](#contributing)
- [Giấy phép](#license)

## Tổng quan về dự án

Ứng dụng cho phép người dùng:
- Xem bản đồ có các điểm được đánh dấu cho biết các khu vực đang được giám sát rủi ro lở đất.
- Xem thông tin chi tiết về từng điểm, bao gồm độ ẩm, lượng mưa và mức độ rủi ro.
- Thêm các điểm giám sát mới vào bản đồ thông qua giao diện giao diện người dùng.
- Cập nhật và xóa các điểm hiện có thông qua các điểm cuối API phụ trợ.

## Tính năng

- **Giám sát thời gian thực:** Cập nhật dữ liệu bản đồ thường xuyên để phản ánh các điều kiện hiện tại.
- **Tương tác với người dùng:** Người dùng có thể thêm điểm mới hoặc xem thông tin chi tiết về các điểm hiện có.
- **Giao diện người dùng phản hồi:** Giao diện người dùng được thiết kế để phản hồi và thân thiện với người dùng.

## Công nghệ được sử dụng

- **Giao diện người dùng:**
  - HTML, CSS, JavaScript
  - API Google Maps

- **Giao diện người dùng phụ trợ:**
  - Node.js, Express.js
  - MongoDB, Mongoose
  - dotenv để quản lý biến môi trường

## Thiết lập và cài đặt

### Điều kiện tiên quyết

- Node.js và npm được cài đặt trên máy của bạn.
- Phiên bản MongoDB (cục bộ hoặc trên nền tảng đám mây).

### Cài đặt

1. **Sao chép kho lưu trữ:**
```bash
git clone https://github.com/mellivora24/ViSEF_Aug_2024_LandSlide.git
cd ViSEF_Aug_2024_LandSlide
```

2. **Cài đặt các phụ thuộc cho phần phụ trợ:**
```bash
npm install
```

3. **Thiết lập biến môi trường:**
Tạo tệp `.env` trong thư mục gốc và thêm nội dung sau:
```bash
MongoDB_URL = your_mongodb_connection_string
```

4. **Chạy máy chủ phần phụ trợ:**
```bash
npm start
```

5. **Mở giao diện người dùng trong trình duyệt của bạn:**
- Mở `index.html` nằm trong thư mục gốc bằng máy chủ web hoặc chỉ cần mở trực tiếp trong trình duyệt.

## Biến môi trường

Ứng dụng sử dụng các biến môi trường sau:

- `PORT`: Cổng mà máy chủ phụ trợ sẽ chạy.
- `MongoDB_URL`: Chuỗi kết nối cho phiên bản MongoDB của bạn.

## Chạy dự án

Để chạy dự án, hãy đảm bảo phiên bản MongoDB của bạn đang chạy và tệp `.env` của bạn được định cấu hình đúng.

1. Khởi động máy chủ phụ trợ:
```bash
npm start
```

2. Mở `index.html` trong trình duyệt của bạn để xem giao diện giao diện.

## Điểm cuối API

- **GET /home**: Lấy tất cả các điểm giám sát.
- **POST /home**: Thêm một điểm giám sát mới.
- **PUT /home/:id**: Cập nhật một điểm giám sát cụ thể theo ID.
- **DELETE /home/:id**: Xóa một điểm giám sát cụ thể theo ID.
- **GET /name**: Lấy danh sách tất cả các tên điểm.

## Cấu trúc Frontend

- **index.html**: Tệp HTML chính chứa cấu trúc của trang web.
- **src/main.css**: Bảng định kiểu chính để định kiểu cho frontend.
- **src/index.js**: Tệp JavaScript xử lý logic frontend, bao gồm tương tác bản đồ và tìm nạp dữ liệu.

## Cấu trúc Backend

- **server.js**: Tệp máy chủ chính chứa tất cả các tuyến API và cấu hình máy chủ.
- **model/Home.js**: Mô hình Mongoose định nghĩa lược đồ để giám sát các điểm.

## Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng làm theo các bước sau để đóng góp:

1. Phân nhánh kho lưu trữ.
2. Tạo nhánh mới (`git checkout -b feature-branch`).
3. Cam kết các thay đổi của bạn (`git commit -m 'Thêm một số tính năng'`).
4. Đẩy vào nhánh (`git push origin feature-branch`).
5. Mở yêu cầu kéo.
