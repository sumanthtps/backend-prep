---
id: map-methods
title: Map Interface Methods
sidebar_position: 82
---


`Map<K,V>` stores key-value pairs with unique keys.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `put(K k, V v)` | Associates value with key. | `V` |
| `get(Object k)` | Value for key or null. | `V` |
| `getOrDefault(Object k, V def)` | Value or default. | `V` |
| `containsKey(Object k)` / `containsValue(Object v)` | Presence checks. | `boolean` |
| `remove(Object k)` | Removes mapping. | `V` |
| `putIfAbsent(K k, V v)` | Writes only if missing. | `V` |
| `replace(K k, V v)` | Replaces only if present. | `V` |
| `replaceAll(BiFunction<K,V,V>)` | Bulk replace. | `void` |
| `compute*` / `merge` | Functional updates. | `V` |
| `keySet()` / `values()` / `entrySet()` | Views. | `Set<K>` / `Collection<V>` / `Set<Map.Entry<K,V>>` |

## Usage Example

```java
java.util.Map<String,Integer> m = new java.util.HashMap<>();
m.put("a", 1);
m.merge("a", 1, Integer::sum); // 2
```
