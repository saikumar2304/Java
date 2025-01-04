import React from 'react';
import LiveEditor from '../components/playground/LiveEditor';

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Interactive Java Playground
        </h1>
        <LiveEditor />
      </div>
    </div>
  );
}