// analytics.js – Centralized GA4 event tracking for Super Site 2
// Debug mode enabled – set debug_mode false before production deployment
const GA_DEBUG = true;

function gtag(){dataLayer.push(arguments);}

function trackEvent(eventName, params = {}) {
  if (GA_DEBUG) {
    console.log('GA4 Event:', eventName, params);
  }
  gtag('event', eventName, params);
}

// ------- Event listeners ------- //
// CTA button clicks (any element with data-ga-cta)
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-ga-cta]');
  if (!el) return;
  const label = el.getAttribute('data-ga-cta') || el.textContent.trim();
  trackEvent('cta_click', {label});
});

// Theme toggle (dark/light) – element with id "theme-toggle"
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function(){
    const mode = document.documentElement.dataset.theme || 'light';
    trackEvent('theme_toggle', {mode});
  });
}

// Form submissions – any <form> with data-ga-form attribute
document.addEventListener('submit', function(e){
  const form = e.target;
  if (!form.matches('[data-ga-form]')) return;
  const formId = form.id || 'unknown_form';
  trackEvent('form_submit', {form_id: formId});
});

// Social media link clicks – elements with data-ga-social
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-ga-social]');
  if (!el) return;
  const platform = el.getAttribute('data-ga-social');
  const href = el.href || '';
  trackEvent('social_click', {platform, href});
});

// Navigation link clicks – elements with data-ga-nav
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-ga-nav]');
  if (!el) return;
  const section = el.getAttribute('data-ga-nav') || el.textContent.trim();
  trackEvent('nav_click', {section});
});

// Contact intent – mailto links or contact form submissions
document.addEventListener('click', function(e){
  const el = e.target.closest('a[href^="mailto:"]');
  if (el) {
    trackEvent('contact_intent', {method: 'email', href: el.href});
  }
});

// Ensure GA library is loaded before attaching listeners
if (typeof gtag !== 'function') {
  console.warn('gtag.js not loaded – GA4 events will not be sent.');
}
