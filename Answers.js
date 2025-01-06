### JavaScript Concepts with Examples

#### 1. **Ways to Create Objects in JavaScript**
- **Object Literals**:
  ```javascript
  let obj = { name: "Anjela", age: 25 };
  console.log(obj.name); // "Anjela"
  ```

- **Constructor Functions**:
  ```javascript
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  let person = new Person("Anjela", 25);
  console.log(person.name); // "Anjela"
  ```

- **`Object.create`**:
  ```javascript
  let prototype = { greet: function() { return "Hello!"; } };
  let obj = Object.create(prototype);
  console.log(obj.greet()); // "Hello!"
  ```

- **ES6 Classes**:
  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let person = new Person("Anjela", 25);
  console.log(person.age); // 25
  ```

---

#### 2. **Prototype Chain**
- **Definition**: Mechanism where objects inherit properties from their prototype.
  ```javascript
  let obj = { key: "value" };
  console.log(obj.toString()); // Inherited from Object.prototype
  ```
- **Example**:
  ```javascript
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() { return `Hi, I'm ${this.name}`; };
  let person = new Person("Anjela");
  console.log(person.greet()); // "Hi, I'm Anjela"
  ```

---

#### 3. **Call, Apply, and Bind**
- **Call**: Calls a function with arguments passed individually.
  ```javascript
  function greet(greeting) { console.log(`${greeting}, ${this.name}`); }
  greet.call({ name: "Anjela" }, "Hello"); // "Hello, Anjela"
  ```

- **Apply**: Similar to `call` but arguments are passed as an array.
  ```javascript
  greet.apply({ name: "Anjela" }, ["Hi"]); // "Hi, Anjela"
  ```

- **Bind**: Returns a new function with a fixed `this`.
  ```javascript
  let greetAnjela = greet.bind({ name: "Anjela" }, "Hey");
  greetAnjela(); // "Hey, Anjela"
  ```

---

#### 4. **JSON and Its Common Operations**
- **Definition**: JSON (JavaScript Object Notation) is a data format for storing/transmitting data.

- **Stringify**: Convert object to JSON string.
  ```javascript
  let obj = { name: "Anjela", age: 25 };
  let json = JSON.stringify(obj);
  console.log(json); // '{"name":"Anjela","age":25}'
  ```

- **Parse**: Convert JSON string to object.
  ```javascript
  let jsonString = '{"name":"Anjela","age":25}';
  let parsed = JSON.parse(jsonString);
  console.log(parsed.name); // "Anjela"
  ```

---

#### 5. **Array Slice vs Splice**
- **Slice**: Extracts part of an array without modifying the original.
  ```javascript
  let arr = [1, 2, 3, 4];
  console.log(arr.slice(1, 3)); // [2, 3]
  console.log(arr); // [1, 2, 3, 4]
  ```

- **Splice**: Modifies the array by adding/removing elements.
  ```javascript
  arr.splice(1, 2, "a", "b");
  console.log(arr); // [1, "a", "b", 4]
  ```

- **Difference**: `slice` doesn’t alter the array; `splice` does.

---

#### 6. **Object vs Map**
- **Object**: Stores key-value pairs but keys are always strings or symbols.
- **Map**: Can have any data type as key.
  ```javascript
  let obj = { key: "value" };
  console.log(obj.key); // "value"

  let map = new Map();
  map.set({}, "value");
  console.log(map.size); // 1
  ```

---

#### 7. **`==` vs `===`**
- **`==`**: Checks value, not type.
  ```javascript
  console.log(2 == "2"); // true
  ```
- **`===`**: Checks value and type.
  ```javascript
  console.log(2 === "2"); // false
  ```

---

#### 8. **Functions**
- **Arrow Function**:
  ```javascript
  let sum = (a, b) => a + b;
  console.log(sum(2, 3)); // 5
  ```

- **First-Class Functions**: Functions treated as variables.
  ```javascript
  let greet = () => "Hello";
  console.log(greet()); // "Hello"
  ```

- **Higher-Order Functions**: Takes/returns other functions.
  ```javascript
  function withLog(fn) {
    return (...args) => {
      console.log(args);
      return fn(...args);
    };
  }
  let loggedAdd = withLog((a, b) => a + b);
  console.log(loggedAdd(2, 3)); // Logs [2, 3], returns 5
  ```

---

#### 9. **Currying and Pure Functions**
- **Currying**: Transform a function to take one argument at a time.
  ```javascript
  let add = (a) => (b) => a + b;
  console.log(add(2)(3)); // 5
  ```

- **Pure Function**: Always returns the same result for the same input.
  ```javascript
  function add(a, b) { return a + b; }
  ```

---

#### 10. **`let` vs `var` and Temporal Dead Zone**
- **`let`**: Block-scoped.
  ```javascript
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
  ```

- **Temporal Dead Zone**: Accessing `let` variables before declaration throws an error.
  ```javascript
  console.log(y); // Error
  let y = 5;
  ```

---

#### 11. **IIFE (Immediately Invoked Function Expression)**
- **Definition**: Executes immediately after definition.
  ```javascript
  (function () {
    console.log("IIFE");
  })();
  ```

---

#### 12. **Closures**
- **Definition**: Functions remembering their scope.
  ```javascript
  function outer() {
    let count = 0;
    return function () { count++; return count; };
  }
  let counter = outer();
  console.log(counter()); // 1
  console.log(counter()); // 2
  ```

---

#### 13. **Hoisting**
- **Definition**: Variables/functions are moved to the top during compilation.
  ```javascript
  console.log(a); // undefined
  var a = 5;
  ```
  ```javascript
  greet();
  function greet() { console.log("Hello"); }
  ```

