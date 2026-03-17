/* ═══════════════════════════════════════════════════════
   QTEwater — Shared Nav + Lang JS
   Drop this at bottom of every page before </body>
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── NAV HTML injected into #nav-mount ── */
  const NAV_HTML = `
<div class="topbar">
  <div class="container">
    <div class="topbar-left">
      <p>QTEwater · Authorized FlowX® Distributor Thailand · Qualitech Equipment Co., Ltd.</p>
    </div>
    <div class="topbar-right">
      <a href="tel:+66-81-844-4523">📞 +66-81-844-4523</a>
      <a href="mailto:info@qtewater.com">✉ info@qtewater.com</a>
      <div class="lang-toggle" id="lang-toggle">
        <span class="lang-btn active" data-lang-target="th">TH</span>
        <span class="lang-btn" data-lang-target="en">EN</span>
      </div>
    </div>
  </div>
</div>
<nav class="nav" id="main-nav">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <img src="./image/QTEWATER.png" class="nav-logo-icon"
       alt="QTE Water" 
       class="nav-logo-icon">
      <div class="nav-logo-text">
        <div class="brand">QTE<em>water</em></div>
        <div class="subbrand">Industrial Water Management</div>
      </div>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html" data-page="index">
        <span data-lang="th">หน้าหลัก</span>
        <span data-lang="en">Home</span>
      </a></li>
      <li><a href="about.html" data-page="about">
        <span data-lang="th">เกี่ยวกับเรา</span>
        <span data-lang="en">About</span>
      </a></li>
      <li><a href="technology.html" data-page="technology">
        <span data-lang="th">เทคโนโลยี</span>
        <span data-lang="en">Technology</span>
      </a></li>
      <li><a href="products.html" data-page="products">
        <span data-lang="th">ผลิตภัณฑ์</span>
        <span data-lang="en">Products</span>
      </a></li>
      <li><a href="cases.html" data-page="cases">
        <span data-lang="th">กรณีศึกษา</span>
        <span data-lang="en">Case Studies</span>
      </a></li>
      <li><a href="index.html#contact" class="nav-cta" data-page="">
        <span data-lang="th">ติดต่อเรา</span>
        <span data-lang="en">Contact</span>
      </a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-drawer" id="nav-drawer">
  <a href="index.html">
    <span data-lang="th">หน้าหลัก</span>
    <span data-lang="en">Home</span>
  </a>
  <a href="about.html">
    <span data-lang="th">เกี่ยวกับเรา</span>
    <span data-lang="en">About Us</span>
  </a>
  <a href="technology.html">
    <span data-lang="th">เทคโนโลยี</span>
    <span data-lang="en">Technology</span>
  </a>
  <a href="products.html">
    <span data-lang="th">ผลิตภัณฑ์</span>
    <span data-lang="en">Products</span>
  </a>
  <a href="cases.html">
    <span data-lang="th">กรณีศึกษา</span>
    <span data-lang="en">Case Studies</span>
  </a>
  <a href="index.html#contact" style="color:var(--blue);">
    <span data-lang="th">ติดต่อเรา →</span>
    <span data-lang="en">Contact Us →</span>
  </a>
</div>`;

  const FOOTER_HTML = `
<section class="contact-strip" id="contact">
  <div class="container">
    <div class="contact-strip-inner">
      <div>
        <h2>
          <span data-lang="th">พร้อมให้คำปรึกษา <em style="color:rgba(255,255,255,.85);font-style:normal;">ฟรีวันนี้</em></span>
          <span data-lang="en">Get a <em style="color:rgba(255,255,255,.85);font-style:normal;">Free Consultation</em></span>
        </h2>
        <p>
          <span data-lang="th">ทีมวิศวกรพร้อมสำรวจหน้างานและวิเคราะห์ระบบ — ไม่มีค่าใช้จ่าย</span>
          <span data-lang="en">Our engineering team will survey your site and analyse your system at no cost.</span>
        </p>
      </div>
      <div class="btn-group">
        <a href="tel:+66-81-844-4523" class="btn btn-white">📞 +66-81-844-4523</a>
        <a href="mailto:info@qtewater.com" class="btn btn-ghost">✉ info@qtewater.com</a>
      </div>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand">QTE<em>water</em></div>
          <div class="sub">A Qualitech Equipment Company</div>
          <p>
            <span data-lang="th">ผู้จัดจำหน่าย FlowX® อย่างเป็นทางการในประเทศไทย ให้บริการด้าน Industrial Water Management ครบวงจร</span>
            <span data-lang="en">Authorized FlowX® distributor in Thailand, delivering complete Industrial Water Management solutions.</span>
          </p>
          <div class="footer-powered">
            <svg width="48" height="13" viewBox="0 0 48 13"><text x="0" y="11" font-family="'Barlow Condensed',sans-serif" font-size="13" font-weight="800" fill="#3AAEE0">Flow</text><text x="34" y="11" font-family="'Barlow Condensed',sans-serif" font-size="13" font-weight="800" fill="#00C2D9">X</text><text x="45" y="5" font-family="sans-serif" font-size="7" fill="#6C86A2">®</text></svg>
            <span data-lang="th">Powered by FlowX® TGP® Technology</span>
            <span data-lang="en">Powered by FlowX® TGP® Technology</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="products.html"><span data-lang="th">Blue Line Industry</span><span data-lang="en">Blue Line Industry</span></a></li>
            <li><a href="products.html"><span data-lang="th">Red Line Industry</span><span data-lang="en">Red Line Industry</span></a></li>
            <li><a href="products.html"><span data-lang="th">DN65 Hybrid</span><span data-lang="en">DN65 Hybrid</span></a></li>
            <li><a href="technology.html"><span data-lang="th">เทคโนโลยี TGP®</span><span data-lang="en">TGP® Technology</span></a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><a href="cases.html">Food &amp; Beverage</a></li>
            <li><a href="cases.html">Chemical / Petrochem</a></li>
            <li><a href="cases.html">Manufacturing</a></li>
            <li><a href="cases.html">Data Centers</a></li>
            <li><a href="cases.html">HVAC / Pharma</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html"><span data-lang="th">เกี่ยวกับ QTEwater</span><span data-lang="en">About QTEwater</span></a></li>
            <li><a href="about.html"><span data-lang="th">Qualitech Equipment</span><span data-lang="en">Qualitech Equipment</span></a></li>
            <li><a href="technology.html"><span data-lang="th">เทคโนโลยีของเรา</span><span data-lang="en">Our Technology</span></a></li>
            <li><a href="cases.html"><span data-lang="th">กรณีศึกษา</span><span data-lang="en">Case Studies</span></a></li>
            <li><a href="index.html#contact"><span data-lang="th">ติดต่อเรา</span><span data-lang="en">Contact</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>© 2025 QTEwater · Qualitech Equipment Co., Ltd.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy</a>
        <a href="https://www.qte.co.th" target="_blank" rel="noopener">qte.co.th</a>
        <a href="https://www.flowx.in.th" target="_blank" rel="noopener">flowx.in.th</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── Mount nav + footer ── */
  function mount() {
    const navMount = document.getElementById('nav-mount');
    if (navMount) navMount.innerHTML = NAV_HTML;

    const footerMount = document.getElementById('footer-mount');
    if (footerMount) footerMount.innerHTML = FOOTER_HTML;

    init();
  }

  function init() {
    setActivePage();
    initLang();
    initHamburger();
    initScrollNav();
    initReveal();
  }

  /* ── Active page highlight ── */
  function setActivePage() {
    const page = document.body.dataset.page || '';
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page && page !== '');
    });
  }

  /* ── Lang toggle ── */
  function initLang() {
    const saved = localStorage.getItem('qtewater-lang') || 'th';
    applyLang(saved);

    document.querySelectorAll('[data-lang-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.langTarget;
        applyLang(lang);
        localStorage.setItem('qtewater-lang', lang);
      });
    });
  }

  function applyLang(lang) {
    document.body.classList.remove('lang-th', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.querySelectorAll('[data-lang-target]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langTarget === lang);
    });
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  }

  /* ── Hamburger ── */
  function initHamburger() {
    const ham = document.getElementById('hamburger');
    const drawer = document.getElementById('nav-drawer');
    if (!ham || !drawer) return;

    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      drawer.classList.toggle('open');
      document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    });

    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Nav scroll shadow ── */
  function initScrollNav() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    const handler = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  }

  /* ── Intersection scroll reveal ── */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
  }

  /* ── Run ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }

})();
