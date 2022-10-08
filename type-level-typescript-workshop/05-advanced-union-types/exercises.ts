/* eslint-disable */

import { Equal, Expect, TODO } from "../helpers";

/**
 * 1. Implement a `Drive` generic taking a `trafficLight` type which can
 *    be either "red", "orange" or "green", and returns "go" if the
 *    trafficLight is "green" and "stop" otherwise.
 */
namespace one {
  type Drive<trafficLight> = trafficLight extends 'green' ? 'go' : 'stop';

  type res1 = Drive<"green">;
  type test1 = Expect<Equal<res1, "go">>;

  type res2 = Drive<"red">;
  type test2 = Expect<Equal<res2, "stop">>;

  type res3 = Drive<"orange">;
  type test3 = Expect<Equal<res3, "stop">>;

  type res4 = Drive<"red" | "green">;
  type test4 = Expect<Equal<res4, "stop" | "go">>;
}

/**
 * 2. Implement a generic taking two union types and excluding one from the other.
 */
namespace two {
  type Exclude<union, excluded> = union extends excluded ? never : union;

  type res1 = Exclude<1 | 2 | 3, 1>;
  type test1 = Expect<Equal<res1, 2 | 3>>;

  type res2 = Exclude<1 | 2 | 3, 1 | 2>;
  type test2 = Expect<Equal<res2, 3>>;

  type res3 = Exclude<1 | 2 | 3, never>;
  type test3 = Expect<Equal<res3, 1 | 2 | 3>>;

  type res4 = Exclude<1 | 2 | 3, unknown>;
  type test4 = Expect<Equal<res4, never>>;
}

namespace bonus {
  /**
   * 3. Implement a generic taking a union type (`union`) and a second type
   *    parameter (`included`), which excludes any type in `union` which isn't
   *    assignable to `included`.
   */
  namespace three {
    type Extract<union, included> = union extends included ? union : never;

    // types used in unit tests:

    type unionOfObjects =
      | { type: "a"; name: string }
      | { type: "b"; name: string }
      | { type: "c" };

    type mixedUnion = 1 | 2 | { name: string } | [1] | [1, 2] | string[];

    // unit tests:

    type res1 = Extract<1 | 2 | 3, 1>;
    type test1 = Expect<Equal<res1, 1>>;

    type res2 = Extract<unionOfObjects, { type: "b" }>;
    type test2 = Expect<Equal<res2, { type: "b"; name: string }>>;

    type res3 = Extract<unionOfObjects, { name: string }>;
    type test3 = Expect<
      Equal<res3, { type: "a"; name: string } | { type: "b"; name: string }>
    >;

    type res4 = Extract<mixedUnion, number>;
    type test4 = Expect<Equal<res4, 1 | 2>>;

    type res5 = Extract<mixedUnion, any[]>;
    type test5 = Expect<Equal<res5, [1] | [1, 2] | string[]>>;
  }
}
