import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeDetail = ({ recipe }) => {
  const navigate = useNavigate();

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipe-detail">
      <button onClick={() => navigate(-1)} className="back-btn">&larr; Back</button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="detail-image" />
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Description:</strong> {recipe.description}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} | <strong>Cook Time:</strong> {recipe.cookTime} | <strong>Servings:</strong> {recipe.servings}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, idx) => (
          <li key={idx}>{item.quantity} {item.name}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
