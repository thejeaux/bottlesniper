# BottleSniper Extension

BottleSniper is a Chrome extension that scrapes whisky and wine bottle information from retailer websites and compares them with BAXUS marketplace listings to find better deals.

## Features
- Scrapes bottle title and price automatically.
- Queries BAXUS API to find matching bottles.
- Calculates potential savings.
- Provides clean popup with direct link to BAXUS listing.

## How to Install
1. Download this repository or clone it.
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle top right).
4. Click "Load unpacked".
5. Select the `bottlesniper/` folder.
6. Extension will be installed.

## Supported Sites
- Basic scraping works on many sites like wine.com, totalwine.com, drizly.com.
- (Add more with improved scraping logic.)

## BAXUS API
We query:
https://services.baxus.co/api/search/listings?from=0&size=20&listed=true

## Notes
- Extension respects user privacy.
- Matches based on fuzzy search for better accuracy.
- Optimized for speed and small size.
"# bottlesniper" 
## Future Improvements

BottleSniper is fully functional, but here are some future features planned to make it even better:

- **Bottle Watchlist**: Users can save bottles they are interested in. BottleSniper will automatically monitor BAXUS listings and notify users if a better price appears later.
  
- **Historical Price Tracking**: Track past prices of bottles and display simple mini price charts in the popup. Helps users understand market trends and make smarter purchasing decisions.

- **Site-Specific Optimizations**: Custom scraping templates for popular retailers like Wine.com, Drizly, and TotalWine to further improve accuracy and speed.

- **User Accounts (optional future phase)**: Allow users to create a lightweight account (optional) to sync their watchlists across devices.

