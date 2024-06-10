// Importing necessary libraries and components
import { Route, Routes } from "react-router-dom"; // Importing Route and Routes for routing
import "./App.css"; // Importing global CSS styles
import DetailScreen from "./components/detailComponents/DetailScreen"; // Importing the DetailScreen component
import Footer from "./components/Footer"; // Importing the Footer component
import Header from "./components/Header"; // Importing the Header component
import HomeScreen from "./components/homeComponents/HomeScreen"; // Importing the HomeScreen component
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen"; // Importing the NewRecipeScreen component

// App component
function App() {
  // Returning JSX to render the component
  return (
    <div className="App">
      {" "}
      {/* Main container for the application */}
      <Header /> {/* Rendering the Header component */}
      <main>
        {/* Defining routes for the application */}
        <Routes>
          <Route index element={<HomeScreen />} />{" "}
          {/* Default route rendering HomeScreen */}
          <Route path="newRecipe" element={<NewRecipeScreen />} />{" "}
          {/* Route for creating a new recipe */}
          <Route path="/recipe/:id" element={<DetailScreen />} />{" "}
          {/* Route for viewing recipe details */}
        </Routes>
      </main>
      <Footer /> {/* Rendering the Footer component */}
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
