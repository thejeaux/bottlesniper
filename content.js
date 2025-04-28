function scrapeBottleInfo() {
  const possibleSelectors = [
    'h1', '.product-title', '.product-name', '.item-title'
  ];
  const priceSelectors = [
    '.price', '.product-price', '.sale-price'
  ];

  let title = null;
  for (let sel of possibleSelectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText.length > 3) {
      title = el.innerText.trim();
      break;
    }
  }

  let price = null;
  for (let sel of priceSelectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText.length > 1) {
      price = el.innerText.replace(/[^\d.]/g, '');
      break;
    }
  }

  if (title && price) {
    chrome.runtime.sendMessage({ type: 'bottleInfo', title, price });
  }
}

window.onload = () => {
  setTimeout(scrapeBottleInfo, 2000); // slight delay for page load
};

