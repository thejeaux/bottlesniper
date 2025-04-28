document.addEventListener('DOMContentLoaded', async () => {
  chrome.storage.local.get('comparisonResult', (data) => {
    if (data.comparisonResult) {
      const { match, savings } = data.comparisonResult;
      document.getElementById('result').innerHTML = `
        <h2>Better Deal Found! 🎯</h2>
        <p><strong>${match.name}</strong></p>
        <p>BAXUS Price: $${match.price}</p>
        <p>You Save: <span class="savings">$${savings.toFixed(2)}</span></p>
        <a href="https://baxus.co/listings/${match.id}" target="_blank">View on BAXUS</a>
      `;
    } else {
      document.getElementById('result').innerHTML = '<p>No better deal found 😔</p>';
    }
  });
});
