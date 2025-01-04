import { useMemo } from 'react';
import { Method } from '../data/types';

export function useMethodSearch(methods: Method[], searchQuery: string) {
  return useMemo(() => {
    if (!searchQuery.trim()) return methods;
    
    const query = searchQuery.toLowerCase();
    return methods.filter(method => 
      method.name.toLowerCase().includes(query) ||
      method.description.toLowerCase().includes(query) ||
      (method.category && method.category.toLowerCase().includes(query))
    );
  }, [methods, searchQuery]);
}