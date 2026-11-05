/* ============================================================
   common.js — طبقة البيانات والأدوات المشتركة (المتجر + لوحة التحكم)
   ============================================================ */
(function () {
  'use strict';

  /* نسخة احتياطية تُستعمل فقط إذا فشل تحميل data.js */
  var DEFAULT_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'; // admin123
  var EMBED_DEFAULTS = {
    version: 1,
    settings: {
      storeName: 'متجري', tagline: '', heroTitle: 'مرحباً بكم في متجري', heroText: '',
      whatsapp: '', waGreeting: 'مرحباً، أريد طلب هذا المنتج:', currency: 'درهم',
      logo: '', footerText: '', badges: [], passwordHash: DEFAULT_HASH
    },
    categories: [], products: []
  };

  function embeddedDefault() { return JSON.parse(JSON.stringify(EMBED_DEFAULTS)); }

  /* ---- الوصول للبيانات: معاينة محلية ← الملف المنشور data.js ---- */
  window.StoreData = {
    KEY: 'mutjari_draft',
    shipped: function () {
      return (typeof window.STORE_DATA === 'object' && window.STORE_DATA) ? window.STORE_DATA : embeddedDefault();
    },
    load: function () {
      try {
        var raw = localStorage.getItem(this.KEY);
        if (raw) {
          var d = JSON.parse(raw);
          if (d && d.settings) return d;
        }
      } catch (e) { /* تجاهل */ }
      return this.shipped();
    },
    save: function (d) {
      try { localStorage.setItem(this.KEY, JSON.stringify(d)); return true; }
      catch (e) { return false; }
    },
    hasDraft: function () {
      try { return !!localStorage.getItem(this.KEY); } catch (e) { return false; }
    },
    clear: function () { try { localStorage.removeItem(this.KEY); } catch (e) { /* تجاهل */ } },
    clone: function (o) { return JSON.parse(JSON.stringify(o)); },
    defaultHash: DEFAULT_HASH
  };

  /* ---- أدوات عامة ---- */
  window.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  };

  window.fmtPrice = function (n) {
    n = Number(n) || 0;
    return (Math.round(n * 100) / 100).toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  window.uid = function (p) {
    return (p || 'id') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  };

  window.sha256 = async function (text) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(String(text)));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  };

  window.avgRating = function (p) {
    if (!p.reviews || !p.reviews.length) return null;
    var sum = 0;
    for (var i = 0; i < p.reviews.length; i++) sum += (Number(p.reviews[i].rating) || 0);
    return { avg: Math.round((sum / p.reviews.length) * 10) / 10, count: p.reviews.length };
  };

  window.catName = function (data, id) {
    var list = data.categories || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i].name;
    return 'غير مصنف';
  };

  window.normalizePhone = function (raw) {
    var n = String(raw || '').replace(/[^\d]/g, '');
    if (n.indexOf('00') === 0) n = n.replace(/^00+/, '');
    return n;
  };

  /* رابط واتساب مع رسالة جاهزة تتضمن المنتج والسعر والرابط */
  window.waLink = function (product, settings) {
    var num = normalizePhone(settings && settings.whatsapp);
    var cur = (settings && settings.currency) || 'درهم';
    var url = '';
    try {
      if (location.protocol === 'http:' || location.protocol === 'https:') {
        url = location.origin + location.pathname;
      }
    } catch (e) { /* تجاهل */ }
    var msg = (settings && settings.waGreeting) || 'مرحباً، أريد طلب هذا المنتج:';
    msg += '\n—————————————\n';
    msg += '🛍️ المنتج: ' + product.name + '\n';
    msg += '💰 السعر: ' + fmtPrice(product.price) + ' ' + cur + '\n';
    if (url) msg += '🔗 رابط المنتج: ' + url + '#p-' + product.id + '\n';
    msg += '—————————————\n';
    msg += 'المرجو تأكيد توفر المنتج، شكراً 🌹';
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
  };

  /* رابط واتساب عام (بدون منتج محدد) */
  window.waLinkGeneral = function (settings) {
    var num = normalizePhone(settings && settings.whatsapp);
    var msg = 'مرحباً 👋، أريد الاستفسار عن منتجاتكم.';
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
  };

  window.starsHtml = function (r) {
    if (!r) return '';
    var w = Math.max(0, Math.min(100, (r.avg / 5) * 100));
    return '<span class="stars" dir="ltr" aria-label="تقييم ' + r.avg + ' من 5">' +
      '<span class="stars-bg">★★★★★</span>' +
      '<span class="stars-fg" style="width:' + w + '%">★★★★★</span></span>';
  };

  /* ضغط الصورة المرفوعة قبل تخزينها (تصغير + JPEG) */
  window.compressImage = function (file, maxDim, quality) {
    maxDim = maxDim || 1000; quality = quality || 0.82;
    return new Promise(function (resolve, reject) {
      if (!/^image\//.test(file.type)) { reject(new Error('الملف ليس صورة')); return; }
      var reader = new FileReader();
      reader.onerror = function () { reject(new Error('تعذر قراءة الملف')); };
      reader.onload = function (e) {
        var img = new Image();
        img.onerror = function () { reject(new Error('صورة غير صالحة')); };
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight;
          var scale = Math.min(1, maxDim / Math.max(w, h));
          w = Math.max(1, Math.round(w * scale));
          h = Math.max(1, Math.round(h * scale));
          var c = document.createElement('canvas');
          c.width = w; c.height = h;
          var ctx = c.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          resolve(c.toDataURL('image/jpeg', quality));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  /* تنبيه منبثق */
  window.toast = function (msg, type) {
    var box = document.getElementById('toastBox');
    if (!box) return;
    var t = document.createElement('div');
    t.className = 'toast' + (type ? ' ' + type : '');
    t.textContent = msg;
    box.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 20);
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 320);
    }, 3400);
  };

  /* صورة بديلة عند غياب صورة المنتج */
  window.PLACEHOLDER_IMG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">' +
    '<rect width="400" height="400" fill="#efece1"/>' +
    '<text x="200" y="215" font-size="90" text-anchor="middle" dominant-baseline="middle">🛍️</text>' +
    '</svg>'
  );

  window.prodImg = function (p) {
    return (p.images && p.images.length && p.images[0]) ? p.images[0] : window.PLACEHOLDER_IMG;
  };
})();
