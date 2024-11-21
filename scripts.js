document.addEventListener("DOMContentLoaded", () => {
  // Review Slider
  const sliderInner = document.querySelector(".review-slider");
  const reviewItems = document.querySelectorAll(".review-item");

  if (sliderInner && reviewItems.length > 0) {
    // Clone review items to create a seamless loop
    reviewItems.forEach((item) => {
      const clone = item.cloneNode(true);
      sliderInner.appendChild(clone);
    });

    // CSS for continuous sliding
    const style = document.createElement("style");
    style.textContent = `
      .review-slider {
        display: flex;
        animation: slideReviews 20s linear infinite;
      }
  
      @keyframes slideReviews {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
  
      .review-slider:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
  }

  // Dropdown Toggle
  const contactBtn = document.getElementById("contactBtn");
  const contactDropdown = document.getElementById("contactDropdown");

  if (contactBtn && contactDropdown) {
    contactBtn.addEventListener("click", () => {
      contactDropdown.classList.toggle("hidden");
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (
        !contactBtn.contains(e.target) &&
        !contactDropdown.contains(e.target)
      ) {
        contactDropdown.classList.add("hidden");
      }
    });
  }
});
