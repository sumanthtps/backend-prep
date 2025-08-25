---
id: linkedlist-methods
title: LinkedList Methods
sidebar_position: 78
---


Doubly-linked list implementing `List` and `Deque`.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `addFirst(E e)` / `addLast(E e)` | Deque insertions. | `void` |
| `removeFirst()` / `removeLast()` | Removes ends. | `E` |
| `peek()` / `poll()` / `offer(E e)` | Queue ops. | `E` / `boolean` |
| `getFirst()` / `getLast()` | Access ends. | `E` |
| `descendingIterator()` | Reverse iterate. | `Iterator<E>` |

## Usage Example

```java
var q = new java.util.LinkedList<Integer>();
q.offer(1); q.offer(2);
System.out.println(q.poll()); // 1
```
