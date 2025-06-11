// Mobile nav hamburger
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNavLinks = document.getElementById('mobileNavLinks');
const mobileSidebar = document.getElementById('mobileSidebar');
const mobileSidebarOverlay = document.getElementById('mobileSidebarOverlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

if (hamburgerBtn && mobileNavLinks) {
  hamburgerBtn.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('hidden');
    mobileNavLinks.classList.toggle('animate-slide-down');
    mobileSidebar.classList.remove('-translate-x-full');
    mobileSidebarOverlay.classList.remove('hidden');
    setTimeout(() => {
      mobileSidebar.classList.add('!translate-x-0');
    }, 10);
  });
}
if (closeSidebarBtn && mobileSidebar && mobileSidebarOverlay) {
  closeSidebarBtn.addEventListener('click', () => {
    mobileSidebar.classList.remove('!translate-x-0');
    setTimeout(() => {
      mobileSidebar.classList.add('-translate-x-full');
      mobileSidebarOverlay.classList.add('hidden');
    }, 300);
    mobileNavLinks.classList.add('hidden');
  });
  mobileSidebarOverlay.addEventListener('click', () => {
    closeSidebarBtn.click();
  });
}

// Scroll progress bar
const scrollProgressBar = document.getElementById('scrollProgressBar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  if (scrollProgressBar) scrollProgressBar.style.width = progress + '%';
});

// Typewriter effect
const typewriter = document.getElementById('typewriter');
const typewriterTexts = [
  'Full-Stack Developer',
  'Lifelong Learner'
];
let typewriterIndex = 0, charIndex = 0, isDeleting = false;
function type() {
  if (!typewriter) return;
  const current = typewriterTexts[typewriterIndex];
  if (isDeleting) {
    typewriter.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
      setTimeout(type, 700);
    } else {
      setTimeout(type, 40);
    }
  } else {
    typewriter.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 90);
    }
  }
}
type();

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
function setDarkMode(isDark) {
  if (isDark) {
    html.classList.add('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    localStorage.setItem('theme', 'light');
  }
}
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    setDarkMode(!html.classList.contains('dark'));
  });
}
// On load, set theme from localStorage or system
(function () {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
})();
