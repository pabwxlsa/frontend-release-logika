// script.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Мобільне меню ---
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  // Зміна іконки залежно від теми
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
  } else {
    themeBtn.innerHTML = '<i class="bi bi-brightness-high"></i>';
  }
});

  // --- Динамічне створення товарних карток ---
  const products = [
    {
      id: 1,
      name: "Смартфон Nova",
      price: "2999 грн",
      image: "https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-4944.jpg?ga=GA1.1.1274187655.1750516847&semt=ais_hybrid&w=740"
    },
    {
      id: 2,
      name: "Планшет Zenith",
      price: "3999 грн",
      image: "https://via.placeholder.com/220x150"
    },
    {
      id: 3,
      name: "Навушники Echo",
      price: "799 грн",
      image: "https://via.placeholder.com/220x150"
    },
    {
      id: 4,
      name: "Смарт-годинник Pulse",
      price: "1599 грн",
      image: "https://via.placeholder.com/220x150"
    }
  ];

  const productCardsContainer = document.getElementById("productCards");
  if (productCardsContainer) {
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="buy-btn" data-id="${product.id}">Купити</button>
      `;
      productCardsContainer.appendChild(card);
    });
  }

  // --- Кнопка "Купити" та лічильник кошика ---
  let cartCount = 0;
  // Якщо на сайті є елемент для відображення кількості товарів у кошику
  const updateCartCounter = () => {
    const cartCounter = document.getElementById("cartCounter");
    if (cartCounter) {
      cartCounter.textContent = cartCount;
    }
  };

  const buyButtons = document.querySelectorAll(".buy-btn");
  buyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cartCount++;
      updateCartCounter();
      alert(`Товар додано до кошика! Поточна кількість: ${cartCount}`);
    });
  });

  // --- Обробка контактної форми ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Дякуємо за ваше повідомлення!");
      contactForm.reset();
    });
  }

  // --- Управління модальним вікном підтримки ---
  const supportModal = document.getElementById("supportModal");
  const closeModalBtn = document.getElementById("closeModal");
  // Кнопки для відкриття модального вікна (якщо такі додатково додаються, позначаємо класом .open-support-modal)
  const openSupportModalBtns = document.querySelectorAll(".open-support-modal");
  openSupportModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      supportModal.style.display = "block";
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      supportModal.style.display = "none";
    });
  }
  // Закриття модального вікна при кліку поза його межами
  window.addEventListener("click", (e) => {
    if (e.target === supportModal) {
      supportModal.style.display = "none";
    }
  });
});
