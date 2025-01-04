export const mapMethods = {
  name: 'Map',
  description: 'An object that maps keys to values, cannot contain duplicate keys',
  methods: [
    // Basic Operations
    {
      name: 'put(K key, V value)',
      description: 'Associates the specified value with the specified key',
      example: 'Map<String, Integer> map = new HashMap<>();\nmap.put("key", 1);',
      category: 'manipulation'
    },
    {
      name: 'get(Object key)',
      description: 'Returns the value to which the specified key is mapped',
      example: 'Integer value = map.get("key");',
      category: 'basic'
    },
    {
      name: 'remove(Object key)',
      description: 'Removes the mapping for the specified key if present',
      example: 'map.remove("key");',
      category: 'manipulation'
    },
    {
      name: 'putAll(Map<? extends K,? extends V> m)',
      description: 'Copies all mappings from the specified map to this map',
      example: 'map.putAll(otherMap);',
      category: 'manipulation'
    },
    
    // Query Operations
    {
      name: 'containsKey(Object key)',
      description: 'Returns true if this map contains a mapping for the specified key',
      example: 'boolean hasKey = map.containsKey("key");',
      category: 'search'
    },
    {
      name: 'containsValue(Object value)',
      description: 'Returns true if this map maps one or more keys to the specified value',
      example: 'boolean hasValue = map.containsValue(1);',
      category: 'search'
    },
    
    // Collection Views
    {
      name: 'keySet()',
      description: 'Returns a Set view of the keys contained in this map',
      example: 'Set<String> keys = map.keySet();',
      category: 'view'
    },
    {
      name: 'values()',
      description: 'Returns a Collection view of the values contained in this map',
      example: 'Collection<Integer> values = map.values();',
      category: 'view'
    },
    {
      name: 'entrySet()',
      description: 'Returns a Set view of the mappings contained in this map',
      example: 'Set<Map.Entry<String, Integer>> entries = map.entrySet();',
      category: 'view'
    },
    
    // Default Value Methods
    {
      name: 'getOrDefault(Object key, V defaultValue)',
      description: 'Returns the value to which the key is mapped, or defaultValue if no mapping',
      example: 'Integer value = map.getOrDefault("key", 0);',
      category: 'basic'
    },
    {
      name: 'putIfAbsent(K key, V value)',
      description: 'Associates value with key if not already associated',
      example: 'map.putIfAbsent("key", 1);',
      category: 'manipulation'
    },
    
    // Functional Operations
    {
      name: 'compute(K key, BiFunction<K,V,V> remappingFunction)',
      description: 'Computes a new value for the specified key',
      example: 'map.compute("key", (k, v) -> (v == null) ? 1 : v + 1);',
      category: 'manipulation'
    },
    {
      name: 'computeIfAbsent(K key, Function<K,V> mappingFunction)',
      description: 'Computes value if key is not already associated with a value',
      example: 'map.computeIfAbsent("key", k -> 1);',
      category: 'manipulation'
    },
    {
      name: 'computeIfPresent(K key, BiFunction<K,V,V> remappingFunction)',
      description: 'Computes new value if key is already associated with a value',
      example: 'map.computeIfPresent("key", (k, v) -> v + 1);',
      category: 'manipulation'
    },
    {
      name: 'merge(K key, V value, BiFunction<V,V,V> remappingFunction)',
      description: 'Associates value with key if not already associated, otherwise combines old and new values',
      example: 'map.merge("key", 1, (oldVal, newVal) -> oldVal + newVal);',
      category: 'manipulation'
    }
  ]
};