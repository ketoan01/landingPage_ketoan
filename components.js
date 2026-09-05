/* ─────────────────────────────────────────
   KETOAN – shared components
   ───────────────────────────────────────── */
"use strict";

function resolveRoot() {
  if (typeof window !== "undefined" && window.__PAGE_ROOT__) {
    return window.__PAGE_ROOT__;
  }
  const pathname = typeof window !== "undefined" && window.location ? window.location.pathname : "";
  if (pathname.includes("/tin-tuc/") || pathname.includes("/tinh-nang/")) {
    return "../";
  }
  const parts = pathname.split("/").filter(Boolean);
  if (parts.includes("tinh-nang") || (parts.includes("tin-tuc") && !pathname.endsWith("tin-tuc.html"))) {
    return "../";
  }
  return "./";
}
const root = resolveRoot();

const CONTACT = {
  phoneDisplay: "0392 405 600",
  phoneHref: "tel:0392405600",
  phone2Display: "0335 581 402",
  phone2Href: "tel:0335581402",
  telegramHref: "https://t.me/tieu_exe",
  zaloHref: "https://zalo.me/1479234215132012086",
  zaloQr: "assets/zalo-qr.png",
  loginHref: "https://app.ketoan.one/login",
  registerHref: "https://app.ketoan.one/register"
};

const COMPANY = {
  name: "CÔNG TY TNHH BANANA SOFTWARE",
  taxCode: "2803238388",
  website: "https://bananasoftware.net/",
  logo: "assets/banana-logo.png"
};

const TELEGRAM_CONFIG = {
  botToken: "8891045799:AAFSwsk-1bE9oKfYtTr2YTgRAchcigmOhTc",
  chatId: "-5382485145"
};
const LEAD_API_ENDPOINT = "https://webapp.letieu8.workers.dev/api/lead";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function refreshIcons() {}


