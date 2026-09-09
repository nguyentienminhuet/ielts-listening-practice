# IELTS Listening Practice Master Course (Tracks 1 - 100)

Ứng dụng web tự học **IELTS Listening** toàn diện với phong cách thiết kế **Tập vở sinh viên (Student Notebook)** dịu mắt, bám sát cấu trúc đề thi IELTS thực tế (Section 1 - Section 4).

Dữ liệu được số hóa và chuẩn hóa 100% từ tài liệu **\"EBOOK BÀI TẬP IELTS LISTENING ONLINE\"**.

---

## 🌟 Tính Năng Nổi Bật

### 1. 10 Units Hoàn Chỉnh (100 Tracks • 622 Câu Hỏi Tương Tác)
* **Unit 1: Letters & Numbers** (Tracks 1 - 13, 125 câu hỏi) - Chữ cái, phát âm, đánh vần tên, số điện thoại, ngày tháng, địa chỉ.
* **Unit 2: Form/Note/Table Completion** (Tracks 14 - 33, 104 câu hỏi) - Điền thông tin đặt phòng, tour du lịch, đăng ký thành viên.
* **Unit 3: Short Answer Questions** (Tracks 34 - 39, 24 câu hỏi) - Trả lời câu hỏi ngắn Section 2.
* **Unit 4: Gap-Filling** (Tracks 40 - 44, 50 câu hỏi) - Điền từ vào đoạn văn học thuật.
* **Unit 5: Gap-Filling nâng cao** (Tracks 45 - 50, 90 câu hỏi) - Tóm tắt nội dung bài giảng, hội thảo.
* **Unit 6: Map Labelling** (Tracks 51 - 59, 38 câu hỏi) - Điền nhãn bản đồ, phương hướng công viên, thư viện, hội trường.
* **Unit 7: Multiple Choice** (Tracks 60 - 69, 38 câu hỏi) - Trắc nghiệm đơn & đa lựa chọn chọn 2/5 đáp án.
* **Unit 8: Matching** (Tracks 70 - 77, 37 câu hỏi) - Kéo - thả (Drag & Drop) và Click-to-Pick nối thông tin.
* **Unit 9: Diagram Labelling** (Tracks 78 - 80, 14 câu hỏi) - Điền nhãn sơ đồ cấu tạo thiết bị khoa học.
* **Unit 10: Phần Update Luyện Đề** (Tracks 81 - 100, 102 câu hỏi) - Tổng hợp các bài nghe nâng cao.

### 2. Lưu Trữ Dữ Liệu Tự Động 100% (LocalStorage Persistence)
* Lưu trữ ngay lập tức mọi câu trả lời của học viên sau từng phím gõ hoặc lượt chọn đáp án.
* Lưu lịch sử nộp bài, điểm số chi tiết từng câu, trạng thái đúng/sai.
* Tự động nhớ bài nghe học viên đang làm dở khi tải lại trang hoặc đổi thiết bị cùng trình duyệt.
* Thanh tiến độ học tập trên trang Hub tự động cập nhật thời gian thực (% hoàn thành và số track đã làm).

### 3. Trải Nghiệm Học Tập Tối Ưu
* **Menu Hub Chọn Unit**: Giao diện chọn Unit tổng quan ngay khi vào web kèm bộ lọc phân loại kỹ năng.
* **Nút Quay lại Menu (← Quay lại Menu)**: Chuyển đổi nhanh chóng giữa không gian làm bài và danh mục các Unit.
* **Smart Answer Matching**: Tự động chấp nhận các định dạng số có/không có dấu phẩy (2,350 == 2350), số điện thoại có khoảng trắng, tiền tệ, chữ số sang chữ cái...
* **Phím tắt âm thanh (Keyboard Hotkeys)**:
  * Space: Tạm dừng / Tiếp tục phát.
  * ← / →: Tua nhanh lùi / tiến 5 giây.
  * [ / ]: Điều chỉnh tốc độ 0.75x, 1.0x, 1.25x.
  * M: Tắt / Mở tiếng.
  * ?: Mở bảng tra cứu phím tắt.
* **Phát âm từ vựng (Web Speech API)**: Tích hợp phát âm chuẩn Anh - Anh (en-GB) cho toàn bộ từ vựng trọng tâm.

---

## 🚀 Hướng Dẫn Sử Dụng

1. Clone repository về máy:
   \\\ash
   git clone https://github.com/nguyentienminhuet/<TÊN-REPO>.git
   \\\
2. Mở trực tiếp file \index.html\ trên bất kỳ trình duyệt nào (Google Chrome, Edge, Safari, Firefox), hoặc sử dụng extension **Live Server** trong VS Code.
3. Không cần cài đặt Node.js hay bất kỳ backend server nào (100% Client-side Vanilla JS + Tailwind CSS CDN).

---

## 📁 Cấu Trúc Thư Mục

\\\
├── index.html                  # Giao diện chính Single Page Application
├── css/
│   └── style.css               # Tùy biến phong cách giấy kẻ ngang, màu mực ghi chú
├── js/
│   ├── app.js                  # Toàn bộ logic SPA, Audio Player, Smart Grader, Hotkeys
│   └── data.js                 # Cơ sở dữ liệu 10 Units, 100 Tracks, Transcript & Vocab
├── audio/                      # 100 file âm thanh MP3 chuẩn (track1.mp3 -> track100.mp3)
├── images/                     # Hình ảnh bản đồ & sơ đồ trực quan (Unit 6, 9, 10)
├── book-ielts-listening.pdf    # Giáo trình PDF gốc tham khảo
└── README.md                   # Tài liệu hướng dẫn dự án
\\\

---
*Phát triển cho mục đích học tập và luyện thi IELTS Listening.*
