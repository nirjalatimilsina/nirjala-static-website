document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <div class="container">
                <nav>
                    <a href="#home" class="logo">Nirjala<span>.</span></a>
                    <ul class="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }

    // Typing Animation
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const words = ['Web Developer', 'BIT Student', 'Software Engineering Learner'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typingSpeed = isDeleting ? 50 : 150;
            
            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500; // Pause before new word
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start typing effect
        setTimeout(typeEffect, 1000);
    }
    
    // Sticky Header Effect on Scroll
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(11, 17, 32, 0.95)';
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'rgba(11, 17, 32, 0.8)';
                header.style.boxShadow = 'none';
            }
        }
    });
});
