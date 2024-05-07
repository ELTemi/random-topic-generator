'use client'
import { useState } from 'react';

const topics1 = [
  "Responsive Design",
  "User Interface (UI)",
  "Cookies",
  "Mobile Optimization",
  "Call to Action (CTA)",
];

const topics2 = [
  "Responsive Design",
  "API (Application Programming Interface)",
  "Navigation Bar",
  "Custom Code",
  "User Interface (UI)",
];

const topics3 = [
  "User Experience (UX)",
  "Wireframe",
  "SSL (Secure Sockets Layer)",
  "Web Builder",
  "SEO (Search Engine Optimization)",
];

const topics4 = [
  "Cookies",
  "JavaScript",
  "HTML5",
  "CSS",
  "Database",
];

const topics5 = [
  "Web Hosting",
  "Mobile Optimization",
  "Call to Action (CTA)",
  "Landing Page",
  "Analytics",
];


export default function Home() {
  const [topic, setTopic] = useState('');

  const generateRandomTopic1 = () => {
    if (topics1.length === 0) {
      setTopic('No more topics left!');
    } else {
      const randomIndex = Math.floor(Math.random() * topics1.length);
      const randomTopic = topics1[randomIndex];
      topics1.splice(randomIndex, 1);
      setTopic(randomTopic);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold mb-6">Random Topic Generator</h1>
    <p className="text-lg mb-6">{topic}</p>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out" onClick={generateRandomTopic1}>Group 1</button>
  </div>
  );
}
