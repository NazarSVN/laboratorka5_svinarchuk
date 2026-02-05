// main.js — базовий “живий” файл для сайту

(() => {
  "use strict";

  // 1) Перевірка, що скрипт підключився
  console.log("✅ main.js loaded");

  // 2) Після завантаження DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Показати поточний рік у елементах з атрибутом data-year
    const yearEls = document.querySelectorAll("[data-year]");
    const year = new Date().getFullYear();
    yearEls.forEach((el) => (el.textContent = String(year)));

    // Кнопка “вгору” (якщо на сторінці є елемент з id="toTop")
    const toTopBtn = document.getElementById("toTop");
    if (toTopBtn) {
      toTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Обробка форми (якщо є форма з id="contactForm")
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fd = new FormData(form);
        const data = Object.fromEntries(fd.entries());

        // Тут можеш підключити fetch() на свій бекенд/телеграм-бота і т.д.
        console.log("📨 Form submit:", data);

        alert("Дякую! Повідомлення відправлено (демо).");
        form.reset();
      });
    }
  });
})();
