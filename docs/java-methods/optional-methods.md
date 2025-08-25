---
id: optional-methods
title: Optional Methods
sidebar_position: 87
---


`java.util.Optional<T>` is a container for possibly-absent values.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `of(T value)` / `ofNullable(T v)` | Create optional. | `Optional<T>` |
| `isPresent()` / `isEmpty()` | Presence checks. | `boolean` |
| `get()` | Returns value or throws. | `T` |
| `orElse(T other)` / `orElseGet(Supplier)` | Defaulting. | `T` |
| `orElseThrow()` | Throws if empty. | `T` |
| `map(Function)` / `flatMap(Function)` | Transform. | `Optional<U>` |
| `ifPresent(Consumer)` / `ifPresentOrElse(Consumer, Runnable)` | Side effects. | `void` |

## Usage Example

```java
java.util.Optional<String> maybe = java.util.Optional.ofNullable(System.getenv("USER"));
String user = maybe.orElse("unknown");
```
