---
id: list-methods
title: List Interface Methods
sidebar_position: 76
---


The `List<E>` interface represents ordered collections with positional access.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `add(E e)` / `add(int idx, E e)` | Appends or inserts. | `boolean` / `void` |
| `get(int index)` | Element at index. | `E` |
| `set(int index, E e)` | Replaces element. | `E` |
| `remove(int index)` / `remove(Object o)` | Removes by index or value. | `E` / `boolean` |
| `indexOf(Object o)` / `lastIndexOf(Object o)` | Search. | `int` |
| `subList(int from, int to)` | View of range. | `List<E>` |
| `iterator()` / `listIterator()` | Iteration. | `Iterator<E>` / `ListIterator<E>` |
| `size()` / `isEmpty()` | Size checks. | `int` / `boolean` |

## Usage Example

```java
java.util.List<String> names = new java.util.ArrayList<>();
names.add("A"); names.add("B");
names.add(1, "X"); // A, X, B
```
