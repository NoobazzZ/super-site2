# Lab 5 – Google Analytics 4 Implementation Report

## Goal
Integrate Google Analytics 4 (GA4) into **Super Site 2** to capture page‑view metrics and custom user interactions, and verify the implementation.

## Steps Performed
1. **Injected GA4 snippet** (`gtag.js`) into the `<head>` of all HTML pages using `inject_analytics.ps1`.
2. **Created `js/analytics.js`** – centralized event‑tracking module with listeners for:
   - CTA button clicks (`cta_click`)
   - Theme toggle (`theme_toggle`)
   - Form submissions (`form_submit`)
   - Social media link clicks (`social_click`)
   - Navigation clicks (`nav_click`)
   - Contact‑intent via `mailto:` (`contact_intent`)
3. **Added `data-ga-*` attributes** to relevant elements in the site (e.g., buttons, forms, navigation links) – this was already present in the HTML.
4. **Enabled Debug mode** (console logs) to verify events in GA4 DebugView.
5. **Verified** that each page loads the GA4 script and that events are logged in the browser console.
6. **Prepared documentation** – this Markdown report and an accompanying HTML version.

## Verification
- Opened each page in Chrome DevTools → **Console** shows `GA4 Event:` logs for every interaction.
- In GA4 **DebugView** (real‑time) the events appear with correct parameters.
- Page‑view data is successfully sent (network tab shows requests to `https://www.google-analytics.com/g/collect`).

## Recommendations
- Before production deployment, set `const GA_DEBUG = false;` in `js/analytics.js`.
- Review the event names and parameters in GA4 UI to ensure they match reporting needs.
- Optionally create custom dimensions/metrics for deeper analysis.

---
*Prepared by Denys Yanchuk (Group KNIT‑44) for the Super Site 2 project.*
