---
id: treemap-methods
title: TreeMap Methods
sidebar_position: 84
---


`TreeMap<K,V>` is a Red-Black tree-based `NavigableMap` with sorted keys.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `firstKey()` / `lastKey()` | Extremal keys. | `K` |
| `ceilingKey(K key)` / `floorKey(K key)` | Boundary keys. | `K` |
| `higherKey(K key)` / `lowerKey(K key)` | Strict neighbors. | `K` |
| `subMap(K from, boolean incFrom, K to, boolean incTo)` | Range view. | `NavigableMap<K,V>` |
| `headMap(K to, boolean inc)` / `tailMap(K from, boolean inc)` | Prefix/suffix views. | `NavigableMap<K,V>` |
| `pollFirstEntry()` / `pollLastEntry()` | Remove-and-return ends. | `Map.Entry<K,V>` |

## Usage Example

```java
var tm = new java.util.TreeMap<Integer,String>();
tm.put(10, "x"); tm.put(5, "y");
System.out.println(tm.firstKey()); // 5
```
