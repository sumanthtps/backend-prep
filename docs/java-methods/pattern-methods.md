---
id: pattern-methods
title: Pattern Methods
sidebar_position: 74
---

`Pattern` represents compiled regex patterns.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `compile(String regex)` | Compiles regex. | `Pattern` |
| `matcher(CharSequence input)` | Creates matcher. | `Matcher` |
| `split(CharSequence input)` | Splits around matches. | `String[]` |

## Usage Example

```java
var p = java.util.regex.Pattern.compile("\\d+");
var m = p.matcher("abc123");
System.out.println(m.find()); // true
```