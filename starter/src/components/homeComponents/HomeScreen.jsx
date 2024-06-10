// Importing necessary libraries and components
import React, { useEffect, useState } from "react"; // React library with hooks for state and effect
import AdBanner from "./AdBanner"; // Importing the AdBanner component
import RecipeContainer from "./RecipeContainer"; // Importing the RecipeContainer component
import axios from "axios"; // Importing axios for making HTTP requests

// HomeScreen component
const HomeScreen = () => {
  // State to hold the list of recipes
  const [recipes, setRecipes] = useState([]);

  // URL for the API endpoint
  const url = "https://recipes.devmountain.com";

  // Function to fetch recipes from the API
  const getRecipes = () => {
    axios
      .get(`${url}/recipes`) // Making a GET request to the API endpoint
      .then((res) => {
        setRecipes(res.data); // Setting the fetched recipes in state
        console.log(res.data); // Logging the data to the console for debugging
      });
  };

  // useEffect hook to fetch recipes when the component mounts
  useEffect(() => {
    getRecipes(); // Calling the getRecipes function to fetch data
  }, []); // Empty dependency array ensures this effect runs only once

  // Returning JSX to render the component
  return (
    <div>
      <AdBanner /> {/* Rendering the AdBanner component */}
      <RecipeContainer recipes={recipes} />{" "}
      {/* Rendering the RecipeContainer component with recipes as a prop */}
    </div>
  );
};

// Exporting the HomeScreen component to be used in other parts of the application
export default HomeScreen;
// Exporting the HomeScreen component as default
// Path: Specs-Unit3/react-proj-3-solution/src/components/homeComponents/HomeScreen.jsx
