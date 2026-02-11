import React from "react";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe.id)}>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <span className="category">{recipe.category}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
