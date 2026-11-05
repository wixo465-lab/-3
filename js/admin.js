/* ============================================================
   admin.js — لوحة التحكم (admin.html)
   إدارة: المنتجات (صور + أسعار + مراجعات) / الأقسام / الإعدادات /
   رقم واتساب / تصدير data.js ونشر التعديلات للزوار
   ============================================================ */
(function () {
  'use strict';

  var D = null;            /* نسخة العمل الحالية */
  var editingId = null;    /* معرف المنتج قيد التعديل */
  var IMGS = [];           /* صور المنتج في النموذج */
  var REVS = [];           /* مراجعات المنتج في النموذج */
  var PLACEHOLDER_WHATSAPP = '212600000000';

  function $(s) { return document.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }

  /* ============ الدخول ============ */
  boot();

  function boot() {
    $('#loginForm').addEventListener('submit', onLogin);
    $('#pwEye').addEventListener('click', function () {
      var inp = $('#loginPw');
      inp.type = inp.type === 'password' ? 'text' : 'password';
      this.textContent = inp.type === 'password' ? '👁️' : '🙈';
    });
    if (sessionStorage.getItem('mutjari_admin') === '1') enterApp();
  }

  async function onLogin(e) {
    e.preventDefault();
    var pw = $('#loginPw').value;
    var cur = StoreData.load().settings || {};
    var target = cur.passwordHash || StoreData.defaultHash;
    var hash = await sha256(pw);
    if (hash === target) {
      sessionStorage.setItem('mutjari_admin', '1');
      enterApp();
    } else {
      $('#loginErr').hidden = false;
      var card = $('#loginCard');
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
  }

  function enterApp() {
    $('#loginView').hidden = true;
    $('#appView').hidden = false;
    D = StoreData.clone(StoreData.load());
    D.settings = D.settings || {};
    D.settings.badges = D.settings.badges || [];
    D.categories = D.categories || [];
    D.products = D.products || [];
    renderAll();
    bindApp();
  }

  /* ============ العرض العام ============ */
  function renderAll() {
    renderBanners();
    renderStats();
    renderProducts();
    renderCats();
    fillSettingsForm();
    renderMeter();
    var nm = D.settings.storeName || 'متجري';
    $('#sideBrandName').textContent = nm;
    document.title = 'لوحة التحكم | ' + nm;
    var lg = $('#sideLogo');
    lg.outerHTML = D.settings.logo
      ? '<img class="brand-logo" id="sideLogo" src="' + esc(D.settings.logo) + '" alt="شعار">'
      : '<div class="brand-fallback" id="sideLogo">🛍️</div>';
  }

  function renderBanners() {
    var num = normalizePhone(D.settings.whatsapp);
    var w = $('#warnWa');
    if (!num || num === PLACEHOLDER_WHATSAPP) { w.hidden = false; } else { w.hidden = true; }

    var d = $('#draftBanner');
    if (StoreData.hasDraft()) {
      d.hidden = false;
      d.innerHTML = '<span class="ico">👁️</span><div><b>أنت تعرض "نسخة معاينة" محفوظة في متصفحك.</b><br>' +
        'هذه التعديلات تظهر لك أنت فقط حالياً. ليراها <b>جميع الزوار</b>: اضغط <b>«تصدير data.js»</b> بالأعلى، ثم ارفع الملف إلى مجلد <b>js</b> في موقعك بدل الملف القديم (انظر خطوات التعليمات أعلى صفحة المنتجات).</div>' +
        '<button type="button" class="btn btn-ghost btn-sm" id="revertBtn" style="margin-inline-start:auto;flex:none">استعادة النسخة المنشورة</button>';
      var rb = $('#revertBtn');
      if (rb) rb.addEventListener('click', function () {
        if (!confirm('سيتم تجاهل التعديلات المحلية والعودة إلى نسخة data.js المنشورة. متابعة؟')) return;
        StoreData.clear();
        D = StoreData.clone(StoreData.shipped());
        D.settings = D.settings || {};
        D.settings.badges = D.settings.badges || [];
        renderAll();
        toast('تمت استعادة النسخة المنشورة', 'ok');
      });
    } else { d.hidden = true; }
  }

  function renderStats() {
    var imgs = 0;
    D.products.forEach(function (p) { imgs += (p.images || []).length; });
    $('#stProducts').textContent = D.products.length;
    $('#stCats').textContent = D.categories.length;
    $('#stImgs').textContent = imgs;
    $('#stFeat').textContent = D.products.filter(function (p) { return p.featured; }).length;
  }

  function renderMeter() {
    var raw = '';
    try { raw = localStorage.getItem(StoreData.KEY) || ''; } catch (e) { /* تجاهل */ }
    var used = new Blob([raw]).size;
    var limit = 5 * 1024 * 1024;
    var pct = Math.min(100, Math.round((used / limit) * 100));
    var kb = Math.round(used / 1024);
    $('#meterFill').style.width = Math.max(pct, used ? 2 : 0) + '%';
    $('#meterFill').className = 'meter-fill' + (pct > 85 ? ' full' : pct > 60 ? ' warn' : '');
    $('#meterTxt').textContent = 'مساحة التخزين المحلية: ' + kb + ' كيلوبايت مستعملة (' + pct + '% من ~5 ميغا)';
  }

  function persist() {
    if (!StoreData.save(D)) {
      toast('تعذر الحفظ: مساحة التخزين ممتلئة! احذف صوراً أو استعمل صوراً أصغر', 'err');
      return false;
    }
    renderAll();
    return true;
  }

  /* ============ التبويبات ============ */
  function bindApp() {
    $all('.nav-btn[data-tab]').forEach(function (b) {
      b.addEventListener('click', function () {
        $all('.nav-btn[data-tab]').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        $all('.tab-pane').forEach(function (p) { p.hidden = true; });
        $('#' + b.getAttribute('data-tab')).hidden = false;
      });
    });
    bindProductsTab();
    bindCatsTab();
    bindSettingsTab();
    bindProdForm();
    $all('.js-export').forEach(function (b) { b.addEventListener('click', exportDataJs); });
    $('#logoutBtn').addEventListener('click', function () {
      sessionStorage.removeItem('mutjari_admin');
      location.reload();
    });
  }

  /* ============ المنتجات ============ */
  function bindProductsTab() {
    $all('.js-add-prod').forEach(function (b) {
      b.addEventListener('click', function () { openProdForm(null); });
    });
  }

  function renderProducts() {
    var box = $('#prodTbody');
    if (!D.products.length) {
      $('#prodTableWrap').hidden = true;
      $('#prodEmpty').hidden = false;
      return;
    }
    $('#prodTableWrap').hidden = false;
    $('#prodEmpty').hidden = true;
    box.innerHTML = D.products.map(function (p) {
      var r = avgRating(p);
      return '<tr data-id="' + esc(p.id) + '">' +
        '<td><img class="p-thumb" src="' + esc(prodImg(p)) + '" alt=""></td>' +
        '<td><div class="t-name">' + esc(p.name) + '</div>' +
          '<div class="t-sub">' + (r ? '★ ' + r.avg + ' (' + r.count + ')' : 'بدون تقييم') + ' · ' + (p.images || []).length + ' صورة</div></td>' +
        '<td class="t-price">' + fmtPrice(p.price) + ' ' + esc(D.settings.currency || 'درهم') +
          (p.oldPrice ? '<span class="t-old">' + fmtPrice(p.oldPrice) + '</span>' : '') + '</td>' +
        '<td><span class="cat-chip-sm">' + esc(catName(D, p.categoryId)) + '</span></td>' +
        '<td>' + (p.featured ? '<span class="feat-badge">⭐ مميز</span>' : '<span class="t-sub">—</span>') + '</td>' +
        '<td><div class="row-actions">' +
          '<button type="button" class="icon-btn star' + (p.featured ? '' : ' off') + '" data-act="feat" title="تمييز في الصفحة الرئيسية">⭐</button>' +
          '<button type="button" class="icon-btn" data-act="edit" title="تعديل">✏️</button>' +
          '<button type="button" class="icon-btn del" data-act="del" title="حذف">🗑️</button>' +
        '</div></td>' +
      '</tr>';
    }).join('');
  }

  $('#prodTbody').addEventListener('click', function (e) {
    var btn = e.target.closest('[data-act]');
    if (!btn) return;
    var tr = btn.closest('tr');
    var id = tr.getAttribute('data-id');
    var p = null;
    for (var i = 0; i < D.products.length; i++) if (D.products[i].id === id) p = D.products[i];
    if (!p) return;
    var act = btn.getAttribute('data-act');
    if (act === 'edit') openProdForm(p);
    else if (act === 'del') {
      if (!confirm('حذف المنتج «' + p.name + '» نهائياً؟')) return;
      D.products = D.products.filter(function (x) { return x.id !== id; });
      persist();
      toast('تم حذف المنتج', 'ok');
    } else if (act === 'feat') {
      p.featured = !p.featured;
      persist();
      toast(p.featured ? 'أصبح المنتج مميزاً ⭐' : 'تم إلغاء التمييز');
    }
  });

  /* ============ نموذج المنتج ============ */
  function openProdForm(p) {
    editingId = p ? p.id : null;
    IMGS = p ? (p.images || []).slice() : [];
    REVS = p ? JSON.parse(JSON.stringify(p.reviews || [])) : [];
    $('#pfTitle').textContent = p ? ('تعديل المنتج: ' + p.name) : '➕ إضافة منتج جديد';
    $('#f-name').value = p ? p.name : '';
    $('#f-price').value = p ? p.price : '';
    $('#f-old').value = (p && p.oldPrice) ? p.oldPrice : '';
    $('#f-cat').innerHTML = '<option value="">— بدون قسم —</option>' + D.categories.map(function (c) {
      return '<option value="' + esc(c.id) + '"' + (p && p.categoryId === c.id ? ' selected' : '') + '>' + esc(c.name) + '</option>';
    }).join('');
    $('#f-short').value = p ? (p.shortDesc || '') : '';
    $('#f-desc').value = p ? (p.description || '') : '';
    $('#f-feat').checked = p ? !!p.featured : false;
    renderImgThumbs();
    renderRevRows();
    $('#rev-name').value = ''; $('#rev-text').value = ''; $('#rev-stars').value = '5';
    $('#prodModal').hidden = false;
    requestAnimationFrame(function () { $('#prodModal').classList.add('open'); });
    document.body.style.overflow = 'hidden';
  }

  function closeProdForm() {
    $('#prodModal').classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(function () { $('#prodModal').hidden = true; }, 220);
    editingId = null; IMGS = []; REVS = [];
  }

  function bindProdForm() {
    $('#pfClose').addEventListener('click', closeProdForm);
    $('#pfCancel').addEventListener('click', closeProdForm);
    $('#prodModal').addEventListener('click', function (e) { if (e.target === this) closeProdForm(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#prodModal').hidden) closeProdForm();
    });

    /* رفع الصور */
    $('#f-imgInput').addEventListener('change', async function () {
      var files = Array.prototype.slice.call(this.files);
      this.value = '';
      if (!files.length) return;
      if (IMGS.length + files.length > 8) { toast('الحد الأقصى 8 صور لكل منتج', 'err'); return; }
      for (var i = 0; i < files.length; i++) {
        var f = files[i];
        if (f.size > 15 * 1024 * 1024) { toast('الصورة «' + f.name + '» أكبر من 15 ميغا وتم تجاهلها', 'err'); continue; }
        try {
          toast('جاري ضغط الصورة ' + (i + 1) + '/' + files.length + '…');
          var dataUrl = await compressImage(f, 1000, 0.82);
          IMGS.push(dataUrl);
        } catch (err) { toast('تعذر معالجة «' + f.name + '»', 'err'); }
      }
      renderImgThumbs();
      toast('تمت إضافة الصور ✓', 'ok');
    });

    $('#f-imgThumbs').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var idx = Number(btn.getAttribute('data-idx'));
      var act = btn.getAttribute('data-act');
      if (act === 'main') {
        var moved = IMGS.splice(idx, 1)[0];
        IMGS.unshift(moved);
        renderImgThumbs();
        toast('أصبحت الصورة الرئيسية ✓', 'ok');
      } else if (act === 'del') {
        IMGS.splice(idx, 1);
        renderImgThumbs();
      }
    });

    /* المراجعات */
    $('#revAddBtn').addEventListener('click', function () {
      var name = $('#rev-name').value.trim();
      var text = $('#rev-text').value.trim();
      var rating = Number($('#rev-stars').value) || 5;
      if (!name || !text) { toast('اكتب اسم العميل ونص المراجعة', 'err'); return; }
      REVS.unshift({ name: name, rating: rating, text: text, date: new Date().toISOString().slice(0, 10) });
      $('#rev-name').value = ''; $('#rev-text').value = '';
      renderRevRows();
      toast('تمت إضافة المراجعة ✓', 'ok');
    });
    $('#revRows').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act="revdel"]');
      if (!btn) return;
      REVS.splice(Number(btn.getAttribute('data-idx')), 1);
      renderRevRows();
    });

    /* حفظ */
    $('#pfSave').addEventListener('click', function () {
      var name = $('#f-name').value.trim();
      var price = Number($('#f-price').value);
      var oldRaw = $('#f-old').value.trim();
      if (name.length < 2) { toast('اكتب اسم المنتج', 'err'); return; }
      if (!(price > 0)) { toast('أدخل سعراً صحيحاً أكبر من صفر', 'err'); return; }
      var oldPrice = oldRaw === '' ? null : Number(oldRaw);
      if (oldPrice !== null && !(oldPrice > 0)) { toast('السعر القديم غير صحيح', 'err'); return; }

      var obj = {
        id: editingId || uid('p'),
        name: name,
        price: price,
        oldPrice: oldPrice,
        categoryId: $('#f-cat').value || '',
        shortDesc: $('#f-short').value.trim(),
        description: $('#f-desc').value.trim(),
        images: IMGS.slice(),
        reviews: REVS.slice(),
        featured: $('#f-feat').checked,
        createdAt: editingId ? (findProd(editingId).createdAt || Date.now()) : Date.now()
      };

      if (editingId) {
        for (var i = 0; i < D.products.length; i++) if (D.products[i].id === editingId) D.products[i] = obj;
        toast('تم حفظ التعديلات ✓ — لا تنسَ تصدير data.js للنشر', 'ok');
      } else {
        D.products.unshift(obj);
        toast('تمت إضافة المنتج ✓ — لا تنسَ تصدير data.js للنشر', 'ok');
      }
      persist();
      closeProdForm();
    });
  }

  function findProd(id) {
    for (var i = 0; i < D.products.length; i++) if (D.products[i].id === id) return D.products[i];
    return {};
  }

  function renderImgThumbs() {
    var box = $('#f-imgThumbs');
    if (!IMGS.length) {
      box.innerHTML = '<div class="t-sub" style="color:#8a948e;font-size:13px">لا توجد صور بعد — أضف صورة واحدة على الأقل</div>';
      return;
    }
    box.innerHTML = IMGS.map(function (src, i) {
      return '<div class="img-thumb">' +
        '<img class="ph" src="' + esc(src) + '" alt="صورة ' + (i + 1) + '">' +
        '<div style="display:flex;justify-content:center">' + (i === 0 ? '<span class="badge-main">⭐ رئيسية</span>' : '') + '</div>' +
        '<div class="ops">' +
          (i !== 0 ? '<button type="button" class="icon-btn" data-act="main" data-idx="' + i + '" title="تعيين كصورة رئيسية">⭐</button>' : '') +
          '<button type="button" class="icon-btn del" data-act="del" data-idx="' + i + '" title="حذف الصورة">🗑️</button>' +
        '</div></div>';
    }).join('');
  }

  function renderRevRows() {
    var box = $('#revRows');
    if (!REVS.length) { box.innerHTML = '<div class="t-sub" style="color:#8a948e;font-size:13px">لا توجد مراجعات</div>'; return; }
    box.innerHTML = REVS.map(function (r, i) {
      return '<div class="rev-row"><b>' + esc(r.name) + '</b><span style="color:#e9b61b;direction:ltr">' +
        '★'.repeat(Number(r.rating) || 0) + '</span><span class="txt">' + esc(r.text) + '</span>' +
        '<button type="button" class="icon-btn del" data-act="revdel" data-idx="' + i + '" title="حذف">🗑️</button></div>';
    }).join('');
  }

  /* ============ الأقسام ============ */
  function renderCats() {
    var box = $('#catRows');
    if (!D.categories.length) {
      box.innerHTML = '<div style="padding:22px;text-align:center;color:#8a948e;font-size:13.5px">لا توجد أقسام بعد — أضف قسمك الأول بالأسفل</div>';
      return;
    }
    box.innerHTML = D.categories.map(function (c) {
      var n = D.products.filter(function (p) { return p.categoryId === c.id; }).length;
      return '<div class="cat-row" data-id="' + esc(c.id) + '">' +
        '<span style="font-size:17px">🗂️</span>' +
        '<input class="input" type="text" value="' + esc(c.name) + '" data-act="rename">' +
        '<span class="cnt">' + n + ' منتج</span>' +
        '<button type="button" class="icon-btn del" data-act="del" title="حذف القسم" style="margin-inline-start:auto">🗑️</button>' +
      '</div>';
    }).join('');
  }

  function bindCatsTab() {
    $('#catRows').addEventListener('change', function (e) {
      var inp = e.target.closest('[data-act="rename"]');
      if (!inp) return;
      var id = inp.closest('.cat-row').getAttribute('data-id');
      var name = inp.value.trim();
      if (!name) { toast('اسم القسم لا يمكن أن يكون فارغاً', 'err'); renderCats(); return; }
      D.categories.forEach(function (c) { if (c.id === id) c.name = name; });
      persist();
      toast('تم تعديل اسم القسم ✓', 'ok');
    });
    $('#catRows').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act="del"]');
      if (!btn) return;
      var id = btn.closest('.cat-row').getAttribute('data-id');
      var c = null;
      D.categories.forEach(function (x) { if (x.id === id) c = x; });
      var n = D.products.filter(function (p) { return p.categoryId === id; }).length;
      var msg = n ? ('القسم «' + c.name + '» يحتوي ' + n + ' منتج. سيتم حذف القسم وبقاء المنتجات "غير مصنفة". متابعة؟')
                  : ('حذف القسم «' + c.name + '»؟');
      if (!confirm(msg)) return;
      D.categories = D.categories.filter(function (x) { return x.id !== id; });
      persist();
      toast('تم حذف القسم', 'ok');
    });
    $('#catAddBtn').addEventListener('click', function () {
      var inp = $('#newCatName');
      var name = inp.value.trim();
      if (!name) { toast('اكتب اسم القسم', 'err'); return; }
      D.categories.push({ id: uid('c'), name: name });
      inp.value = '';
      persist();
      toast('تمت إضافة القسم ✓', 'ok');
    });
    $('#newCatName').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('#catAddBtn').click(); });
  }

  /* ============ الإعدادات ============ */
  function fillSettingsForm() {
    var s = D.settings;
    $('#s-storeName').value = s.storeName || '';
    $('#s-tagline').value = s.tagline || '';
    $('#s-heroTitle').value = s.heroTitle || '';
    $('#s-heroText').value = s.heroText || '';
    $('#s-whatsapp').value = s.whatsapp || '';
    $('#s-waGreeting').value = s.waGreeting || '';
    $('#s-currency').value = s.currency || 'درهم';
    $('#s-footerText').value = s.footerText || '';
    for (var i = 0; i < 4; i++) $('#s-badge' + i).value = s.badges[i] || '';
    renderLogoPreview();
  }

  function renderLogoPreview() {
    var box = $('#logoPreview');
    box.innerHTML = D.settings.logo
      ? '<img src="' + esc(D.settings.logo) + '" alt="شعار المتجر" style="width:100%;height:100%;object-fit:cover">'
      : '🛍️';
  }

  function bindSettingsTab() {
    $('#saveSettings').addEventListener('click', function () {
      var s = D.settings;
      var name = $('#s-storeName').value.trim();
      if (!name) { toast('اسم المتجر مطلوب', 'err'); return; }
      s.storeName = name;
      s.tagline = $('#s-tagline').value.trim();
      s.heroTitle = $('#s-heroTitle').value.trim();
      s.heroText = $('#s-heroText').value.trim();
      s.whatsapp = $('#s-whatsapp').value.trim();
      s.waGreeting = $('#s-waGreeting').value.trim() || 'مرحباً، أريد طلب هذا المنتج:';
      s.currency = $('#s-currency').value.trim() || 'درهم';
      s.footerText = $('#s-footerText').value.trim();
      s.badges = [0, 1, 2, 3].map(function (i) { return $('#s-badge' + i).value.trim(); }).filter(Boolean);
      if (!persist()) return;
      toast('تم حفظ الإعدادات ✓ — لا تنسَ تصدير data.js للنشر', 'ok');
    });

    /* الشعار */
    $('#logoInput').addEventListener('change', async function () {
      var f = this.files[0];
      this.value = '';
      if (!f) return;
      try {
        D.settings.logo = await compressImage(f, 300, 0.9);
        if (persist()) { renderLogoPreview(); toast('تم تحديث الشعار ✓', 'ok'); }
      } catch (e) { toast('تعذر معالجة الصورة', 'err'); }
    });
    $('#logoRemove').addEventListener('click', function () {
      D.settings.logo = '';
      persist();
      renderLogoPreview();
      toast('تمت إزالة الشعار — سيظهر الاسم بدلاً منه', 'ok');
    });

    /* كلمة السر */
    $('#pwChangeBtn').addEventListener('click', async function () {
      var cur = $('#pw-current').value, nw = $('#pw-new').value, cf = $('#pw-confirm').value;
      if (!cur || !nw) { toast('املأ الحقول المطلوبة', 'err'); return; }
      var target = D.settings.passwordHash || StoreData.defaultHash;
      if (await sha256(cur) !== target) { toast('كلمة السر الحالية غير صحيحة', 'err'); return; }
      if (nw.length < 6) { toast('كلمة السر الجديدة: 6 أحرف على الأقل', 'err'); return; }
      if (nw !== cf) { toast('التأكيد غير مطابق', 'err'); return; }
      D.settings.passwordHash = await sha256(nw);
      $('#pw-current').value = ''; $('#pw-new').value = ''; $('#pw-confirm').value = '';
      persist();
      toast('تم تغيير كلمة السر ✓ — صدّر data.js حتى لا تعود بكلمة السر القديمة بعد أي استعادة', 'ok');
    });

    /* النسخ الاحتياطي */
    $('#exportJson').addEventListener('click', function () {
      downloadFile('mutjari-backup-' + new Date().toISOString().slice(0, 10) + '.json',
        JSON.stringify(D, null, 1), 'application/json');
      toast('تم تنزيل النسخة الاحتياطية ✓', 'ok');
    });
    $('#importJson').addEventListener('change', function () {
      var f = this.files[0];
      this.value = '';
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var obj = JSON.parse(reader.result);
          if (!obj || !obj.settings || !Array.isArray(obj.products)) throw new Error('bad');
          D = obj;
          D.settings.badges = D.settings.badges || [];
          D.categories = D.categories || [];
          if (!persist()) return;
          toast('تم استيراد النسخة الاحتياطية ✓', 'ok');
        } catch (e) { toast('الملف غير صالح', 'err'); }
      };
      reader.readAsText(f);
    });

    /* تفريغ المتجر للبدء من الصفر */
    $('#wipeStore').addEventListener('click', function () {
      if (!confirm('سيتم حذف جميع المنتجات والأقسام التجريبية للبدء بمتجر فارغ. الإعدادات وكلمة السر تبقى كما هي. متابعة؟')) return;
      if (!confirm('تأكيد أخير: حذف كل المنتجات والأقسام؟')) return;
      D.products = [];
      D.categories = [];
      persist();
      toast('تم تفريغ المتجر — أضف منتجاتك الآن ✓', 'ok');
    });
  }

  /* تصدير data.js */
  function exportDataJs() {
    var today = new Date().toLocaleDateString('ar-MA');
    var txt = '/* ============================================================\n' +
      '   data.js — قاعدة بيانات متجر «' + (D.settings.storeName || 'متجري') + '»\n' +
      '   تم التصدير من لوحة التحكم بتاريخ ' + today + '\n' +
      '   لعرض التعديلات لجميع الزوار: ارفع هذا الملف إلى مجلد js\n' +
      '   في موقعك مستبدلاً الملف القديم.\n' +
      '   ============================================================ */\n' +
      'window.STORE_DATA = ' + JSON.stringify(D, null, 1) + ';\n';
    var sizeMB = new Blob([txt]).size / (1024 * 1024);
    downloadFile('data.js', txt, 'application/javascript');
    if (sizeMB > 8) toast('تنبيه: حجم الملف ' + sizeMB.toFixed(1) + ' ميغا — يُنصح بتقليل عدد الصور لتسريع التحميل', 'err');
    else toast('تم تنزيل data.js ✓ — ارفعه الآن إلى مجلد js في موقعك', 'ok');
  }

  function downloadFile(name, content, type) {
    var blob = new Blob([content], { type: type + ';charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  }
})();
