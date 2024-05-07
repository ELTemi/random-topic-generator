'use client'
import { useState } from 'react';

const topics = [
  "Responsive Design",
  "User Interface (UI)",
  "Cookies",
  "Mobile Optimization",
  "Call to Action (CTA)",
];




export default function Home() {
  const [topic, setTopic] = useState('');

  const generateRandomTopic = () => {
    if (topics.length === 0) {
      setTopic('No more topics left!');
    } else {
      const randomIndex = Math.floor(Math.random() * topics.length);
      const randomTopic = topics[randomIndex];
      topics.splice(randomIndex, 1);
      setTopic(randomTopic);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold mb-6">Random Topic Generator</h1>
    <p className="text-lg mb-6">{topic}</p>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out" onClick={generateRandomTopic}>Generate</button>
  </div>
  );
}