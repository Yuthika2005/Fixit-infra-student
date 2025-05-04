import React, { useState } from "react";
import axios from "axios";

const Laundry = () => {
  const API_URL = "https://fixit-hostel-backend.onrender.com";
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    year: "",
    noOfDresses: "",
    date: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/laundry`, formData);
      alert("Laundry details submitted successfully!");
      setFormData({ name: "", department: "", year: "", noOfDresses: "", date: "", image: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit laundry details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Laundry Form</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="number"
            name="noOfDresses"
            placeholder="No of Dresses"
            value={formData.noOfDresses}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <button className="col-span-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300" type="submit">
            Submit
          </button>
        </form>

        {formData.image && (
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-600">Image Preview:</h3>
            <img className="mt-2 rounded-lg w-32 h-32 object-cover mx-auto" src={formData.image} alt="Preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Laundry;