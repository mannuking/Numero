# Vedic Numerology Calculator

A web application for calculating and displaying Vedic numerology numbers based on birth date and year.

Live app: [https://vedic-numerology-calculator.web.app](https://vedic-numerology-calculator.web.app)

![Vedic Numerology Calculator](screenshot.png)

## Features

- Calculate Root Number based on day of birth
- Calculate Destiny Number based on full date of birth
- Calculate Mahadasha and Antardasha for specific years
- Display personalized predictions for each number
- Visual representation of numerology grid with highlights
- Responsive design that works on desktop and mobile

## Project Structure

```
vedic-numerology-calculator/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles
├── script.js           # JavaScript functionality
├── 404.html            # Custom 404 error page
├── firebase.json       # Firebase configuration
├── .firebaserc         # Firebase project settings
└── README.md           # This documentation
```

## Setup Instructions

### Prerequisites

1. Install Node.js and npm from [nodejs.org](https://nodejs.org/)
2. Install Firebase CLI:
   ```
   npm install -g firebase-tools
   ```

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/vedic-numerology-calculator.git
   cd vedic-numerology-calculator
   ```

2. Open the project in your favorite code editor

3. Test locally using a local server:
   - Option 1: Use Live Server extension in VS Code
   - Option 2: Use Python SimpleHTTPServer:
     ```
     python -m http.server 5000
     ```
   - Option 3: Use Firebase local server:
     ```
     firebase serve
     ```

4. Access the local version at [http://localhost:5000](http://localhost:5000)

## Firebase Deployment

### First-time Setup

1. Sign in to Firebase:
   ```
   firebase login
   ```

2. Create a new Firebase project:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Note your project ID

3. Initialize Firebase in your project:
   ```
   firebase init
   ```
   - Select "Hosting"
   - Select "Use an existing project" and choose your project
   - Set public directory to "." (current directory)
   - Configure as a single-page app: No
   - Set up automatic builds: No
   - Use your custom 404.html file

4. Update the `.firebaserc` file with your project ID:
   ```json
   {
     "projects": {
       "default": "your-project-id"
     }
   }
   ```

### Deployment

Deploy to Firebase:
```
firebase deploy
```

Your app will be live at: `https://your-project-id.web.app`

## Making Changes

### HTML (index.html)

The main structure of the application is defined in index.html. Key sections:

1. Input section:
   ```html
   <div class="input-section">
     <!-- Date of birth and year inputs -->
   </div>
   ```

2. Results section:
   ```html
   <div class="results-section" id="results">
     <!-- Display of calculated numbers -->
   </div>
   ```

3. Prediction section:
   ```html
   <div class="prediction-section" id="prediction-section">
     <!-- Predictions based on calculated numbers -->
   </div>
   ```

4. Grid section:
   ```html
   <div class="numerology-grid-container">
     <!-- Numerology grid display -->
   </div>
   ```

### CSS (style.css)

The styling is organized into sections:

1. General styling and variables (colors, fonts)
2. Layout and container styling
3. Form elements styling
4. Results display styling
5. Prediction section styling
6. Numerology grid styling

### JavaScript (script.js)

The logic is organized into functions:

1. Calculation functions:
   - `calculateRootNumber(dob)`
   - `calculateDestinyNumber(dob)`
   - `calculateMahadasha(dob, year)`
   - `calculateAntardasha(dob, year)`

2. UI functions:
   - `createYearGrid(year)` - Creates the numerology grid
   - `calculate()` - Main function called when Calculate button is clicked

3. Prediction data in `getPrediction(number, type)` function

## Customization

### Changing Colors

Edit the CSS variables in style.css:
```css
:root {
    --bg-color: #2a2a2a;
    --text-color: #ffffff;
    /* ... other color variables ... */
}
```

### Modifying Predictions

Edit the predictions object in the `getPrediction()` function in script.js:
```javascript
const predictions = {
    root: {
        1: "This is the no. of Sun. It shows leadership and independence.",
        // ... other number predictions ...
    },
    // ... other prediction types ...
};
```

### Adding New Features

1. Update the HTML to add new UI elements
2. Add corresponding styles in CSS
3. Implement functionality in JavaScript
4. Test locally before deploying

## Troubleshooting

### Firebase Deployment Issues

1. **Blank page after deployment**: Check firebase.json configuration:
   ```json
   {
     "hosting": {
       "public": ".",
       "rewrites": [{ "source": "**", "destination": "/index.html" }]
     }
   }
   ```

2. **CSS/JS not loading**: Ensure paths are correct and files are being included in deployment

3. **404 errors**: Make sure the ignore patterns aren't excluding necessary files

### Local Development Issues

1. **JavaScript errors**: Check browser console for specific errors
2. **Styling issues**: Use browser developer tools to inspect elements and CSS

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or questions, please contact: your-email@example.com 
