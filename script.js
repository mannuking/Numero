function calculateRootNumber(dob) {
    const day = parseInt(dob.substring(0, 2));
    let root = 0;
    day.toString().split('').forEach(digit => {
        root += parseInt(digit);
    });
    
    if (root > 9) {
        let newRoot = 0;
        root.toString().split('').forEach(digit => {
            newRoot += parseInt(digit);
        });
        return newRoot;
    }
    
    return root;
}

function calculateDestinyNumber(dob) {
    let total = 0;
    dob.split('').forEach(digit => {
        if (digit !== '0') {
            total += parseInt(digit);
        }
    });
    
    while (total > 9) {
        let newTotal = 0;
        total.toString().split('').forEach(digit => {
            newTotal += parseInt(digit);
        });
        total = newTotal;
    }
    
    return total;
}

function calculateMahadasha(dob, year) {
    const birthYear = parseInt(dob.substring(4));
    const cycleYear = parseInt(year) - birthYear;
    return (cycleYear % 9) || 9;
}

function calculateAntardasha(dob, year) {
    return (calculateMahadasha(dob, year) + 2) % 9 || 9;
}

// Animation to display numbers counting up
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Validate the date of birth input
function validateDOB(dob) {
    if (dob.length !== 8 || !/^\d+$/.test(dob)) {
        return false;
    }
    
    const day = parseInt(dob.substring(0, 2));
    const month = parseInt(dob.substring(2, 4));
    
    return day >= 1 && day <= 31 && month >= 1 && month <= 12;
}

// Get prediction based on number
function getPrediction(number, type) {
    const predictions = {
        root: {
            1: "This is the no. of Sun. It shows leadership and independence.",
            2: "This is the no. of Moon. It shows sensitivity and intuition.",
            3: "This is the no. of Jupiter. It shows expansion and optimism.",
            4: "This is the no. of Rahu. It shows unconventional thinking.",
            5: "This is the no. of Mercury. It shows versatility and freedom.",
            6: "This is the no. of Venus. It shows harmony and balance.",
            7: "This is the no. of Ketu. It shows spirituality and wisdom.",
            8: "This is the no. of Saturn. It shows discipline and structure.",
            9: "This is the no. of Mars. It shows courage and initiative."
        },
        destiny: {
            1: "This is the no. of Sun. It shows a life purpose of leadership.",
            2: "This is the no. of Moon. It shows a life purpose of nurturing.",
            3: "This is the no. of Jupiter. It shows a life purpose of teaching.",
            4: "This is the no. of Rahu. It shows a life purpose of breaking boundaries.",
            5: "This is the no. of Mercury. It shows a life purpose of communication.",
            6: "This is the no. of Venus. It shows a life purpose of creating harmony.",
            7: "This is the no. of Ketu. It shows a life purpose of spiritual growth.",
            8: "This is the no. of Saturn. It shows a life purpose of building foundations.",
            9: "This is the no. of Mars. It shows a life purpose of pioneering."
        },
        mahadasha: {
            1: "Sun period: Focus on identity and leadership.",
            2: "Moon period: Focus on emotions and intuition.",
            3: "Jupiter period: Focus on growth and expansion.",
            4: "Rahu period: Focus on desires and ambitions.",
            5: "Mercury period: Focus on communication and learning.",
            6: "Venus period: Focus on relationships and creativity.",
            7: "Ketu period: Focus on spiritual growth and detachment.",
            8: "Saturn period: Focus on responsibility and structure.",
            9: "Mars period: Focus on action and initiative."
        },
        antardasha: {
            1: "Sun sub-period: Identity development takes precedence.",
            2: "Moon sub-period: Emotional understanding takes precedence.",
            3: "Jupiter sub-period: Knowledge expansion takes precedence.",
            4: "Rahu sub-period: Material desires take precedence.",
            5: "Mercury sub-period: Communication skills take precedence.",
            6: "Venus sub-period: Relationships take precedence.",
            7: "Ketu sub-period: Spiritual growth takes precedence.",
            8: "Saturn sub-period: Hard work and discipline take precedence.",
            9: "Mars sub-period: Push toward goals—hard work yields results."
        }
    };
    
    return predictions[type][number] || "No prediction available.";
}

// Create year grid
function createYearGrid(year) {
    const yearGrid = document.getElementById('year-grid');
    const mahadashaNum = calculateMahadasha(document.getElementById('dob').value, year);
    const antardashaNum = calculateAntardasha(document.getElementById('dob').value, year);
    
    yearGrid.innerHTML = `
        <div class="grid-header">${year}</div>
        <div class="grid-table">
            <div class="grid-cell">3</div>
            <div class="grid-cell highlight-cell blue">1<span class="highlight-dot blue"></span></div>
            <div class="grid-cell highlight-cell orange">9<span class="highlight-dot orange"></span></div>
            <div class="grid-cell">6</div>
            <div class="grid-cell">${mahadashaNum}</div>
            <div class="grid-cell">5</div>
            <div class="grid-cell">2</div>
            <div class="grid-cell">4</div>
            <div class="grid-cell">${antardashaNum}</div>
        </div>
    `;
}

function calculate() {
    const dob = document.getElementById('dob').value;
    const year = document.getElementById('year').value;
    
    // Validate inputs
    if (!validateDOB(dob)) {
        alert("Please enter a valid date of birth in DDMMYYYY format");
        return;
    }
    
    if (!year || year.length !== 4 || parseInt(year) < 1900 || parseInt(year) > 2100) {
        alert("Please enter a valid 4-digit year between 1900 and 2100");
        return;
    }
    
    // Calculate results
    const rootNumber = calculateRootNumber(dob);
    const destinyNumber = calculateDestinyNumber(dob);
    const mahadasha = calculateMahadasha(dob, year);
    const antardasha = calculateAntardasha(dob, year);
    
    // Update UI
    document.getElementById('rootNumber').textContent = rootNumber;
    document.getElementById('destinyNumber').textContent = destinyNumber;
    document.getElementById('mahadasha').textContent = mahadasha;
    document.getElementById('antardasha').textContent = antardasha;
    
    // Show results section
    document.getElementById('results').style.display = 'block';
    
    // Set predictions
    document.getElementById('root-prediction').textContent = `Root: ${getPrediction(rootNumber, 'root')}`;
    document.getElementById('destiny-prediction').textContent = `Destiny: ${getPrediction(destinyNumber, 'destiny')}`;
    document.getElementById('mahadasha-prediction').textContent = `Mahadasha: ${getPrediction(mahadasha, 'mahadasha')}`;
    document.getElementById('antardasha-prediction').textContent = `Antardasha: ${getPrediction(antardasha, 'antardasha')}`;
    
    // Create year grid
    createYearGrid(year);
}

// Set current year as default
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').value = currentYear;
}); 
