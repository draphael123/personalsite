// 100 Leisure Activities with emojis and categories
const activities = [
    { name: "Hiking", emoji: "🥾", category: "Outdoor" },
    { name: "Photography", emoji: "📷", category: "Creative" },
    { name: "Reading", emoji: "📚", category: "Relaxation" },
    { name: "Cooking", emoji: "👨‍🍳", category: "Culinary" },
    { name: "Gardening", emoji: "🌱", category: "Outdoor" },
    { name: "Painting", emoji: "🎨", category: "Creative" },
    { name: "Yoga", emoji: "🧘", category: "Fitness" },
    { name: "Video Gaming", emoji: "🎮", category: "Entertainment" },
    { name: "Birdwatching", emoji: "🦅", category: "Nature" },
    { name: "Cycling", emoji: "🚴", category: "Fitness" },
    { name: "Meditation", emoji: "🕯️", category: "Wellness" },
    { name: "Writing", emoji: "✍️", category: "Creative" },
    { name: "Swimming", emoji: "🏊", category: "Fitness" },
    { name: "Chess", emoji: "♟️", category: "Strategy" },
    { name: "Dancing", emoji: "💃", category: "Fitness" },
    { name: "Fishing", emoji: "🎣", category: "Outdoor" },
    { name: "Knitting", emoji: "🧶", category: "Crafts" },
    { name: "Rock Climbing", emoji: "🧗", category: "Adventure" },
    { name: "Pottery", emoji: "🏺", category: "Crafts" },
    { name: "Astronomy", emoji: "🔭", category: "Science" },
    { name: "Playing Guitar", emoji: "🎸", category: "Music" },
    { name: "Baking", emoji: "🧁", category: "Culinary" },
    { name: "Surfing", emoji: "🏄", category: "Adventure" },
    { name: "Board Games", emoji: "🎲", category: "Social" },
    { name: "Running", emoji: "🏃", category: "Fitness" },
    { name: "Origami", emoji: "🦢", category: "Crafts" },
    { name: "Camping", emoji: "⛺", category: "Outdoor" },
    { name: "Learning Languages", emoji: "🗣️", category: "Education" },
    { name: "Woodworking", emoji: "🪵", category: "Crafts" },
    { name: "Podcasting", emoji: "🎙️", category: "Creative" },
    { name: "Tennis", emoji: "🎾", category: "Sports" },
    { name: "Wine Tasting", emoji: "🍷", category: "Culinary" },
    { name: "Calligraphy", emoji: "🖋️", category: "Creative" },
    { name: "Kayaking", emoji: "🛶", category: "Adventure" },
    { name: "Collecting Stamps", emoji: "📮", category: "Collecting" },
    { name: "Movie Watching", emoji: "🎬", category: "Entertainment" },
    { name: "Archery", emoji: "🏹", category: "Sports" },
    { name: "Journaling", emoji: "📓", category: "Wellness" },
    { name: "Playing Piano", emoji: "🎹", category: "Music" },
    { name: "Scuba Diving", emoji: "🤿", category: "Adventure" },
    { name: "Puzzles", emoji: "🧩", category: "Mental" },
    { name: "Horseback Riding", emoji: "🏇", category: "Outdoor" },
    { name: "Candle Making", emoji: "🕯️", category: "Crafts" },
    { name: "Skiing", emoji: "⛷️", category: "Adventure" },
    { name: "Blogging", emoji: "💻", category: "Creative" },
    { name: "Golf", emoji: "⛳", category: "Sports" },
    { name: "Soap Making", emoji: "🧼", category: "Crafts" },
    { name: "Stargazing", emoji: "🌟", category: "Nature" },
    { name: "Bowling", emoji: "🎳", category: "Social" },
    { name: "Magic Tricks", emoji: "🎩", category: "Entertainment" },
    { name: "Sculpting", emoji: "🗿", category: "Creative" },
    { name: "Ice Skating", emoji: "⛸️", category: "Fitness" },
    { name: "Coin Collecting", emoji: "🪙", category: "Collecting" },
    { name: "Geocaching", emoji: "🗺️", category: "Adventure" },
    { name: "Martial Arts", emoji: "🥋", category: "Fitness" },
    { name: "Singing", emoji: "🎤", category: "Music" },
    { name: "Coffee Brewing", emoji: "☕", category: "Culinary" },
    { name: "Stand-up Comedy", emoji: "🎭", category: "Entertainment" },
    { name: "Weightlifting", emoji: "🏋️", category: "Fitness" },
    { name: "Beekeeping", emoji: "🐝", category: "Nature" },
    { name: "Model Building", emoji: "✈️", category: "Crafts" },
    { name: "Snowboarding", emoji: "🏂", category: "Adventure" },
    { name: "Trivia", emoji: "🧠", category: "Social" },
    { name: "Leather Crafting", emoji: "👜", category: "Crafts" },
    { name: "Badminton", emoji: "🏸", category: "Sports" },
    { name: "Foraging", emoji: "🍄", category: "Nature" },
    { name: "Drone Flying", emoji: "🚁", category: "Technology" },
    { name: "Embroidery", emoji: "🪡", category: "Crafts" },
    { name: "Basketball", emoji: "🏀", category: "Sports" },
    { name: "Antiquing", emoji: "🏛️", category: "Collecting" },
    { name: "Tai Chi", emoji: "☯️", category: "Wellness" },
    { name: "Home Brewing", emoji: "🍺", category: "Culinary" },
    { name: "Volleyball", emoji: "🏐", category: "Sports" },
    { name: "Kite Flying", emoji: "🪁", category: "Outdoor" },
    { name: "3D Printing", emoji: "🖨️", category: "Technology" },
    { name: "Fencing", emoji: "🤺", category: "Sports" },
    { name: "Herbalism", emoji: "🌿", category: "Nature" },
    { name: "Playing Drums", emoji: "🥁", category: "Music" },
    { name: "Crochet", emoji: "🧵", category: "Crafts" },
    { name: "Sailing", emoji: "⛵", category: "Adventure" },
    { name: "Card Games", emoji: "🃏", category: "Social" },
    { name: "Flower Arranging", emoji: "💐", category: "Creative" },
    { name: "Soccer", emoji: "⚽", category: "Sports" },
    { name: "Parkour", emoji: "🤸", category: "Fitness" },
    { name: "Aquarium Keeping", emoji: "🐠", category: "Nature" },
    { name: "Crossword Puzzles", emoji: "📝", category: "Mental" },
    { name: "Table Tennis", emoji: "🏓", category: "Sports" },
    { name: "Rollerblading", emoji: "🛼", category: "Fitness" },
    { name: "Jewelry Making", emoji: "💎", category: "Crafts" },
    { name: "Podcasts Listening", emoji: "🎧", category: "Relaxation" },
    { name: "Baseball", emoji: "⚾", category: "Sports" },
    { name: "Lock Picking", emoji: "🔐", category: "Skills" },
    { name: "Bird Photography", emoji: "🐦", category: "Nature" },
    { name: "Escape Rooms", emoji: "🔑", category: "Social" },
    { name: "Paragliding", emoji: "🪂", category: "Adventure" },
    { name: "Cosplay", emoji: "🦸", category: "Creative" },
    { name: "Street Art", emoji: "🎨", category: "Creative" },
    { name: "Mushroom Hunting", emoji: "🍄", category: "Nature" },
    { name: "Virtual Reality", emoji: "🥽", category: "Technology" },
    { name: "Bullet Journaling", emoji: "📔", category: "Creative" }
];

