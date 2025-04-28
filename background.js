async function findMatchingBottle(title, price) {
  const normalizedTitle = normalizeTitle(title);
  const searchUrl = `https://services.baxus.co/api/search/listings?from=0&size=20&listed=true&q=${encodeURIComponent(normalizedTitle)}`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();
    if (data?.items?.length > 0) {
      const match = bestFuzzyMatch(normalizedTitle, data.items);
      if (match) {
        const savings = parseFloat(price) - parseFloat(match.price);
        if (savings > 0) {
          chrome.storage.local.set({ comparisonResult: { match, savings } });

          // BONUS: Send a notification
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon128.png",
            title: "Better Deal Found!",
            message: `Save $${savings.toFixed(2)} on BAXUS!`,
            priority: 2
          });
        }
      }
    }
  } catch (err) {
    console.error('Error fetching BAXUS data:', err);
  }
}


function normalizeTitle(title) {
  return title.toLowerCase()
    .replace(/whisky|whiskey|wine|bottle|single malt|year old/gi, '')
    .replace(/[^\w\s]/gi, '')
    .trim();
}

