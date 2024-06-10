// Importing necessary libraries and styles
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"; // Importing CSS module for styling

// Header component
const Header = () => {
  return (
    // Header tag to denote the header section of the page
    <header>
      {/* Heading for the header */}
      <h2>Devmountain Eatery</h2>
      {/* Navigation section */}
      <nav>
        {/* Link to the home page */}
        <Link to="">
          {/* Button for navigation, styled with styles.nav_btn */}
          <button className={styles.nav_btn}>Home</button>
        </Link>
        {/* Link to the new recipe page */}
        <Link to="/newRecipe">
          {/* Button for navigation, styled with styles.nav_btn */}
          <button className={styles.nav_btn}>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
// Exporting the Header component as default
// Path: Specs-Unit3/react-proj-3-solution/src/components/Header.jsx
