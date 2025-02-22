import React from "react";

const AIAnalysis = ({ aiResponse, generateAnalysis }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/2">
      <label className="block text-gray-700 font-medium mb-2">AI Analysis</label>
      <textarea
        className="w-full p-3 border rounded-lg bg-gray-100 text-gray-600"
        rows="6"
        value={aiResponse}
        readOnly
      ></textarea>
      <button
        onClick={generateAnalysis}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Generate Analysis
      </button>
    </div>
  );
};

export default AIAnalysis;
