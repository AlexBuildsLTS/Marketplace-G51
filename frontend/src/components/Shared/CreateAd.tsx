import React, { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import api from '@/services/api';

const CreateAd: React.FC = () => {
  const addToast = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/ads', {
        title,
        description,
        price,
        category,
      });

      addToast({
        description: 'Advertisement created successfully!',
        variant: 'success',
      });

      // Reset form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setCategory('');
    } catch (error: any) {
      addToast({
        description:
            error.response?.data?.message || 'Failed to create advertisement.',
        variant: 'destructive',
      });
    }
  };

  return (
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Create Advertisement</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter ad title"
                required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter ad description"
                required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter price"
                required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
          </div>
          <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Create Ad
          </button>
        </form>
      </div>
  );
};

export default CreateAd;
