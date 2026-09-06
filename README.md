# Cybertech Portfolio

## Overview
Cybertech Portfolio is a project designed to showcase technical skills, projects, and achievements in the field of technology. It serves as a professional portfolio to highlight expertise in software development, cybersecurity, and other technical domains.

## Features & Architecture
- **Progressive Web App (PWA)**: Built with `manifest.json` and a Service Worker (`sw.js`) providing offline application shell caching and lightning-fast loading speeds.
- **Search & AI Chatbot Crawlability**: Comprehensive SEO with OpenGraph, Twitter Cards, Schema.org JSON-LD (`LocalBusiness`, `Person`, `WebSite`), standard `robots.txt` (with explicit rules for Googlebot, Bingbot, GPTBot, ClaudeBot, PerplexityBot), `sitemap.xml`, and the `llms.txt` knowledge profile.
- **Live Production Environment Status**: Real-time telemetry dashboard monitoring POS, FixIt IT Portal, Biashara, Rentals SaaS, M-Pesa FinTech, and Cloud database nodes with interactive health-check ping actions.
- **Decoupled Frontend & Backend Architecture**:
  - **Graceful Failure UI**: Sticky notification banner across the top alerting users cleanly when network or backend services are unavailable while keeping the UI fully interactive.
  - **Health Checks & Recovery**: Periodic polling and connectivity listeners (`online`/`offline`) with a seamless "Refresh" recovery trigger.
  - **Offline Form Queueing**: Preserving inquiry submissions in browser storage when disconnected and auto-syncing upon reconnection.
- **Security Vulnerability Prevention (The 3 Pillars)**:
  1. **Broken Access Control Prevention**: Strict object-level UID ownership verification before handing back data (`auth.currentUser.uid === requestedDocument.userId`).
  2. **Database Injection Immunization (SQL/NoSQL)**: 100% parameterized queries treating user inputs strictly as typed data literals rather than executable SQL/NoSQL code.
  3. **Admin Key Protection**: Frontend uses restricted public tokens; administrative and service-role credentials reside strictly server-side.

## Technologies Used
- **Frontend Architecture**: Progressive Web App (PWA), HTML5 Semantic, CSS3 (Vanguard Design Tokens, Responsive Grids), Vanilla ES6+ JavaScript.
- **Service Worker & Storage**: Cache Storage API, LocalStorage Offline Queue, IndexedDB.
- **Authentication & Cloud Database**: Firebase Client SDK, Cloud Firestore with Object-Level Ownership Rules.
- **Search & AI Discovery**: Schema.org JSON-LD, Robots.txt, Sitemap.xml, LLMs.txt.
- **Payments & Telemetry**: Safaricom M-Pesa Daraja API Integration, Real-Time Latency Telemetry.

## Pages & Structure
- **Home (`index.html`)**: Complete, modern single-page portfolio featuring Harrison's introduction, technical skill matrix, flagship production projects (POS, IT Knowledge Base, Biashara, Rentals), verified client reviews, interactive inquiry form, and physical headquarters info.
- **Client Login (`login/login.html`)**: Secure user authentication, customer file downloads, real-time environment status widget, and hardened access control.
- **PWA Files**: `manifest.json` (Web App Manifest), `sw.js` (Service Worker).
- **Search & Bot Discovery**: `robots.txt`, `sitemap.xml`, `llms.txt`.

## Getting Started
Simply open `index.html` in any modern web browser or serve it using any local static web server (such as VS Code Live Server or `npx serve`).

## Contact & Location
- **Address**: ABSA Bank Building, P.O. Box 313 - 50400 Busia (K)
- **Phone**: +254 775 953 282 | +254 798 830 470
- **Email**: [contact.htechnologies@gmail.com](mailto:contact.htechnologies@gmail.com) / [info@cybertechsolutions.com](mailto:info@cybertechsolutions.com)

