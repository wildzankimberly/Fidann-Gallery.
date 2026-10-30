// Fidan Gallery Masterpieces Database (20 Works)
const artworksData = [
    {
        id: 1,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: 1503,
        category: "renaissance",
        medium: "Oil on poplar panel",
        dimensions: "77 cm × 53 cm",
        location: "Louvre Museum, Paris",
        description: "The world's most famous portrait, renowned for the enigmatic expression of the sitter, Lisa Gherardini, and Leonardo's masterful sfumato technique.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/800px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"
    },
    {
        id: 2,
        title: "The Starry Night",
        artist: "Vincent van Gogh",
        year: 1889,
        category: "modern",
        medium: "Oil on canvas",
        dimensions: "73.7 cm × 92.1 cm",
        location: "Museum of Modern Art, New York",
        description: "Painted from the asylum room window in Saint-Rémy-de-Provence, this iconic post-impressionist masterpiece depicts a dramatic swirling night sky over a tranquil village.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
        id: 3,
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: 1498,
        category: "renaissance",
        medium: "Tempera on gesso, pitch and mastic",
        dimensions: "460 cm × 880 cm",
        location: "Santa Maria delle Grazie, Milan",
        description: "Depicting the dramatic moment Jesus announces that one of his Apostles will betray him, capturing the distinct emotional reactions of the twelve disciples.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%C3%9Altima_Cena_-_Da_Vinci_5.jpg/1280px-%C3%9Altima_Cena_-_Da_Vinci_5.jpg"
    },
    {
        id: 4,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year: 1665,
        category: "baroque",
        medium: "Oil on canvas",
        dimensions: "44.5 cm × 39 cm",
        location: "Mauritshuis, The Hague",
        description: "Often referred to as the 'Mona Lisa of the North', this tronie masterpiece highlights Vermeer's breathtaking mastery of light reflection and luminous gaze.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg"
    },
    {
        id: 5,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        year: 1931,
        category: "modern",
        medium: "Oil on canvas",
        dimensions: "24 cm × 33 cm",
        location: "Museum of Modern Art, New York",
        description: "A defining surrealist work introducing the iconic melting pocket watches draped across desolate dreamscape cliffs, questioning the rigidity of time.",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"
    },
    {
        id: 6,
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        year: 1485,
        category: "renaissance",
        medium: "Tempera on canvas",
        dimensions: "172.5 cm × 278.9 cm",
        location: "Uffizi Gallery, Florence",
        description: "Depicting the goddess Venus arriving at the shore after her birth, emerging fully grown from the sea amidst classical mythology elegance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_fixed.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_fixed.jpg"
    },
    {
        id: 7,
        title: "The Great Wave off Kanagawa",
        artist: "Katsushika Hokusai",
        year: 1831,
        category: "19th-century",
        medium: "Woodblock print; ink and color on paper",
        dimensions: "25.7 cm × 37.9 cm",
        location: "Various Collections (Metropolitan Museum of Art)",
        description: "An iconic Japanese ukiyo-e print depicting a towering rogue wave threatening three fishing boats off the coast of Kanagawa, with Mount Fuji in the background.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg"
    },
    {
        id: 8,
        title: "American Gothic",
        artist: "Grant Wood",
        year: 1930,
        category: "modern",
        medium: "Oil on beaverboard",
        dimensions: "78 cm × 65.3 cm",
        location: "Art Institute of Chicago",
        description: "A famous depiction of a stern farmer and his daughter standing in front of a Carpenter Gothic house, symbolizing traditional American rural values.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
    },
    {
        id: 9,
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        year: 1642,
        category: "baroque",
        medium: "Oil on canvas",
        dimensions: "363 cm × 437 cm",
        location: "Rijksmuseum, Amsterdam",
        description: "Rembrandt's monumental group portrait of the city militia, renowned for its effective use of chiaroscuro lighting and dynamic sense of motion.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_Rembrandt_van_Rijn_-_Google_Art_Project.jpg/1280px-The_Night_Watch_-_Rembrandt_van_Rijn_-_Google_Art_Project.jpg"
    },
    {
        id: 10,
        title: "The Creation of Adam",
        artist: "Michelangelo",
        year: 1512,
        category: "renaissance",
        medium: "Fresco",
        dimensions: "280 cm × 570 cm",
        location: "Sistine Chapel, Vatican City",
        description: "Part of the Sistine Chapel ceiling frescoes, illustrating the biblical creation narrative where God gives spark of life to Adam through their near-touching fingers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
    },
    {
        id: 11,
        title: "Water Lilies",
        artist: "Claude Monet",
        year: 1919,
        category: "impressionism",
        medium: "Oil on canvas",
        dimensions: "100 cm × 200 cm",
        location: "Metropolitan Museum of Art, New York",
        description: "A breathtaking impressionist seascape capturing Monet's flower garden water lily pond in Giverny, playing with shimmering reflections of light and color.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_Nymph%C3%A9as_-_Google_Art_Project.jpg"
    },
    {
        id: 12,
        title: "The Scream",
        artist: "Edvard Munch",
        year: 1893,
        category: "modern",
        medium: "Oil, tempera, and pastel on cardboard",
        dimensions: "91 cm × 73 cm",
        location: "National Gallery, Oslo",
        description: "An iconic expressionist masterpiece portraying an agonizing human figure against a tumultuous blood-red sky, embodying existential dread.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
    },
    {
        id: 13,
        title: "The Kiss",
        artist: "Gustav Klimt",
        year: 1908,
        category: "modern",
        medium: "Oil and gold leaf on canvas",
        dimensions: "180 cm × 180 cm",
        location: "Belvedere Museum, Vienna",
        description: "The peak of Klimt's Golden Phase, depicting an embracing couple wrapped in ornate, shimmering gold leaf garments and geometric patterns.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Art_Project.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Art_Project.jpg"
    },
    {
        id: 14,
        title: "Las Meninas",
        artist: "Diego Velázquez",
        year: 1656,
        category: "baroque",
        medium: "Oil on canvas",
        dimensions: "318 cm × 276 cm",
        location: "Prado Museum, Madrid",
        description: "A complex and enigmatic masterpiece of Spanish Baroque art depicting the Infanta Margarita Teresa surrounded by her entourage in the Madrid court.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Art_Project.jpg/1280px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Art_Project.jpg"
    },
    {
        id: 15,
        title: "Liberty Leading the People",
        artist: "Eugène Delacroix",
        year: 1830,
        category: "19th-century",
        medium: "Oil on canvas",
        dimensions: "260 cm × 325 cm",
        location: "Louvre Museum, Paris",
        description: "Commemorating the July Revolution of 1830 in France, featuring Marianne personifying Liberty leading the people forward over the barricades.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_liberté_guidant_le_peuple_%281830%29.jpg/1280px-Eug%C3%A8ne_Delacroix_-_La_liberté_guidant_le_peuple_%281830%29.jpg"
    },
    {
        id: 16,
        title: "The Arnolfini Portrait",
        artist: "Jan van Eyck",
        year: 1434,
        category: "renaissance",
        medium: "Oil on oak panel",
        dimensions: "82.2 cm × 60 cm",
        location: "National Gallery, London",
        description: "A masterpiece of Northern Renaissance oil painting, depicting the Italian merchant Giovanni di Nicolao Arnolfini and his wife with exquisite attention to interior detail.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait_%28full%29.jpg/800px-Van_Eyck_-_Arnolfini_Portrait_%28full%29.jpg"
    },
    {
        id: 17,
        title: "Wanderer above the Sea of Fog",
        artist: "Caspar David Friedrich",
        year: 1818,
        category: "19th-century",
        medium: "Oil on canvas",
        dimensions: "98.4 cm × 74.8 cm",
        location: "Hamburger Kunsthalle, Hamburg",
        description: "A defining Romantic painting of a solitary traveler gazing out over a precipice of rocky crags enveloped in thick swirling mountain mist.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
    },
    {
        id: 18,
        title: "The Hay Wain",
        artist: "John Constable",
        year: 1821,
        category: "19th-century",
        medium: "Oil on canvas",
        dimensions: "130.2 cm × 185.4 cm",
        location: "National Gallery, London",
        description: "An idyllic English landscape painting portraying a rural scene on the River Stour with a wooden horse-drawn hay wagon in serene harmony.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/John_Constable_-_The_Hay_Wain_%281821%29.jpg/1280px-John_Constable_-_The_Hay_Wain_%281821%29.jpg"
    },
    {
        id: 19,
        title: "A Sunday Afternoon on La Grande Jatte",
        artist: "Georges Seurat",
        year: 1884,
        category: "impressionism",
        medium: "Oil on canvas",
        dimensions: "207.6 cm × 308 cm",
        location: "Art Institute of Chicago",
        description: "A leading example of pointillism, where Seurat meticulously applied countless tiny dots of contrasting colors to create a luminous park scene.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/A_Sunday_on_La_Grande_Jatte_-_Georges_Seurat_%281838-1891%29.jpg/1280px-A_Sunday_on_La_Grande_Jatte_-_Georges_Seurat_%281838-1891%29.jpg"
    },
    {
        id: 20,
        title: "The Swing",
        artist: "Jean-Honoré Fragonard",
        year: 1767,
        category: "baroque",
        medium: "Oil on canvas",
        dimensions: "81 cm × 64.5 cm",
        location: "Wallace Collection, London",
        description: "A quintessential Rococo masterpiece capturing a playful, frivolous scene of a young lady swinging amidst lush gardens while her admirer watches.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jean-Honor%C3%A9_Fragonard_-_The_Suspend_Swing_-_Google_Art_Project.jpg/1024px-Jean-Honor%C3%A9_Fragonard_-_The_Suspend_Swing_-_Google_Art_Project.jpg"
    }
];

