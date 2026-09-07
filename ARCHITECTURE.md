# Complete Codebase Architecture & Technical Engineering Guide
**Organization:** htechnologies  
**Lead Engineer:** Harrison (Busia, Kenya)  
**Version:** 3.0.0 (Grounded Engineering Release)  
**Last Updated:** September 2026  

---

## 1. Architectural Philosophy & Core Tenets

The **htechnologies** platform is architected around the principles of **grounded engineering precision**, high availability, strict data privacy, and resilient offline capabilities.

### Strict Design & Engineering Mandates
1. **Zero Vibe-Coded Tropes:** Absolutely no purple gradients, pill-shaped buttons on the core landing experience, artificial metric counters, or fake user reviews.
2. **Zero Distraction Elements:** 0 Unicode emojis, 0 em dashes (`—` / `&mdash;`), 0 en dashes (`–` / `&ndash;`), and zero cursor-following or 3D tilt scripts.
3. **Decoupled Frontend Resiliency:** The website operates via a Progressive Web App (PWA) shell. If client network connectivity drops or the remote backend undergoes maintenance, browsing remains uninterrupted, and form submissions are queued in local persistent storage.
4. **Hardened Security by Design:** 
   - Strict client-side parameterization and SQL/XSS input sanitization before any data transmission.
   - Strict Broken Access Control (BAC) prevention in portal authentication: users cannot access records belonging to another UID.
5. **Statutory Compliance:** Adherence to the **Kenya Data Protection Act (DPA 2019)** regarding diagnostic records, customer privacy, and technical data handling.

---

## 2. Directory & File Topology

```
Cybertech Portfolio/
├── .gitignore                                 # Git ignore directives
├── ARCHITECTURE.md                            # Complete Codebase Architecture & Technical Guide
├── CNAME                                      # GitHub Pages custom domain routing (htechnologies.co.ke)
├── README.md                                  # High-level repository overview and quickstart
├── favicon.ico                                # Standard 32x32 browser tab icon
├── htechnologies-icon-192.png                 # PWA application icon (192x192)
├── htechnologies-icon-512.png                 # PWA high-resolution application icon (512x512)
├── htechnologies-logo.png                     # Primary dark-navy brand mark (optimized for light header)
├── htechnologies-logo-white.png               # High-contrast white brand mark (optimized for dark footer)
├── index.html                                 # Primary enterprise landing portal & systems showcase
├── KSM_Half.jpeg                              # Lead Engineer portrait (Harrison)
├── llms.txt                                   # AI Search & LLM discovery knowledge profile
├── manifest.json                              # W3C Web App Manifest for mobile installation
├── privacy.html                               # Kenya DPA 2019 Privacy Policy & Data Governance
├── robots.txt                                 # Search crawler & AI bot access configuration
├── script.js                                  # Core client-side reactivity, validation & offline sync
├── sitemap.xml                                # Canonical search index XML map
├── style.css                                  # Global industrial design system & typography tokens
├── sw.js                                      # Progressive Web App Service Worker (v3 Cache Engine)
├── terms.html                                 # Operational Terms of Service & Service Level Standards
│
├── login/                                     # Dedicated Authentication & Systems Portal
│   ├── login-backdrop.jpg                     # Ambient dusk savannah landscape backdrop
│   ├── login-banner.jpg                       # Top graphical banner ("Welcome to the Website")
│   └── login.html                             # Secured Firebase Authentication & Document Access
│
└── [Vector Assets]                            # High-precision inline/linked SVGs
    ├── email-opened-svgrepo-com.svg           # Office email communication icon
    ├── facebook-svgrepo-com.svg               # Official Facebook page badge
    ├── phone-call-communication-svgrepo-com.svg # Direct telephone line icon
    ├── whatsapp-svgrepo-com.svg               # WhatsApp direct desk icon
    └── youtube-color-svgrepo-com.svg          # Official YouTube channel badge
```

---

## 3. Detailed Component Breakdown

