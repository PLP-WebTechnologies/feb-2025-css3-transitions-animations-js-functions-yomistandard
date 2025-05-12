// User preferences management
const UserPreferences = {
    getTheme() {
        return localStorage.getItem('theme') || 'light';
    },
    setTheme(theme) {
        localStorage.setItem('theme', theme);
    },
    getAnimationState() {
        return localStorage.getItem('animationEnabled') === 'true';
    },
    setAnimationState(enabled) {
        localStorage.setItem('animationEnabled', enabled);
    }
};

// DOM Elements
const themeToggleBtn = document.getElementById('themeToggle');
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');
const galleryImages = document.querySelectorAll('.gallery-image');

// Apply saved preferences on load
function initializePreferences() {
    const savedTheme = UserPreferences.getTheme();
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const animationEnabled = UserPreferences.getAnimationState();
    if (animationEnabled) {
        animatedBox.classList.add('active');
    }
}

// Theme toggle functionality
themeToggleBtn.addEventListener('click', () => {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    UserPreferences.setTheme(isDarkTheme ? 'dark' : 'light');
});

// Box animation toggle
animateButton.addEventListener('click', () => {
    const isAnimating = animatedBox.classList.toggle('active');
    UserPreferences.setAnimationState(isAnimating);
});

// Image hover animation enhancement
galleryImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1) rotate(5deg)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Initialize preferences when page loads
document.addEventListener('DOMContentLoaded', initializePreferences);