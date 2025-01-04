export const optionalMethods = {
  name: 'Optional',
  description: 'A container object which may or may not contain a non-null value',
  methods: [
    {
      name: 'of(T value)',
      description: 'Returns an Optional with the specified present non-null value',
      example: 'Optional.of("value")',
      category: 'static'
    },
    {
      name: 'ofNullable(T value)',
      description: 'Returns an Optional describing the specified value, if non-null, otherwise returns an empty Optional',
      example: 'Optional.ofNullable(maybeNull)',
      category: 'static'
    },
    {
      name: 'orElse(T other)',
      description: 'Returns the value if present, otherwise returns other',
      example: 'optional.orElse("default")',
      category: 'terminal'
    },
    {
      name: 'orElseGet(Supplier<? extends T> supplier)',
      description: 'Returns the value if present, otherwise invokes supplier and returns the result',
      example: 'optional.orElseGet(() -> computeDefault())',
      category: 'terminal'
    },
    {
      name: 'map(Function<? super T,? extends U> mapper)',
      description: 'If a value is present, applies the mapping function to it',
      example: 'optional.map(String::toUpperCase)',
      category: 'intermediate'
    }
  ]
};