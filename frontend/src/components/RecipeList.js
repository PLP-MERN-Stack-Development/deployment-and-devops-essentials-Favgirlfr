import React from 'react';

const RecipeList = ({ recipes, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <div key={recipe._id} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded mb-4" />}
          <p className="text-gray-600 mb-2"><strong>Prep Time:</strong> {recipe.prepTime} min</p>
          <p className="text-gray-600 mb-2"><strong>Cook Time:</strong> {recipe.cookTime} min</p>
          <p className="text-gray-600 mb-4"><strong>Servings:</strong> {recipe.servings}</p>
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-2">Instructions:</h3>
          <p className="text-gray-700 mb-4">{recipe.instructions}</p>
          <div className="flex justify-between">
            <button
              onClick={() => onEdit(recipe)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(recipe._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;