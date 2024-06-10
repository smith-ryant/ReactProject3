// Importing necessary libraries and components
import React, { useState } from "react";
import RecipeCard from "../../elements/RecipeCard"; // Importing the RecipeCard component
import styles from "./Home.module.css"; // Importing CSS module for styling
import { BiSearchAlt2 } from "react-icons/bi"; // Importing a search icon from react-icons

// RecipeContainer component
const RecipeContainer = ({ recipes }) => {
  // State to hold the search query
  const [search, setSearch] = useState("");

  // Filter and map the recipes based on the search query
  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />; // Adding a key to each RecipeCard for proper list rendering
    });

  // Returning JSX to render the component
  return (
    <section className={styles.recipe_section}>
      <h2>Search a recipe!</h2>
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search} // Controlled input for the search query
          onChange={(e) => setSearch(e.target.value)} // Updating state on input change
          placeholder="Search for a Recipe" // Placeholder text for the input
        />
      </span>
      <div className={styles.recipe_container}>
        {recipeDisplay.length > 0 ? recipeDisplay : <h2>No Recipes :(</h2>}
      </div>
    </section>
  );
};

// Exporting the RecipeContainer component to be used in other parts of the application
export default RecipeContainer;

// Path: Specs-Unit3/react-proj-3-solution/src/components/homeComponents/RecipeContainer.jsx
