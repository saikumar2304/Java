export const dateMethods = {
  name: 'Date',
  description: 'Represents a specific instant in time, with millisecond precision',
  methods: [
    // Constructors as Static Methods
    {
      name: 'new Date()',
      description: 'Allocates a Date object and initializes it to represent the current time',
      example: 'Date now = new Date();',
      category: 'static'
    },
    {
      name: 'new Date(long date)',
      description: 'Allocates a Date object and initializes it to represent the specified milliseconds since January 1, 1970',
      example: 'Date date = new Date(1234567890000L);',
      category: 'static'
    },
    
    // Basic Operations
    {
      name: 'getTime()',
      description: 'Returns the number of milliseconds since January 1, 1970',
      example: 'long time = date.getTime();',
      category: 'basic'
    },
    {
      name: 'setTime(long time)',
      description: 'Sets this Date object to represent a point in time that is time milliseconds from the epoch',
      example: 'date.setTime(1234567890000L);',
      category: 'manipulation'
    },
    
    // Comparison Methods
    {
      name: 'after(Date when)',
      description: 'Tests if this date is after the specified date',
      example: 'boolean isAfter = date1.after(date2);',
      category: 'comparison'
    },
    {
      name: 'before(Date when)',
      description: 'Tests if this date is before the specified date',
      example: 'boolean isBefore = date1.before(date2);',
      category: 'comparison'
    },
    {
      name: 'compareTo(Date anotherDate)',
      description: 'Compares two Dates for ordering',
      example: 'int result = date1.compareTo(date2);',
      category: 'comparison'
    },
    {
      name: 'equals(Object obj)',
      description: 'Compares two dates for equality',
      example: 'boolean equals = date1.equals(date2);',
      category: 'comparison'
    },
    
    // Conversion Methods
    {
      name: 'toString()',
      description: 'Converts this Date object to a String',
      example: 'String str = date.toString();',
      category: 'conversion'
    },
    {
      name: 'toInstant()',
      description: 'Converts this Date object to an Instant',
      example: 'Instant instant = date.toInstant();',
      category: 'conversion'
    },
    
    // Static Utility Methods
    {
      name: 'from(Instant instant)',
      description: 'Creates a Date object from an Instant',
      example: 'Date date = Date.from(instant);',
      category: 'static'
    },
    {
      name: 'parse(String s)',
      description: 'Parses a string representation of a date and time',
      example: 'Date date = Date.parse("Jul 4, 2023");',
      category: 'static'
    }
  ]
};