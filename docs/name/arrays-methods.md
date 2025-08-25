---
id: arrays-methods
title: Arrays Utility Methods
sidebar_position: 74
---


`java.util.Arrays` provides static helpers for array manipulation.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `sort(T[] a)` | Sorts array. | `void` |
| `binarySearch(T[] a, T key)` | Searches sorted array. | `int` |
| `equals(a, b)` / `deepEquals(a, b)` | Compares arrays. | `boolean` |
| `copyOf(T[] orig, int newLen)` | Copies array to new length. | `T[]` |
| `fill(T[] a, T val)` | Fills with value. | `void` |
| `toString(int[] a)` / `deepToString(Object[] a)` | String form. | `String` |
| `stream(T[] array)` | Streams elements. | `Stream<T>` |

## Usage Example

```java
int[] a = {3,1,2};
java.util.Arrays.sort(a); // [1,2,3]
int idx = java.util.Arrays.binarySearch(a, 2); // 1
```
