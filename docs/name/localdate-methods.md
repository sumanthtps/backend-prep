---
id: localdate-methods
title: LocalDate Methods
sidebar_position: 73
---

`LocalDate` is an immutable date without time-zone.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `now()` | Current date. | `LocalDate` |
| `of(int y,int m,int d)` | Construct date. | `LocalDate` |
| `plusDays(long days)` / `minusDays(long days)` | Add/subtract days. | `LocalDate` |
| `getYear()` / `getMonth()` / `getDayOfMonth()` | Field access. | `int` / `Month` |
| `isBefore(LocalDate)` / `isAfter(LocalDate)` | Comparisons. | `boolean` |

## Usage Example

```java
var d = java.time.LocalDate.now();
System.out.println(d.plusDays(5));
```