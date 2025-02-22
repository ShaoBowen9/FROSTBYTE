import React from "react";

const WeatherForm = ({ clothing, setClothing, city, setCity, fetchWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
      <label className="block text-gray-700 font-medium mb-2">Describe your clothing (Max 250 words)</label>
      <textarea
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="4"
        placeholder="E.g., I'm wearing a winter coat, gloves, jeans, and sneakers."
        value={clothing}
        onChange={(e) => setClothing(e.target.value)}
      ></textarea>
      <p className="text-sm text-gray-500 mt-1">{clothing.length}/250 characters</p>

      <label className="block text-gray-700 font-medium mt-4 mb-2">Enter your city</label>
      <input
        type="text"
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="E.g., Toronto"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;
