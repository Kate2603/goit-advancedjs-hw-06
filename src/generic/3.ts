/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }

// export {}

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Приклад використання
const mergedObject = merge({ name: "Alice" }, { age: 30 });
console.log(mergedObject); // { name: 'Alice', age: 30 }
