# KeToan Cloud – Refined v5

Bản này giữ bố cục landing cũ (hero 2 cột, giới thiệu, số liệu, tính năng, video, form 2 cột, CTA, footer) và chỉ nâng lại hệ thống giao diện.

## Thay đổi chính

- Giữ nhận diện hồng nhưng giảm độ chói bằng nền trắng/xám nhạt và chữ navy.
- Hero dùng mockup **Sổ cái tổng hợp** dựng bằng HTML/CSS, không dùng ảnh chụp màn hình.
- Font giao diện: `Be Vietnam Pro`, không dùng font serif gây lỗi dấu tiếng Việt.
- Icon sử dụng **Font Awesome Free** được lưu cục bộ tại `assets/fontawesome/`, không dùng emoji.
- Giới hạn nội dung ở `1180px`.
- Bảng giá tạm ẩn bằng comment trong `index.html`.
- Form và CTA thống nhất thành **Đăng ký dùng thử**.
- Bỏ nội dung “miễn phí” và các thông điệp giá.
- Thay số liệu “doanh nghiệp tin dùng / kinh nghiệm” bằng thông số sản phẩm:
  - 12 phân hệ nghiệp vụ
  - 40+ ngân hàng kết nối
  - 90% giảm thao tác nhập liệu lặp lại
  - 24/7 làm việc trên cloud
- Footer có số điện thoại, Telegram, Sản phẩm và Sản phẩm khác.
- EmailJS được tải tự động trên mọi trang khi gửi form.
- Animation có fallback: nội dung vẫn hiển thị khi CDN GSAP không tải được.

## Chỉnh thông tin liên hệ

Mở `components.js` và sửa object `CONTACT`:

```js
const CONTACT = {
  phoneDisplay: "0392 405 600",
  phoneHref: "tel:0392405600",
  telegramHref: "https://t.me/+84392405600",
  loginHref: "https://webapp.letieu8.workers.dev/login"
};
```

## Bật lại bảng giá

Trong `index.html`, tìm:

```html
<!-- BẢNG GIÁ TẠM ẨN ... -->
```

Thay phần placeholder bằng markup bảng giá cũ hoặc bỏ comment khi có nội dung giá chính thức.
