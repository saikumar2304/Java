export const listMethods = {
  name: 'List',
  description: 'An ordered collection of elements that allows duplicates',
  methods: [
    // Basic Operations
    {
      name: 'add(E element)',
      description: 'Appends the specified element to the end of this list',
      example: 'List<String> list = new ArrayList<>();\nlist.add("Hello");',
      category: 'manipulation'
    },
    {
      name: 'add(int index, E element)',
      description: 'Inserts the specified element at the specified position',
      example: 'list.add(0, "First");',
      category: 'manipulation'
    },
    {
      name: 'get(int index)',
      description: 'Returns the element at the specified position',
      example: 'String element = list.get(0);',
      category: 'basic'
    },
    {
      name: 'set(int index, E element)',
      description: 'Replaces the element at the specified position',
      example: 'list.set(0, "Updated");',
      category: 'manipulation'
    },
    {
      name: 'remove(int index)',
      description: 'Removes the element at the specified position',
      example: 'list.remove(0);',
      category: 'manipulation'
    },
    {
      name: 'remove(Object o)',
      description: 'Removes the first occurrence of the specified element',
      example: 'list.remove("Hello");',
      category: 'manipulation'
    },
    
    // Information Methods
    {
      name: 'size()',
      description: 'Returns the number of elements in this list',
      example: 'int size = list.size();',
      category: 'basic'
    },
    {
      name: 'isEmpty()',
      description: 'Returns true if this list contains no elements',
      example: 'boolean empty = list.isEmpty();',
      category: 'basic'
    },
    {
      name: 'contains(Object o)',
      description: 'Returns true if this list contains the specified element',
      example: 'boolean hasElement = list.contains("Hello");',
      category: 'search'
    },
    {
      name: 'indexOf(Object o)',
      description: 'Returns the index of the first occurrence of the specified element',
      example: 'int index = list.indexOf("Hello");',
      category: 'search'
    },
    {
      name: 'lastIndexOf(Object o)',
      description: 'Returns the index of the last occurrence of the specified element',
      example: 'int lastIndex = list.lastIndexOf("Hello");',
      category: 'search'
    },
    
    // Bulk Operations
    {
      name: 'addAll(Collection<? extends E> c)',
      description: 'Appends all elements in the specified collection to the end of this list',
      example: 'list.addAll(Arrays.asList("One", "Two"));',
      category: 'manipulation'
    },
    {
      name: 'addAll(int index, Collection<? extends E> c)',
      description: 'Inserts all elements in the specified collection into this list at the specified position',
      example: 'list.addAll(0, Arrays.asList("First", "Second"));',
      category: 'manipulation'
    },
    {
      name: 'removeAll(Collection<?> c)',
      description: 'Removes all elements in the specified collection from this list',
      example: 'list.removeAll(Arrays.asList("One", "Two"));',
      category: 'manipulation'
    },
    {
      name: 'retainAll(Collection<?> c)',
      description: 'Retains only the elements in this list that are contained in the specified collection',
      example: 'list.retainAll(Arrays.asList("Keep", "These"));',
      category: 'manipulation'
    },
    {
      name: 'clear()',
      description: 'Removes all elements from this list',
      example: 'list.clear();',
      category: 'manipulation'
    },
    
    // View Operations
    {
      name: 'subList(int fromIndex, int toIndex)',
      description: 'Returns a view of the portion of this list between fromIndex and toIndex',
      example: 'List<String> subList = list.subList(1, 3);',
      category: 'view'
    },
    
    // Array Operations
    {
      name: 'toArray()',
      description: 'Returns an array containing all elements in this list',
      example: 'Object[] array = list.toArray();',
      category: 'conversion'
    },
    {
      name: 'toArray(T[] a)',
      description: 'Returns an array containing all elements in this list in the specified array',
      example: 'String[] array = list.toArray(new String[0]);',
      category: 'conversion'
    }
  ]
};