const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const translations = {
  ar: {
    brand: "مؤسسة فيصل فهد سالم الديباني",
    nav_about: "عن المؤسسة",
    nav_services: "الخدمات",
    nav_method: "المنهجية",
    nav_profile: "البروفايل",
    nav_work: "أعمالنا",
    nav_partner: "الشركاء",
    nav_contact: "تواصل معنا",
    nav_shop: "تسوق الآن",
    menu_contracting: "المقاولات العامة ▾",
    menu_contracting_new: "الجديد",
    menu_contracting_repair: "ترميم وصيانه",
    menu_cooling: "التبريد والتكييف والإلكترونيات ▾",
    menu_cooling_buy: "شراء جديد",
    menu_cooling_maintenance: "صيانة",
    menu_cooling_complaints: "الشكاوى",
    menu_cooling_copper: "تمديد نحاس مكيفات",
    stat1: "مؤسسة متخصصة",
    stat2: "حلول مبانٍ ذكية",
    stat3: "تنفيذ ومتابعة",
    stat4_num: "2",
    stat4: "لغتان للموقع",
    float_contracting_title: "البناء والمقاولات",
    float_contracting_body: "سكني وتجاري",
    float_hvac_title: "التكييف والتبريد",
    float_hvac_body: "تركيب وصيانة",
    float_cooling_title: "أنظمة ذكية",
    float_cooling_body: "مراقبة وأمن",
    showcase_title: "مبانٍ ذكية",
    showcase_body: "حلول متكاملة",
    chip_execution: "تنفيذ",
    chip_cooling: "تبريد",
    hero_eyebrow: "عملنا هو بصمتنا",
    hero_title: "مؤسسة فيصل الديباني",
    hero_lead: "مؤسسة سعودية متخصصة في المقاولات العامة والبناء، وأنظمة التكييف والتبريد، وأنظمة المراقبة والأمن الذكية، وحلول الطاقة الشمسية. نمكّن الشركات والأفراد من تجربة أعلى معايير حلول المباني الذكية.",
    hero_services: "استعرض الخدمات",
    hero_download: "تحميل ملف المؤسسة",
    about_eyebrow: "عن المؤسسة",
    about_title: "لا نبني مجرد هياكل، بل نبني أسساً متينة للمستقبل.",
    about_body: "في مؤسسة فيصل فهد سالم الديباني نلتزم بالنزاهة والحرفية العالية ورضا العملاء. مهمتنا تقديم حلول بناء مبتكرة ومستدامة، وأنظمة الطاقة الشمسية، وأنظمة المراقبة والأمن، وأنظمة التكييف والتبريد وصيانتها، مع الحفاظ على أعلى معايير السلامة والجودة، ودعمًا لرؤية السعودية 2030.",
    feature_contracting_title: "البناء والمقاولات",
    feature_contracting_body: "تنفيذ المباني السكنية والتجارية بتصاميم مبتكرة.",
    feature_hvac_title: "التكييف والتبريد",
    feature_hvac_body: "تركيب وصيانة وإصلاح أنظمة التكييف والتبريد.",
    feature_process_title: "المراقبة والأنظمة الذكية",
    feature_process_body: "كاميرات مراقبة رقمية، تحكم بالوصول، ومنازل ذكية.",
    feature_quality_title: "الطاقة الشمسية",
    feature_quality_body: "أنظمة طاقة شمسية صناعية ومنزلية موفّرة.",
    services_title: "خدمات متكاملة لحلول المباني الذكية.",
    services_body: "من المقاولات العامة والبناء، إلى التكييف والتبريد، وأنظمة المراقبة والأمن الذكية، وحلول الطاقة الشمسية — منظومة واحدة تخدم المشاريع السكنية والتجارية.",
    service1_title: "البناء والمقاولات",
    service1_body: "تنفيذ وبناء المنازل والفلل والمباني والمدارس والمستشفيات والفنادق والمرافق التجارية، إضافة إلى الترميم والتجديد وأعمال السباكة والكهرباء والدهان والديكور.",
    service1_small: "سكني وتجاري",
    service2_title: "التكييف والتبريد",
    service2_body: "تركيب وصيانة وإصلاح فعّال لأنظمة التكييف والتبريد للعملاء السكنيين والتجاريين، للحفاظ على كفاءة التشغيل وتقليل الأعطال والفواتير.",
    service2_small: "تركيب وصيانة",
    service3_title: "الأنظمة الأمنية والذكية",
    service3_body: "كاميرات المراقبة الرقمية والذكية، أنظمة التحكم في الوصول، بوابات المشاة والمركبات، الحلول البيومترية، المنازل الذكية والاتصال الداخلي، أنظمة الحضور، اتصالات PABX وIP، والدعم التقني.",
    service3_small: "مراقبة وأمن وأنظمة ذكية",
    work_title: "أعمالنا تجمع بين البناء والطاقة والأنظمة الذكية.",
    work_body: "نماذج تعكس نطاق عمل المؤسسة: تنفيذ وبناء، أنظمة تكييف وتبريد، وحلول طاقة شمسية ومراقبة ذكية، بجودة تنفيذ عالية وتسليم منظم.",
    work1_tag: "بناء ومقاولات",
    work1_title: "تنفيذ وبناء مشاريع سكنية وتجارية",
    work1_body: "بناء وترميم بتصاميم مبتكرة وتنفيذ دقيق للمباني والفلل والمرافق.",
    work2_tag: "طاقة شمسية",
    work2_title: "أنظمة طاقة شمسية صناعية ومنزلية",
    work2_body: "حلول طاقة نظيفة ومستدامة تقلّل استهلاك الطاقة وتدعم البناء الأخضر.",
    work3_tag: "أنظمة ذكية",
    work3_title: "مراقبة وأمن وأنظمة مبانٍ ذكية",
    work3_body: "كاميرات مراقبة وتحكم بالوصول ومنازل ذكية لحماية أعلى وراحة أكبر.",
    partner_eyebrow: "الشراكة",
    partner_title: "شريك التكنولوجيا والهندسة الموثوق في المملكة.",
    partner_body: "نعمل مع ملاك المشاريع، والمقاولين الرئيسيين، والمواقع التجارية والسكنية التي تبحث عن جهة تنفيذ موثوقة للبناء والتكييف والطاقة والأنظمة الذكية.",
    partner_node1: "ملاك المشاريع",
    partner_node2: "مقاولون رئيسيون",
    partner_node3: "مواقع تجارية",
    partner_node4: "قطاع سكني",
    method_title: "منهجية تنفيذ واضحة من المعاينة حتى التسليم.",
    method_body: "نعتمد التنسيق الدقيق بين مواردنا الداخلية والمقاولين والموردين الموثوقين، وننفذ كل مشروع بشفافية ونزاهة ومهنية عالية.",
    step1_title: "المعاينة",
    step1_body: "فهم الموقع، واحتياج العميل، والقيود الفنية قبل التسعير.",
    step2_title: "العرض",
    step2_body: "تحديد نطاق العمل والمواد والمدة المتوقعة بوضوح.",
    step3_title: "التنفيذ",
    step3_body: "تنظيم الفريق ومتابعة الجودة في جميع مراحل العمل.",
    step4_title: "التسليم",
    step4_body: "مراجعة نهائية وتوثيق الملاحظات والمتابعة بعد الإنجاز.",
    profile_eyebrow: "ملف المؤسسة",
    profile_cover_title: "بروفايل المؤسسة",
    profile_cover_body: "مؤسسة فيصل فهد سالم الديباني",
    profile_title: "ملف تعريفي يوضح هوية المؤسسة وخدماتها.",
    profile_body: "يمكن للعميل فتح ملف المؤسسة التعريفي للاطلاع على الرؤية والرسالة والقيم ومجالات العمل الكاملة.",
    profile_open: "فتح ملف المؤسسة",
    profile_contact: "طلب تواصل",
    contact_eyebrow: "تواصل سريع",
    contact_title: "جاهزون لتحويل احتياجك إلى نطاق عمل واضح.",
    contact_body: "أرسل تفاصيل مشروعك وسنعاود التواصل معك في أقرب وقت.",
    contact_item1: "faisal@faisalaldibani.com",
    contact_item2: "المملكة العربية السعودية",
    form_name: "الاسم",
    form_name_placeholder: "اسم العميل أو الشركة",
    form_service: "نوع الخدمة",
    form_service_placeholder: "بناء، تكييف، طاقة شمسية، أنظمة أمنية",
    form_message: "تفاصيل الطلب",
    form_message_placeholder: "اكتب وصفاً مختصراً للموقع أو العمل المطلوب",
    form_button: "تجهيز الطلب",
    footer_left: "© 2026 مؤسسة فيصل فهد سالم الديباني",
    footer_right: "عملنا هو بصمتنا"
  },
  en: {
    brand: "Faisal Fahad Salem Al-Dibani Company",
    nav_about: "About",
    nav_services: "Services",
    nav_method: "Method",
    nav_profile: "Profile",
    nav_work: "Our Work",
    nav_partner: "Partner",
    nav_contact: "Contact us",
    nav_shop: "Shop now",
    menu_contracting: "General Contracting ▾",
    menu_contracting_new: "New",
    menu_contracting_repair: "Renovation",
    menu_contracting_maintenance: "Maintenance",
    menu_cooling: "Cooling, AC & Electronics ▾",
    menu_cooling_buy: "New Purchase",
    menu_cooling_maintenance: "Maintenance",
    menu_cooling_complaints: "Complaints",
    menu_cooling_copper: "AC Copper Piping",
    stat1: "Specialized company",
    stat2: "Smart building solutions",
    stat3: "Execution and follow-up",
    stat4_num: "2",
    stat4: "Website languages",
    float_contracting_title: "Construction & Contracting",
    float_contracting_body: "Residential & commercial",
    float_hvac_title: "AC & Refrigeration",
    float_hvac_body: "Installation & maintenance",
    float_cooling_title: "Smart Systems",
    float_cooling_body: "Surveillance & security",
    showcase_title: "Smart buildings",
    showcase_body: "Integrated solutions",
    chip_execution: "Execution",
    chip_cooling: "Cooling",
    hero_eyebrow: "Our work is our signature",
    hero_title: "Faisal Al-Dibani Company",
    hero_lead: "A Saudi company specialized in general contracting and construction, air-conditioning and refrigeration, smart CCTV and security systems, and solar power solutions. We enable businesses and individuals to experience the highest standard of smart building solutions.",
    hero_services: "Explore services",
    hero_download: "Download company file",
    about_eyebrow: "About",
    about_title: "We don't just build structures; we build enduring foundations for the future.",
    about_body: "At Faisal Fahad Salem Al-Dibani Company we are committed to integrity, superior craftsmanship, and client satisfaction. Our mission is to deliver innovative, sustainable construction, solar power systems, CCTV & security systems, and AC cooling and maintenance — with the highest standards of safety and quality, supporting Saudi Vision 2030.",
    feature_contracting_title: "Construction & Contracting",
    feature_contracting_body: "Residential and commercial buildings with innovative designs.",
    feature_hvac_title: "AC & Refrigeration",
    feature_hvac_body: "Installation, maintenance, and repair of cooling systems.",
    feature_process_title: "Surveillance & Smart Systems",
    feature_process_body: "Digital CCTV, access control, and smart homes.",
    feature_quality_title: "Solar Power",
    feature_quality_body: "Efficient industrial and home solar power systems.",
    services_title: "Integrated services for smart building solutions.",
    services_body: "From general contracting and construction, to AC and refrigeration, smart surveillance and security, and solar power — one ecosystem serving residential and commercial projects.",
    service1_title: "Construction & Contracting",
    service1_body: "Building homes, villas, schools, hospitals, hotels, and commercial facilities, plus renovation, plumbing, electrical, painting, and interior work.",
    service1_small: "Residential & commercial",
    service2_title: "AC & Refrigeration",
    service2_body: "Effective installation, maintenance, and repair of AC and refrigeration for residential and commercial clients to keep systems efficient and lower bills.",
    service2_small: "Installation & maintenance",
    service3_title: "Security & Smart Systems",
    service3_body: "Digital & smart CCTV, access control, pedestrian & vehicle gates, biometric solutions, smart homes & intercom, time attendance, PABX & IP telephony, and IT support.",
    service3_small: "Surveillance, security & smart",
    work_title: "Our work spans construction, energy, and smart systems.",
    work_body: "Models reflecting our scope: construction and building, AC and refrigeration, solar energy, and smart surveillance — delivered with high quality and organized handover.",
    work1_tag: "Construction",
    work1_title: "Residential & commercial construction",
    work1_body: "Building and renovation with innovative design and precise execution.",
    work2_tag: "Solar",
    work2_title: "Industrial & home solar power systems",
    work2_body: "Clean, sustainable energy solutions that cut consumption and support green building.",
    work3_tag: "Smart Systems",
    work3_title: "Surveillance, security & smart buildings",
    work3_body: "CCTV, access control, and smart homes for higher protection and comfort.",
    partner_eyebrow: "Partner",
    partner_title: "A trusted technology and engineering partner in the Kingdom.",
    partner_body: "We work with project owners, main contractors, and commercial and residential sites seeking a reliable partner for construction, HVAC, energy, and smart systems.",
    partner_node1: "Project owners",
    partner_node2: "Main contractors",
    partner_node3: "Commercial sites",
    partner_node4: "Residential sector",
    method_title: "A clear execution method from inspection to handover.",
    method_body: "We rely on precise alignment of our internal resources, vetted subcontractors, and trusted suppliers, executing every project with transparency, honesty, and professional integrity.",
    step1_title: "Inspection",
    step1_body: "Understand the site, client need, and technical constraints before pricing.",
    step2_title: "Proposal",
    step2_body: "Define scope, materials, and expected timeline clearly.",
    step3_title: "Execution",
    step3_body: "Organize the team and monitor quality throughout the work stages.",
    step4_title: "Handover",
    step4_body: "Final review, notes documentation, and follow-up after completion.",
    profile_eyebrow: "Company File",
    profile_cover_title: "Company Profile",
    profile_cover_body: "Faisal Fahad Salem Al-Dibani Company",
    profile_title: "A company file that presents identity and services.",
    profile_body: "Clients can open the company profile to view the vision, mission, values, and full range of services.",
    profile_open: "Open company file",
    profile_contact: "Request contact",
    contact_eyebrow: "Quick Contact",
    contact_title: "Ready to turn your requirement into a clear scope of work.",
    contact_body: "Send your project details and we'll get back to you as soon as possible.",
    contact_item1: "faisal@faisalaldibani.com",
    contact_item2: "Saudi Arabia",
    form_name: "Name",
    form_name_placeholder: "Client or company name",
    form_service: "Service type",
    form_service_placeholder: "Construction, AC, solar, security systems",
    form_message: "Request details",
    form_message_placeholder: "Write a short description of the site or required work",
    form_button: "Prepare request",
    footer_left: "© 2026 Faisal Fahad Salem Al-Dibani Company",
    footer_right: "Our work is our signature"
  }
};