// State management
let currentFilter = 'all';
let interests = {};
let userSuggestions = [];

// Confetti colors
const confettiColors = ['#ff2e97', '#00f5d4', '#fee440', '#9b5de5', '#00bbf9', '#ff9f1c', '#00f593'];

// Create confetti effect
function createConfetti(x, y) {
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = (Math.random() * 8 + 4) + 'px';
        
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = Math.random() * 100 + 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${vx}px, ${vy - 100}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        });
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1200);
    }
}

// Load saved interests from localStorage
function loadInterests() {
    const saved = localStorage.getItem('leisureInterests');
    if (saved) {
        interests = JSON.parse(saved);
    }
}

// Save interests to localStorage
function saveInterests() {
    localStorage.setItem('leisureInterests', JSON.stringify(interests));
}

// Create activity card HTML
function createActivityCard(activity, index) {
    const interest = interests[index] || '';
    
    return `
        <div class="activity-card" data-index="${index}" data-interest="${interest}" data-category="${activity.category}">
            <div class="activity-header">
                <span class="activity-emoji">${activity.emoji}</span>
                <div>
                    <div class="activity-name">${activity.name}</div>
                    <div class="activity-category">${activity.category}</div>
                </div>
            </div>
            <div class="interest-options">
                <button class="interest-btn ${interest === 'interested' ? 'selected' : ''}" 
                        data-interest="interested" 
                        data-index="${index}"
                        title="Interested">
                    <span class="icon">💚</span>
                    Yes!
                </button>
                <button class="interest-btn ${interest === 'maybe' ? 'selected' : ''}" 
                        data-interest="maybe" 
                        data-index="${index}"
                        title="Maybe">
                    <span class="icon">🤔</span>
                    Maybe
                </button>
                <button class="interest-btn ${interest === 'not-interested' ? 'selected' : ''}" 
                        data-interest="not-interested" 
                        data-index="${index}"
                        title="Not Interested">
                    <span class="icon">💔</span>
                    Nope
                </button>
            </div>
        </div>
    `;
}

