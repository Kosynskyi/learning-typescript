/**
 * Примитивные типы
 * - Объявление типа: number, string, boolean, null и undefined, any и object
 * - Ошибки:
 *   - присвоение значения другого типа
 *   - переопределение значения
 * - [type interfence]
 * - Множественные типы с type composition
 */

let age: number = 5;
const name: string = "mango";

age = 6;

let value: any = 5;

value = "qwe";

const id: number | string = 5;

console.log("age ", age);
console.log("name ", name);
console.log("value ", value);
console.log("id ", id);

export {};
