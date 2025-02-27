import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = unknown;

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];


// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
// 
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
