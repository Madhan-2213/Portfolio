
       // Loading Screen
        window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hide');
            }, 1000);
        });

        // Hamburger Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            const themeIcon = document.getElementById('themeIcon');
            const themeText = document.getElementById('themeText');
            
            body.classList.toggle('dark');
            
            if (body.classList.contains('dark')) {
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
            } else {
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark';
            }
            
            // Save theme preference
            localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark');
            document.getElementById('themeIcon').textContent = '☀️';
            document.getElementById('themeText').textContent = 'Light';
        }

        // Typing Animation
        const typedTextElement = document.getElementById('typedText');
        const text = "Hi, I'm Madhan ";
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typedTextElement.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(typeText, 100);
            }
        }

        setTimeout(typeText, 1500);

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const progressBar = document.getElementById('progressBar');
            const scrollTop = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / documentHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for Section Animations
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        // Add stagger animation to skill badges
        const skillBadges = document.querySelectorAll('.skill-badge');
        skillBadges.forEach((badge, index) => {
            badge.style.animationDelay = `${index * 0.1}s`;
            badge.classList.add('animate-fadeInUp');
        });

        // Add stagger animation to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('animate-fadeInUp');
        });

        // Add shimmer effect to project cards
        function addShimmerEffect() {
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('shimmer');
                    setTimeout(() => {
                        card.classList.remove('shimmer');
                    }, 2000);
                }, index * 500);
            });
        }

        // Trigger shimmer effect on scroll into view
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        addShimmerEffect();
                    }, 1000);
                    projectObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            projectObserver.observe(projectsSection);
        }

        // Add periodic shimmer effect
        setInterval(addShimmerEffect, 15000); // Every 15 seconds

        // Add stagger animation to achievement items
        const achievementItems = document.querySelectorAll('.achievement-item');
        achievementItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-fadeInLeft');
        });

        // Add stagger animation to certification cards
        const certCards = document.querySelectorAll('.cert-card');
        certCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fadeInUp');
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Add hover effect to social links
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-3px) scale(1.1) rotate(5deg)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            });
        });

        // Add click ripple effect to buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS for ripple effect
        const style = document.createElement('style');
        style.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Enhanced scroll animations with different directions
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.skill-badge, .project-card, .cert-card');
            
            elements.forEach((element, index) => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    // Add different animation directions based on index
                    if (index % 3 === 0) {
                        element.style.animation = `fadeInLeft 0.6s ease ${index * 0.1}s forwards`;
                    } else if (index % 3 === 1) {
                        element.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
                    } else {
                        element.style.animation = `fadeInRight 0.6s ease ${index * 0.1}s forwards`;
                    }
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);

        // Navbar background change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = body.classList.contains('dark') 
                    ? 'rgba(0, 8, 20, 0.98)' 
                    : 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = body.classList.contains('dark') 
                    ? 'rgba(0, 8, 20, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = 'none';
            }
        });

        // Add floating animation to profile picture
        const profilePic = document.querySelector('.profile-pic-inner');
        if (profilePic) {
            setInterval(() => {
                profilePic.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 10}px)`;
            }, 16);
        }

        // Animate skill badges on hover (remove rotation)
        document.querySelectorAll('.skill-badge').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                badge.style.transform = 'translateY(-2px)';
            });
            
            badge.addEventListener('mouseleave', () => {
                badge.style.transform = 'translateY(0)';
            });
        });

        // Add particle effect (optional enhancement)
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'var(--yellow)';
            particle.style.borderRadius = '50%';
            particle.style.opacity = '0.7';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '999';
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            document.body.appendChild(particle);
            
            const animation = particle.animate([
                { transform: 'translateY(0px)', opacity: 0.7 },
                { transform: 'translateY(-100px)', opacity: 0 }
            ], {
                duration: 3000,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => particle.remove();
        }

        // Create particles occasionally
        setInterval(createParticle, 2000);

        // Certificate Modal Functionality
        const certModal = document.getElementById('certModal');
        const certModalOverlay = document.getElementById('certModalOverlay');
        const certModalClose = document.getElementById('certModalClose');

        // Certificate data with image paths
        const certData = {
            ML: {
                title: 'Machine Learning for All',
                images: ['asset/Machine Learning for All.jpg']
            },
            ISB: {
                title: 'Infosys SpringBoard',
                images: [
                    'asset/java programming fundamentals page.jpg',
                    'asset/java se 8 features page.jpg',
                    'asset/java language Features page.jpg'
                ]
            },
            NASSCOM: {
                title: 'Nasscom Certificate',
                images: ['asset/Nasscom.jpg']
            },
            NPTEL: {
                title: 'NPTEL Certificates',
                images: [
                    'asset/Python for Data Science.jpg',
                    'asset/Data Analytics with python.jpg'
                ]
            },
            // Internship certificate data
            zidio: {
                title: 'Zidio Development - Internship Certificate',
                images: ['asset/Training Certificate.jpg'] // Add your certificate image path here
            }
        };

        // Add modal functionality to existing certificate cards
        document.querySelectorAll('.cert-card').forEach(card => {
            // Add click event for modal
            card.addEventListener('click', () => {
                const certType = card.getAttribute('data-cert');
                const cert = certData[certType];
                
                if (cert) {
                    // Update modal title
                    document.getElementById('certModalTitle').textContent = cert.title;
                    
                    // Clear previous carousel content
                    const carouselTrack = document.getElementById('carouselTrack');
                    const carouselIndicators = document.getElementById('carouselIndicators');
                    carouselTrack.innerHTML = '';
                    carouselIndicators.innerHTML = '';
                    
                    // Add all certificate images to the carousel
                    cert.images.forEach((imageSrc, index) => {
                        // Create carousel item
                        const carouselItem = document.createElement('div');
                        carouselItem.className = 'cert-carousel-item';
                        
                        const image = document.createElement('img');
                        image.src = imageSrc;
                        image.alt = `${cert.title} - Certificate ${index + 1}`;
                        image.className = 'cert-carousel-image';
                        
                        carouselItem.appendChild(image);
                        carouselTrack.appendChild(carouselItem);
                        
                        // Create indicator dot
                        const dot = document.createElement('div');
                        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                        dot.addEventListener('click', () => goToSlide(index));
                        carouselIndicators.appendChild(dot);
                    });
                    
                    // Initialize carousel
                    currentSlide = 0;
                    updateCarousel();
                    
                    certModal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                }
            });
        });

        // Carousel functionality
        let currentSlide = 0;
        let totalSlides = 0;

        function updateCarousel() {
            const carouselTrack = document.getElementById('carouselTrack');
            const dots = document.querySelectorAll('.carousel-dot');
            const prevBtn = document.getElementById('carouselPrev');
            const nextBtn = document.getElementById('carouselNext');
            
            totalSlides = carouselTrack.children.length;
            
            // Update track position
            const translateX = -currentSlide * 100;
            carouselTrack.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide === totalSlides - 1;
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }

        // Add event listeners for carousel controls
        document.getElementById('carouselNext').addEventListener('click', nextSlide);
        document.getElementById('carouselPrev').addEventListener('click', prevSlide);

        // Touch/Swipe support
        let startX = 0;
        let isDragging = false;

        const carousel = document.getElementById('certCarousel');
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });

        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            // Minimum swipe distance
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextSlide(); // Swipe left - go to next
                } else {
                    prevSlide(); // Swipe right - go to previous
                }
            }
            
            isDragging = false;
        });

        // Mouse drag support for desktop
        carousel.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            carousel.style.cursor = 'grabbing';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });

        carousel.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            
            const endX = e.clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            isDragging = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
            carousel.style.cursor = 'grab';
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!certModal.classList.contains('active')) return;
            
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });

        // Close modal when clicking close button
        certModalClose.addEventListener('click', () => {
            certModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking overlay
        certModalOverlay.addEventListener('click', () => {
            certModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && certModal.classList.contains('active')) {
                certModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Internship completion certificate click handler
        const completionBadge = document.querySelector('.completion-badge');
        if (completionBadge) {
            completionBadge.addEventListener('click', () => {
                const internId = completionBadge.getAttribute('data-intern');
                if (internId && certData[internId]) {
                    const certInfo = certData[internId];
                    
                    // Update modal content
                    certModalTitle.textContent = certInfo.title;
                    
                    // Clear and rebuild carousel track
                    carouselTrack.innerHTML = '';
                    
                    certInfo.images.forEach((imageSrc, index) => {
                        const carouselItem = document.createElement('div');
                        carouselItem.className = 'cert-carousel-item';
                        
                        const image = document.createElement('img');
                        image.src = imageSrc;
                        image.alt = `${certInfo.title} - Certificate ${index + 1}`;
                        image.className = 'cert-carousel-image';
                        
                        carouselItem.appendChild(image);
                        carouselTrack.appendChild(carouselItem);
                    });
                    
                    // Update carousel dots
                    const carouselIndicators = document.getElementById('carouselIndicators');
                    carouselIndicators.innerHTML = '';
                    certInfo.images.forEach((_, index) => {
                        const dot = document.createElement('div');
                        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                        dot.addEventListener('click', () => goToSlide(index));
                        carouselIndicators.appendChild(dot);
                    });
                    
                    // Reset to first slide
                    currentSlide = 0;
                    updateCarousel();
                    
                    certModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        console.log('🚀 Portfolio loaded successfully!');
        console.log('🎨 Theme system active');
        console.log('✨ All animations loaded');
        console.log('🏆 Certificate modal system ready!');

