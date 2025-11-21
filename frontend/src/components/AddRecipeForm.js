import React, { useState, useEffect } from 'react';

const AddRecipeForm = ({ onAdd, onUpdate, editingRecipe, setEditingRecipe }) => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    image: '',
  });

  useEffect(() => {
    if (editingRecipe) {
      setFormData({
        title: editingRecipe.title,
        ingredients: editingRecipe.ingredients,
        instructions: editingRecipe.instructions,
        prepTime: editingRecipe.prepTime || '',
        cookTime: editingRecipe.cookTime || '',
        servings: editingRecipe.servings || '',
        image: editingRecipe.image || '',
      });
    } else {
      setFormData({
        title: '',
        ingredients: [''],
        instructions: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        image: '',
      });
    }
  }, [editingRecipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
  };

  const removeIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecipe) {
      onUpdate(editingRecipe._id, formData);
    } else {
      onAdd(formData);
    }
    setFormData({
      title: '',
      ingredients: [''],
      instructions: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      image: '',
    });
  };

  const handleCancel = () => {
    setEditingRecipe(null);
    setFormData({
      title: '',
      ingredients: [''],
      instructions: '',
      prepTime: '',
      cookTime: '',
      servings: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">{editingRecipe ? 'Edit Recipe' : 'Add New Recipe'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Recipe Title"
          className="border border-gray-300 rounded px-3 py-2"
          required
        />
        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
          placeholder="Prep Time (min)"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleChange}
          placeholder="Cook Time (min)"
          className="border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          placeholder="Servings"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <input
        type="url"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="border border-gray-300 rounded px-3 py-2 w-full mt-4"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="flex mb-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              placeholder="Ingredient"
              className="border border-gray-300 rounded px-3 py-2 flex-grow mr-2"
              required
            />
            <button
              type="button"
              onClick={() => removeIngredient(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addIngredient}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add Ingredient
        </button>
      </div>
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        className="border border-gray-300 rounded px-3 py-2 w-full mt-4 h-32"
        required
      />
      <div className="flex justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {editingRecipe ? 'Update Recipe' : 'Add Recipe'}
        </button>
        {editingRecipe && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddRecipeForm;