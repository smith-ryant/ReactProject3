// Importing necessary libraries and styles
import React from "react";
import styles from "./Details.module.css"; // Importing CSS module for styling

// DetailImage component
const DetailImage = ({ image, title }) => {
  // Returning JSX to render the component
  return (
    <div
      className={styles.banner} // Applying banner styles from the Details.module.css file
      style={{
        backgroundSize: "cover", // Ensuring the background image covers the entire div
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`, // Applying a dark overlay and setting the background image
      }}
    >
      <div className={styles.ad_text}>
        {" "}
        {/* Container for the text */}
        <h1>{title}</h1> {/* Displaying the title */}
      </div>
    </div>
  );
};

// Exporting the DetailImage component to be used in other parts of the application
export default DetailImage;

// Path: Specs-Unit3/react-proj-3-solution/src/components/detailComponents/DetailImage.jsx
