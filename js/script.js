  document.addEventListener("DOMContentLoaded", () => {
    const headerOffset = 90; // Adjust to match your fixed/sticky navbar height

    // Smooth scroll for all internal anchor links (#id)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    });
  });






const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Shrink navbar slightly on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle Mobile Menu & switch icon between ☰ and ✕
function toggleMobileMenu() {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.textContent = isOpen ? '✕' : '☰';
}

// Close Mobile Menu & reset icon to ☰
function closeMobileMenu() {
  navMenu.classList.remove('open');
  menuToggle.textContent = '☰';
}

// Toggle Sub-menus on Mobile
function toggleMobileDropdown(btn) {
  if (window.innerWidth <= 960) {
    btn.parentElement.classList.toggle('open');
  }
}




document.getElementById('consultationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents standard page reload

    // Grab values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const immigrationType = document.getElementById('immigrationType').value;
    const message = document.getElementById('message').value;

    // Your WhatsApp phone number with country code (e.g., Kuwait: 96560917575)
    const whatsappNumber = "8437953411"; 

    // Construct the formatted WhatsApp message
    const text = `*New Consultation Request*%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Phone:* ${phone}%0A` +
                 `*Immigration Type:* ${immigrationType}%0A` +
                 `*Message:* ${message}`;

    // Open WhatsApp URL in a new tab
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
  });



  const sliderWrap = document.getElementById('videoSliderWrap');
  const prevBtn = document.getElementById('videoPrevBtn');
  const nextBtn = document.getElementById('videoNextBtn');

  // Scroll amount per click (card width + gap)
  const scrollAmount = 364; 

  nextBtn.addEventListener('click', () => {
    sliderWrap.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    sliderWrap.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  // Modal Functions for Video Playback
  function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoIframeContainer');
    container.innerHTML = `<iframe width="100%" height="460" src="${videoUrl}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = 'flex';
  }

  function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoIframeContainer');
    container.innerHTML = ''; // Stops video & audio immediately
    modal.style.display = 'none';
  }

  // Close when clicking the dark background outside the video
  function closeVideoModalOnBg(event) {
    if (event.target.id === 'videoModal') {
      closeVideoModal();
    }
  }

  // Close when pressing the Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeVideoModal();
    }
  });
  