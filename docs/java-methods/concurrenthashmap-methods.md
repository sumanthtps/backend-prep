---
id: concurrenthashmap-methods
title: ConcurrentHashMap Methods
sidebar_position: 71
---

`ConcurrentHashMap<K,V>` is a thread-safe variant of `HashMap`.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `put(K,V)` | Associates value. | `V` |
| `get(Object key)` | Retrieves value. | `V` |
| `remove(Object key)` | Removes entry. | `V` |
| `computeIfAbsent(K, Function)` | Atomically computes if missing. | `V` |
| `computeIfPresent(K, BiFunction)` | Atomically computes if present. | `V` |
| `forEach(long parallelismThreshold, BiConsumer)` | Parallel iteration. | `void` |

## Usage Example

```java
var cmap = new java.util.concurrent.ConcurrentHashMap<String,Integer>();
cmap.put("a", 1);
cmap.computeIfAbsent("b", k -> 2);
System.out.println(cmap);
```