import { useMemo } from 'react';
import { Method, JavaType } from '../data/types';

export function useCompareTypes(types: JavaType[], selectedTypes: string[], searchQuery: string) {
  return useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    
    return selectedTypes.flatMap(typeName => {
      const type = types.find(t => t.name === typeName);
      if (!type) return [];
      
      return type.methods.filter(method =>
        !query ||
        method.name.toLowerCase().includes(query) ||
        method.description.toLowerCase().includes(query) ||
        (method.category && method.category.toLowerCase().includes(query))
      ).map(method => ({
        ...method,
        typeName: type.name
      }));
    });
  }, [types, selectedTypes, searchQuery]);
}