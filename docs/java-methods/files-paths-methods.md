---
id: files-paths-methods
title: Files and Paths Methods
sidebar_position: 89
---


`java.nio.file.Files` and `java.nio.file.Path/Paths` provide modern file I/O.

## Files (selected)

| Method | Description | Return Type |
|---|---|---|
| `exists(Path)` / `notExists(Path)` | Existence checks. | `boolean` |
| `readString(Path)` / `writeString(Path, CharSequence)` | Text I/O. | `String` / `Path` |
| `readAllBytes(Path)` / `write(Path, byte[])` | Binary I/O. | `byte[]` / `Path` |
| `copy(Path, Path, CopyOption...)` | Copy file. | `Path` |
| `move(Path, Path, CopyOption...)` | Move/rename. | `Path` |
| `delete(Path)` / `deleteIfExists(Path)` | Remove file. | `void` / `boolean` |
| `walk(Path)` / `list(Path)` | Directory traversal. | `Stream<Path>` |

## Paths / Path

| Method | Description | Return Type |
|---|---|---|
| `Paths.get(String, String...)` | Build `Path`. | `Path` |
| `resolve(String other)` | Join segment. | `Path` |
| `relativize(Path other)` | Relative path. | `Path` |
| `toAbsolutePath()` | Absolute path. | `Path` |
| `getFileName()` | Last element. | `Path` |

## Usage Example

```java
var p = java.nio.file.Paths.get("notes.txt");
java.nio.file.Files.writeString(p, "Hello");
String s = java.nio.file.Files.readString(p); // "Hello"
```
