export const collectionsUtilMethods = {
  name: 'Collections',
  description: 'Utility class for working with Collection objects',
  methods: [
    {
      name: 'sort(List<T> list)',
      description: 'Sorts the specified list into ascending order',
      example: 'List<Integer> list = new ArrayList<>();\nCollections.sort(list);',
      category: 'utility'
    },
    {
      name: 'reverse(List<T> list)',
      description: 'Reverses the order of elements in the specified list',
      example: 'Collections.reverse(list);',
      category: 'utility'
    },
    {
      name: 'shuffle(List<T> list)',
      description: 'Randomly permutes the specified list',
      example: 'Collections.shuffle(list);',
      category: 'utility'
    },
    {
      name: 'max(Collection<T> coll)',
      description: 'Returns the maximum element in the collection',
      example: 'T max = Collections.max(collection);',
      category: 'utility'
    },
    {
      name: 'min(Collection<T> coll)',
      description: 'Returns the minimum element in the collection',
      example: 'T min = Collections.min(collection);',
      category: 'utility'
    }
  ]
};