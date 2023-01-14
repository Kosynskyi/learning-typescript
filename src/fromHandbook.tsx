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

export {};
