---
id: completablefuture-methods
title: CompletableFuture Methods
sidebar_position: 72
---

`CompletableFuture<T>` represents asynchronous computation results.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `supplyAsync(Supplier)` | Starts async task. | `CompletableFuture<T>` |
| `thenApply(Function)` | Transform result. | `CompletableFuture<U>` |
| `thenAccept(Consumer)` | Consume result. | `CompletableFuture<Void>` |
| `thenCombine(CompletionStage,U,BiFunction)` | Combine two futures. | `CompletableFuture<V>` |
| `exceptionally(Function<Throwable,? extends T>)` | Handle errors. | `CompletableFuture<T>` |
| `join()` | Waits and gets result. | `T` |

## Usage Example

```java
var f = java.util.concurrent.CompletableFuture.supplyAsync(() -> 42);
System.out.println(f.thenApply(x -> x * 2).join()); // 84
```