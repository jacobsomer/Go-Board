
Go Board Game Frontend

This project is a responsive Go board game interface built using React and CSS. The board adapts to different screen sizes, offering a smooth and visually consistent experience for desktop, tablet, and mobile devices.

---

Features

- Responsive Design: The grid adjusts dynamically for large, medium, and small screens.
- Interactive Board: Clickable grid cells to place stones.
- Star Points: Highlighted star points for traditional Go board layouts.
- Customizable Board Size: Easily adjustable board dimensions for various Go game variations.
- Accessible Controls: Includes a pass button for user convenience.

---

Table of Contents

1. Technologies Used
2. Setup Instructions
3. Folder Structure
4. How to Use
5. Responsive Design
6. Future Improvements

---

Technologies Used

- React: For building the interactive user interface.
- CSS: For styling and responsive design.
- JavaScript (ES6): For handling game logic and interactivity.

---

Setup Instructions

1. Clone the repository:

   git clone https://github.com/your-username/go-board-frontend.git

2. Navigate to the project directory:

   cd go-board-frontend

3. Install the dependencies:

   npm install

4. Start the development server:

   npm start

5. Open your browser and navigate to:

   http://localhost:3000

---

Folder Structure

.
├── src
│   ├── components
│   │   ├── Board.jsx          # Main board component
│   │   ├── Cell.jsx           # Individual cell component
│   ├── assets
│   │   ├── Stone-1.svg        # Black stone image
│   │   ├── Stone-2.svg        # White stone image
│   ├── styles
│   │   ├── Board.css          # CSS for the board and grid
│   │   ├── App.css            # General styling
│   ├── App.js                 # Main application entry point
│   ├── index.js               # React DOM rendering
├── package.json               # Project metadata and dependencies

---

How to Use

1. Placing Stones:
   - Click on a cell to place a stone.
   - Stones alternate between black and white.

2. Passing a Turn:
   - Use the "Pass" button to skip your turn.

3. Star Points:
   - Star points are automatically highlighted based on the board size.

---

Responsive Design

The board adjusts dynamically based on the screen width:

- Large Screens (Desktop):
  - Grid cells are 30px x 30px.
  - Best viewed on screens wider than 1024px.

- Medium Screens (Tablet):
  - Grid cells are 24px x 24px.
  - Adapted for screens between 768px and 1024px.

- Small Screens (Mobile):
  - Grid cells are 18px x 18px.
  - Optimized for screens narrower than 768px.

---

Future Improvements

- Game Logic:
  - Implement rules for capturing stones and scoring.
- User Authentication:
  - Add multiplayer functionality with player accounts.
- Animations:
  - Smooth transitions for placing stones and highlighting star points.
- Custom Themes:
  - Allow users to change board and stone styles.

---

License

This project is licensed under the MIT License. See the LICENSE file for more information.

---

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any features, bugs, or suggestions.

---

Contact

For any questions or feedback, please contact:

- Name: Jacob Somer
- Twitter: https://x.com/jacob_somer_
- GitHub: https://github.com/jacobsomer
