// ab_test.js – A/B testing implementation for Super Site 2
// Tracks variant exposure via GA4 events and applies dynamic DOM modifications

(function() {
  // 1. Generate or retrieve the variant from LocalStorage for persistence
  var variant = localStorage.getItem('ab_test_variant');
  if (!variant) {
    variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem('ab_test_variant', variant);
  }
  
  // 2. Apply modifications when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    console.log('[A/B Test] Active Experiment: "hero_cta_text_opt"');
    console.log('[A/B Test] Assigned Variant:', variant);
    
    // Find hero section CTA buttons
    // Variant A: "Get Started Now"
    // Variant B: "Join SuperSite & Excel"
    if (variant === 'B') {
      // Select the primary "Get Started Now" CTA link in the hero section
      var heroCta = document.querySelector('a[href="login.html"]');
      if (heroCta && heroCta.textContent.trim() === 'Get Started Now') {
        heroCta.innerHTML = 'Join SuperSite & Excel <i class="fas fa-arrow-right ml-2"></i>';
        console.log('[A/B Test] Applied Variant B changes (Updated Hero CTA Button Text)');
      }
    }
    
    // 3. Track exposure event in GA4
    if (typeof gtag === 'function') {
      gtag('event', 'ab_test_exposure', {
        'test_name': 'hero_cta_text_opt',
        'variant': variant
      });
      console.log('[A/B Test] Logged ab_test_exposure event in GA4');
    } else {
      console.warn('[A/B Test] GA4 gtag function not found – exposure event will queue.');
    }
  });
})();