function renderNavbar(activePage = "") {
  const nav = document.createElement("nav");
  nav.id = "navbar";
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="${root}index.html" class="nav-logo" aria-label="kế toán ONE">
        <img src="${root}assets/logo.png" alt="kế toán ONE" class="brand-logo-img" />
        <span class="brand-logo-text">kế toán <span>ONE</span></span>
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
        <a href="${CONTACT.zaloHref}" target="_blank" rel="noopener" class="nav-zalo-btn"><i class="fa-solid fa-comment-dots" aria-hidden="true"></i>Zalo Chat</a>
        <a href="${CONTACT.loginHref}" class="btn-outline btn-nav">Đăng nhập</a>
        <a href="${CONTACT.registerHref}" class="btn-brand btn-nav">Đăng ký dùng thử</a>
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
    <a href="${CONTACT.registerHref}" class="btn-brand mobile-reg-btn">Đăng ký dùng thử</a>
  `;
  document.body.insertBefore(drawer, nav.nextSibling);

  document.getElementById("burger").addEventListener("click", () => {
    drawer.classList.toggle("open");
    refreshIcons();
  });

  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24));
  renderSocialFloat();
  refreshIcons();
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="${root}index.html" class="nav-logo footer-logo" aria-label="kế toán ONE">
            <img src="${root}assets/logo.png" alt="kế toán ONE" class="brand-logo-img" />
            <span class="brand-logo-text">kế toán <span>ONE</span></span>
          </a>
          <p>Nền tảng kế toán cloud giúp doanh nghiệp quản lý dữ liệu tài chính, chứng từ và báo cáo trong một quy trình thống nhất.</p>
          <div class="footer-company-info">
            <a href="${COMPANY.website}" target="_blank" rel="noopener" aria-label="${COMPANY.name}">
              <img src="${root}${COMPANY.logo}" alt="${COMPANY.name}" class="company-logo-img" />
            </a>
            <div>
              <strong><a href="${COMPANY.website}" target="_blank" rel="noopener">${COMPANY.name}</a></strong>
              <span>Mã số thuế: ${COMPANY.taxCode}</span>
              <span>Website: <a href="${COMPANY.website}" target="_blank" rel="noopener">bananasoftware.net</a></span>
            </div>
          </div>
          <div class="footer-contact-list">
            <a href="${CONTACT.phoneHref}"><i class="fa-solid fa-phone" aria-hidden="true"></i>Hotline 1: ${CONTACT.phoneDisplay}</a>
            <a href="${CONTACT.phone2Href}"><i class="fa-solid fa-phone" aria-hidden="true"></i>Hotline 2: ${CONTACT.phone2Display}</a>
            <a href="${CONTACT.zaloHref}" target="_blank" rel="noopener"><i class="fa-solid fa-comment-dots" aria-hidden="true"></i>Zalo Chat hỗ trợ</a>
            <a href="${CONTACT.telegramHref}" target="_blank" rel="noopener"><i class="fa-solid fa-paper-plane" aria-hidden="true"></i>Telegram: @tieu_exe</a>
          </div>
        </div>
        <div>
          <h4>Sản phẩm khác</h4>
          <ul>
            <li><a href="https://taihoadon.online" target="_blank" rel="noopener">Tải hóa đơn điện tử (taihoadon.online)</a></li>
            <li><a href="https://taitokhai.online" target="_blank" rel="noopener">Tải tờ khai thuế (taitokhai.online)</a></li>
            <li><a href="https://taihoadon.online/tra-cuu-ma-so-thue" target="_blank" rel="noopener">Tra MST hàng loạt</a></li>
            <li><a href="https://taihoadon.online/hoa-don-tien-dien-evn" target="_blank" rel="noopener">Tải hóa đơn tiền điện EVN</a></li>
          </ul>
        </div>
        <div>
          <h4>Bài viết mới nhất</h4>
          <ul>
            <li><a href="${root}tin-tuc/chinh-sach-giam-thue-gtgt-ho-kinh-doanh-2026.html">Giảm thuế GTGT 8% đến hết 2026</a></li>
            <li><a href="${root}tin-tuc/huong-dan-lap-bang-can-doi-ke-toan-thong-tu-200.html">Lập bảng cân đối kế toán TT200</a></li>
            <li><a href="${root}tin-tuc/cong-cu-tinh-thue-tncn-online-2026.html">Công cụ tính thuế TNCN 2026</a></li>
            <li><a href="${root}tin-tuc/tong-hop-20-mau-bang-luong-excel-chuan-2026.html">20 Mẫu bảng lương Excel 2026</a></li>
            <li><a href="${root}tin-tuc/5-loi-ke-toan-pho-bien-khi-xu-ly-hoa-don-dien-tu.html">5 lỗi xử lý hóa đơn điện tử</a></li>
          </ul>
        </div>
        <div>
          <h4>Hỗ trợ</h4>
          <ul>
            <li><a href="${root}tinh-nang.html">Xem toàn bộ phân hệ</a></li>
            <li><a href="${root}tin-tuc.html">Tin tức & kiến thức</a></li>
            <li><a href="${CONTACT.registerHref}">Đăng ký dùng thử</a></li>
            <li><a href="${CONTACT.loginHref}">Đăng nhập phần mềm</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-divider">
      <div class="footer-bottom">
        <div>© 2026 kế toán ONE · <a href="${COMPANY.website}" target="_blank" rel="noopener">${COMPANY.name}</a> (MST: ${COMPANY.taxCode})</div>
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
    "Alpha Test: Miễn phí 1 năm cho Early User",
    "Cập nhật quy định liên tục",
    "12 phân hệ nghiệp vụ",
    "Đồng bộ hóa đơn điện tử",
    "Đối chiếu ngân hàng",
    "Báo cáo theo thời gian thực",
    "Làm việc trên mọi thiết bị"
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
        <div class="cta-kicker"><i class="fa-solid fa-flask" aria-hidden="true"></i> Chương trình Alpha Test</div>
        <h2>Đăng ký dùng thử — Miễn phí 1 năm cho Early User</h2>
        <p>Đưa dữ liệu kế toán về một nơi duy nhất. Đăng ký dùng thử ngay trong đợt Alpha Test để trải nghiệm 1 năm miễn phí toàn bộ phân hệ.</p>
      </div>
      <a href="${CONTACT.registerHref}" class="btn-white">Đăng ký dùng thử <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
    </div>
  `;
  setTimeout(refreshIcons, 0);
  return el;
}

