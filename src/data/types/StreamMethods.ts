export const streamMethods = {
  name: 'Stream',
  description: 'A sequence of elements supporting sequential and parallel aggregate operations',
  methods: [
    {
      name: 'filter(Predicate<T> predicate)',
      description: 'Returns a stream consisting of elements that match the given predicate',
      example: 'stream.filter(n -> n > 0)',
      category: 'intermediate'
    },
    {
      name: 'map(Function<T,R> mapper)',
      description: 'Returns a stream consisting of the results of applying the given function',
      example: 'stream.map(String::toUpperCase)',
      category: 'intermediate'
    },
    {
      name: 'flatMap(Function<T,Stream<R>> mapper)',
      description: 'Returns a stream consisting of the results of replacing each element with contents of a mapped stream',
      example: 'stream.flatMap(Arrays::stream)',
      category: 'intermediate'
    },
    {
      name: 'collect(Collector<T,A,R> collector)',
      description: 'Performs a mutable reduction operation on the elements of this stream',
      example: 'stream.collect(Collectors.toList())',
      category: 'terminal'
    },
    {
      name: 'reduce(BinaryOperator<T> accumulator)',
      description: 'Performs a reduction on the elements of this stream',
      example: 'stream.reduce((a, b) -> a + b)',
      category: 'terminal'
    }
  ]
};