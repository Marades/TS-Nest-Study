import { fibonacci, sum } from "./index.js";

console.time("rust");
const sumByRS = sum(40, 2);
console.timeEnd("rust");

console.time("js");
const sumByJS = 40 + 2;
console.timeEnd("js");

console.log(sumByRS, sumByJS);
/**
 * rust: 0.035ms
 * js: 0.002ms
 * 42 42
 */

console.time("rust");
const fibonacciByRS = fibonacci(40);
console.timeEnd("rust");

console.time("js");
const fibonacciByJS = jsFibonacci(40);
console.timeEnd("js");

console.log(fibonacciByRS, fibonacciByJS);

function jsFibonacci(n = 1) {
  if (n === 1 || n === 2) return 1;

  return jsFibonacci(n - 1) + jsFibonacci(n - 2);
}
/**
 * 50일 때 왜 결과 다르지?? -> rust 자료형 범위 때문에
 * rust: 22.113s
 * js: 1:11.425 (m:ss.mmm)
 * 3996334433 12586269025
 *
 * n = 40
 * rust: 174.714ms
 * js: 520.686ms
 * 102334155 102334155
 */
