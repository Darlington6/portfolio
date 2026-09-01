// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupThemeSwitcher();
    setupProjectForm();
    setFooterYear();
    syncNavbarHeight();
});

// Keep --navbar-h matched to the real rendered navbar height, so the mobile
// drawer and its overlay start exactly where the navbar ends, on any device.
function syncNavbarHeight() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const update = () => {
        document.documentElement.style.setProperty('--navbar-h', `${navbar.offsetHeight}px`);
    };

    update();
    window.addEventListener('resize', update);
}

// Keep the footer copyright year current without a yearly manual edit
function setFooterYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Setup mobile menu — a slide-in drawer that closes on outside click, Escape, or nav link
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.getElementById('navOverlay');
    const closeBtn = document.querySelector('.nav-close');

    if (!hamburger || !navMenu || !overlay) return;

    const isOpen = () => navMenu.classList.contains('open');

    const openMenu = () => {
        navMenu.classList.add('open');
        overlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
        navMenu.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMenu = () => (isOpen() ? closeMenu() : openMenu());

    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Clicking anywhere outside the drawer (the dimmed overlay) closes it.
    overlay.addEventListener('click', closeMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) closeMenu();
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Theme switcher — Terminal / Glass / Warm
function setupThemeSwitcher() {
    const buttons = document.querySelectorAll('.theme-btn');
    if (!buttons.length) return;

    const current = document.documentElement.getAttribute('data-theme') || 'terminal';
    setActiveThemeButton(current);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme-choice');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);
            setActiveThemeButton(theme);
        });
    });
}

function setActiveThemeButton(theme) {
    document.querySelectorAll('.theme-btn').forEach(button => {
        const isActive = button.getAttribute('data-theme-choice') === theme;
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

// "Suggest a Project" contact form — submits via FormSubmit's AJAX endpoint
// so the visitor never leaves the page.
function setupProjectForm() {
    const form = document.getElementById('projectForm');
    if (!form) return;

    const status = form.querySelector('.form-status');
    const submitBtn = form.querySelector('.form-submit');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Spam protection for the "_honey" field is handled server-side by
        // FormSubmit. Don't also gate it here: mobile browsers sometimes
        // autofill hidden fields, and silently dropping a real submission
        // with zero feedback is worse than the spam it would occasionally miss.

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        status.textContent = '';
        status.classList.remove('form-status-error');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(form)))
            });

            if (!response.ok) throw new Error('Request failed');

            form.reset();
            status.textContent = "Thanks, that's in my inbox. I'll follow up soon.";
        } catch (err) {
            status.textContent = "Something went wrong sending that. Please email me directly instead.";
            status.classList.add('form-status-error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Idea';
        }
    });
}

// Smooth scrolling for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
