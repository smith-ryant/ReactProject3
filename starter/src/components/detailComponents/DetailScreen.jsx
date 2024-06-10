// Importing necessary libraries and components
import React, { useEffect, useState } from "react"; // React library with hooks for state and effect
import { useParams } from "react-router-dom"; // Hook for accessing route parameters
import DetailImage from "./DetailImage"; // Importing the DetailImage component
import axios from "axios"; // Importing axios for making HTTP requests
import styles from "./Details.module.css"; // Importing CSS module for styling

// DetailScreen component
const DetailScreen = () => {
  const { id } = useParams(); // Extracting the 'id' parameter from the URL

  // State to hold the recipe details
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com"; // API base URL

  // Logging the recipe object for debugging
  console.log(recipe);

  // useEffect hook to fetch recipe details when the component mounts or 'id' changes
  useEffect(() => {
    axios.get(`${url}/recipes/${id}`).then((res) => {
      setRecipe(res.data); // Setting the fetched recipe data in state
    });
  }, [id]); // Dependency array includes 'id' to refetch data when 'id' changes

  // Returning JSX to render the component
  return (
    <section>
      {/* Rendering the DetailImage component with the recipe image and title */}
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />

      <div className={styles.details_container}>
        {/* Ingredients and recipe details section */}
        <div className={styles.ingredients_container}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => (
              <h4 key={index}>
                {ing.quantity} {ing.ingredient}
              </h4>
            ))}
        </div>

        {/* Instructions section */}
        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

// Exporting the DetailScreen component to be used in other parts of the application
export default DetailScreen;

// Path: Specs-Unit3/react-proj-3-solution/src/components/detailComponents/DetailScreen.jsx
