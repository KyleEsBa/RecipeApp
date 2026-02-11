import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import recipesData from "./data/recipes";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";
import "./App.css";

function RecipeDetailWrapper() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === parseInt(id));
  return <RecipeDetail recipe={recipe} />;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter recipes by title, ingredient, or category
  const filteredRecipes = recipesData.filter(recipe => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.category.toLowerCase().includes(term) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(term))
    );
  });

  const navigate = useNavigate();

  return (
    <div className="app-container">
      <h1>Recipe App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<RecipeList recipes={filteredRecipes} onRecipeClick={id => navigate(`/recipe/${id}`)} />} />
        <Route path="/recipe/:id" element={<RecipeDetailWrapper />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
