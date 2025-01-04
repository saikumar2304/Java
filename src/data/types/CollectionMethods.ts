export const collectionMethods = {
  name: 'Collection',
  description: 'Root interface in the collection hierarchy',
  methods: [
    {
      name: 'addAll(Collection<? extends E> c)',
      description: 'Adds all elements in the specified collection to this collection',
      example: 'collection.addAll(Arrays.asList(1, 2, 3));',
      category: 'manipulation'
    },
    {
      name: 'removeAll(Collection<?> c)',
      description: 'Removes all elements in the specified collection from this collection',
      example: 'collection.removeAll(Arrays.asList(1, 2));',
      category: 'manipulation'
    },
    {
      name: 'retainAll(Collection<?> c)',
      description: 'Retains only the elements in this collection that are contained in the specified collection',
      example: 'collection.retainAll(Arrays.asList(1, 2));',
      category: 'manipulation'
    },
    {
      name: 'stream()',
      description: 'Returns a sequential Stream with this collection as its source',
      example: 'collection.stream().filter(e -> e > 0).collect(Collectors.toList());',
      category: 'utility'
    },
    {
      name: 'parallelStream()',
      description: 'Returns a parallel Stream with this collection as its source',
      example: 'collection.parallelStream().map(String::toUpperCase).collect(Collectors.toList());',
      category: 'utility'
    }
  ]
};