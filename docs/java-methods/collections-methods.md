---
id: collections-methods
title: Collections Utility Methods
sidebar_position: 75
---


`java.util.Collections` provides static utilities for collections.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `sort(List<T> list)` | Sorts list in place. | `void` |
| `reverse(List<?> list)` | Reverses order. | `void` |
| `shuffle(List<?> list)` | Random order. | `void` |
| `binarySearch(List<? extends Comparable>, T key)` | Searches sorted list. | `int` |
| `max(Collection<? extends T>)` / `min(...)` | Extremes. | `T` |
| `unmodifiableList(List<? extends T>)` | Read-only view. | `List<T>` |
| `synchronizedList(List<T>)` | Thread-safe wrapper. | `List<T>` |
| `frequency(Collection<?>, Object o)` | Counts occurrences. | `int` |

## Usage Example

```java
var list = new java.util.ArrayList<>(java.util.List.of(3,1,2));
java.util.Collections.sort(list); // [1,2,3]
```