### 3.1. Primary Landing Experience (`index.html`)
The landing page serves as an authoritative technical presentation of Harrison's multi-disciplinary engineering practice:
* **Top Header:** Full-width sticky bar spanning 100% of the screen. Features the `htechnologies` brand logo on the left margin and the `Get Support` CTA on the right margin. Contains zero distracting navigation clutter.
* **Degraded Network / Backend Outage Banner (`#service-status-banner`):** A subtle, accessible notification bar that automatically reveals if the user goes offline, offering self-healing connection retry mechanisms.
* **Hero Section:** Concrete, grounded headline declaring Harrison's core competencies (Enterprise Hardware Diagnostics, Safaricom Daraja M-Pesa Integration, Point of Sale Systems, and Hardened Web Engineering).
* **Bio & Technical Skills Matrix (`#bio`):** Sticky portrait card framing Harrison alongside categorized competency pills (Operating Systems & Hardware, Full-Stack Architecture, Payment Rails, Office Automation).
* **Flagship Enterprise Systems (`#flagship-projects`):**
  1. *Cybertech POS Platform:* Touchscreen retail software with offline IndexedDB caching and thermal ESC/POS printing.
  2. *FixIt IT Knowledge Base (`fixit.cybertechcomps.com`):* Multi-platform diagnostic portal with 117+ verified resolution guides.
  3. *Cybertech Biashara Platform (`cybertechcomps.com`):* SME inventory ledger with direct Daraja 2.0 STK push and webhook reconciliation.
  4. *Cybertech Rentals SaaS:* Automated lease scheduling and tenant billing engine.
* **Engineering Standards & Commitments (`#standards`):** Concrete guarantees including component-level oscilloscope verification, parameterized queries, and confidential client diagnostics.
* **Service Desk & Office Card (`#contact`):** Real-time interactive inquiry form paired with physical headquarters information (ABSA Bank Building, Busia, Kenya).
* **Unified 4-Column Footer (`<footer>`):**
  * *Column 1:* High-contrast white brand logo (`htechnologies-logo-white.png`), mission statement, and social channels.
  * *Column 2:* Platform navigation anchors.
  * *Column 3:* Physical office address, direct telephone lines, official email, and operating hours.
  * *Column 4:* Technical engineering bulletin newsletter signup.
  * *Utility Bottom Bar:* Copyright notice with **hidden stealth padlock** (`.stealth-login-lock`) and **stealth dot** (`.stealth-login-dot`) linking discreetly to the staff portal.

---

### 3.2. Authentication & Data Layer (`login/login.html`)
The portal provides secure sign-in and account recovery for authorized clients and administrative staff:
* **Visual Architecture:** Styled faithfully after the reference savanna wildlife visual hierarchy (deep plum backdrop, ambient gradient, rounded 20px card container, elephant/mountain scenery banner, capsule pill input fields with embedded user/padlock icons, and a rich plum login button).
* **Authentication Engine:** Powered by modern modular **Firebase 11.6 SDK** (`firebase-app.js`, `firebase-auth.js`, `firebase-firestore.js`).
* **Security Guardrail 1 (SQL / Injection Prevention):** Form submissions pass through `sanitizeInput()` which strips executable tags, SQL escape sequences (`' OR '1'='1`), and dangerous keywords before dispatch.
* **Security Guardrail 2 (Broken Access Control Prevention):** Enforces strict UID checking in `verifyUserOwnership()`. A user is barred from viewing or retrieving files/documents that do not match their assigned `currentUser.uid`.

---

### 3.3. Design System & Style Tokens (`style.css`)
All styling is centralized around semantic CSS custom properties defined in `:root`:

```css
:root {
    /* Brand Colors */
    --primary-color: #0284c7;           /* Industrial Tech Blue */
    --primary-hover: #0369a1;           /* Deep Blue Hover */
    --accent-cyan: #00e5ff;             /* Precision Diagnostic Cyan */
    --accent-indigo: #6366f1;           /* Deep System Accent */

    /* Typography Surfaces */
    --text-color-dark: #0f172a;         /* High-contrast Slate 900 */
    --text-color-medium: #334155;       /* Body Slate 700 */
    --text-color-muted: #64748b;        /* Secondary Slate 500 */
    --surface-light: #ffffff;           /* Card White */
    --surface-bg: #f8fafc;              /* Canvas Background */
    --surface-dark: #0f172a;            /* Dark Slate Footer Canvas */

    /* Border & Radii */
    --border-color: #e2e8f0;            /* Hairline Border */
    --border-radius-btn: 6px;           /* Modern Tactile Rectangular Radii */
    --border-radius: 12px;              /* Card Standard */
    --border-radius-lg: 16px;           /* Large Container */

    /* Elevation */
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.07);
    --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.08);
}
```