// State Management
let currentFilter = 'all';
let searchQuery = '';
let favoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem('fidan_favorites')) || [];
let activeModalId = null;

// DOM Elements
const artworksGrid = document.getElementById('artworksGrid');
const emptyState = document.getElementById('emptyState');
const headerSearch = document.getElementById('headerSearch');
const mobileSearch = document.getElementById('mobileSearch');
const gallerySearch = document.getElementById('gallerySearch');
const favBadge = document.getElementById('favBadge');
const mobileFavCount = document.getElementById('mobileFavCount');
const favBtnLabel = document.getElementById('favBtnLabel');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const artworkModal = document.getElementById('artworkModal');
const modalContentBox = document.getElementById('modalContentBox');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderArtworks();
    updateFavoritesUI();

    // Search event listeners
    [headerSearch, mobileSearch, gallerySearch].forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => {
                searchQuery = e.target.value.toLowerCase();
                // Sync other search inputs
                [headerSearch, mobileSearch, gallerySearch].forEach(el => {
                    if (el && el !== e.target) el.value = searchQuery;
                });
                renderArtworks();
            });
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Filter by Category
function filterCategory(category) {
    currentFilter = category;
    favoritesOnly = false;
    updateFavTabStyling();
    
    // Update active tab buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('bg-gold', 'text-obsidian', 'font-semibold');
        btn.classList.add('bg-obsidian-card', 'text-cream/80');
        if (btn.textContent.toLowerCase().includes(category.replace('-', ' ')) || (category === 'all' && btn.textContent.includes('All'))) {
            btn.classList.add('bg-gold', 'text-obsidian', 'font-semibold');
            btn.classList.remove('bg-obsidian-card', 'text-cream/80');
        }
    });

    renderArtworks();
}

