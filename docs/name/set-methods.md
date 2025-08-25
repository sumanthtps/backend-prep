---
id: set-methods
title: Set Interface Methods
sidebar_position: 79
---


`Set<E>` is an unordered collection that forbids duplicates.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `add(E e)` / `addAll(...)` | Adds if absent. | `boolean` |
| `contains(Object o)` | Membership test. | `boolean` |
| `remove(Object o)` | Removes if present. | `boolean` |
| `size()` / `isEmpty()` | Size checks. | `int` / `boolean` |
| `iterator()` | Iterate elements. | `Iterator<E>` |

## Usage Example

```java
java.util.Set<String> s = new java.util.HashSet<>();
s.add("a"); s.add("a"); // duplicate ignored
```
