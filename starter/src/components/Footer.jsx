import React from "react";
import styles from "./Header.module.css"; // Importing CSS module for styling
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im"; // Importing icons from 'react-icons' library

// Footer component
const Footer = () => {
  return (
    // Footer tag to denote the footer section of the page
    <footer>
      {/* Div for social media container */}
      <div className={styles.social_container}>
        {/* Heading for the social media links */}
        <h5>Hit us up on our socials!</h5>
        {/* Div for social media icons */}
        <div className={styles.social_icons}>
          {/* Facebook link with target="_blank" and rel="noreferrer" to open in a new tab and prevent security risks */}
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
            className={styles.circle}
          >
            {/* Facebook icon */}
            <ImFacebook size="1.5em" color="#3f3f3f" />
          </a>
          {/* Similar structure for Instagram, Twitter, and Github links */}
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
            className={styles.circle}
          >
            <ImInstagram size="1.5em" color="#3f3f3f" />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
            className={styles.circle}
          >
            <ImTwitter size="1.5em" color="#3f3f3f" />
          </a>
          <a
            href="https://www.devmountain.com"
            target="_blank"
            rel="noreferrer"
            className={styles.circle}
          >
            <ImGithub size="1.5em" color="#3f3f3f" />
          </a>
        </div>
      </div>
      {/* SVG for a graphical element in the footer */}
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" strokeWidth="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </footer>
  );
};

// Exporting the Footer component to be used in other parts of the application
export default Footer;
