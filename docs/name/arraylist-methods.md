---
id: arraylist-methods
title: ArrayList Methods
sidebar_position: 77
---


Resizable array implementation of `List` providing fast random access.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `ensureCapacity(int minCap)` | Hints capacity. | `void` |
| `trimToSize()` | Trims internal array. | `void` |
| `add(E e)` / `addAll(...)` | Adds elements. | `boolean` |
| `remove(int idx)` / `remove(Object o)` | Removes. | `E` / `boolean` |
| `get(int idx)` / `set(int idx, E e)` | Access/replace. | `E` |
| `iterator()` / `listIterator()` | Iterators. | `Iterator<E>` |
| `sort(Comparator<? super E>)` | In-place sort (since 1.8). | `void` |

## Usage Example

```java
var list = new java.util.ArrayList<Integer>();
list.add(10); list.add(5);
list.sort(Integer::compareTo); // [5,10]
```