function openRegModal() {
  window.location.href = CONTACT.registerHref;
}

function closeRegModal() {}

async function submitLeadForm(form, successElement) {
  const button = form.querySelector("button[type='submit']");
  const defaultText = button.textContent;
  const data = Object.fromEntries(new FormData(form));
  button.textContent = "Đang gửi...";
  button.disabled = true;

  const htmlMessage =
    `<b>🔔 ĐĂNG KÝ DÙNG THỬ MỚI</b>\n\n` +
    `👤 <b>Họ và tên:</b> ${escapeHtml(data.name) || "N/A"}\n` +
    `📧 <b>Email:</b> ${escapeHtml(data.email) || "N/A"}\n` +
    `📞 <b>Số điện thoại:</b> ${escapeHtml(data.phone) || "N/A"}\n` +
    `🏢 <b>Mã số thuế:</b> ${escapeHtml(data.tax) || "Chưa cung cấp"}\n` +
    `📦 <b>Sản phẩm quan tâm:</b> ${escapeHtml(data.product) || "N/A"}\n` +
    `⏰ <b>Thời gian:</b> ${new Date().toLocaleString("vi-VN")}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: htmlMessage,
        parse_mode: "HTML"
      })
    });

    const result = await res.json();
    if (!res.ok || !result.ok) {
      throw new Error(result.description || "Gửi tin nhắn Telegram thất bại");
    }

    form.style.display = "none";
    form.hidden = true;
    successElement.style.display = "block";
    successElement.hidden = false;
    button.textContent = defaultText;
    button.disabled = false;
    refreshIcons();
  } catch (error) {
    console.error("Form submit error:", error);
    alert("Chưa thể gửi thông tin. Vui lòng thử lại hoặc gọi " + CONTACT.phoneDisplay + " / " + CONTACT.phone2Display + ".");
    button.textContent = defaultText;
    button.disabled = false;
  }
}

function renderSocialFloat() {
  if (document.getElementById("zaloFloatContainer")) return;
  const container = document.createElement("div");
  container.id = "zaloFloatContainer";
  container.className = "zalo-float-container";
  container.innerHTML = `
    <div class="zalo-qr-popover">
      <h5>Quét mã Zalo để Chat</h5>
      <img src="${root}${CONTACT.zaloQr}" alt="Zalo QR Code" class="zalo-qr-img" />
      <p>Tư vấn & Hỗ trợ kế toán ONE 24/7</p>
      <a href="${CONTACT.zaloHref}" target="_blank" rel="noopener" class="zalo-qr-btn">Mở Zalo Chat</a>
    </div>
    <a href="${CONTACT.zaloHref}" target="_blank" rel="noopener" class="zalo-float-btn" aria-label="Chat Zalo hỗ trợ">
      <i class="fa-solid fa-comment-dots" aria-hidden="true"></i>
      <span>Chat Zalo</span>
    </a>
  `;
  document.body.appendChild(container);
}

window.renderNavbar = renderNavbar;
window.renderFooter = renderFooter;
window.renderCTABand = renderCTABand;
window.renderSocialFloat = renderSocialFloat;
window.refreshIcons = refreshIcons;
window.submitLeadForm = submitLeadForm;
window.CONTACT = CONTACT;
window.COMPANY = COMPANY;
