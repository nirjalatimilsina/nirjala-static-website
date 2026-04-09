document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = `
            <div class="container">
                <nav>
                    <a href="index.html" class="logo">IT_PROFESSIONAL</a>
                    <ul class="nav-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="skills.html">Skills</a></li>
                        <li><a href="index.html#documents">Documents</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary">Hire Me</a>
                </nav>
            </div>
        `;
    }

    // Inject Footer
    const footer = document.querySelector('footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div>
                        <span class="logo">IT_PROFESSIONAL</span>
                        <p style="margin-top: 0.5rem; color: #aaa;">Expertise in System Administration & Server Management.</p>
                    </div>
                    <div>
                        <p>&copy; ${currentYear} Nirjala Portfolio. Built for Cloudflare Pages.</p>
                    </div>
                </div>
            </div>
        `;
    }
});
