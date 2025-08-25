---
id: math-methods
title: Math Class Methods
sidebar_position: 85
---


`java.lang.Math` supplies basic numeric operations.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `abs(x)` | Absolute value. | primitive |
| `max(a,b)` / `min(a,b)` | Extremes. | primitive |
| `sqrt(x)` / `cbrt(x)` | Roots. | `double` |
| `pow(a,b)` | Exponentiation. | `double` |
| `round(x)` / `ceil(x)` / `floor(x)` | Rounding. | `long` / `double` |
| `random()` | Pseudorandom [0,1). | `double` |
| `sin(x)` / `cos(x)` / `tan(x)` | Trigonometry. | `double` |

## Usage Example

```java
double hyp = Math.hypot(3,4); // 5.0
int r = (int)(Math.random()*10); // 0..9
```
