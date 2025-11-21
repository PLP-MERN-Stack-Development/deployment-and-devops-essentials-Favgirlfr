import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const addRecipe = async (recipe) => {
    try {
      const response = await axios.post('http://localhost:5000/api/recipes', recipe);
      setRecipes([...recipes, response.data]);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/recipes/${id}`, updatedRecipe);
      setRecipes(recipes.map(recipe => recipe._id === id ? response.data : recipe));
      setEditingRecipe(null);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/recipes/${id}`);
      setRecipes(recipes.filter(recipe => recipe._id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe Manager</h1>
        <AddRecipeForm onAdd={addRecipe} onUpdate={updateRecipe} editingRecipe={editingRecipe} setEditingRecipe={setEditingRecipe} />
        <RecipeList recipes={recipes} onEdit={setEditingRecipe} onDelete={deleteRecipe} />
      </div>
    </div>
  );
}

export default App;