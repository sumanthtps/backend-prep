---
id: object-methods
title: Object Class Methods
sidebar_position: 71
---


The `java.lang.Object` class is the root of the Java type hierarchy. All classes implicitly extend `Object`.

## Methods

| Method | Description | Return Type |
|---|---|---|
| `clone()` | Creates and returns a copy of this object (protected, requires `Cloneable`). | `Object` |
| `equals(Object obj)` | Indicates whether some other object is "equal to" this one. | `boolean` |
| `finalize()` | Called by GC before object is collected (deprecated). | `void` |
| `getClass()` | Returns the runtime class of this object. | `Class<?>` |
| `hashCode()` | Returns a hash code value for the object. | `int` |
| `notify()` | Wakes up a single thread waiting on this object's monitor. | `void` |
| `notifyAll()` | Wakes up all threads waiting on this object's monitor. | `void` |
| `toString()` | Returns a string representation of the object. | `String` |
| `wait()` | Causes the current thread to wait. | `void` |
| `wait(long timeout)` | Waits up to the specified time. | `void` |
| `wait(long timeout, int nanos)` | Waits up to time + nanos. | `void` |

## Usage Examples

```java
class Person {
  private final String name;
  Person(String name) { this.name = name; }
  @Override public String toString() { return "Person{name='" + name + "'}"; }
  @Override public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Person person = (Person) o;
    return java.util.Objects.equals(name, person.name);
  }
  @Override public int hashCode() { return java.util.Objects.hash(name); }
}
```

```java
Person a = new Person("A");
Person b = new Person("A");
System.out.println(a.equals(b)); // true
System.out.println(a);           // Person{name='A'}
```