const langToggle = document.getElementById("langToggle");
let currentLang = "ar";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key]) node.setAttribute("placeholder", translations[lang][key]);
  });
  langToggle.textContent = lang === "ar" ? "EN" : "AR";
  langToggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "Switch to Arabic");
}

langToggle.addEventListener("click", () => applyLanguage(currentLang === "ar" ? "en" : "ar"));
applyLanguage("ar");

const fallbackCanvas = document.getElementById("fallback-scene");
const threeCanvas = document.getElementById("three-scene");

function fitCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawFallback(time = 0) {
  const { ctx, width, height } = fitCanvas(fallbackCanvas);
  const t = reduceMotion ? 0 : time / 1000;
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "source-over";

  const cx = width * 0.48;
  const cy = height * 0.54;
  const blocks = [
    [-120, 40, 78, 110, "#0ea5e9"],
    [-42, -18, 86, 168, "#334155"],
    [48, 22, 70, 128, "#0f766e"],
    [124, -28, 58, 95, "#f97316"]
  ];

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.22 + Math.sin(t * .45) * .025);
  blocks.forEach(([x, y, w, h, color], index) => {
    const lift = Math.sin(t + index) * 6;
    const top = y - h - lift;
    ctx.fillStyle = "rgba(8,47,73,.16)";
    ctx.beginPath();
    ctx.ellipse(x + w * .45, y + 38, w * .72, 18, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = color;
    ctx.fillRect(x, top, w, h);
    ctx.fillStyle = "rgba(255,255,255,.28)";
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x + 22, top - 18);
    ctx.lineTo(x + w + 22, top - 18);
    ctx.lineTo(x + w, top);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(3,7,18,.22)";
    ctx.beginPath();
    ctx.moveTo(x + w, top);
    ctx.lineTo(x + w + 22, top - 18);
    ctx.lineTo(x + w + 22, y - 18);
    ctx.lineTo(x + w, y);
    ctx.closePath();
    ctx.fill();
  });
  ctx.restore();

  if (!reduceMotion) requestAnimationFrame(drawFallback);
}

