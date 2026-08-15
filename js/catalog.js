// Sample Dataset of Antiques & Memorabilia
const catalogData = [
  {
    id: 101,
    title: "1920s Omega Pocket Watch",
    category: "Horology",
    era: "Art Deco",
    estYear: 1924,
    currentBid: 1450,
    bidsCount: 8
  },
  {
    id: 102,
    title: "1898 Queen Victoria Gold Sovereign",
    category: "Numismatics",
    era: "Victorian",
    estYear: 1898,
    currentBid: 620,
    bidsCount: 14
  },
  {
    id: 103,
    title: "1952 Topps Mickey Mantle Card (Reprint)",
    category: "Sports",
    era: "Mid-Century",
    estYear: 1952,
    currentBid: 310,
    bidsCount: 5
  },
  {
    id: 104,
    title: "Art Deco Bronze Bookends",
    category: "Fine Art",
    era: "Art Deco",
    estYear: 1931,
    currentBid: 480,
    bidsCount: 3
  }
];

// DOM Elements
const itemGrid = document.getElementById("item-grid");
const categoryFilter = document.getElementById("category-filter");
const eraFilter = document.getElementById("era-filter");

// Render Item Cards
function renderCatalog(items) {
  itemGrid.innerHTML = "";

  if (items.length === 0) {
    itemGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No items match the selected criteria.</p>`;
    return;
  }

  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "item-card";
    card.innerHTML = `
      <div>
        <span class="card-badge">${item.era}</span>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-meta">${item.category} • Circa ${item.estYear}</p>
      </div>
      <div class="card-footer">
        <div>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Current Bid</span>
          <span class="current-bid" id="bid-${item.id}">$${item.currentBid}</span>
        </div>
        <button class="bid-btn" onclick="placeBid(${item.id})">Place Bid</button>
      </div>
    `;
    itemGrid.appendChild(card);
  });
}

// Filter Logic
function filterCatalog() {
  const selectedCategory = categoryFilter.value;
  const selectedEra = eraFilter.value;

  const filtered = catalogData.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesEra = selectedEra === "all" || item.era === selectedEra;
    return matchesCategory && matchesEra;
  });

  renderCatalog(filtered);
}

// Interactive Bid Simulator
function placeBid(itemId) {
  const item = catalogData.find(i => i.id === itemId);
  if (item) {
    item.currentBid += 25; // Increment bid by $25
    item.bidsCount += 1;
    
    // Update DOM directly for responsiveness
    const bidElement = document.getElementById(`bid-${itemId}`);
    if (bidElement) {
      bidElement.textContent = `$${item.currentBid}`;
    }
  }
}

// Event Listeners
categoryFilter.addEventListener("change", filterCatalog);
eraFilter.addEventListener("change", filterCatalog);

// Initial Execution
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(catalogData);
});

const catalogData = [
  {
    id: 99,
    title: "1952 Topps Mickey Mantle Card",
    category: "Sports",
    era: "Mid-Century",
    estYear: 1952,
    currentBid: 1200,
    bidsCount: 15
  },
  // ... existing items below
]