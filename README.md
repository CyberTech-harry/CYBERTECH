# htechnologies | Enterprise IT Systems & Software Engineering

**Lead Engineer:** Harrison (Busia, Kenya)  
**Official Repository:** [https://github.com/CyberTech-harry/CYBERTECH.git](https://github.com/CyberTech-harry/CYBERTECH.git)  
**Live Canonical Domain:** [https://cybertechcomps.com/](https://cybertechcomps.com/)  

---

## Overview
**htechnologies** (formerly CyberTech Hexperts Solutions) delivers mission-critical enterprise diagnostics, Safaricom Daraja M-Pesa integration, high-reliability Point of Sale (POS) systems, and hardened web engineering for businesses in Kenya and worldwide.

For comprehensive architectural design decisions, directory topology, security models, and code explanations, refer to our [Complete Architecture Guide](ARCHITECTURE.md).

---

## Key Capabilities & Core Architecture
* **Grounded Industrial Design:** Minimalist, high-craft typography tokens, 100% full-width sticky header, edge-to-edge dark slate footer, and double-bezel concentric cards.
* **Progressive Web App (PWA):** Powered by `sw.js` (v3 shell) and `manifest.json` for lightning-fast asset loading and offline resilience.
* **Decoupled Frontend Resiliency:** Self-healing connectivity status banner (`#service-status-banner`) and offline form queuing via `localStorage` with automated dispatch upon reconnection.
* **Cybersecurity Hardening:**
  1. *Database Injection Immunization:* 100% parameterized query structures treating user inputs strictly as typed data literals (`sanitizeInput()`).
  2. *Broken Access Control Guard:* Strict object-level UID ownership verification in portal authentication (`verifyUserOwnership()`).
  3. *Administrative Key Shielding:* Client code uses restricted tokens; administrative keys reside strictly server-side.
* **Statutory Compliance:** Full compliance with the **Kenya Data Protection Act (DPA 2019)** regarding customer diagnostic records and privacy rights.
* **Search & AI Discovery:** Open crawler indexing (`robots.txt`, `sitemap.xml`) and structured context profiles for AI retrieval engines (`llms.txt`, Schema.org JSON-LD).

---

## Core Repository Structure
```
.
├── ARCHITECTURE.md            # Complete Codebase Architecture & Technical Guide
├── index.html                 # Main landing experience & enterprise systems showcase
├── privacy.html               # Kenya DPA 2019 Privacy Policy
├── terms.html                 # Operational Terms of Service
├── style.css                  # Unified industrial design system & typography tokens
├── script.js                  # Client runtime, validation, offline sync, & telemetry
├── sw.js                      # Progressive Web App Service Worker
├── manifest.json              # W3C Web App Manifest
├── robots.txt                 # Search engine & AI bot access configuration
├── sitemap.xml                # Canonical URL sitemap
├── llms.txt                   # AI Search & LLM context profile
├── favicon.ico                # 32x32 brand favicon
├── htechnologies-logo.png     # Dark brand logo for light top header
├── htechnologies-logo-white.png # High-contrast white brand logo for dark footer
├── htechnologies-icon-192.png # PWA mobile application icon
├── htechnologies-icon-512.png # PWA high-resolution icon
├── KSM_Half.jpeg              # Lead Engineer portrait (Harrison)
└── login/
    ├── login.html             # Secured Firebase authentication portal
    ├── login-backdrop.jpg     # Ambient savanna landscape backdrop
    └── login-banner.jpg       # Portal banner image
```

---

## Local Development
To run the local development server:
```bash
python -m http.server 8080 --bind 127.0.0.1
```
* **Homepage:** `http://127.0.0.1:8080/index.html`
* **Staff Portal:** `http://127.0.0.1:8080/login/login.html`

---

## Contact & Physical Headquarters
* **Headquarters:** ABSA Bank Building, Busia Branch, Busia (K), Kenya
* **Postal Address:** P.O. Box 313 - 50400 Busia (K)
* **Direct Lines:** +254 775 953 282 / +254 798 830 470
* **Official Email:** [contact.htechnologies@gmail.com](mailto:contact.htechnologies@gmail.com)