async function initThreeScene() {
  try {
    const THREE = await import("https://unpkg.com/three@0.164.1/build/three.module.js");
    fallbackCanvas.style.display = "none";
    const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, .1, 100);
    camera.position.set(0, 1.1, 8);

    const group = new THREE.Group();
    scene.add(group);
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x0ea5e9, metalness: .38, roughness: .28 }),
      new THREE.MeshStandardMaterial({ color: 0x334155, metalness: .45, roughness: .22 }),
      new THREE.MeshStandardMaterial({ color: 0x0f766e, metalness: .3, roughness: .3 }),
      new THREE.MeshStandardMaterial({ color: 0xf97316, metalness: .24, roughness: .34 })
    ];

    const sizes = [
      [-1.7, .1, .72, 1.55],
      [-.62, .34, .86, 2.4],
      [.45, .14, .72, 1.85],
      [1.32, .32, .6, 1.3]
    ];

    sizes.forEach(([x, y, w, h], index) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, .74), materials[index]);
      mesh.position.set(x, y, 0);
      mesh.castShadow = true;
      group.add(mesh);
    });

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.65, .035, 16, 120),
      new THREE.MeshStandardMaterial({ color: 0x7dd3fc, metalness: .55, roughness: .18 })
    );
    torus.rotation.x = Math.PI / 2.35;
    group.add(torus);

    const grid = new THREE.GridHelper(6.4, 12, 0x38bdf8, 0x94a3b8);
    grid.material.opacity = .26;
    grid.material.transparent = true;
    grid.position.y = -1.12;
    group.add(grid);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x0f172a, 1.8));
    const key = new THREE.DirectionalLight(0xffffff, 2.4);
    key.position.set(3.2, 5.2, 4.2);
    scene.add(key);

    function resize() {
      const rect = threeCanvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(1, rect.height);
      camera.updateProjectionMatrix();
    }

    function animate(time = 0) {
      resize();
      const t = reduceMotion ? 0 : time / 1000;
      group.rotation.y = -.48 + Math.sin(t * .32) * .15;
      group.rotation.x = -.18 + Math.sin(t * .26) * .04;
      group.children.forEach((child, index) => {
        if (child.isMesh && child.geometry.type === "BoxGeometry") child.position.y += Math.sin(t + index) * .0009;
      });
      renderer.render(scene, camera);
      if (!reduceMotion) requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize, { passive: true });
    animate();
  } catch (error) {
    threeCanvas.style.display = "none";
    fallbackCanvas.style.display = "block";
    drawFallback();
  }
}

initThreeScene();
