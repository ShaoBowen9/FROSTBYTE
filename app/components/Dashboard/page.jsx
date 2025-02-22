'use client';

import React, { useState } from "react";
import WeatherForm from "../WeatherForm/page";
import WeatherDisplay from "../WeatherDisplay/page";
import AIAnalysis from "../AiAnalysis/page";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Dashboard = () => {
  const [clothing, setClothing] = useState("");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [aiResponse, setAiResponse] = useState("Gemini AI will analyze your input...");
  const [error, setError] = useState(null);

  const GEMINI_API_KEY = "AIzaSyBUp9DfpXww39o7UEofzgLvkknLDCHqUoU";
  const WEATHER_API_KEY = "02f4b78c4fe4ef6ae46a41482188ccc5";

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
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

  const generateAnalysis = async () => {
    if (!city.trim() || !clothing.trim()) {
      setAiResponse("Error: Please enter both clothing and city.");
      return;
    }

    if (!weatherData) {
      setAiResponse("Error: Weather data is missing. Please enter a valid city.");
      return;
    }

    setAiResponse("Generating AI analysis...");

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Analyze the risk of frostbite and hypothermia based on the following conditions:
        - User's clothing: ${clothing}
        - Temperature: ${weatherData.temp}°C
        - Wind speed: ${weatherData.speed} m/s
        Provide:
        1. Risk level of frostbite and hypothermia.
        2. Recommended safe outdoor time.
        3. Clothing improvements.
        Format your response concisely.
      `;

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      setAiResponse(responseText);
    } catch (error) {
      setAiResponse("Error: Failed to generate AI analysis. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">FrostByte Dashboard</h1>
      <p className="text-lg text-gray-700 mb-4">Enter your city and clothing choice to analyze hypothermia risk.</p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <WeatherForm
          clothing={clothing}
          setClothing={setClothing}
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        />
        <AIAnalysis aiResponse={aiResponse} generateAnalysis={generateAnalysis} />
      </div>

      {weatherData && <WeatherDisplay city={city} weatherData={weatherData} />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Dashboard;