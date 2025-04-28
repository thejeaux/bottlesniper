# 🥃 BottleSniper

**Find better whisky and wine deals instantly.**

BottleSniper is a Chrome extension that scrapes bottle information from retail websites and compares prices against the BAXUS marketplace. Save money, find rare bottles, and shop smarter — automatically.

---

## 🚀 Features

- Scrape bottle title and price automatically from retailers.
- Query BAXUS marketplace in real-time using their API.
- Fuzzy matching for smart bottle name comparison.
- Display savings and direct links to better BAXUS deals.
- Desktop notifications when a better deal is found.
- Lightweight, fast, and privacy-respecting.

---

## 🛠 How to Install

1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked**.
5. Select the `bottlesniper/` folder.
6. Extension icon will appear in your toolbar!

---

## 🔎 Supported Sites

- Wine.com
- TotalWine.com
- Drizly.com
- (More being added!)

---

## 🧠 Technical Overview

- Chrome Extension (Manifest v3)
- JavaScript, Fuse.js for fuzzy search
- BAXUS REST API:  
  `GET https://services.baxus.co/api/search/listings?from=0&size=20&listed=true`
- Optimized for performance and minimal API calls.

---

## 🧪 Future Improvements

- **Bottle Watchlist**: Save bottles and get automatic alerts for better prices.
- **Historical Price Tracking**: Mini charts showing past prices for smarter buying decisions.
- **Site-Specific Templates**: Improved scraping for each major retailer.
- **User Account Syncing** (optional future phase).

---

## 📜 License

MIT License.