// Toggle Favorites View
function toggleFavoritesView() {
    favoritesOnly = !favoritesOnly;
    if (favoritesOnly) {
        currentFilter = 'all';
    }
    updateFavTabStyling();
    renderArtworks();
    
    // Scroll to collection smoothly
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}

function updateFavTabStyling() {
    const btn = document.getElementById('favToggleTabBtn');
    if (favoritesOnly) {
        favBtnLabel.textContent = "Showing Favorites";
        if(btn) btn.classList.add('bg-gold/20', 'border-gold');
    } else {
        favBtnLabel.textContent = "Favorites";
        if(btn) btn.classList.remove('bg-gold/20', 'border-gold');
    }
}

// Reset Filters
function resetFilters() {
    currentFilter = 'all';
    searchQuery = '';
    favoritesOnly = false;
    [headerSearch, mobileSearch, gallerySearch].forEach(el => { if(el) el.value = ''; });
    filterCategory('all');
}

// Toggle Favorite item
function toggleFavorite(id, event) {
    if(event) event.stopPropagation();
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('fidan_favorites', JSON.stringify(favorites));
    updateFavoritesUI();
    renderArtworks();

    // If modal is open, update modal heart icon
    if (activeModalId === id) {
        updateModalFavState();
    }
}

function updateFavoritesUI() {
    const count = favorites.length;
    if (count > 0) {
        favBadge.textContent = count;
        favBadge.classList.remove('hidden');
        mobileFavCount.textContent = count;
    } else {
        favBadge.classList.add('hidden');
        mobileFavCount.textContent = '0';
    }
}

