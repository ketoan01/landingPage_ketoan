/* ─────────────────────────────────────────
   KETOAN – shared components
   ───────────────────────────────────────── */
"use strict";

const pathParts = window.location.pathname.split("/").filter(Boolean);
const root = pathParts.includes("tinh-nang") ? "../" : "./";

const CONTACT = {
  phoneDisplay: "0392 405 600",
  phoneHref: "tel:0392405600",
  telegramHref: "https://t.me/+84392405600",
  loginHref: "https://webapp.letieu8.workers.dev/login"
};

function refreshIcons() {}

let emailJSPromise = null;
function ensureEmailJS() {
  if (window.emailjs) {
    window.emailjs.init("VxLy2TYylhklg9NR5");
    return Promise.resolve(window.emailjs);
  }
  if (emailJSPromise) return emailJSPromise;
  emailJSPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      window.emailjs.init("VxLy2TYylhklg9NR5");
      resolve(window.emailjs);
    };
    script.onerror = () => reject(new Error("Không tải được EmailJS"));
    document.head.appendChild(script);
  });
  return emailJSPromise;
}

function renderNavbar(activePage = "") {
  const nav = document.createElement("nav");
  nav.id = "navbar";
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo" aria-label="KeToan Cloud">
        <div class="logo-icon">K</div>
        <div>
          <div class="logo-text">KeToan<span>Cloud</span></div>
          <span class="logo-sub">Finance workspace</span>
        </div>
      </a>

      <div class="nav-links">
        <a href="${root}index.html" class="nav-link ${activePage === "home" ? "active" : ""}">Trang chủ</a>
        <div class="nav-group">
          <a href="${root}tinh-nang.html" class="nav-link has-dropdown ${activePage === "tinh-nang" ? "active" : ""}">Tính năng</a>
          <div class="mega-wrap">
            <a href="${root}tinh-nang.html" class="mega-header">
              <span>Xem toàn bộ phân hệ</span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
            <div class="mega-cols">
              <a href="${root}tinh-nang/ke-toan-tong-hop.html" class="mega-item"><i class="fa-solid fa-book-open" aria-hidden="true"></i>Kế toán tổng hợp</a>
              <a href="${root}tinh-nang/hoa-don-dien-tu.html" class="mega-item"><i class="fa-solid fa-receipt" aria-hidden="true"></i>Hoá đơn điện tử</a>
              <a href="${root}tinh-nang/ket-noi-ngan-hang.html" class="mega-item"><i class="fa-solid fa-building-columns" aria-hidden="true"></i>Kết nối ngân hàng</a>
              <a href="${root}tinh-nang/quan-ly-thue.html" class="mega-item"><i class="fa-solid fa-file-circle-check" aria-hidden="true"></i>Quản lý thuế</a>
              <a href="${root}tinh-nang/quan-ly-kho.html" class="mega-item"><i class="fa-solid fa-warehouse" aria-hidden="true"></i>Quản lý kho</a>
              <a href="${root}tinh-nang/ke-toan-tien-luong.html" class="mega-item"><i class="fa-solid fa-money-check-dollar" aria-hidden="true"></i>Kế toán tiền lương</a>
              <a href="${root}tinh-nang/bao-cao-tai-chinh.html" class="mega-item"><i class="fa-solid fa-chart-line" aria-hidden="true"></i>Báo cáo tài chính</a>
              <a href="${root}tinh-nang/ke-toan-mua-hang.html" class="mega-item"><i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>Kế toán mua hàng</a>
              <a href="${root}tinh-nang/tai-san-co-dinh.html" class="mega-item"><i class="fa-solid fa-building" aria-hidden="true"></i>Tài sản cố định</a>
            </div>
          </div>
        </div>

        <div class="nav-group">
          <a href="#" class="nav-link has-dropdown">Hỗ trợ</a>
          <div class="drop-wrap">
            <a href="#" class="drop-item"><i class="fa-solid fa-book-open" aria-hidden="true"></i>Tài liệu hướng dẫn</a>
            <a href="#" class="drop-item"><i class="fa-solid fa-circle-play" aria-hidden="true"></i>Video hướng dẫn</a>
            <a href="#" class="drop-item"><i class="fa-solid fa-circle-question" aria-hidden="true"></i>Câu hỏi thường gặp</a>
            <a href="#dang-ky" class="drop-item"><i class="fa-solid fa-comments" aria-hidden="true"></i>Liên hệ hỗ trợ</a>
          </div>
        </div>

        <a href="${root}tin-tuc.html" class="nav-link ${activePage === "tin-tuc" ? "active" : ""}">Tin tức</a>
        <a href="${root}index.html#dang-ky" class="nav-link">Liên hệ</a>
      </div>

      <div class="nav-actions">
        <a href="${CONTACT.phoneHref}" class="nav-hotline"><i class="fa-solid fa-phone" aria-hidden="true"></i>${CONTACT.phoneDisplay}</a>
        <a href="${CONTACT.loginHref}" class="btn-outline btn-nav">Đăng nhập</a>
        <button type="button" onclick="openRegModal()" class="btn-brand btn-nav">Đăng ký dùng thử</button>
      </div>
      <button class="nav-burger" id="burger" aria-label="Mở menu"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  const drawer = document.createElement("div");
  drawer.className = "mobile-drawer";
  drawer.id = "drawer";
  drawer.innerHTML = `
    <a href="${root}index.html">Trang chủ</a>
    <a href="${root}tinh-nang.html">Tính năng</a>
    <a href="${root}tin-tuc.html">Tin tức</a>
    <a href="${root}index.html#dang-ky">Liên hệ</a>
    <a href="${CONTACT.loginHref}">Đăng nhập</a>
    <button type="button" onclick="openRegModal()" class="btn-brand mobile-reg-btn">Đăng ký dùng thử</button>
  `;
  document.body.insertBefore(drawer, nav.nextSibling);

  const modal = document.createElement("div");
  modal.id = "regModal";
  modal.className = "reg-modal";
  modal.innerHTML = `
    <div class="reg-modal-card" role="dialog" aria-modal="true" aria-labelledby="regModalTitle">
      <button onclick="closeRegModal()" class="reg-modal-close" aria-label="Đóng"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      <div class="modal-kicker">Bắt đầu với KeToan Cloud</div>
      <h3 id="regModalTitle">Đăng ký dùng thử</h3>
      <p class="modal-sub">Để lại thông tin, đội ngũ tư vấn sẽ liên hệ và thiết lập tài khoản phù hợp với mô hình của bạn.</p>
      <form id="modalRegForm" class="modal-reg-form">
        <label>Họ và tên<input name="name" type="text" placeholder="Nguyễn Văn A" required></label>
        <label>Email<input name="email" type="email" placeholder="name@company.vn" required></label>
        <label>Số điện thoại<input name="phone" type="tel" placeholder="09xx xxx xxx" required></label>
        <label>Mã số thuế<input name="tax" type="text" placeholder="Nhập nếu doanh nghiệp đã có"></label>
        <label>Sản phẩm quan tâm
          <select name="product" required>
            <option value="" disabled selected>Chọn sản phẩm</option>
            <option>Kế toán doanh nghiệp</option>
            <option>Kế toán hộ kinh doanh</option>
            <option>Dịch vụ kế toán</option>
            <option>Hóa đơn điện tử</option>
          </select>
        </label>
        <button type="submit" class="btn-brand modal-submit">Đăng ký dùng thử</button>
      </form>
      <div id="modalSuccess" class="modal-success" hidden>
        <div class="success-icon"><i class="fa-solid fa-circle-check" aria-hidden="true"></i></div>
        <h4>Đã nhận thông tin</h4>
        <p>Đội ngũ KeToan sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeRegModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeRegModal();
  });

  document.getElementById("modalRegForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitLeadForm(event.currentTarget, document.getElementById("modalSuccess"));
  });

  document.getElementById("burger").addEventListener("click", () => {
    drawer.classList.toggle("open");
    refreshIcons();
  });

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));
  refreshIcons();
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${root}index.html" class="nav-logo footer-logo">
            <div class="logo-icon">K</div>
            <div>
              <div class="logo-text">KeToan<span>Cloud</span></div>
              <span class="logo-sub">Finance workspace</span>
            </div>
          </a>
          <p>Nền tảng kế toán cloud giúp doanh nghiệp quản lý dữ liệu tài chính, chứng từ và báo cáo trong một quy trình thống nhất.</p>
          <div class="footer-contact-list">
            <a href="${CONTACT.phoneHref}"><i class="fa-solid fa-phone" aria-hidden="true"></i>${CONTACT.phoneDisplay}</a>
            <a href="${CONTACT.telegramHref}" target="_blank" rel="noopener"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i>Telegram hỗ trợ</a>
          </div>
        </div>
        <div>
          <h4>Sản phẩm</h4>
          <ul>
            <li><a href="${root}tinh-nang/ke-toan-tong-hop.html">Kế toán doanh nghiệp</a></li>
            <li><a href="${root}tinh-nang/hoa-don-dien-tu.html">Hoá đơn điện tử</a></li>
            <li><a href="${root}tinh-nang/ket-noi-ngan-hang.html">Kết nối ngân hàng</a></li>
            <li><a href="${root}tinh-nang/quan-ly-thue.html">Quản lý thuế</a></li>
          </ul>
        </div>
        <div>
          <h4>Sản phẩm khác</h4>
          <ul>
            <li><a href="#">Kế toán hộ kinh doanh</a></li>
            <li><a href="#">Dịch vụ kế toán</a></li>
            <li><a href="#">Quản lý bán hàng</a></li>
            <li><a href="#">Quản lý nhân sự</a></li>
          </ul>
        </div>
        <div>
          <h4>Hỗ trợ</h4>
          <ul>
            <li><a href="#">Tài liệu hướng dẫn</a></li>
            <li><a href="#">Video hướng dẫn</a></li>
            <li><a href="${root}tin-tuc.html">Tin tức & kiến thức</a></li>
            <li><a href="${root}index.html#dang-ky">Đăng ký dùng thử</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="footer-bottom">
        <div>© 2026 KeToan Cloud</div>
        <div><a href="#">Chính sách bảo mật</a><span>·</span><a href="#">Điều khoản sử dụng</a></div>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
  refreshIcons();
}

function renderMarquee() {
  const el = document.createElement("div");
  el.className = "marquee-band";
  const items = [
    "12 phân hệ nghiệp vụ",
    "Đồng bộ hóa đơn điện tử",
    "Đối chiếu ngân hàng",
    "Báo cáo theo thời gian thực",
    "Làm việc trên mọi thiết bị",
    "Cập nhật quy định liên tục"
  ];
  el.innerHTML = `<div class="marquee-track">${[...items, ...items].map(item => `<span>${item}</span>`).join("")}</div>`;
  return el;
}

function renderCTABand() {
  const el = document.createElement("section");
  el.className = "cta-band";
  el.setAttribute("data-gsap", "fade-up");
  el.innerHTML = `
    <div class="cta-inner">
      <div>
        <div class="cta-kicker">Bắt đầu triển khai</div>
        <h2>Đưa dữ liệu kế toán về một nơi duy nhất</h2>
        <p>Đăng ký để được tư vấn cấu hình phù hợp với quy mô và quy trình hiện tại của doanh nghiệp.</p>
      </div>
      <button type="button" onclick="openRegModal()" class="btn-white">Đăng ký dùng thử <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
    </div>
  `;
  setTimeout(refreshIcons, 0);
  return el;
}

function openRegModal() {
  const modal = document.getElementById("regModal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector("input")?.focus(), 80);
}

function closeRegModal() {
  const modal = document.getElementById("regModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

async function submitLeadForm(form, successElement) {
  const button = form.querySelector("button[type='submit']");
  const defaultText = button.textContent;
  const data = Object.fromEntries(new FormData(form));
  button.textContent = "Đang gửi...";
  button.disabled = true;

  try {
    await ensureEmailJS();
    await window.emailjs.send("service_6zzl60q", "template_xh4goo3", {
      to_email: "phihasky@gmail.com",
      from_name: data.name,
      email: data.email,
      phone: data.phone,
      tax: data.tax || "N/A",
      product: data.product || "N/A"
    });
    form.hidden = true;
    successElement.hidden = false;
    refreshIcons();
  } catch (error) {
    console.error(error);
    alert("Chưa thể gửi thông tin. Vui lòng thử lại hoặc gọi 0392 405 600.");
    button.textContent = defaultText;
    button.disabled = false;
  }
}

// Backward-compatible no-op for old page calls.
function renderSocialFloat() {}
