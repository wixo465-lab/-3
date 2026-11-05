/* ============================================================
   store.js — واجهة المتجر (index.html)
   عرض المنتجات + البحث + الأقسام + نافذة التفاصيل + طلب واتساب
   ============================================================ */
(function () {
  'use strict';

  var DATA = StoreData.load();
  DATA.settings = DATA.settings || {};
  DATA.categories = DATA.categories || [];
  DATA.products = DATA.products || [];
  var S = DATA.settings;

  var state = { q: '', cat: 'all', sort: 'new' };
  var ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

  function $(s) { return document.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  /* ---------- البدء ---------- */
  init();

  function init() {
    renderBrand();
    renderHero();
    renderTrust();
    renderChips();
    renderFeatured();
    applyFilters();
    bindEvents();
    bindModal();
    deepLink();
  }

  /* ---------- الترويسة والهوية ---------- */
  function renderBrand() {
    var name = S.storeName || 'متجري';
    document.title = name + ' | متجر إلكتروني — اطلب عبر واتساب';
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', (S.tagline || name) + ' — تسوق بسهولة واطلب مباشرة عبر واتساب.');

    var logoBox = $('#brandLogo');
    if (S.logo) {
      logoBox.outerHTML = '<img class="brand-logo" id="brandLogo" src="' + esc(S.logo) + '" alt="' + esc(name) + '">';
    } else {
      logoBox.textContent = '🛍️';
    }
    $('#brandName').textContent = name;

    var num = normalizePhone(S.whatsapp);
    var headWa = $('#headWa');
    if (!num) { headWa.style.display = 'none'; $('#waFloat').style.display = 'none'; }
    else {
      headWa.innerHTML = ICON_WA + '<span class="txt">تواصل معنا</span>';
      headWa.href = waLinkGeneral(S);
      headWa.target = '_blank'; headWa.rel = 'noopener';
      var fl = $('#waFloat');
      fl.href = waLinkGeneral(S); fl.target = '_blank'; fl.rel = 'noopener';
      fl.innerHTML = ICON_WA + '<span class="sr-only">واتساب</span>';
    }

    $('#footName').textContent = name;
    $('#footName2').textContent = name;
    $('#footAbout').textContent = S.footerText || (S.tagline || '');
    $('#footYear').textContent = new Date().getFullYear();
    $('#footTel').textContent = num ? '+' + num : '';
    var footWa = $('#footWa');
    if (num) { footWa.parentElement.style.display = ''; footWa.href = waLinkGeneral(S); footWa.target = '_blank'; }
    else { footWa.parentElement.style.display = 'none'; }
  }

  function renderHero() {
    $('#heroTitle').innerHTML = esc(S.heroTitle || 'مرحباً بكم في ' + (S.storeName || 'متجري'))
      .replace('🌟', '<span class="gold">🌟</span>');
    $('#heroText').textContent = S.heroText || S.tagline || '';
    $('#heroKicker').textContent = S.tagline || 'متجر إلكتروني';
  }

  function renderTrust() {
    var badges = S.badges || [];
    var box = $('#trustRow');
    if (!badges.length) { box.closest('.trust').style.display = 'none'; return; }
    var icons = ['💵', '🚚', '✅', '💬'];
    box.innerHTML = badges.map(function (b, i) {
      return '<div class="trust-item"><span class="ic">' + (icons[i % icons.length]) + '</span><span>' + esc(b) + '</span></div>';
    }).join('');
  }

  /* ---------- الأقسام ---------- */
  function renderChips() {
    var box = $('#chipsBar');
    var html = '<button type="button" class="chip' + (state.cat === 'all' ? ' active' : '') + '" data-cat="all">الكل <span class="cnt">(' + DATA.products.length + ')</span></button>';
    DATA.categories.forEach(function (c) {
      var n = DATA.products.filter(function (p) { return p.categoryId === c.id; }).length;
      html += '<button type="button" class="chip' + (state.cat === c.id ? ' active' : '') + '" data-cat="' + esc(c.id) + '">' + esc(c.name) + ' <span class="cnt">(' + n + ')</span></button>';
    });
    box.innerHTML = html;
  }

  /* ---------- المميزة ---------- */
  function renderFeatured() {
    var feats = DATA.products.filter(function (p) { return p.featured; });
    var wrap = $('#featuredWrap');
    if (!feats.length) { wrap.style.display = 'none'; return; }
    wrap.style.display = '';
    $('#featuredRow').innerHTML = feats.map(function (p, i) { return cardHtml(p, i); }).join('');
  }

  /* ---------- التصفية والشبكة ---------- */
  function applyFilters() {
    var list = DATA.products.slice();
    if (state.cat !== 'all') list = list.filter(function (p) { return p.categoryId === state.cat; });
    if (state.q) {
      var q = state.q.trim().toLowerCase();
      list = list.filter(function (p) {
        return ((p.name || '') + ' ' + (p.shortDesc || '') + ' ' + (p.description || '')).toLowerCase().indexOf(q) !== -1;
      });
    }
    if (state.sort === 'price-asc') list.sort(function (a, b) { return a.price - b.price; });
    else if (state.sort === 'price-desc') list.sort(function (a, b) { return b.price - a.price; });
    else if (state.sort === 'rating') list.sort(function (a, b) { var ra = avgRating(a), rb = avgRating(b); return (rb ? rb.avg : 0) - (ra ? ra.avg : 0); });
    else list.sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });

    $('#resultsCount').textContent = list.length ? ('عدد المنتجات: ' + list.length) : '';
    var grid = $('#productsGrid');
    grid.innerHTML = list.map(function (p, i) { return cardHtml(p, i); }).join('');
    $('#emptyState').hidden = list.length > 0;
    $('#catNameTitle').textContent = state.cat === 'all' ? 'كل المنتجات' : catName(DATA, state.cat);
  }

  function cardHtml(p, i) {
    var r = avgRating(p);
    var off = (p.oldPrice && Number(p.oldPrice) > Number(p.price))
      ? Math.round((1 - Number(p.price) / Number(p.oldPrice)) * 100) : 0;
    var isNew = p.createdAt && (Date.now() - p.createdAt) < 14 * 86400000;
    var img = prodImg(p);
    return '' +
      '<article class="p-card" style="--d:' + Math.min(i * 45, 360) + 'ms" data-id="' + esc(p.id) + '">' +
        '<div class="p-media" data-open="1" role="button" tabindex="0" aria-label="' + esc(p.name) + '">' +
          '<img src="' + esc(img) + '" alt="' + esc(p.name) + '" loading="lazy">' +
          (off ? '<span class="badge badge-off">-' + off + '%</span>' : '') +
          (isNew ? '<span class="badge badge-new">جديد</span>' : '') +
        '</div>' +
        '<div class="p-body">' +
          '<span class="p-cat">' + esc(catName(DATA, p.categoryId)) + '</span>' +
          '<h3 class="p-name" data-open="1">' + esc(p.name) + '</h3>' +
          (p.shortDesc ? '<p class="p-desc">' + esc(p.shortDesc) + '</p>' : '') +
          '<div class="p-rating">' + (r ? starsHtml(r) + '<span class="r-count">(' + r.count + ')</span>' : '') + '</div>' +
          '<div class="p-price">' +
            '<span class="price"><b>' + fmtPrice(p.price) + '</b> <small>' + esc(S.currency || 'درهم') + '</small></span>' +
            (off ? '<s>' + fmtPrice(p.oldPrice) + '</s>' : '') +
          '</div>' +
          '<div class="p-actions">' +
            '<button type="button" class="btn btn-outline" data-open="1">عرض التفاصيل</button>' +
            '<a class="btn btn-wa" href="' + esc(waLink(p, S)) + '" target="_blank" rel="noopener" aria-label="اطلب عبر واتساب">' +
              ICON_WA + '<span class="txt-full">اطلب عبر واتساب</span><span class="txt-short">واتساب</span></a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* ---------- نافذة التفاصيل ---------- */
  var currentProduct = null;

  function openModal(p, skipHash) {
    currentProduct = p;
    var imgs = (p.images && p.images.length) ? p.images : [PLACEHOLDER_IMG];
    var r = avgRating(p);
    var off = (p.oldPrice && Number(p.oldPrice) > Number(p.price))
      ? Math.round((1 - Number(p.price) / Number(p.oldPrice)) * 100) : 0;

    $('#pmMainImg').src = imgs[0];
    $('#pmMainImg').alt = p.name;
    $('#pmThumbs').innerHTML = imgs.map(function (src, i) {
      return '<button type="button" data-src="' + esc(src) + '" class="' + (i === 0 ? 'active' : '') + '"><img src="' + esc(src) + '" alt="صورة ' + (i + 1) + '"></button>';
    }).join('');

    $('#pmCat').textContent = catName(DATA, p.categoryId);
    $('#pmName').textContent = p.name;
    $('#pmRating').innerHTML = r ? (starsHtml(r) + '<span class="r-count">' + r.avg + ' (' + r.count + ' تقييم)</span>') : '<span class="r-count">لا توجد تقييمات بعد</span>';
    $('#pmPrice').innerHTML = '<b>' + fmtPrice(p.price) + '</b> <small>' + esc(S.currency || 'درهم') + '</small>' +
      (off ? '<s>' + fmtPrice(p.oldPrice) + '</s><span class="badge badge-off" style="position:static">خصم ' + off + '%</span>' : '');
    $('#pmDesc').textContent = p.description || p.shortDesc || '';

    var revs = p.reviews || [];
    var revBox = $('#pmReviews');
    if (revs.length) {
      revBox.innerHTML = '<h4>آراء العملاء (' + revs.length + ')</h4>' +
        '<div class="rev-avg"><span class="num">' + r.avg + '</span><div><div>' + starsHtml(r) + '</div><span class="lbl">متوسط التقييم من ' + revs.length + ' مراجعة</span></div></div>' +
        revs.map(function (rv) {
          return '<div class="rev-item"><div class="rev-head"><b>' + esc(rv.name) + '</b>' + starsHtml({ avg: Number(rv.rating) || 0 }) +
            '<span class="date">' + esc(rv.date || '') + '</span></div><p>' + esc(rv.text) + '</p></div>';
        }).join('');
      revBox.style.display = '';
    } else { revBox.style.display = 'none'; }

    var orderBtn = $('#pmOrder');
    orderBtn.href = waLink(p, S);
    orderBtn.target = '_blank'; orderBtn.rel = 'noopener';

    var m = $('#productModal');
    m.hidden = false;
    requestAnimationFrame(function () { m.classList.add('open'); });
    document.body.style.overflow = 'hidden';

    if (!skipHash && history.replaceState) history.replaceState(null, '', '#p-' + p.id);
  }

  function closeModal() {
    var m = $('#productModal');
    m.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { m.hidden = true; }, 220);
    currentProduct = null;
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
  }

  function bindModal() {
    $('#pmClose').addEventListener('click', closeModal);
    $('#productModal').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('#productModal').hidden) closeModal(); });
    $('#pmThumbs').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-src]');
      if (!btn) return;
      $('#pmMainImg').src = btn.getAttribute('data-src');
      $all('#pmThumbs button').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  }

  function deepLink() {
    var m = location.hash.match(/^#p-(.+)$/);
    if (!m) return;
    var p = null;
    for (var i = 0; i < DATA.products.length; i++) if (DATA.products[i].id === m[1]) p = DATA.products[i];
    if (p) openModal(p, true);
  }

  /* ---------- الأحداث ---------- */
  function bindEvents() {
    var searchTimer = null;
    $('#searchInput').addEventListener('input', function () {
      clearTimeout(searchTimer);
      var v = this.value;
      searchTimer = setTimeout(function () { state.q = v; applyFilters(); }, 140);
    });

    $('#sortSel').addEventListener('change', function () { state.sort = this.value; applyFilters(); });

    $('#chipsBar').addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      state.cat = chip.getAttribute('data-cat');
      $all('#chipsBar .chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      applyFilters();
    });

    function onOpen(e) {
      var el = e.target.closest('[data-open]');
      if (!el) return;
      var card = e.target.closest('.p-card');
      if (!card) return;
      var id = card.getAttribute('data-id');
      for (var i = 0; i < DATA.products.length; i++) {
        if (DATA.products[i].id === id) { openModal(DATA.products[i]); break; }
      }
    }
    ['click', 'keydown'].forEach(function (ev) {
      document.addEventListener(ev, function (e) {
        if (ev === 'keydown' && e.key !== 'Enter') return;
        if (e.target.closest && e.target.closest('a.btn-wa')) return; /* لا تفتح التفاصيل عند ضغط واتساب */
        onOpen(e);
      });
    });
  }
})();