// Render Artworks Grid
function renderArtworks() {
    artworksGrid.innerHTML = '';

    let filtered = artworksData.filter(art => {
        const matchesCategory = currentFilter === 'all' || art.category === currentFilter;
        const matchesSearch = art.title.toLowerCase().includes(searchQuery) || art.artist.toLowerCase().includes(searchQuery) || art.year.toString().includes(searchQuery);
        const matchesFav = !favoritesOnly || favorites.includes(art.id);
        return matchesCategory && matchesSearch && matchesFav;
    });

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    } else {
        emptyState.classList.add('hidden');
    }

    filtered.forEach(art => {
        const isFav = favorites.includes(art.id);
        const card = document.createElement('div');
        card.className = 'glass-panel rounded-xl overflow-hidden group hover:border-gold/60 transition-all duration-500 flex flex-col justify-between shadow-xl';
        card.innerHTML = `
            <div class="relative bg-obsidian-card aspect-[4/5] overflow-hidden flex items-center justify-center p-4 cursor-pointer" onclick="openModal(${art.id})">
                <img src="${art.image}" alt="${art.title}" loading="lazy" 
                     onerror="handleImageError(this, '${art.title.replace(/'/g, "\\'")}', '${art.artist.replace(/'/g, "\\'")}')"
                     class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <!-- Top Badges -->
                <div class="absolute top-3 left-3 flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-full bg-obsidian/80 backdrop-blur border border-gold/20 text-[10px] text-gold uppercase tracking-widest font-semibold">${art.year}</span>
                </div>
                <button onclick="toggleFavorite(${art.id}, event)" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-obsidian/80 backdrop-blur border border-gold/30 flex items-center justify-center text-cream hover:text-gold transition-all">
                    <i class="fa-${isFav ? 'solid text-gold' : 'regular'} fa-heart"></i>
                </button>
            </div>

            <div class="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-gold/80 text-[10px] tracking-[0.2em] uppercase font-semibold block mb-1">${art.artist}</span>
                    <h3 class="font-serif text-xl text-cream font-bold group-hover:text-gold transition-colors line-clamp-1">${art.title}</h3>
                    <p class="text-cream/60 text-xs font-light line-clamp-2 mt-2 leading-relaxed">${art.description}</p>
                </div>
                <div class="pt-6 mt-4 border-t border-gold/10 flex items-center justify-between">
                    <span class="text-[10px] uppercase tracking-wider text-cream/40">${art.category}</span>
                    <button onclick="openModal(${art.id})" class="text-xs uppercase tracking-widest text-gold hover:text-gold-light font-semibold flex items-center gap-2">
                        <span>View Artwork</span>
                        <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            </div>
        `;
        artworksGrid.appendChild(card);
    });
}

// Robust Image Error Handler fallback generating SVG art placeholder
function handleImageError(img, title, artist) {
    const svgFallback = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'>
            <defs>
                <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stop-color='#0f0f0f'/>
                    <stop offset='100%' stop-color='#241c14'/>
                </linearGradient>
            </defs>
            <rect width='100%' height='100%' fill='url(#bg)'/>
            <circle cx='300' cy='340' r='110' fill='none' stroke='#d4af37' stroke-width='1.5' opacity='0.3'/>
            <path d='M250,340 L350,340 M300,290 L300,390' stroke='#d4af37' stroke-width='1.5' opacity='0.4'/>
            <text x='50%' y='520' font-family='serif' font-size='26' fill='#f4f1ea' text-anchor='middle' font-weight='bold'>${title}</text>
            <text x='50%' y='565' font-family='sans-serif' font-size='14' fill='#d4af37' text-anchor='middle' letter-spacing='3'>${artist}</text>
            <text x='50%' y='610' font-family='sans-serif' font-size='10' fill='#888' text-anchor='middle' letter-spacing='4'>FIDAN GALLERY ARCHIVE</text>
        </svg>
    `)}`;
    img.src = svgFallback;
}

// Modal Functions
function openModal(id) {
    const art = artworksData.find(a => a.id === id);
    if (!art) return;
    activeModalId = id;

    document.getElementById('modalImage').src = art.image;
    document.getElementById('modalImage').alt = art.title;
    document.getElementById('modalCategory').textContent = art.category;
    document.getElementById('modalYear').textContent = art.year;
    document.getElementById('modalTitle').textContent = art.title;
    document.getElementById('modalArtist').textContent = art.artist;
    document.getElementById('modalMedium').textContent = art.medium;
    document.getElementById('modalDimensions').textContent = art.dimensions;
    document.getElementById('modalLocation').textContent = art.location;
    document.getElementById('modalDescription').textContent = art.description;

    updateModalFavState();

    artworkModal.classList.remove('opacity-0', 'pointer-events-none');
    modalContentBox.classList.remove('scale-95');
    modalContentBox.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    artworkModal.classList.add('opacity-0', 'pointer-events-none');
    modalContentBox.classList.remove('scale-100');
    modalContentBox.classList.add('scale-95');
    document.body.style.overflow = 'auto';
    activeModalId = null;
}

function toggleModalFavorite() {
    if (activeModalId !== null) {
        toggleFavorite(activeModalId);
    }
}

function updateModalFavState() {
    const modalFavBtn = document.getElementById('modalFavBtn');
    const isFav = favorites.includes(activeModalId);
    if (isFav) {
        modalFavBtn.innerHTML = '<i class="fa-solid fa-heart text-gold"></i>';
        modalFavBtn.classList.add('border-gold');
    } else {
        modalFavBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        modalFavBtn.classList.remove('border-gold');
    }
}

// Close modal on outside click or Esc key
window.addEventListener('click', (e) => {
    if (e.target === artworkModal) {
        closeModal();
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
