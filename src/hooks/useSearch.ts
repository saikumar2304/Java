import { useState, useMemo } from 'react';
import { Method } from '../types/JavaTypes';

export function useSearch(methods: Method[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMethods = useMemo(() => {
    if (!searchQuery.trim()) return methods;
    
    const query = searchQuery.toLowerCase();
    return methods.filter(method => 
      method.name.toLowerCase().includes(query) ||
      method.description.toLowerCase().includes(query) ||
      method.category?.toLowerCase().includes(query)
    );
  }, [methods, searchQuery]);

  return { searchQuery, setSearchQuery, filteredMethods };
}