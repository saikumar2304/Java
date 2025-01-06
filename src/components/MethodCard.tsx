import React from 'react';

interface MethodCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-2 text-gray-100">{title}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default MethodCard;