---
id: system-methods
title: System Class Methods
sidebar_position: 86
---


`java.lang.System` provides system utilities and properties.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `currentTimeMillis()` / `nanoTime()` | Time utilities. | `long` |
| `arraycopy(src, srcPos, dest, destPos, length)` | Array copy. | `void` |
| `getProperty(String key)` | System property. | `String` |
| `setProperty(String k, String v)` | Set property. | `String` |
| `getenv(String name)` | Env var. | `String` |
| `gc()` | Suggests GC. | `void` |
| `exit(int status)` | Terminates JVM. | `void` |

## Usage Example

```java
long t0 = System.nanoTime();
// work ...
long dt = System.nanoTime() - t0;
```
