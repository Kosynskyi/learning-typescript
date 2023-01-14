/**
 * Основні примітивні типи в TS:
 * - string
 * - number
 * - boolean
 */

/**
 * Масив можна позначати так:
 *     - const arr: number[] = [1, 2, 3]
 *     - const arr: string[] = ['a', 'b', 'c']
 * або
 *     - Array<number>
 *     - Array<string>
 *     - Array<boolean>
 */

// const arr: number[] = [2, 1, 3];
// console.log(arr);

// function foo(value: Array<number>) {
//   console.log(value);
// }

// console.log(foo([2, 3, 4]));

/**
 * Для звичайних змінних ми одразу можемо вказати її тип після назви
 */

// const firstName: string = "Stepan";
// let age: number = 2;

// console.log(firstName);
// console.log(age);

/**
 * У функціях можна вказувати тип її параметра одразу після його оголошення. Тип параметра вказується після назви параметра
 */

// const greet = (name: string) => {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// };
// console.log(greet("Stepan"));

// const names = ["Alice", "Bob", "Eve"];

// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// ====================================================================================
/**
 * Об"єкти
 *
 */

// function printCoord(qwe: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + qwe.x);
//   console.log("The coordinate's y value is " + qwe.y);
// }
// printCoord({ x: 3, y: 7 });
// ====================================================================================
/**
 * Додаткові властивості об"єкта
 * можна вказати, що якийсь ключ об"єкта не є обов"язковим - для цього після назви ключа потрібно поставити "?"
 *
 * ПРИКЛАД
 */

// function printName(obj: { first: string; last?: string }) {
//   console.log(obj.first, obj.last);
//   // console.log(obj.last);
// }

// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });
// ====================================================================================

// якщо ми будемо робити якісь дії з ключем об"єкта, який ми вказали як необов"язковий, то нам потрібно зробити перевірку на undefined, приблизно так як це показано в прикладі нижче (одним із двох варіантів)
// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   // console.log(obj.last.toUpperCase());
//   // Object is possibly 'undefined'.
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }

// printName({ first: "Alice", last: "Alisson" });
// ====================================================================================
/**
 * Union type
 * Union type - це тип, який утворюється з двох і більше різних типів, які можуть відповідати якомусь значенню
 */
// Приклад:
// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }

// printId(101); // підходить, бо аргумент відходить під один із вищевказаних типів number | string
// printId("202"); // підходить, бо аргумент відходить під один із вищевказаних типів number | string

// // printId({ myID: 22342 }); //Помилка! Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
// ====================================================================================

/**
 * Якщо нам, наприклад, потрібно описати тип об"єкту, який буде використовуватись в декількох місцях, то нам не зручно буде писати це в кожній функції, в якій він нам буде потрібний. Для такого випадку є Type Aliases або ПСЕВДОНІМИ ТИПУ. Ми просто описуємо все, що нам потрібно тіпа як в в окремій змінній
 */

// type Point = {
//   x: number;
//   y: number;
// };

// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

/**
 * Псевдонім типу можна призначати не лише для об"єкта, а і для типу union, НАПРИКЛАД, type ID = number | string;
 */

export {};
