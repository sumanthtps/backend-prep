---
id: hashmap-methods
title: HashMap Methods
sidebar_position: 83
---


`HashMap<K,V>` is a hash table-based implementation of `Map` with O(1) average operations.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `clear()` | Removes all entries. | `void` |
| `clone()` | Shallow copy of map. | `Object` |
| `compute(K, BiFunction)` | Recomputes value. | `V` |
| `computeIfAbsent(K, Function)` | Computes only if missing. | `V` |
| `computeIfPresent(K, BiFunction)` | Computes only if present. | `V` |
| `containsKey(Object key)` | Key presence. | `boolean` |
| `containsValue(Object value)` | Value presence. | `boolean` |
| `entrySet()` | Set view of entries. | `Set<Map.Entry<K,V>>` |
| `forEach(BiConsumer)` | Iterate entries. | `void` |
| `get(Object key)` | Value or null. | `V` |
| `getOrDefault(Object key, V def)` | Value or default. | `V` |
| `isEmpty()` | Empty check. | `boolean` |
| `keySet()` | Set view of keys. | `Set<K>` |
| `merge(K, V, BiFunction)` | Combine values. | `V` |
| `put(K, V)` / `putAll(Map)` | Add mappings. | `V` / `void` |
| `putIfAbsent(K, V)` | Only if missing. | `V` |
| `remove(Object key)` / `remove(Object key, Object value)` | Remove by key or key+value. | `V` / `boolean` |
| `replace(K, V)` / `replace(K, V, V)` | Replace value(s). | `V` / `boolean` |
| `replaceAll(BiFunction)` | Bulk replace. | `void` |
| `size()` | Entry count. | `int` |
| `values()` | Collection of values. | `Collection<V>` |

## Usage Example

```java
var map = new java.util.HashMap<String,Integer>();
map.put("a", 1);
map.putIfAbsent("b", 2);
map.merge("a", 3, Integer::sum); // a -> 4
```
