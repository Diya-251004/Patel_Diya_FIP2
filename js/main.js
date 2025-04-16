// Initialize when document is ready
const init = () => {
  // Handle mobile menu toggle
  const navToggle = document.querySelector('#icon');
  const navMenu = document.querySelector('#menu');
  
  if (navToggle && navMenu) {
    navToggle.onclick = () => {
      navMenu.classList.toggle('show');
    };
  }

  // Manage testimonial rotation
  const customerReviews = document.querySelectorAll('.testimonial');
  let activeReviewIndex = 0;
  
  const displayReview = (index) => {
    customerReviews.forEach(review => {
      review.classList.remove('active');
    });
    
    customerReviews[index].classList.add('active');
    activeReviewIndex = index;
  };

  // Auto-advance reviews if they exist
  if (customerReviews.length) {
    setInterval(() => {
      activeReviewIndex = (activeReviewIndex + 1) % customerReviews.length;
      displayReview(activeReviewIndex);
    }, 5000);
  }

  // Configure back-to-top button
  const topButton = document.querySelector('#backToTop');
  
  window.onscroll = () => {
    topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
  };

  topButton.onclick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle cart interactions
  const cartButtons = document.querySelectorAll('.add-to-cart');
  const cartDisplay = document.querySelector('.cart-count');
  let itemsInCart = 0;
  
  cartButtons.forEach(btn => {
    btn.onclick = function() {
      itemsInCart++;
      cartDisplay.textContent = itemsInCart;
      
      // Visual feedback
      this.textContent = 'Added!';
      this.style.backgroundColor = '#4CAF50';
      
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.style.backgroundColor = '';
      }, 1000);
    };
  });

  // Process contact form
  const messageForm = document.querySelector('.contact-form form');
  if (messageForm) {
    messageForm.onsubmit = function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    };
  }
};

// Start the application
if (document.readyState !== 'loading') {
  init();
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      init();
    }
  });
}