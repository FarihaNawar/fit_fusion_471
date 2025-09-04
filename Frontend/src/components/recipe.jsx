import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { backend } from '../context/api';
import { AuthContext } from '../context/authcontext';

const Recipe = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [form, setForm] = useState({ imgSrc: '', title: '', description: '' });
  const [submitting, setSubmitting] = useState(false);

  const loadRecipes = async () => {
    try {
      const res = await axios.get(`${backend}/api/recipes`);
      setRecipes(res.data);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { loadRecipes(); }, []);

  const submitRecipe = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('You must be logged in as admin to add recipes.');
      return;
    }
    if (!form.imgSrc || !form.title || !form.description) {
      alert('Please fill all fields.');
      return;
    }
    if (submitting) return;
    setSubmitting(true);
    try {
      await axios.post(`${backend}/api/recipes`, form, { headers: { Authorization: `Bearer ${token}` } });
      setForm({ imgSrc: '', title: '', description: '' });
      loadRecipes();
      alert('Recipe added.');
    } catch (e) {
      console.error(e);
      const serverMsg = e?.response?.data?.details || e?.response?.data?.message;
      alert(serverMsg || 'Failed to add recipe');
    } finally {
      setSubmitting(false);
    }
  };

  const deleteRecipe = async (id) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`${backend}/api/recipes/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      loadRecipes();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="p-4">
      {user?.role === 'admin' && (
        <form onSubmit={submitRecipe} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-end mb-6">
          <input className="border p-2 rounded" placeholder="Image URL" value={form.imgSrc} onChange={e=>setForm({...form,imgSrc:e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
          <input className="border p-2 rounded sm:col-span-2" placeholder="Instructions" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} required />
          <div className="sm:col-span-2">
            <button type="submit" disabled={submitting} className={`px-4 py-2 text-white rounded ${submitting ? 'bg-teal-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}>{submitting ? 'Adding...' : 'Add Recipe'}</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="bg-white rounded-2xl shadow-md p-4">
            <img
              src={recipe.imgSrc}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h2 className="text-xl font-semibold mb-1">{recipe.title}</h2>
            <h3 className="font-bold mt-2">Instructions:</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{recipe.description}</p>
            {user?.role === 'admin' && (
              <div className="mt-3 flex gap-2">
                <button onClick={()=>deleteRecipe(recipe._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
