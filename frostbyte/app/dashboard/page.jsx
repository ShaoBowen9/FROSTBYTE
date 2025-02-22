'use client';

import { useState } from 'react';

const Dashboard = () => {
  const [city, setCity] = useState('');
  const [outfit, setOutfit] = useState('');
  const [aiComment, setAiComment] = useState('');

  const handleInputChange = () => {
    // Placeholder AI logic - you can replace this with an API call
    if (city.toLowerCase() === 'new york') {
      setAiComment("It's cold! Make sure to wear layers.");
    } else if (city.toLowerCase() === 'miami') {
      setAiComment("It's warm! Light clothing is best.");
    } else {
      setAiComment("Enter a city to get weather-related outfit advice.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
      
      <input 
        type="text" 
        placeholder="Enter your city" 
        value={city} 
        onChange={(e) => { setCity(e.target.value); handleInputChange(); }}
        className="w-80 p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-400"
      />
      
      <input 
        type="text" 
        placeholder="Enter what you're wearing" 
        value={outfit} 
        onChange={(e) => setOutfit(e.target.value)}
        className="w-80 p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-400"
      />
      
      <div className="w-80 p-3 bg-gray-800 rounded text-gray-300">
        {aiComment || "AI outfit suggestions will appear here..."}
      </div>
    </div>
  );
};

export default Dashboard;
