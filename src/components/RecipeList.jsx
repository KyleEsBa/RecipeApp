import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
