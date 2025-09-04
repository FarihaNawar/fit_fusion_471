// Import necessary dependencies
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { backend } from '../context/api';
import { AuthContext } from '../context/authcontext';

const YogaMeditationGrid = () => {
  const { user } = useContext(AuthContext);
  const [videos, setVideos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [form, setForm] = useState({ youtubeUrl: '', thumbnailUrl: '', title: '', description: '', category: 'Yoga' });
  const [submitting, setSubmitting] = useState(false);

  const loadVideos = async () => {
    try {
      const res = await axios.get(`${backend}/api/yoga`);
      setVideos(res.data);
    } catch (e) { console.error(e); }
  };

  useEffect(() => { loadVideos(); }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredVideos = filter === 'All' ? videos : videos.filter(video => video.category === filter);

  const submitVideo = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) { alert('You must be logged in as admin.'); return; }
    if (!form.youtubeUrl || !form.thumbnailUrl || !form.title || !form.description) { alert('Please fill all fields.'); return; }
    if (submitting) return;
    setSubmitting(true);
    try {
      await axios.post(`${backend}/api/yoga`, form, { headers: { Authorization: `Bearer ${token}` } });
      setForm({ youtubeUrl: '', thumbnailUrl: '', title: '', description: '', category: 'Yoga' });
      loadVideos();
      alert('Video added.');
    } catch (e) { console.error(e); alert(e?.response?.data?.message || 'Failed to add video'); }
    finally { setSubmitting(false); }
  };

  const deleteVideo = async (id) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.delete(`${backend}/api/yoga/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      loadVideos();
    } catch (e) { console.error(e); }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Yoga and Meditation Tutorials</h1>

        {user?.role === 'admin' && (
          <form onSubmit={submitVideo} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 items-end mb-8">
            <input className="border p-2 rounded" placeholder="YouTube URL" value={form.youtubeUrl} onChange={e=>setForm({...form,youtubeUrl:e.target.value})} required />
            <input className="border p-2 rounded" placeholder="Thumbnail URL" value={form.thumbnailUrl} onChange={e=>setForm({...form,thumbnailUrl:e.target.value})} required />
            <input className="border p-2 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
            <input className="border p-2 rounded" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} required />
            <select className="border p-2 rounded" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>
              <option>Yoga</option>
              <option>Meditation</option>
            </select>
            <div>
              <button type="submit" disabled={submitting} className={`px-4 py-2 text-white rounded ${submitting ? 'bg-teal-300 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}>Add Video</button>
            </div>
          </form>
        )}

        {/* Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            {['All', 'Yoga', 'Meditation'].map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-lg shadow-md ${filter === category ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-teal-600 hover:text-white`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div key={video._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-700 truncate">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm">{video.category}</p>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-block bg-teal-500 text-white px-4 py-2 rounded-lg text-center hover:bg-teal-600"
                >
                  Watch Now
                </a>
                {user?.role === 'admin' && (
                  <div className="mt-3 flex gap-2">
                    <button onClick={()=>deleteVideo(video._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YogaMeditationGrid;
