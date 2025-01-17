/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// function getPromise () {
//   return new Promise((resolve) => {
//     resolve(['Text', 50]);
//   });
// }

// getPromise()
// .then((data) => {
//   console.log(data);
// });

// export {};

function getPromise<T>(): Promise<T[]> {
  return new Promise((resolve) => {
    resolve(["Text", 50] as unknown as T[]); // Використовуємо as для приведення типу
  });
}

getPromise<string | number>().then((data) => {
  console.log(data);
});
