# javascipt and classes

## ✅ What are Classes?
- Introduced in **ES6 (2015)**.
- Used to create **objects** and manage **inheritance** in a cleaner syntax.
- Classes are **syntactic sugar** over JavaScript’s **prototype-based inheritance**.

---

## ✅ Basic Syntax

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Satyam", 22);
p1.greet();
```

---

## ✅ Features of JavaScript Classes

- `constructor()` → called when a new object is created with `new`.
- Methods → declared directly inside the class.
- `extends` → used for inheritance (child → parent).
- `super()` → used to call the constructor of the parent class.
- `static` keyword → to create static methods that belong to the class, not instance.
- `#` prefix → for declaring **private fields** (ES2022+).

---

## ✅ Inheritance Example

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Tommy");
d.speak(); // Tommy barks
```

---

## ✅ Static Methods

```js
class MathUtil {
  static square(x) {
    return x * x;
  }
}

console.log(MathUtil.square(5)); // 25
```

---

## ✅ Private Fields (Modern JS)

```js
class Counter {
  #count = 0;

  increment() {
    this.#count++;
    console.log(this.#count);
  }
}

const c = new Counter();
c.increment(); // 1
c.#count; // ❌ Error: Private field '#count' must be declared in an enclosing class
```

---

## ✅ Comparison with Function Constructor

### Class Syntax (Modern)
```js
class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(`${this.model} is driving`);
  }
}
```

### Constructor Function (Old Way)
```js
function Car(model) {
  this.model = model;
}
Car.prototype.drive = function () {
  console.log(`${this.model} is driving`);
};
```

---

## ✅ Summary

## More about
| Feature        | Class Syntax       | Constructor Function     |
|----------------|--------------------|---------------------------|
| Cleaner Syntax | ✅ Yes             | ❌ No                    |
| Inheritance    | Easier with `extends` | Manual with `Object.create()` |
| Prototype Use  | Implicit           | Manual                   |

---

✅ Use **classes** when:
- Creating multiple similar objects
- Organizing code with inheritance
- Writing modern, readable JavaScript




## Objects 
-Collection of properties of methods
-eg toLowerCase

## why use oop

## parts of oop
  -Constructor
  -Prototypes
  -Classes
  -Instances
  