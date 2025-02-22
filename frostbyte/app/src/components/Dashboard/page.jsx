'use client'
import React, { useState } from "react";

const Dashboard = () => {
  const [clothing, setClothing] = useState("");
  const [city, setCity] = useState("");

  const handleClothingChange = (e) => {
    if (e.target.value.length <= 250) {
      setClothing(e.target.value);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clothing:", clothing);
    console.log("City:", city);
    // Future: Send data to Gemini API & OpenWeather API
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">FrostByte Dashboard</h1>
      <p className="text-lg text-gray-700 mb-4">Enter your city and clothing choice to analyze hypothermia risk.</p>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <label className="block text-gray-700 font-medium mb-2">Describe your clothing (Max 250 words)</label>
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="E.g., I'm wearing a winter coat, gloves, jeans, and sneakers."
          value={clothing}
          onChange={handleClothingChange}
        ></textarea>
        <p className="text-sm text-gray-500 mt-1">{clothing.length}/250 characters</p>

        <label className="block text-gray-700 font-medium mt-4 mb-2">Enter your city</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="E.g., Toronto"
          value={city}
          onChange={handleCityChange}
        />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
