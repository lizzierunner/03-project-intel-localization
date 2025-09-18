const langToggle = document.getElementById("langToggle");

// Text content for English and Arabic
const content = {
  en: {
    title: "Intel’s Journey to Sustainability",
    subtitle: "Learn about the innovations and technologies that are building a better future.",
    col1: ["Social Responsibility", "Learn how Intel supports communities and education.", "Learn More"],
    col2: ["Technology Innovation", "Learn about Intel’s latest innovations that support a more sustainable future.", "Learn More"],
    col3: ["Global Sustainability", "Discover Intel’s efforts to improve environmental efficiency.", "Learn More"],
    timeline: "Timeline",
    newsletter: ["Subscribe to the newsletter", "Subscribe"],
    toggleBtn: "Switch to Arabic",
    dir: "ltr"
  },
  ar: {
    title: "رحلة Intel نحو الاستدامة",
    subtitle: "تعرّف على الابتكارات والتقنيات التي تبني مستقبلاً أفضل.",
    col1: ["المسؤولية الاجتماعية", "تعرّف كيف تدعم Intel المجتمعات والتعليم.", "تعرّف أكثر"],
    col2: ["ابتكار التكنولوجيا", "تعرّف على أحدث ابتكارات Intel التي تدعم مستقبل أكثر استدامة.", "تعرّف أكثر"],
    col3: ["الاستدامة العالمية", "اكتشف جهود Intel لتحسين الكفاءة البيئية.", "تعرّف أكثر"],
    timeline: "الجدول الزمني",
    newsletter: ["اشترك في النشرة الإخبارية", "اشترك"],
    toggleBtn: "Switch to English",
    dir: "rtl"
  }
};

// Load saved language or default to English
let currentLang = localStorage.getItem("language") || "en";
applyLanguage(currentLang);

// Switch language on click
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("language", currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = content[lang].dir;

  document.getElementById("pageTitle").textContent = content[lang].title;
  document.getElementById("pageSubtitle").textContent = content[lang].subtitle;
  document.getElementById("col1Title").textContent = content[lang].col1[0];
  document.getElementById("col1Desc").textContent = content[lang].col1[1];
  document.getElementById("col1Btn").textContent = content[lang].col1[2];
  document.getElementById("col2Title").textContent = content[lang].col2[0];
  document.getElementById("col2Desc").textContent = content[lang].col2[1];
  document.getElementById("col2Btn").textContent = content[lang].col2[2];
  document.getElementById("col3Title").textContent = content[lang].col3[0];
  document.getElementById("col3Desc").textContent = content[lang].col3[1];
  document.getElementById("col3Btn").textContent = content[lang].col3[2];
  document.getElementById("timelineTitle").textContent = content[lang].timeline;
  document.getElementById("newsletterLabel").textContent = content[lang].newsletter[0];
  document.getElementById("subscribeBtn").textContent = content[lang].newsletter[1];
  langToggle.textContent = content[lang].toggleBtn;
}