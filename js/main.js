document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuIcon = document.getElementById('icon');
    const menu = document.getElementById('menu');
    
    if (menuIcon && menu) {
      menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
      });
    }
  
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
      });
      
      testimonials[index].classList.add('active');
      currentTestimonial = index;
    }
  
    // Auto-rotate testimonials
    if (testimonials.length > 0) {
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      }, 5000);
    }
  
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        count++;
        cartCount.textContent = count;
        
        // Add animation
        this.textContent = 'Added!';
        this.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.style.backgroundColor = '';
        }, 1000);
      });
    });
  
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
      });
    }
  });