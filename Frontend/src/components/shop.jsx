import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../context/api";
import { AuthContext } from "../context/authcontext";

function Shop() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [0, 20000],
    search: "",
  });
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: 'Protein', imageUrl: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${backend}/api/products`);
      setProducts(res.data);
    } catch (e) {
      console.error('Failed to load products', e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    if (filters.search.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e, type) => {
    const value = parseFloat(e.target.value) || 0;
    setFilters((prev) => ({
      ...prev,
      priceRange:
        type === "min"
          ? [value, prev.priceRange[1]]
          : [prev.priceRange[0], value],
    }));
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const addToCart = (productId) => {
    setCart((prev) => {
      const updatedCart = [...prev, productId];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleBuyNow = (buyLink) => {
    window.open(buyLink, "_blank");
  };

  const resetForm = () => {
    setForm({ name: '', price: '', category: 'Protein', imageUrl: '', description: '' });
    setEditingId(null);
  };

  const submitProduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    try {
      if (editingId) {
        await axios.put(`${backend}/api/products/${editingId}`, form, { headers: { Authorization: `Bearer ${token}` } });
      } else {
        await axios.post(`${backend}/api/products`, form, { headers: { Authorization: `Bearer ${token}` } });
      }
      resetForm();
      fetchProducts();
    } catch (e) {
      console.error('Save failed', e);
    }
  };

  const editProduct = (p) => {
    setForm({ name: p.name, price: p.price, category: p.category, imageUrl: p.imageUrl, description: p.description || '' });
    setEditingId(p._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`${backend}/api/products/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      fetchProducts();
    } catch (e) {
      console.error('Delete failed', e);
    }
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gym Supplements
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Discover our premium range of gym supplements to help you achieve your
              fitness goals. Whether you're bulking, cutting, or just staying healthy,
              we have the products you need.
            </p>
          </header>

          <div className="mt-8 flex items-center justify-between">
            <select
              className="border-gray-300 h-10 rounded"
              onChange={handleCategoryChange}
              value={filters.category}
            >
              <option value="All">All Categories</option>
              <option value="Protein">Protein</option>
              <option value="Vitamins">Vitamins</option>
              <option value="Pre-Workout">Pre-Workout</option>
            </select>

            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Price"
                className="border-gray-300 rounded"
                onChange={(e) => handlePriceChange(e, "min")}
                value={filters.priceRange[0]}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="border-gray-300 rounded"
                onChange={(e) => handlePriceChange(e, "max")}
                value={filters.priceRange[1]}
              />
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="border-gray-300 h-10 rounded"
              onChange={handleSearchChange}
              value={filters.search}
            />
          </div>

          {user?.role === 'admin' && (
            <form onSubmit={submitProduct} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end">
              <input className="border p-2 rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
              <input className="border p-2 rounded" placeholder="Price" type="number" value={form.price} onChange={e=>setForm({...form,price:Number(e.target.value)})} required />
              <select className="border p-2 rounded" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>
                <option>Protein</option>
                <option>Vitamins</option>
                <option>Pre-Workout</option>
              </select>
              <input className="border p-2 rounded" placeholder="Image URL" value={form.imageUrl} onChange={e=>setForm({...form,imageUrl:e.target.value})} required />
              <input className="border p-2 rounded sm:col-span-2" placeholder="Description (optional)" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
              <div className="sm:col-span-2">
                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
                  {editingId ? 'Update Product' : 'Add Product'}
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} className="ml-2 px-4 py-2 bg-gray-200 rounded">Cancel</button>
                )}
              </div>
            </form>
          )}

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="p-4 rounded-lg group block overflow-hidden border-2 border-transparent hover:border-teal-700/30"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative pt-5">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-bold">
                    <span className="tracking-wider text-gray-900">
                      ৳{product.price.toLocaleString()}
                    </span>
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => addToCart(product._id)}
                      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
                    >
                      Add to Cart
                    </button>
                    {user?.role === 'admin' ? (
                      <>
                        <button onClick={()=>editProduct(product)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Edit</button>
                        <button onClick={()=>deleteProduct(product._id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
                      </>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Shop;