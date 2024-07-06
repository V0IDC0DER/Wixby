// Function to fetch current cryptocurrency prices from an API (example using CoinGecko API)
const apiKey = '715f2c7e01bd5f60b8f4b0b5d1fcdc24c2a290b5e1cfa8e4647b65c676176dbc';

async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=OZN&tsyms=INR&api_key=715f2c7e01bd5f60b8f4b0b5d1fcdc24c2a290b5e1cfa8e4647b65c676176dbc');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.INR;
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
        return null;
    }
}


// Function to display current cryptocurrency prices
async function displayCryptoPrices() {
    let prices = await fetchCryptoPrices();
    if (prices !== null) {
        let cryptoPricesDiv = document.getElementById('cryptoPrices');
        cryptoPricesDiv.innerHTML = `<p>Ozone: ₹${prices}</p>`;
    } else {
        console.error('Failed to fetch cryptocurrency prices');
        let cryptoPricesDiv = document.getElementById('cryptoPrices');
        cryptoPricesDiv.innerHTML = `<p>Can't fetch price</p>`; // Display error message
    }
}

// Call function to initialize app
fetchCryptoPrices().then(() => {
    displayCryptoPrices(); // Display initial cryptocurrency prices
}).catch(error => {
    console.error('Failed to fetch initial cryptocurrency prices:', error);
});


// Function to join Zoom meeting
function joinZoom(event) {
    event.preventDefault();
    let meetingUrlInput = document.getElementById('meetingUrl');
    let meetingUrl = meetingUrlInput.value.trim();

    // Open Zoom meeting in new tab
    window.open(meetingUrl, '_blank');
    meetingUrlInput.value = ''; // Clear input after joining
}

// Function to check if TokenPocket app is installed
function checkTokenPocket() {
    if (isTokenPocketInstalled()) {
        document.getElementById('tokenPocketStatus').textContent = "TokenPocket is Installed!";
    } else {
        document.getElementById('tokenPocketStatus').textContent = "TokenPocket Isn't Installed!";
    }
}

// Dummy function to check if TokenPocket is installed (replace with actual logic)
function isTokenPocketInstalled() {
    // Replace with actual logic to detect app installation
    return true; // Example: assume it's installed
}

// Function to calculate value based on selected cryptocurrency and coins input
async function calculateValue(event) {
    event.preventDefault();
    let cryptoSelect = document.getElementById('cryptoSelect');
    let coinsInput = document.getElementById('coinsInput');
    let crypto = cryptoSelect.value;
    let coins = parseFloat(coinsInput.value);

    // Fetch current prices
    let currentPrice = await fetchCryptoPrices();

    if (currentPrice !== null) {
        let value = currentPrice * coins;
        // Display result after clearing previous messages
        let valueResult = document.getElementById('valueResult');
        valueResult.textContent = ''; // Clear previous messages
        valueResult.classList.add('loading'); // Add loading class

        // Simulate delay before showing result
        setTimeout(() => {
            valueResult.classList.remove('loading'); // Remove loading class
            valueResult.textContent = `Value of ${coins} ${crypto} coins is ₹${value.toFixed(2)}`;
        }, 2000); // 2 seconds delay
    } else {
        document.getElementById('valueResult').textContent = `Failed to fetch price for ${crypto}`;
    }
}

// Function to handle AI assistant (coming soon)

// Call functions to initialize app
fetchCryptoPrices().then(() => {
    displayCryptoPrices(); // Display initial cryptocurrency prices
}).catch(error => {
    console.error('Failed to fetch initial cryptocurrency prices:', error);
});

handleAIAssistant(); // Initialize AI assistant section
