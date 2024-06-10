// Importing necessary libraries and styles
import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";

// NewRecipeScreen component
const NewRecipeScreen = () => {
  // State variables for ingredients, name, and quantity
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  // Function to add a new ingredient to the ingredients array
  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  // Initial values for the Formik form
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  // Function to handle form submission
  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
  };

  // Mapping over the ingredients array to display each ingredient
  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  // JSX for the component
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      {/* Formik form */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {/* Input fields for recipe name and image URL */}
            <div className={styles.input_container}>
              <input
                placeholder="Title your Recipe!"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
              />
              <input
                placeholder="Paste an Image URL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
              />
            </div>
            {/* Radio buttons for type of recipe */}
            <div className={styles.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <h5>Drink</h5>
              </span>
            </div>
            {/* Input fields for prep time, cook time, and serves */}
            <div className={styles.input_container}>
              <input
                placeholder="Prep Time"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
              />
              <input
                placeholder="Cook Time"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
              />
              <input
                placeholder="Serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
              />
            </div>
            {/* Input fields for ingredients */}
            <h3>Ingredients</h3>
            <div className={styles.input_container}>
              <div className={styles.ingredient_inputs}>
                <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              {/* Display of ingredients */}
              <ul>{ingredientDisplay}</ul>
            </div>
            {/* Button to add another ingredient */}
            <button
              type="button"
              className="orange-btn"
              onClick={addIngredient}
            >
              Add Another
            </button>
            {/* Textarea for instructions */}
            <textarea
              placeholder="Type your instructions"
              rows={5}
              value={values.instructions}
              onChange={handleChange}
              name="instructions"
            />
            {/* Submit button */}
            <button type="submit" className="blue-btn">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

// Exporting the NewRecipeScreen component to be used in other parts of the application
export default NewRecipeScreen;
// Exporting the NewRecipeScreen component as default
// Path: Specs-Unit3/react-proj-3-solution/src/components/newRecipeComponents/NewRecipeScreen.jsx
