'use client'
import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [clothing, setClothing] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleClothingChange = (e) => {
    if (e.target.value.length <= 250) {
      setClothing(e.target.value);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    const API_KEY = "02f4b78c4fe4ef6ae46a41482188ccc5"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const { temp } = response.data.main;
      const { speed } = response.data.wind;
      
      setWeatherData({ temp, speed });
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please enter a valid city.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">FrostByte Dashboard</h1>
      <p className="text-lg text-gray-700 mb-4">Enter your city and clothing choice to analyze hypothermia risk.</p>

      {/* Container for Form and AI Analysis */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
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
            Get Weather
          </button>
        </form>

        {/* AI Analysis Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
          <label className="block text-gray-700 font-medium mb-2">AI Analysis</label>
          <textarea
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
            rows="6"
            value="Gemini AI will analyze your input..."
            readOnly
          ></textarea>
        </div>
      </div>

      {/* Weather Display */}
      {weatherData && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-xl w-full max-w-lg text-center">
          <h2 className="text-xl font-semibold text-blue-900">Weather in {city}</h2>
          <p className="text-gray-700">🌡️ Temperature: {weatherData.temp}°C</p>
          <p className="text-gray-700">💨 Wind Speed: {weatherData.speed} m/s</p>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Dashboard;
