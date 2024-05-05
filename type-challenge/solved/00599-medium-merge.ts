// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];

// ============= Your Code Here =============
type Obj = { [K: keyof any]: any };
type Merge<F extends Obj, S extends Obj> = {
  [K in keyof (F | S)]: K extends keyof F ? F[K] : S[K];
};
