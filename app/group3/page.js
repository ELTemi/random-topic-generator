'use client'
import { useState } from 'react';

const topics = [
  "User Experience (UX)",
  "Wireframe",
  "SSL (Secure Sockets Layer)",
  "Web Builder",
  "SEO (Search Engine Optimization)",
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
    <h1 className="text-3xl font-bold mb-6">Random Web Builder Topic Generator</h1>
    <p className="text-lg mb-6">{topic}</p>
    <button className={`px-4 py-2 ${topics.length === 0 ?  "bg-gray-400" : "bg-blue-500"} text-white rounded ${topics.length === 0 ?  "bg-gray-400" : "hover:bg-blue-600"} transition duration-300 ease-in-out`} disabled={topics.length === 0} onClick={generateRandomTopic}>Generate</button>
  </div>
  );
}