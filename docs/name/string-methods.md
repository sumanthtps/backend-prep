---
id: string-methods
title: String Class Methods
sidebar_position: 72
---


The `java.lang.String` class represents immutable sequences of characters.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `length()` | Returns the length. | `int` |
| `charAt(int index)` | Returns the char at index. | `char` |
| `substring(int beginIndex, int endIndex)` | Returns a new substring. | `String` |
| `contains(CharSequence s)` | Tests if sequence is a substring. | `boolean` |
| `indexOf(String str)` | Index of substring or -1. | `int` |
| `startsWith(String prefix)` | Tests prefix. | `boolean` |
| `endsWith(String suffix)` | Tests suffix. | `boolean` |
| `toLowerCase()` / `toUpperCase()` | Case conversions. | `String` |
| `trim()` / `strip()` | Trims whitespace. | `String` |
| `replace(CharSequence target, CharSequence replacement)` | Replaces occurrences. | `String` |
| `split(String regex)` | Splits into array. | `String[]` |
| `format(String fmt, Object... args)` | Formats string. | `String` |
| `join(CharSequence delim, CharSequence... elems)` | Joins elements. | `String` |

## Usage Examples

```java
String s = "  Hello World  ";
System.out.println(s.trim().toUpperCase()); // HELLO WORLD
System.out.println("abc,def".split(","));   // ["abc","def"]
System.out.println(String.format("%d + %d = %d", 2, 3, 5));
```
