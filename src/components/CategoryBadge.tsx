import React from 'react';

const categoryColors = {
  basic: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  manipulation: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  search: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  case: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  comparison: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  conversion: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  utility: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
  static: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
};

interface CategoryBadgeProps {
  category: keyof typeof categoryColors;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category]}`}>
      {category}
    </span>
  );
}