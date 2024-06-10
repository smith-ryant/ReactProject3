// Importing necessary libraries, styles, and assets
import React from "react"; // React library for building user interfaces
import styles from "./Home.module.css"; // CSS module for styling the component
import salmon from "../../assets/salmon.jpg"; // Image asset for the ad banner
import { Link } from "react-router-dom"; // Component for creating navigable links in the app

// AdBanner component
const AdBanner = () => {
  // JSX returned by the component
  return (
    <div
      // Applying ad banner styles from the Home.module.css file
      className={styles.ad_banner}
      // Inline styles for the background image and gradient
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`, // Background image set to the imported salmon image
        backgroundSize: "cover", // Background image covers the entire div
      }}
    >
      <div className={styles.ad_text}>
        <h3>{/* Heading for the new recipe */}New Recipe</h3>
        <h1>{/* Name of the new recipe */}Pineapple Salmon</h1>
        <h3>
          {/* Description of the new recipe */}
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and
          garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">
            {/* Button to check out the recipe */}Check it out
          </button>
        </Link>
      </div>
    </div>
  );
};

// Exporting the AdBanner component to be used in other parts of the application
export default AdBanner;
// Exporting the AdBanner component as default
// Path: Specs-Unit3/react-proj-3-solution/src/components/homeComponents/AdBanner.jsx