// Render all activity cards
function renderActivities() {
    const grid = document.getElementById('activities-grid');
    grid.innerHTML = activities.map((activity, index) => createActivityCard(activity, index)).join('');
    applyFilter();
}

// Update counts
function updateCounts() {
    const counts = {
        all: activities.length,
        interested: 0,
        maybe: 0,
        'not-interested': 0,
        unmarked: 0
    };

    activities.forEach((_, index) => {
        const interest = interests[index];
        if (interest) {
            counts[interest]++;
        } else {
            counts.unmarked++;
        }
    });

    document.getElementById('count-all').textContent = counts.all;
    document.getElementById('count-interested').textContent = counts.interested;
    document.getElementById('count-maybe').textContent = counts.maybe;
    document.getElementById('count-not-interested').textContent = counts['not-interested'];
    document.getElementById('count-unmarked').textContent = counts.unmarked;
}

// Apply current filter
function applyFilter() {
    const cards = document.querySelectorAll('.activity-card');
    
    cards.forEach(card => {
        const index = card.dataset.index;
        const interest = interests[index] || '';
        
        let show = false;
        
        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'interested':
                show = interest === 'interested';
                break;
            case 'maybe':
                show = interest === 'maybe';
                break;
            case 'not-interested':
                show = interest === 'not-interested';
                break;
            case 'unmarked':
                show = !interest;
                break;
        }
        
        card.classList.toggle('hidden', !show);
    });
}

// Handle interest button click
function handleInterestClick(e) {
    const btn = e.target.closest('.interest-btn');
    if (!btn) return;

    const index = btn.dataset.index;
    const interest = btn.dataset.interest;
    const card = btn.closest('.activity-card');
    const wasSelected = interests[index] === interest;
    
    // Toggle: if already selected, unselect it
    if (wasSelected) {
        delete interests[index];
    } else {
        interests[index] = interest;
        
        // Confetti for positive selections!
        if (interest === 'interested') {
            const rect = btn.getBoundingClientRect();
            createConfetti(rect.left + rect.width / 2, rect.top);
        }
    }
    
    // Update button states
    const buttons = card.querySelectorAll('.interest-btn');
    buttons.forEach(b => {
        b.classList.toggle('selected', b.dataset.interest === interests[index]);
    });
    
    // Update card data attribute
    card.dataset.interest = interests[index] || '';
    
    saveInterests();
    updateCounts();
    applyFilter();
}

// Handle filter button click
function handleFilterClick(e) {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    currentFilter = btn.dataset.filter;
    applyFilter();
}

// Initialize
function init() {
    loadInterests();
    renderActivities();
    updateCounts();
    
    // Event listeners
    document.getElementById('activities-grid').addEventListener('click', handleInterestClick);
    document.querySelector('.filter-buttons').addEventListener('click', handleFilterClick);
}

