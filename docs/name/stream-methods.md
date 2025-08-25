---
id: stream-methods
title: Stream API Methods
sidebar_position: 88
---


`java.util.stream.Stream<T>` supports declarative data processing.

## Intermediate Ops

| Method | Description |
|---|---|
| `filter(Predicate)` | Keep matching elements. |
| `map(Function)` / `flatMap(Function)` | Transform/flatten. |
| `distinct()` | Remove duplicates. |
| `sorted()` / `sorted(Comparator)` | Sort elements. |
| `limit(long n)` / `skip(long n)` | Truncate/skip. |

## Terminal Ops

| Method | Description | Return Type |
|---|---|---|
| `forEach(Consumer)` | Side-effect traversal. | `void` |
| `collect(Collector)` | Materialize result. | varies |
| `reduce(identity, BinaryOperator)` | Fold elements. | `T` |
| `count()` | Count elements. | `long` |
| `anyMatch/AllMatch/NoneMatch(Predicate)` | Predicates. | `boolean` |
| `findFirst()` / `findAny()` | Optional result. | `Optional<T>` |

## Usage Example

```java
var sum = java.util.stream.Stream.of(1,2,3,4)
  .filter(x -> x % 2 == 0)
  .mapToInt(Integer::intValue)
  .sum(); // 6
```
