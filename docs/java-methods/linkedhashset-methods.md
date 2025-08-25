---
id: linkedhashset-methods
title: LinkedHashSet Methods
sidebar_position: 81
---


`LinkedHashSet` preserves insertion order while preventing duplicates.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `add(E e)` / `remove(Object o)` | Add/remove. | `boolean` |
| `contains(Object o)` | Membership test. | `boolean` |
| `iterator()` | Ordered iteration. | `Iterator<E>` |
| `size()` / `isEmpty()` | Size checks. | `int` / `boolean` |
| `clear()` | Remove all. | `void` |

## Usage Example

```java
java.util.Set<String> s = new java.util.LinkedHashSet<>();
s.add("A"); s.add("B"); // iteration preserves order A,B
```