// Category emoji mapping
const categoryEmojis = {
    'Outdoor': '🌲',
    'Creative': '🎨',
    'Fitness': '💪',
    'Entertainment': '🎬',
    'Nature': '🌿',
    'Culinary': '🍳',
    'Music': '🎵',
    'Crafts': '✂️',
    'Adventure': '🏔️',
    'Sports': '⚽',
    'Social': '👥',
    'Wellness': '🧘',
    'Technology': '💻',
    'Education': '📚',
    'Collecting': '🏆',
    'Mental': '🧠',
    'Skills': '🔧',
    'Relaxation': '😌',
    'Strategy': '♟️',
    'Science': '🔬'
};

// Load suggestions from localStorage
function loadSuggestions() {
    const saved = localStorage.getItem('userSuggestions');
    if (saved) {
        userSuggestions = JSON.parse(saved);
        renderSuggestions();
    }
}

// Save suggestions to localStorage
function saveSuggestions() {
    localStorage.setItem('userSuggestions', JSON.stringify(userSuggestions));
}

// Render suggestions list
function renderSuggestions() {
    const container = document.getElementById('user-suggestions');
    const listSection = document.getElementById('suggestions-list');
    
    if (userSuggestions.length === 0) {
        listSection.classList.remove('has-suggestions');
        container.innerHTML = '';
        return;
    }
    
    listSection.classList.add('has-suggestions');
    
    container.innerHTML = userSuggestions.map((suggestion, index) => `
        <div class="suggestion-tag">
            <span class="tag-emoji">${categoryEmojis[suggestion.category] || '✨'}</span>
            <span class="tag-name">${suggestion.name}</span>
            <span class="tag-category">${suggestion.category}</span>
            <button class="remove-btn" data-index="${index}" title="Remove">×</button>
        </div>
    `).join('');
}

// Show success message
function showSuccessMessage(message) {
    // Remove existing message if any
    const existing = document.querySelector('.success-message');
    if (existing) existing.remove();
    
    const msg = document.createElement('div');
    msg.className = 'success-message';
    msg.textContent = message;
    document.body.appendChild(msg);
    
    // Trigger animation
    setTimeout(() => msg.classList.add('show'), 10);
    
    // Remove after delay
    setTimeout(() => {
        msg.classList.remove('show');
        setTimeout(() => msg.remove(), 400);
    }, 3000);
}

// Handle suggestion form submit
function handleSuggestionSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('activity-name');
    const categorySelect = document.getElementById('activity-category');
    
    const name = nameInput.value.trim();
    const category = categorySelect.value;
    
    if (!name || !category) return;
    
    // Check for duplicates
    const isDuplicate = userSuggestions.some(s => 
        s.name.toLowerCase() === name.toLowerCase()
    );
    
    if (isDuplicate) {
        showSuccessMessage('⚠️ This activity is already in your suggestions!');
        return;
    }
    
    // Add suggestion
    userSuggestions.push({ name, category });
    saveSuggestions();
    renderSuggestions();
    
    // Create confetti at button
    const btn = document.querySelector('.submit-btn');
    const rect = btn.getBoundingClientRect();
    createConfetti(rect.left + rect.width / 2, rect.top);
    
    // Show success message
    showSuccessMessage(`✨ "${name}" added to suggestions!`);
    
    // Reset form
    nameInput.value = '';
    categorySelect.value = '';
}

// Handle suggestion removal
function handleSuggestionRemove(e) {
    if (!e.target.classList.contains('remove-btn')) return;
    
    const index = parseInt(e.target.dataset.index);
    const removed = userSuggestions[index];
    
    userSuggestions.splice(index, 1);
    saveSuggestions();
    renderSuggestions();
    
    showSuccessMessage(`🗑️ "${removed.name}" removed`);
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    init();
    loadSuggestions();
    
    // Suggestion form handlers
    document.getElementById('suggestion-form').addEventListener('submit', handleSuggestionSubmit);
    document.getElementById('user-suggestions').addEventListener('click', handleSuggestionRemove);
});
