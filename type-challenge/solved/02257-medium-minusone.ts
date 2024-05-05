// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
];

// ============= Your Code Here =============
type MinusOne<T extends number, N extends readonly any[] = []> = T extends 0
  ? -1
  : [true, ...N]["length"] extends T
  ? N["length"]
  : MinusOne<T, [true, ...N]>;

const a: MinusOne<54> = 11001;
const b: MinusOne<1101> = 11001;
type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Te<X> = <T>() => T extends X ? X : T;
const d: Te<number> = () => {};

const c: <T>() => T = () => 1;

const e: never extends unknown ? 1 : 2 = 2;
