---
id: hashset-methods
title: HashSet Methods
sidebar_position: 80
---


Hash table-based `Set` implementation with O(1) average operations.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `add(E e)` | Adds if not present. | `boolean` |
| `contains(Object o)` | Membership test. | `boolean` |
| `remove(Object o)` | Removes if present. | `boolean` |
| `iterator()` | Iterate. | `Iterator<E>` |
| `size()` / `isEmpty()` | Size checks. | `int` / `boolean` |
| `clear()` | Removes all. | `void` |

## Usage Example

```java
var set = new java.util.HashSet<Integer>();
set.add(1); set.add(2); set.remove(1);
```
