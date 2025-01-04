export const setMethods = {
  name: 'Set',
  description: 'A collection that contains no duplicate elements',
  methods: [
    // Basic Operations
    {
      name: 'add(E element)',
      description: 'Adds the specified element to this set if it is not already present',
      example: 'Set<String> set = new HashSet<>();\nset.add("Hello");',
      category: 'manipulation'
    },
    {
      name: 'remove(Object o)',
      description: 'Removes the specified element from this set if it is present',
      example: 'set.remove("Hello");',
      category: 'manipulation'
    },
    {
      name: 'contains(Object o)',
      description: 'Returns true if this set contains the specified element',
      example: 'boolean exists = set.contains("Hello");',
      category: 'search'
    },
    
    // Bulk Operations
    {
      name: 'addAll(Collection<? extends E> c)',
      description: 'Adds all elements in the specified collection to this set',
      example: 'set.addAll(Arrays.asList("One", "Two"));',
      category: 'manipulation'
    },
    {
      name: 'removeAll(Collection<?> c)',
      description: 'Removes all elements in the specified collection from this set',
      example: 'set.removeAll(Arrays.asList("One", "Two"));',
      category: 'manipulation'
    },
    {
      name: 'retainAll(Collection<?> c)',
      description: 'Retains only the elements in this set that are contained in the specified collection',
      example: 'set.retainAll(Arrays.asList("Keep", "These"));',
      category: 'manipulation'
    },
    {
      name: 'clear()',
      description: 'Removes all elements from this set',
      example: 'set.clear();',
      category: 'manipulation'
    },
    
    // Information Methods
    {
      name: 'size()',
      description: 'Returns the number of elements in this set',
      example: 'int size = set.size();',
      category: 'basic'
    },
    {
      name: 'isEmpty()',
      description: 'Returns true if this set contains no elements',
      example: 'boolean empty = set.isEmpty();',
      category: 'basic'
    },
    
    // Set Operations
    {
      name: 'containsAll(Collection<?> c)',
      description: 'Returns true if this set contains all elements in the specified collection',
      example: 'boolean hasAll = set.containsAll(Arrays.asList("One", "Two"));',
      category: 'search'
    },
    
    // Array Operations
    {
      name: 'toArray()',
      description: 'Returns an array containing all elements in this set',
      example: 'Object[] array = set.toArray();',
      category: 'conversion'
    },
    {
      name: 'toArray(T[] a)',
      description: 'Returns an array containing all elements in this set in the specified array',
      example: 'String[] array = set.toArray(new String[0]);',
      category: 'conversion'
    }
  ]
};