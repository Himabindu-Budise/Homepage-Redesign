// Main JavaScript for QualTechEdge Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initScrollAnimations();
    initSmoothScrolling();
    initNavbarEffects();
    initButtonAnimations();
    initCounterAnimations();
    initParallaxEffects();
});

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll([
        '.animate-fade-in',
        '.animate-slide-up',
        '.animate-slide-down',
        '.animate-slide-left',
        '.animate-slide-right'
    ].join(', '));

    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const activeLink = document.querySelector(`.navbar-nav .nav-link[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Navbar scroll effects
function initNavbarEffects() {
    const header = document.querySelector('.custom-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
            header.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
            header.style.transform = 'translateY(0)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
        
        lastScroll = currentScroll;
    });
}

// Button hover animations
function initButtonAnimations() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i.bi-arrow-right');
            if (icon) {
                icon.style.transform = 'translateX(4px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i.bi-arrow-right');
            if (icon) {
                icon.style.transform = 'translateX(0)';
            }
        });
    });
}

// Counter animations for stats
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, counterOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    const isTime = target.includes('/');
    
    let endValue;
    if (isTime) {
        // For "24/7" type values, just animate opacity
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease';
            element.style.opacity = '1';
        }, 100);
        return;
    } else if (target.includes('M')) {
        endValue = parseInt(target) * 1000000;
    } else {
        endValue = parseInt(target.replace(/[^\d]/g, ''));
    }
    
    let startValue = 0;
    const duration = 2000;
    const increment = endValue / (duration / 16);
    
    const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            clearInterval(timer);
            startValue = endValue;
        }
        
        let displayValue;
        if (target.includes('M')) {
            displayValue = Math.floor(startValue / 1000000) + 'M+';
        } else {
            displayValue = Math.floor(startValue) + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
        }
        
        element.textContent = displayValue;
    }, 16);
}

// Parallax effects for floating elements
function initParallaxEffects() {
    const floatingElements = document.querySelectorAll('.float-1, .float-2, .float-3');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.2;
            element.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Form handling (if forms are added)
function handleFormSubmission() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = this.querySelector('[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                
                // Reset form
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'info'} position-fixed`;
    notification.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    notification.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-check-circle me-2"></i>
            ${message}
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Lazy loading for images (if images are added)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Log page load time
    window.addEventListener('load', function() {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
    
    // Monitor scroll performance
    let ticking = false;
    function updateScrollPosition() {
        // Scroll-related calculations here
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    });
}

// Initialize performance monitoring
initPerformanceMonitoring();

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}