export interface Method {
  name: string;
  description: string;
  example: string;
  category?: string;
}

export interface DataType {
  name: string;
  description: string;
  methods: Method[];
}

export const javaTypes: DataType[] = [
  {
    name: 'String',
    description: 'Represents text as a sequence of Unicode characters',
    methods: [
      {
        name: 'length()',
        description: 'Returns the length of the string',
        example: '"Hello".length() // Returns 5',
        category: 'basic'
      },
      {
        name: 'charAt(int index)',
        description: 'Returns the character at specified index',
        example: '"Hello".charAt(0) // Returns H',
        category: 'basic'
      }
    ]
  },
  {
    name: 'List',
    description: 'An ordered collection of elements',
    methods: [
      {
        name: 'add(E element)',
        description: 'Adds an element to the list',
        example: 'list.add("element")',
        category: 'modification'
      },
      {
        name: 'get(int index)',
        description: 'Returns element at specified position',
        example: 'list.get(0)',
        category: 'access'
      }
    ]
  }
];