#### Key Layout Behaviors:
* **Edge-to-Edge Sticky Header:** `position: sticky; top: 0; width: 100%;` with background translucency `rgba(255, 255, 255, 0.94)` and `backdrop-filter: blur(16px)`.
* **Dark Slate Footer:** Spans full viewport width with `background: #0f172a;` and utilizes the dedicated white logo asset `htechnologies-logo-white.png` for optimal contrast.
* **Stealth Portal Links:** `.stealth-login-lock` and `.stealth-login-dot` are styled with subtle opacity (`0.15` and `0.25`), rendering them invisible to ordinary visitors while remaining functional when hovered.

---

### 3.4. Client-Side Runtime Engine (`script.js`)
Contains all business logic, input sanitizers, and background services:
1. **`initConnectivityMonitor()`:** Hooks into `window.addEventListener('offline')` and `window.addEventListener('online')` to trigger the status banner and manage connection health.
2. **`initSmoothScroll()`:** Handles in-page anchor jumps with a precise `90px` header compensation offset, avoiding element obscuration by the fixed top bar.
3. **`initInquiryForm()` & `saveInquiryOffline()`:** Intercepts contact form dispatches. If the client is offline, the payload is preserved in `localStorage` under `cybertech_offline_inquiries` and automatically dispatched via `syncOfflineInquiries()` once reconnected.
4. **`sanitizeInput()`:** Strips script tags, quotes, and dangerous database control tokens from string inputs.
5. **`initScrollReveal()`:** Uses `IntersectionObserver` with an entry threshold of `0.08` to gracefully reveal sections without taxing the GPU.

---

### 3.5. Progressive Web App (PWA) Engine (`sw.js` & `manifest.json`)
* **Service Worker Cache Store:** `htechnologies-v3-shell`.
* **Pre-cached Assets:** Shell HTML files (`index.html`, `privacy.html`, `terms.html`), core styles (`style.css`), client runtime (`script.js`), web manifest (`manifest.json`), icons, and vector branding.
* **Routing Strategy:**
  * *Navigation Requests (`request.mode === 'navigate'`):* Network-first with automatic fallback to cached `index.html`.
  * *Static Assets (CSS, JS, Images):* Stale-while-revalidate strategy to guarantee immediate paint times.

---

### 3.6. SEO, Crawlers & AI Discoverability (`robots.txt`, `sitemap.xml`, `llms.txt`)
* **`robots.txt`:** Fully open to search engine crawlers (Googlebot, Bingbot) and explicitly permits leading AI retrieval agents (**GPTBot**, **ClaudeBot**, **PerplexityBot**, **Applebot-Extended**).
* **`sitemap.xml`:** Lists canonical endpoints (`https://htechnologies.co.ke/`, `privacy.html`, `terms.html`).
* **`llms.txt`:** Implements the emerging standard for LLM context ingestion, summarizing Harrison's credentials, production systems, and physical office location for LLM agents.
* **Schema.org Structured Data:** Embedded JSON-LD in `index.html` modeling the business as a `LocalBusiness`, Harrison as a `Person` with technical skills, and the site as an authoritative `WebSite`.

---

## 4. Verification & Quality Assurance Suite

The repository contains automated diagnostic scripts to verify code integrity and policy compliance:

| Test Script | Purpose | Command |
| :--- | :--- | :--- |
| `audit_clean.js` | Enforces zero emojis, zero em/en dashes, zero purple gradients, and file presence | `node scratch/audit_clean.js` |
| `check_html_links.py` | Audits all local hyperlinks, image references, and anchor tags | `python scratch/check_html_links.py` |
| `test_suite.js` | Validates manifest JSON, sitemap XML, robots.txt, SQLi/XSS sanitizer, and HTTP 200 routes | `node scratch/test_suite.js` |

---

## 5. Local Development & Deployment

### Starting the Local Development Server
To launch the background multi-threaded server on port 8080:
```bash
python "scratch/start_server.py"
```
Or with standard Python:
```bash
python -m http.server 8080 --bind 127.0.0.1
```
Navigate to:
* **Homepage:** `http://127.0.0.1:8080/index.html`
* **Staff Login:** `http://127.0.0.1:8080/login/login.html`

### Git Workflow & Remote Deployments
All ongoing enhancements follow a strict branching model:
```bash
# Verify status
git status

# Stage & commit changes
git add <files>
git commit -m "type(scope): concise description"

# Push to feature branch
git push origin feature/grounded-engineering-overhaul
```
Official remote repository: [https://github.com/CyberTech-harry/CYBERTECH.git](https://github.com/CyberTech-harry/CYBERTECH.git)

---
*Authored with engineering precision for Harrison & htechnologies, Busia, Kenya.*
