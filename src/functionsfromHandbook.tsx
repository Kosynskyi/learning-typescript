// ========================Function Type Expressions
// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }

// function printToConsole(s: string) {
//   console.log(s);
// }

// printToConsole("qweqwe");

// greeter(printToConsole);

// fn: (a: string) => void - функція з одним параметром, який називається "а", приймає тип string, яка нічого не повертає

// ========================Generic Functions
// function mapper(arr: number[]): number[] {
//   return arr.map((item) => item * 2);
// }

// const mapper2 = (arr: number[]): number[] => {
//   return arr.map((item) => item * 2);
// };

// console.log(mapper([2, 4, 6, 8, 10]));
// console.log(mapper2([2, 4, 6, 8, 10]));

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

// const s = firstElement(["a", "b", "c"]);
// console.log(s);
// const n = firstElement([1, 2, 3]);
// console.log(n);
// const u = firstElement([]);
// console.log(u);

export {};
