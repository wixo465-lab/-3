/* ============================================================
   data.js — قاعدة بيانات متجر "متجري"
   هذا الملف هو النسخة المنشورة التي يراها جميع الزوار.
   يمكنك تعديل كل شيء من لوحة التحكم (admin.html) ثم:
   تصدير data.js من لوحة التحكم ← رفعه هنا بدل الملف القديم.
   ============================================================ */
window.STORE_DATA = {
 "version": 1,
 "settings": {
  "storeName": "متجري",
  "tagline": "منتجات مختارة بعناية… وجودة تستحق ثقتك",
  "heroTitle": "مرحباً بكم في متجري 🌟",
  "heroText": "تسوّق أحدث المنتجات بأسعار مناسبة، واطلب مباشرة عبر واتساب — الدفع عند الاستلام!",
  "whatsapp": "212600000000",
  "waGreeting": "مرحباً، أريد طلب هذا المنتج:",
  "currency": "درهم",
  "logo": "",
  "footerText": "متجري — متجر إلكتروني مغربي يقدم منتجات مختارة بعناية بأسعار منافسة، مع توصيل سريع لجميع المدن والدفع عند الاستلام.",
  "badges": [
   "الدفع عند الاستلام",
   "توصيل سريع لجميع المدن",
   "منتجات أصلية 100%",
   "دعم عبر واتساب"
  ],
  "passwordHash": "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"
 },
 "categories": [
  {
   "id": "c1",
   "name": "إلكترونيات"
  },
  {
   "id": "c2",
   "name": "حقائب وأزياء"
  },
  {
   "id": "c3",
   "name": "العطور"
  },
  {
   "id": "c4",
   "name": "أحذية"
  },
  {
   "id": "c5",
   "name": "مستلزمات المنزل"
  }
 ],
 "products": [
  {
   "id": "p1",
   "name": "ساعة ذكية Smart Pro X",
   "price": 499,
   "oldPrice": 649,
   "categoryId": "c1",
   "featured": true,
   "createdAt": 1793626213109,
   "shortDesc": "شاشة AMOLED، مقاومة للماء، بطارية تدوم 10 أيام، مراقبة النوم ونبضات القلب.",
   "description": "ساعة ذكية عصرية بشاشة AMOLED عالية الدقة 1.9 بوصة، تدعم أكثر من 100 نمط رياضي ومراقبة نبضات القلب والأكسجين في الدم وجودة النوم.\nبطارية تدوم حتى 10 أيام بشحنة واحدة، مقاومة للماء IP68، متوافقة مع أندرويد وآيفون.\nتأتي العلبة مع سوارين قابلين للتغيير (سيليكون + جلد) وشاحن مغناطيسي.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%230b3d33%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23127a5f%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%E2%8C%9A%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%B0%D9%83%D9%8A%D8%A9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23134e4a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230f766e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%E2%8C%9A%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3ESmart%20Pro%20X%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "أمين",
     "rating": 5,
     "text": "منتج ممتاز والبطارية تدوم فعلاً طويلاً، أنصح به بقوة.",
     "date": "2026-10-28"
    },
    {
     "name": "سارة",
     "rating": 4,
     "text": "جميلة جداً والتوصيل كان سريعاً، الشاشة واضحة تحت الشمس.",
     "date": "2026-10-20"
    }
   ]
  },
  {
   "id": "p2",
   "name": "سماعات لاسلكية AirSound",
   "price": 249,
   "oldPrice": 320,
   "categoryId": "c1",
   "featured": true,
   "createdAt": 1793367013109,
   "shortDesc": "عزل ضوضاء ANC، صوت نقي، 30 ساعة استماع، اتصال بلوتوث 5.3 فوري.",
   "description": "سماعات TWS بتقنية عزل الضوضاء النشط ANC وصوت ستيريو نقي مع باس قوي.\nبلوتوث 5.3 اتصال فوري ومستقر، زمن استجابة منخفض مناسب للألعاب.\nعلبة الشحن تمنحك حتى 30 ساعة استماع، مقاومة للعرق والرشاش، مثالية للرياضة والمشي.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a5f%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%233b82f6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%A7%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%B3%D9%85%D8%A7%D8%B9%D8%A7%D8%AA%20AirSound%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%230c4a6e%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%230284c7%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8E%A7%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3EAirSound%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "يوسف",
     "rating": 5,
     "text": "الصوت رائع وعزل الضوضاء مذهل بهذا السعر.",
     "date": "2026-10-25"
    }
   ]
  },
  {
   "id": "p3",
   "name": "حقيبة يد جلدية أنيقة",
   "price": 359,
   "oldPrice": null,
   "categoryId": "c2",
   "featured": true,
   "createdAt": 1793021413109,
   "shortDesc": "جلد صناعي فاخر، خزانة داخلية بسحاب، حزام قابل للتعديل، مناسبة لكل المناسبات.",
   "description": "حقيبة يد نسائية بتصميم أنيق من الجلد الصناعي الفاخر عالي الجودة، خياطة متينة وتشطيبات ذهبية.\nتحتوي على جيب داخلي بسحاب وجيبين صغيرين للهاتف والمفاتيح، حزام كتف قابل للتعديل والفصل.\nمقاس مناسب يتسع للأشياء اليومية الأساسية، مثالية للعمل والمناسبات.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%234a2c2a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%238c5a4f%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9C%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%AD%D9%82%D9%8A%D8%A8%D8%A9%20%D8%A3%D9%86%D9%8A%D9%82%D8%A9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%233b2321%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%236b4238%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9C%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%AD%D9%82%D9%8A%D8%A8%D8%A9%20%D9%8A%D8%AF%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "خديجة",
     "rating": 5,
     "text": "الجودة أفضل من الصور، الجلد ناعم والخياطة متينة.",
     "date": "2026-10-15"
    },
    {
     "name": "نعيمة",
     "rating": 4,
     "text": "وصلت في علبة أنيقة، مناسب للعمل والخرجات.",
     "date": "2026-10-08"
    }
   ]
  },
  {
   "id": "p4",
   "name": "عطر شرقي فاخر Oud Royal",
   "price": 189,
   "oldPrice": 240,
   "categoryId": "c3",
   "featured": false,
   "createdAt": 1792675813109,
   "shortDesc": "عود شرقي مع لمسة فانيليا، ثبات يصل إلى 8 ساعات، حجم 50 مل.",
   "description": "عطر شرقي فاخر يمزج بين دفء العود الأصيل ونعومة الفانيليا والعنبر.\nثبات قوي يصل إلى 8 ساعات وانتشار مناسب دون أن يكون مزعجاً.\nيأتي في قارورة أنيقة 50 مل مع علبة هدايا فاخرة — خيار مثالي للإهداء.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%233d2645%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%237c4a6b%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%A7%B4%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%B9%D8%B7%D8%B1%20Oud%20Royal%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%232e1a38%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%235d3a56%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%8C%B8%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3EOud%20Royal%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "رشيد",
     "rating": 5,
     "text": "رائحة راقية وثبات ممتاز، طلبت زوجة ثانية.",
     "date": "2026-10-02"
    }
   ]
  },
  {
   "id": "p5",
   "name": "حذاء رياضي خفيف Urban Run",
   "price": 279,
   "oldPrice": null,
   "categoryId": "c4",
   "featured": true,
   "createdAt": 1792157413109,
   "shortDesc": "نعل EVA خفيف ومريح، قماش متنفس، مقاسات 39-45.",
   "description": "حذاء رياضي بتصميم عصري ونعل EVA فائق الخفة يمتص الصدمات ويمنحك راحة طول اليوم.\nقماش متنفس يمنع التعرق، نعل خارجي مانع للانزلاق يناسب المشي والجري اليومي.\nمتوفر بالمقاسات من 39 إلى 45 — حدد المقاس المناسب في رسالة الطلب.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231f2937%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%234b5563%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9F%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%AD%D8%B0%D8%A7%D8%A1%20%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23111827%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23374151%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9F%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3EUrban%20Run%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "محمد",
     "rating": 4,
     "text": "خفيف ومريح جداً للمشي اليومي، المقاس مطابق.",
     "date": "2026-09-30"
    }
   ]
  },
  {
   "id": "p6",
   "name": "مصباح مكتب LED أنيق",
   "price": 149,
   "oldPrice": null,
   "categoryId": "c5",
   "featured": false,
   "createdAt": 1791639013109,
   "shortDesc": "3 درجات إضاءة، ذراع مرن، منفذ USB، موفرة للطاقة.",
   "description": "مصباح مكتب LED بتصميم عصري نحيف وذراع مرن 360 درجة يوجه الضوء حيث تحتاج.\nثلاث درجات إضاءة (أبيض / طبيعي / دافئ) تناسب القراءة والدراسة والعمل.\nيعمل بمنفذ USB ويتصل بأي شاحن أو حاسوب، استهلاك منخفض للطاقة وعمر تشغيلي طويل.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%237c5e12%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23c9a227%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%92%A1%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D9%85%D8%B5%D8%A8%D8%A7%D8%AD%20LED%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%236b5210%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23b08d1e%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%92%A1%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D9%85%D8%B5%D8%A8%D8%A7%D8%AD%20%D9%85%D9%83%D8%AA%D8%A8%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": []
  },
  {
   "id": "p7",
   "name": "طقم أكواب زجاجية — 6 قطع",
   "price": 129,
   "oldPrice": 165,
   "categoryId": "c5",
   "featured": false,
   "createdAt": 1791120613109,
   "shortDesc": "زجاج مقاوم للحرارة، 6 أكواب 250 مل، آمن في غسالة الأواني.",
   "description": "طقم من 6 أكواب زجاجية شفافة من الزجاج المقوى المقاوم للحرارة، سعة 250 مل للكوب.\nمناسبة للشاي والقهوة والعصائر، مقاومة للخدوش وتصمد للاستخدام اليومي.\nآمنة تماماً في غسالة الأواني والميكروويف — أنيقة على مائدة الضيوف.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%235b3a1e%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2392603a%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%E2%98%95%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%A3%D9%83%D9%88%D8%A7%D8%A8%20%D8%B2%D8%AC%D8%A7%D8%AC%D9%8A%D8%A9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%234a2f18%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%237d5230%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%E2%98%95%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D8%B7%D9%82%D9%85%206%20%D9%82%D8%B7%D8%B9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "فاطمة",
     "rating": 5,
     "text": "زجاج سميك وواضح، وصلت مغلفة جيداً دون أي كسر.",
     "date": "2026-09-18"
    }
   ]
  },
  {
   "id": "p8",
   "name": "محفظة جلدية رجالية",
   "price": 159,
   "oldPrice": null,
   "categoryId": "c2",
   "featured": false,
   "createdAt": 1790429413109,
   "shortDesc": "جلد طبيعي، 8 بطاقات + جيبان للأوراق، تصميم نحيف مضاد RFID.",
   "description": "محفظة رجالية من الجلد الطبيعي بتصميم نحيف أنيق تحفظ شكلها مع الاستخدام.\nتتسع لـ 8 بطاقات بنك + جيبان للأوراق النقدية + جيب سري للبطاقات الحساسة.\nمزودة بحماية RFID تمنع القراءة اللاسلكية غير المصرح بها لبطاقاتك.",
   "images": [
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%232b2b2b%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23595959%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%22150%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22660%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9D%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D9%85%D8%AD%D9%81%D8%B8%D8%A9%20%D8%AC%D9%84%D8%AF%D9%8A%D8%A9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E",
    "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22800%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23222222%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%234d4d4d%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22800%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22190%22%20r%3D%2290%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.10%29%22%2F%3E%3Ccircle%20cx%3D%22620%22%20cy%3D%22640%22%20r%3D%22130%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.08%29%22%2F%3E%3Ccircle%20cx%3D%22400%22%20cy%3D%22330%22%20r%3D%22150%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.16%29%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22395%22%20font-size%3D%22170%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%91%9D%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22610%22%20font-size%3D%2246%22%20text-anchor%3D%22middle%22%20fill%3D%22%23ffffff%22%20font-family%3D%22Cairo%2C%20Tajawal%2C%20Tahoma%2C%20sans-serif%22%20font-weight%3D%22700%22%3E%D9%85%D8%AD%D9%81%D8%B8%D8%A9%20%D8%B1%D8%AC%D8%A7%D9%84%D9%8A%D8%A9%3C%2Ftext%3E%3Ctext%20x%3D%22400%22%20y%3D%22668%22%20font-size%3D%2226%22%20text-anchor%3D%22middle%22%20fill%3D%22rgba%28255%2C255%2C255%2C0.85%29%22%20font-family%3D%22Tajawal%2C%20Tahoma%2C%20sans-serif%22%3E%D9%85%D8%AA%D8%AC%D8%B1%D9%8A%3C%2Ftext%3E%3C%2Fsvg%3E"
   ],
   "reviews": [
    {
     "name": "كريم",
     "rating": 5,
     "text": "جلد أصلي حقيقي والخياطة نظيفة، هدية أعجبت صاحبها.",
     "date": "2026-09-05"
    }
   ]
  }
 ]
};
