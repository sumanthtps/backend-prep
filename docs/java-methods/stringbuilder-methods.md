---
id: stringbuilder-methods
title: StringBuilder Methods
sidebar_position: 73
---


`StringBuilder` is a mutable sequence of characters; use it for efficient string concatenation in single-threaded contexts.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `append(...)` | Appends data and returns builder. | `StringBuilder` |
| `insert(int offset, ...)` | Inserts data at index. | `StringBuilder` |
| `delete(int start, int end)` | Deletes chars in range. | `StringBuilder` |
| `reverse()` | Reverses sequence. | `StringBuilder` |
| `length()` / `capacity()` | Size and buffer capacity. | `int` |
| `setLength(int newLength)` | Truncates or pads with null chars. | `void` |
| `toString()` | Builds final `String`. | `String` |

## Usage Example

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append(2025);
String out = sb.toString(); // "Hello 2025"
```
