---
id: file-methods
title: File Methods
sidebar_position: 75
---

`File` represents file and directory paths.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `exists()` | Check existence. | `boolean` |
| `isFile()` / `isDirectory()` | Type checks. | `boolean` |
| `length()` | File length. | `long` |
| `list()` / `listFiles()` | Directory listing. | `String[]` / `File[]` |
| `delete()` | Deletes file. | `boolean` |
| `createNewFile()` | Creates new file. | `boolean` |

## Usage Example

```java
var f = new java.io.File("test.txt");
if (!f.exists()) f.createNewFile();
System.out.println(f.isFile());
```