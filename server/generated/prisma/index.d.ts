
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WorkerProfile
 * 
 */
export type WorkerProfile = $Result.DefaultSelection<Prisma.$WorkerProfilePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  WORKER: 'WORKER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workerProfile`: Exposes CRUD operations for the **WorkerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkerProfiles
    * const workerProfiles = await prisma.workerProfile.findMany()
    * ```
    */
  get workerProfile(): Prisma.WorkerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    WorkerProfile: 'WorkerProfile',
    Booking: 'Booking',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workerProfile" | "booking" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WorkerProfile: {
        payload: Prisma.$WorkerProfilePayload<ExtArgs>
        fields: Prisma.WorkerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          findFirst: {
            args: Prisma.WorkerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          findMany: {
            args: Prisma.WorkerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>[]
          }
          create: {
            args: Prisma.WorkerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          createMany: {
            args: Prisma.WorkerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>[]
          }
          delete: {
            args: Prisma.WorkerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          update: {
            args: Prisma.WorkerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          deleteMany: {
            args: Prisma.WorkerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>[]
          }
          upsert: {
            args: Prisma.WorkerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkerProfilePayload>
          }
          aggregate: {
            args: Prisma.WorkerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkerProfile>
          }
          groupBy: {
            args: Prisma.WorkerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<WorkerProfileCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workerProfile?: WorkerProfileOmit
    booking?: BookingOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookingsAsCustomer: number
    reviewsGiven: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookingsAsCustomer?: boolean | UserCountOutputTypeCountBookingsAsCustomerArgs
    reviewsGiven?: boolean | UserCountOutputTypeCountReviewsGivenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type WorkerProfileCountOutputType
   */

  export type WorkerProfileCountOutputType = {
    bookings: number
    reviews: number
  }

  export type WorkerProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | WorkerProfileCountOutputTypeCountBookingsArgs
    reviews?: boolean | WorkerProfileCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfileCountOutputType
     */
    select?: WorkerProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * WorkerProfileCountOutputType without action
   */
  export type WorkerProfileCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    profilePicture: string | null
    address: string | null
    city: string | null
    pincode: string | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    isPhoneVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    password: string | null
    role: $Enums.Role | null
    profilePicture: string | null
    address: string | null
    city: string | null
    pincode: string | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    isPhoneVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    password: number
    role: number
    profilePicture: number
    address: number
    city: number
    pincode: number
    isActive: number
    isEmailVerified: number
    isPhoneVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    profilePicture?: true
    address?: true
    city?: true
    pincode?: true
    isActive?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    profilePicture?: true
    address?: true
    city?: true
    pincode?: true
    isActive?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    password?: true
    role?: true
    profilePicture?: true
    address?: true
    city?: true
    pincode?: true
    isActive?: true
    isEmailVerified?: true
    isPhoneVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string
    password: string
    role: $Enums.Role
    profilePicture: string | null
    address: string | null
    city: string | null
    pincode: string | null
    isActive: boolean
    isEmailVerified: boolean
    isPhoneVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    profilePicture?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workerProfile?: boolean | User$workerProfileArgs<ExtArgs>
    bookingsAsCustomer?: boolean | User$bookingsAsCustomerArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    profilePicture?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    profilePicture?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    profilePicture?: boolean
    address?: boolean
    city?: boolean
    pincode?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "password" | "role" | "profilePicture" | "address" | "city" | "pincode" | "isActive" | "isEmailVerified" | "isPhoneVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workerProfile?: boolean | User$workerProfileArgs<ExtArgs>
    bookingsAsCustomer?: boolean | User$bookingsAsCustomerArgs<ExtArgs>
    reviewsGiven?: boolean | User$reviewsGivenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workerProfile: Prisma.$WorkerProfilePayload<ExtArgs> | null
      bookingsAsCustomer: Prisma.$BookingPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string
      password: string
      role: $Enums.Role
      profilePicture: string | null
      address: string | null
      city: string | null
      pincode: string | null
      isActive: boolean
      isEmailVerified: boolean
      isPhoneVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workerProfile<T extends User$workerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$workerProfileArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookingsAsCustomer<T extends User$bookingsAsCustomerArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends User$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly isPhoneVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workerProfile
   */
  export type User$workerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    where?: WorkerProfileWhereInput
  }

  /**
   * User.bookingsAsCustomer
   */
  export type User$bookingsAsCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviewsGiven
   */
  export type User$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WorkerProfile
   */

  export type AggregateWorkerProfile = {
    _count: WorkerProfileCountAggregateOutputType | null
    _avg: WorkerProfileAvgAggregateOutputType | null
    _sum: WorkerProfileSumAggregateOutputType | null
    _min: WorkerProfileMinAggregateOutputType | null
    _max: WorkerProfileMaxAggregateOutputType | null
  }

  export type WorkerProfileAvgAggregateOutputType = {
    hourlyRate: number | null
    rating: number | null
    totalReviews: number | null
    totalBookings: number | null
  }

  export type WorkerProfileSumAggregateOutputType = {
    hourlyRate: number | null
    rating: number | null
    totalReviews: number | null
    totalBookings: number | null
  }

  export type WorkerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    experience: string | null
    bio: string | null
    hourlyRate: number | null
    verificationStatus: $Enums.VerificationStatus | null
    idProofUrl: string | null
    addressProofUrl: string | null
    rating: number | null
    totalReviews: number | null
    totalBookings: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    experience: string | null
    bio: string | null
    hourlyRate: number | null
    verificationStatus: $Enums.VerificationStatus | null
    idProofUrl: string | null
    addressProofUrl: string | null
    rating: number | null
    totalReviews: number | null
    totalBookings: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkerProfileCountAggregateOutputType = {
    id: number
    userId: number
    skills: number
    experience: number
    bio: number
    hourlyRate: number
    verificationStatus: number
    idProofUrl: number
    addressProofUrl: number
    skillCertificates: number
    rating: number
    totalReviews: number
    totalBookings: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkerProfileAvgAggregateInputType = {
    hourlyRate?: true
    rating?: true
    totalReviews?: true
    totalBookings?: true
  }

  export type WorkerProfileSumAggregateInputType = {
    hourlyRate?: true
    rating?: true
    totalReviews?: true
    totalBookings?: true
  }

  export type WorkerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    bio?: true
    hourlyRate?: true
    verificationStatus?: true
    idProofUrl?: true
    addressProofUrl?: true
    rating?: true
    totalReviews?: true
    totalBookings?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    bio?: true
    hourlyRate?: true
    verificationStatus?: true
    idProofUrl?: true
    addressProofUrl?: true
    rating?: true
    totalReviews?: true
    totalBookings?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    skills?: true
    experience?: true
    bio?: true
    hourlyRate?: true
    verificationStatus?: true
    idProofUrl?: true
    addressProofUrl?: true
    skillCertificates?: true
    rating?: true
    totalReviews?: true
    totalBookings?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerProfile to aggregate.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkerProfiles
    **/
    _count?: true | WorkerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkerProfileMaxAggregateInputType
  }

  export type GetWorkerProfileAggregateType<T extends WorkerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkerProfile[P]>
      : GetScalarType<T[P], AggregateWorkerProfile[P]>
  }




  export type WorkerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkerProfileWhereInput
    orderBy?: WorkerProfileOrderByWithAggregationInput | WorkerProfileOrderByWithAggregationInput[]
    by: WorkerProfileScalarFieldEnum[] | WorkerProfileScalarFieldEnum
    having?: WorkerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkerProfileCountAggregateInputType | true
    _avg?: WorkerProfileAvgAggregateInputType
    _sum?: WorkerProfileSumAggregateInputType
    _min?: WorkerProfileMinAggregateInputType
    _max?: WorkerProfileMaxAggregateInputType
  }

  export type WorkerProfileGroupByOutputType = {
    id: string
    userId: string
    skills: string[]
    experience: string
    bio: string | null
    hourlyRate: number | null
    verificationStatus: $Enums.VerificationStatus
    idProofUrl: string | null
    addressProofUrl: string | null
    skillCertificates: string[]
    rating: number
    totalReviews: number
    totalBookings: number
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkerProfileCountAggregateOutputType | null
    _avg: WorkerProfileAvgAggregateOutputType | null
    _sum: WorkerProfileSumAggregateOutputType | null
    _min: WorkerProfileMinAggregateOutputType | null
    _max: WorkerProfileMaxAggregateOutputType | null
  }

  type GetWorkerProfileGroupByPayload<T extends WorkerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], WorkerProfileGroupByOutputType[P]>
        }
      >
    >


  export type WorkerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experience?: boolean
    bio?: boolean
    hourlyRate?: boolean
    verificationStatus?: boolean
    idProofUrl?: boolean
    addressProofUrl?: boolean
    skillCertificates?: boolean
    rating?: boolean
    totalReviews?: boolean
    totalBookings?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | WorkerProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | WorkerProfile$reviewsArgs<ExtArgs>
    _count?: boolean | WorkerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerProfile"]>

  export type WorkerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experience?: boolean
    bio?: boolean
    hourlyRate?: boolean
    verificationStatus?: boolean
    idProofUrl?: boolean
    addressProofUrl?: boolean
    skillCertificates?: boolean
    rating?: boolean
    totalReviews?: boolean
    totalBookings?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerProfile"]>

  export type WorkerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    skills?: boolean
    experience?: boolean
    bio?: boolean
    hourlyRate?: boolean
    verificationStatus?: boolean
    idProofUrl?: boolean
    addressProofUrl?: boolean
    skillCertificates?: boolean
    rating?: boolean
    totalReviews?: boolean
    totalBookings?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workerProfile"]>

  export type WorkerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    skills?: boolean
    experience?: boolean
    bio?: boolean
    hourlyRate?: boolean
    verificationStatus?: boolean
    idProofUrl?: boolean
    addressProofUrl?: boolean
    skillCertificates?: boolean
    rating?: boolean
    totalReviews?: boolean
    totalBookings?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "skills" | "experience" | "bio" | "hourlyRate" | "verificationStatus" | "idProofUrl" | "addressProofUrl" | "skillCertificates" | "rating" | "totalReviews" | "totalBookings" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["workerProfile"]>
  export type WorkerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | WorkerProfile$bookingsArgs<ExtArgs>
    reviews?: boolean | WorkerProfile$reviewsArgs<ExtArgs>
    _count?: boolean | WorkerProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      skills: string[]
      experience: string
      bio: string | null
      hourlyRate: number | null
      verificationStatus: $Enums.VerificationStatus
      idProofUrl: string | null
      addressProofUrl: string | null
      skillCertificates: string[]
      rating: number
      totalReviews: number
      totalBookings: number
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workerProfile"]>
    composites: {}
  }

  type WorkerProfileGetPayload<S extends boolean | null | undefined | WorkerProfileDefaultArgs> = $Result.GetResult<Prisma.$WorkerProfilePayload, S>

  type WorkerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkerProfileCountAggregateInputType | true
    }

  export interface WorkerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkerProfile'], meta: { name: 'WorkerProfile' } }
    /**
     * Find zero or one WorkerProfile that matches the filter.
     * @param {WorkerProfileFindUniqueArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkerProfileFindUniqueArgs>(args: SelectSubset<T, WorkerProfileFindUniqueArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkerProfileFindUniqueOrThrowArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindFirstArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkerProfileFindFirstArgs>(args?: SelectSubset<T, WorkerProfileFindFirstArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindFirstOrThrowArgs} args - Arguments to find a WorkerProfile
     * @example
     * // Get one WorkerProfile
     * const workerProfile = await prisma.workerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkerProfiles
     * const workerProfiles = await prisma.workerProfile.findMany()
     * 
     * // Get first 10 WorkerProfiles
     * const workerProfiles = await prisma.workerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workerProfileWithIdOnly = await prisma.workerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkerProfileFindManyArgs>(args?: SelectSubset<T, WorkerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkerProfile.
     * @param {WorkerProfileCreateArgs} args - Arguments to create a WorkerProfile.
     * @example
     * // Create one WorkerProfile
     * const WorkerProfile = await prisma.workerProfile.create({
     *   data: {
     *     // ... data to create a WorkerProfile
     *   }
     * })
     * 
     */
    create<T extends WorkerProfileCreateArgs>(args: SelectSubset<T, WorkerProfileCreateArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkerProfiles.
     * @param {WorkerProfileCreateManyArgs} args - Arguments to create many WorkerProfiles.
     * @example
     * // Create many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkerProfileCreateManyArgs>(args?: SelectSubset<T, WorkerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkerProfiles and returns the data saved in the database.
     * @param {WorkerProfileCreateManyAndReturnArgs} args - Arguments to create many WorkerProfiles.
     * @example
     * // Create many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkerProfiles and only return the `id`
     * const workerProfileWithIdOnly = await prisma.workerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkerProfile.
     * @param {WorkerProfileDeleteArgs} args - Arguments to delete one WorkerProfile.
     * @example
     * // Delete one WorkerProfile
     * const WorkerProfile = await prisma.workerProfile.delete({
     *   where: {
     *     // ... filter to delete one WorkerProfile
     *   }
     * })
     * 
     */
    delete<T extends WorkerProfileDeleteArgs>(args: SelectSubset<T, WorkerProfileDeleteArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkerProfile.
     * @param {WorkerProfileUpdateArgs} args - Arguments to update one WorkerProfile.
     * @example
     * // Update one WorkerProfile
     * const workerProfile = await prisma.workerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkerProfileUpdateArgs>(args: SelectSubset<T, WorkerProfileUpdateArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkerProfiles.
     * @param {WorkerProfileDeleteManyArgs} args - Arguments to filter WorkerProfiles to delete.
     * @example
     * // Delete a few WorkerProfiles
     * const { count } = await prisma.workerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkerProfileDeleteManyArgs>(args?: SelectSubset<T, WorkerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkerProfileUpdateManyArgs>(args: SelectSubset<T, WorkerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkerProfiles and returns the data updated in the database.
     * @param {WorkerProfileUpdateManyAndReturnArgs} args - Arguments to update many WorkerProfiles.
     * @example
     * // Update many WorkerProfiles
     * const workerProfile = await prisma.workerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkerProfiles and only return the `id`
     * const workerProfileWithIdOnly = await prisma.workerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkerProfile.
     * @param {WorkerProfileUpsertArgs} args - Arguments to update or create a WorkerProfile.
     * @example
     * // Update or create a WorkerProfile
     * const workerProfile = await prisma.workerProfile.upsert({
     *   create: {
     *     // ... data to create a WorkerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkerProfile we want to update
     *   }
     * })
     */
    upsert<T extends WorkerProfileUpsertArgs>(args: SelectSubset<T, WorkerProfileUpsertArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileCountArgs} args - Arguments to filter WorkerProfiles to count.
     * @example
     * // Count the number of WorkerProfiles
     * const count = await prisma.workerProfile.count({
     *   where: {
     *     // ... the filter for the WorkerProfiles we want to count
     *   }
     * })
    **/
    count<T extends WorkerProfileCountArgs>(
      args?: Subset<T, WorkerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkerProfileAggregateArgs>(args: Subset<T, WorkerProfileAggregateArgs>): Prisma.PrismaPromise<GetWorkerProfileAggregateType<T>>

    /**
     * Group by WorkerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkerProfileGroupByArgs['orderBy'] }
        : { orderBy?: WorkerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkerProfile model
   */
  readonly fields: WorkerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends WorkerProfile$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends WorkerProfile$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfile$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkerProfile model
   */
  interface WorkerProfileFieldRefs {
    readonly id: FieldRef<"WorkerProfile", 'String'>
    readonly userId: FieldRef<"WorkerProfile", 'String'>
    readonly skills: FieldRef<"WorkerProfile", 'String[]'>
    readonly experience: FieldRef<"WorkerProfile", 'String'>
    readonly bio: FieldRef<"WorkerProfile", 'String'>
    readonly hourlyRate: FieldRef<"WorkerProfile", 'Float'>
    readonly verificationStatus: FieldRef<"WorkerProfile", 'VerificationStatus'>
    readonly idProofUrl: FieldRef<"WorkerProfile", 'String'>
    readonly addressProofUrl: FieldRef<"WorkerProfile", 'String'>
    readonly skillCertificates: FieldRef<"WorkerProfile", 'String[]'>
    readonly rating: FieldRef<"WorkerProfile", 'Float'>
    readonly totalReviews: FieldRef<"WorkerProfile", 'Int'>
    readonly totalBookings: FieldRef<"WorkerProfile", 'Int'>
    readonly isAvailable: FieldRef<"WorkerProfile", 'Boolean'>
    readonly createdAt: FieldRef<"WorkerProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkerProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkerProfile findUnique
   */
  export type WorkerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile findUniqueOrThrow
   */
  export type WorkerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile findFirst
   */
  export type WorkerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerProfiles.
     */
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile findFirstOrThrow
   */
  export type WorkerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfile to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkerProfiles.
     */
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile findMany
   */
  export type WorkerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter, which WorkerProfiles to fetch.
     */
    where?: WorkerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkerProfiles to fetch.
     */
    orderBy?: WorkerProfileOrderByWithRelationInput | WorkerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkerProfiles.
     */
    cursor?: WorkerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkerProfiles.
     */
    skip?: number
    distinct?: WorkerProfileScalarFieldEnum | WorkerProfileScalarFieldEnum[]
  }

  /**
   * WorkerProfile create
   */
  export type WorkerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkerProfile.
     */
    data: XOR<WorkerProfileCreateInput, WorkerProfileUncheckedCreateInput>
  }

  /**
   * WorkerProfile createMany
   */
  export type WorkerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkerProfiles.
     */
    data: WorkerProfileCreateManyInput | WorkerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkerProfile createManyAndReturn
   */
  export type WorkerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many WorkerProfiles.
     */
    data: WorkerProfileCreateManyInput | WorkerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkerProfile update
   */
  export type WorkerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkerProfile.
     */
    data: XOR<WorkerProfileUpdateInput, WorkerProfileUncheckedUpdateInput>
    /**
     * Choose, which WorkerProfile to update.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile updateMany
   */
  export type WorkerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkerProfiles.
     */
    data: XOR<WorkerProfileUpdateManyMutationInput, WorkerProfileUncheckedUpdateManyInput>
    /**
     * Filter which WorkerProfiles to update
     */
    where?: WorkerProfileWhereInput
    /**
     * Limit how many WorkerProfiles to update.
     */
    limit?: number
  }

  /**
   * WorkerProfile updateManyAndReturn
   */
  export type WorkerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * The data used to update WorkerProfiles.
     */
    data: XOR<WorkerProfileUpdateManyMutationInput, WorkerProfileUncheckedUpdateManyInput>
    /**
     * Filter which WorkerProfiles to update
     */
    where?: WorkerProfileWhereInput
    /**
     * Limit how many WorkerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkerProfile upsert
   */
  export type WorkerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkerProfile to update in case it exists.
     */
    where: WorkerProfileWhereUniqueInput
    /**
     * In case the WorkerProfile found by the `where` argument doesn't exist, create a new WorkerProfile with this data.
     */
    create: XOR<WorkerProfileCreateInput, WorkerProfileUncheckedCreateInput>
    /**
     * In case the WorkerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkerProfileUpdateInput, WorkerProfileUncheckedUpdateInput>
  }

  /**
   * WorkerProfile delete
   */
  export type WorkerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
    /**
     * Filter which WorkerProfile to delete.
     */
    where: WorkerProfileWhereUniqueInput
  }

  /**
   * WorkerProfile deleteMany
   */
  export type WorkerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkerProfiles to delete
     */
    where?: WorkerProfileWhereInput
    /**
     * Limit how many WorkerProfiles to delete.
     */
    limit?: number
  }

  /**
   * WorkerProfile.bookings
   */
  export type WorkerProfile$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * WorkerProfile.reviews
   */
  export type WorkerProfile$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * WorkerProfile without action
   */
  export type WorkerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkerProfile
     */
    select?: WorkerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkerProfile
     */
    omit?: WorkerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkerProfileInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    amount: number | null
  }

  export type BookingSumAggregateOutputType = {
    amount: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    workerId: string | null
    service: string | null
    description: string | null
    scheduledDate: Date | null
    scheduledTime: string | null
    address: string | null
    status: $Enums.BookingStatus | null
    amount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    workerId: string | null
    service: string | null
    description: string | null
    scheduledDate: Date | null
    scheduledTime: string | null
    address: string | null
    status: $Enums.BookingStatus | null
    amount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    customerId: number
    workerId: number
    service: number
    description: number
    scheduledDate: number
    scheduledTime: number
    address: number
    status: number
    amount: number
    paymentStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    amount?: true
  }

  export type BookingSumAggregateInputType = {
    amount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    customerId?: true
    workerId?: true
    service?: true
    description?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    status?: true
    amount?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    customerId?: true
    workerId?: true
    service?: true
    description?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    status?: true
    amount?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    customerId?: true
    workerId?: true
    service?: true
    description?: true
    scheduledDate?: true
    scheduledTime?: true
    address?: true
    status?: true
    amount?: true
    paymentStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    customerId: string
    workerId: string
    service: string
    description: string | null
    scheduledDate: Date
    scheduledTime: string
    address: string
    status: $Enums.BookingStatus
    amount: number | null
    paymentStatus: $Enums.PaymentStatus
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    workerId?: boolean
    service?: boolean
    description?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    status?: boolean
    amount?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    workerId?: boolean
    service?: boolean
    description?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    status?: boolean
    amount?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    workerId?: boolean
    service?: boolean
    description?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    status?: boolean
    amount?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    customerId?: boolean
    workerId?: boolean
    service?: boolean
    description?: boolean
    scheduledDate?: boolean
    scheduledTime?: boolean
    address?: boolean
    status?: boolean
    amount?: boolean
    paymentStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "workerId" | "service" | "description" | "scheduledDate" | "scheduledTime" | "address" | "status" | "amount" | "paymentStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      worker: Prisma.$WorkerProfilePayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      workerId: string
      service: string
      description: string | null
      scheduledDate: Date
      scheduledTime: string
      address: string
      status: $Enums.BookingStatus
      amount: number | null
      paymentStatus: $Enums.PaymentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly customerId: FieldRef<"Booking", 'String'>
    readonly workerId: FieldRef<"Booking", 'String'>
    readonly service: FieldRef<"Booking", 'String'>
    readonly description: FieldRef<"Booking", 'String'>
    readonly scheduledDate: FieldRef<"Booking", 'DateTime'>
    readonly scheduledTime: FieldRef<"Booking", 'String'>
    readonly address: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly amount: FieldRef<"Booking", 'Float'>
    readonly paymentStatus: FieldRef<"Booking", 'PaymentStatus'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    customerId: string | null
    workerId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    customerId: string | null
    workerId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    bookingId: number
    customerId: number
    workerId: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    bookingId?: true
    customerId?: true
    workerId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    bookingId?: true
    customerId?: true
    workerId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    bookingId?: true
    customerId?: true
    workerId?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    bookingId: string
    customerId: string
    workerId: string
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    customerId?: boolean
    workerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    customerId?: boolean
    workerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    customerId?: boolean
    workerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    bookingId?: boolean
    customerId?: boolean
    workerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "customerId" | "workerId" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | UserDefaultArgs<ExtArgs>
    worker?: boolean | WorkerProfileDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      customer: Prisma.$UserPayload<ExtArgs>
      worker: Prisma.$WorkerProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      customerId: string
      workerId: string
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worker<T extends WorkerProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkerProfileDefaultArgs<ExtArgs>>): Prisma__WorkerProfileClient<$Result.GetResult<Prisma.$WorkerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly bookingId: FieldRef<"Review", 'String'>
    readonly customerId: FieldRef<"Review", 'String'>
    readonly workerId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    password: 'password',
    role: 'role',
    profilePicture: 'profilePicture',
    address: 'address',
    city: 'city',
    pincode: 'pincode',
    isActive: 'isActive',
    isEmailVerified: 'isEmailVerified',
    isPhoneVerified: 'isPhoneVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    skills: 'skills',
    experience: 'experience',
    bio: 'bio',
    hourlyRate: 'hourlyRate',
    verificationStatus: 'verificationStatus',
    idProofUrl: 'idProofUrl',
    addressProofUrl: 'addressProofUrl',
    skillCertificates: 'skillCertificates',
    rating: 'rating',
    totalReviews: 'totalReviews',
    totalBookings: 'totalBookings',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkerProfileScalarFieldEnum = (typeof WorkerProfileScalarFieldEnum)[keyof typeof WorkerProfileScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    workerId: 'workerId',
    service: 'service',
    description: 'description',
    scheduledDate: 'scheduledDate',
    scheduledTime: 'scheduledTime',
    address: 'address',
    status: 'status',
    amount: 'amount',
    paymentStatus: 'paymentStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    customerId: 'customerId',
    workerId: 'workerId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePicture?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isPhoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workerProfile?: XOR<WorkerProfileNullableScalarRelationFilter, WorkerProfileWhereInput> | null
    bookingsAsCustomer?: BookingListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workerProfile?: WorkerProfileOrderByWithRelationInput
    bookingsAsCustomer?: BookingOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePicture?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    isPhoneVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workerProfile?: XOR<WorkerProfileNullableScalarRelationFilter, WorkerProfileWhereInput> | null
    bookingsAsCustomer?: BookingListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isPhoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkerProfileWhereInput = {
    AND?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    OR?: WorkerProfileWhereInput[]
    NOT?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    id?: StringFilter<"WorkerProfile"> | string
    userId?: StringFilter<"WorkerProfile"> | string
    skills?: StringNullableListFilter<"WorkerProfile">
    experience?: StringFilter<"WorkerProfile"> | string
    bio?: StringNullableFilter<"WorkerProfile"> | string | null
    hourlyRate?: FloatNullableFilter<"WorkerProfile"> | number | null
    verificationStatus?: EnumVerificationStatusFilter<"WorkerProfile"> | $Enums.VerificationStatus
    idProofUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    addressProofUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    skillCertificates?: StringNullableListFilter<"WorkerProfile">
    rating?: FloatFilter<"WorkerProfile"> | number
    totalReviews?: IntFilter<"WorkerProfile"> | number
    totalBookings?: IntFilter<"WorkerProfile"> | number
    isAvailable?: BoolFilter<"WorkerProfile"> | boolean
    createdAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type WorkerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    idProofUrl?: SortOrderInput | SortOrder
    addressProofUrl?: SortOrderInput | SortOrder
    skillCertificates?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type WorkerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    OR?: WorkerProfileWhereInput[]
    NOT?: WorkerProfileWhereInput | WorkerProfileWhereInput[]
    skills?: StringNullableListFilter<"WorkerProfile">
    experience?: StringFilter<"WorkerProfile"> | string
    bio?: StringNullableFilter<"WorkerProfile"> | string | null
    hourlyRate?: FloatNullableFilter<"WorkerProfile"> | number | null
    verificationStatus?: EnumVerificationStatusFilter<"WorkerProfile"> | $Enums.VerificationStatus
    idProofUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    addressProofUrl?: StringNullableFilter<"WorkerProfile"> | string | null
    skillCertificates?: StringNullableListFilter<"WorkerProfile">
    rating?: FloatFilter<"WorkerProfile"> | number
    totalReviews?: IntFilter<"WorkerProfile"> | number
    totalBookings?: IntFilter<"WorkerProfile"> | number
    isAvailable?: BoolFilter<"WorkerProfile"> | boolean
    createdAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeFilter<"WorkerProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "userId">

  export type WorkerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    idProofUrl?: SortOrderInput | SortOrder
    addressProofUrl?: SortOrderInput | SortOrder
    skillCertificates?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkerProfileCountOrderByAggregateInput
    _avg?: WorkerProfileAvgOrderByAggregateInput
    _max?: WorkerProfileMaxOrderByAggregateInput
    _min?: WorkerProfileMinOrderByAggregateInput
    _sum?: WorkerProfileSumOrderByAggregateInput
  }

  export type WorkerProfileScalarWhereWithAggregatesInput = {
    AND?: WorkerProfileScalarWhereWithAggregatesInput | WorkerProfileScalarWhereWithAggregatesInput[]
    OR?: WorkerProfileScalarWhereWithAggregatesInput[]
    NOT?: WorkerProfileScalarWhereWithAggregatesInput | WorkerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkerProfile"> | string
    userId?: StringWithAggregatesFilter<"WorkerProfile"> | string
    skills?: StringNullableListFilter<"WorkerProfile">
    experience?: StringWithAggregatesFilter<"WorkerProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    hourlyRate?: FloatNullableWithAggregatesFilter<"WorkerProfile"> | number | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"WorkerProfile"> | $Enums.VerificationStatus
    idProofUrl?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    addressProofUrl?: StringNullableWithAggregatesFilter<"WorkerProfile"> | string | null
    skillCertificates?: StringNullableListFilter<"WorkerProfile">
    rating?: FloatWithAggregatesFilter<"WorkerProfile"> | number
    totalReviews?: IntWithAggregatesFilter<"WorkerProfile"> | number
    totalBookings?: IntWithAggregatesFilter<"WorkerProfile"> | number
    isAvailable?: BoolWithAggregatesFilter<"WorkerProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkerProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkerProfile"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    workerId?: StringFilter<"Booking"> | string
    service?: StringFilter<"Booking"> | string
    description?: StringNullableFilter<"Booking"> | string | null
    scheduledDate?: DateTimeFilter<"Booking"> | Date | string
    scheduledTime?: StringFilter<"Booking"> | string
    address?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    amount?: FloatNullableFilter<"Booking"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    worker?: XOR<WorkerProfileScalarRelationFilter, WorkerProfileWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    service?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    status?: SortOrder
    amount?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    worker?: WorkerProfileOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    customerId?: StringFilter<"Booking"> | string
    workerId?: StringFilter<"Booking"> | string
    service?: StringFilter<"Booking"> | string
    description?: StringNullableFilter<"Booking"> | string | null
    scheduledDate?: DateTimeFilter<"Booking"> | Date | string
    scheduledTime?: StringFilter<"Booking"> | string
    address?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    amount?: FloatNullableFilter<"Booking"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    worker?: XOR<WorkerProfileScalarRelationFilter, WorkerProfileWhereInput>
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    service?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    status?: SortOrder
    amount?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    customerId?: StringWithAggregatesFilter<"Booking"> | string
    workerId?: StringWithAggregatesFilter<"Booking"> | string
    service?: StringWithAggregatesFilter<"Booking"> | string
    description?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    scheduledDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    scheduledTime?: StringWithAggregatesFilter<"Booking"> | string
    address?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    amount?: FloatNullableWithAggregatesFilter<"Booking"> | number | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    customerId?: StringFilter<"Review"> | string
    workerId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    worker?: XOR<WorkerProfileScalarRelationFilter, WorkerProfileWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    customer?: UserOrderByWithRelationInput
    worker?: WorkerProfileOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    customerId?: StringFilter<"Review"> | string
    workerId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    worker?: XOR<WorkerProfileScalarRelationFilter, WorkerProfileWhereInput>
  }, "id" | "bookingId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    bookingId?: StringWithAggregatesFilter<"Review"> | string
    customerId?: StringWithAggregatesFilter<"Review"> | string
    workerId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    bookingsAsCustomer?: BookingCreateNestedManyWithoutCustomerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    bookingsAsCustomer?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    bookingsAsCustomer?: BookingUpdateManyWithoutCustomerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    bookingsAsCustomer?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerProfileCreateInput = {
    id?: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    bookings?: BookingCreateNestedManyWithoutWorkerInput
    reviews?: ReviewCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutWorkerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    bookings?: BookingUpdateManyWithoutWorkerNestedInput
    reviews?: ReviewUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutWorkerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileCreateManyInput = {
    id?: string
    userId: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutBookingsAsCustomerInput
    worker: WorkerProfileCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    customerId: string
    workerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutBookingsAsCustomerNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    customerId: string
    workerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    customer: UserCreateNestedOneWithoutReviewsGivenInput
    worker: WorkerProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    bookingId: string
    customerId: string
    workerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    customer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    bookingId: string
    customerId: string
    workerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkerProfileNullableScalarRelationFilter = {
    is?: WorkerProfileWhereInput | null
    isNot?: WorkerProfileWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profilePicture?: SortOrder
    address?: SortOrder
    city?: SortOrder
    pincode?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    isPhoneVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    verificationStatus?: SortOrder
    idProofUrl?: SortOrder
    addressProofUrl?: SortOrder
    skillCertificates?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileAvgOrderByAggregateInput = {
    hourlyRate?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
  }

  export type WorkerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    verificationStatus?: SortOrder
    idProofUrl?: SortOrder
    addressProofUrl?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    hourlyRate?: SortOrder
    verificationStatus?: SortOrder
    idProofUrl?: SortOrder
    addressProofUrl?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkerProfileSumOrderByAggregateInput = {
    hourlyRate?: SortOrder
    rating?: SortOrder
    totalReviews?: SortOrder
    totalBookings?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type WorkerProfileScalarRelationFilter = {
    is?: WorkerProfileWhereInput
    isNot?: WorkerProfileWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    service?: SortOrder
    description?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    service?: SortOrder
    description?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    service?: SortOrder
    description?: SortOrder
    scheduledDate?: SortOrder
    scheduledTime?: SortOrder
    address?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    customerId?: SortOrder
    workerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type WorkerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type WorkerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    upsert?: WorkerProfileUpsertWithoutUserInput
    disconnect?: WorkerProfileWhereInput | boolean
    delete?: WorkerProfileWhereInput | boolean
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutUserInput, WorkerProfileUpdateWithoutUserInput>, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type WorkerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutUserInput
    upsert?: WorkerProfileUpsertWithoutUserInput
    disconnect?: WorkerProfileWhereInput | boolean
    delete?: WorkerProfileWhereInput | boolean
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutUserInput, WorkerProfileUpdateWithoutUserInput>, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type WorkerProfileCreateskillsInput = {
    set: string[]
  }

  export type WorkerProfileCreateskillCertificatesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutWorkerProfileInput = {
    create?: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutWorkerInput = {
    create?: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput> | BookingCreateWithoutWorkerInput[] | BookingUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutWorkerInput | BookingCreateOrConnectWithoutWorkerInput[]
    createMany?: BookingCreateManyWorkerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutWorkerInput = {
    create?: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput> | ReviewCreateWithoutWorkerInput[] | ReviewUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutWorkerInput | ReviewCreateOrConnectWithoutWorkerInput[]
    createMany?: ReviewCreateManyWorkerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput> | BookingCreateWithoutWorkerInput[] | BookingUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutWorkerInput | BookingCreateOrConnectWithoutWorkerInput[]
    createMany?: BookingCreateManyWorkerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutWorkerInput = {
    create?: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput> | ReviewCreateWithoutWorkerInput[] | ReviewUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutWorkerInput | ReviewCreateOrConnectWithoutWorkerInput[]
    createMany?: ReviewCreateManyWorkerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type WorkerProfileUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type WorkerProfileUpdateskillCertificatesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWorkerProfileNestedInput = {
    create?: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkerProfileInput
    upsert?: UserUpsertWithoutWorkerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkerProfileInput, UserUpdateWithoutWorkerProfileInput>, UserUncheckedUpdateWithoutWorkerProfileInput>
  }

  export type BookingUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput> | BookingCreateWithoutWorkerInput[] | BookingUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutWorkerInput | BookingCreateOrConnectWithoutWorkerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutWorkerInput | BookingUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: BookingCreateManyWorkerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutWorkerInput | BookingUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutWorkerInput | BookingUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput> | ReviewCreateWithoutWorkerInput[] | ReviewUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutWorkerInput | ReviewCreateOrConnectWithoutWorkerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutWorkerInput | ReviewUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: ReviewCreateManyWorkerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutWorkerInput | ReviewUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutWorkerInput | ReviewUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput> | BookingCreateWithoutWorkerInput[] | BookingUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutWorkerInput | BookingCreateOrConnectWithoutWorkerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutWorkerInput | BookingUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: BookingCreateManyWorkerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutWorkerInput | BookingUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutWorkerInput | BookingUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutWorkerNestedInput = {
    create?: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput> | ReviewCreateWithoutWorkerInput[] | ReviewUncheckedCreateWithoutWorkerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutWorkerInput | ReviewCreateOrConnectWithoutWorkerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutWorkerInput | ReviewUpsertWithWhereUniqueWithoutWorkerInput[]
    createMany?: ReviewCreateManyWorkerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutWorkerInput | ReviewUpdateWithWhereUniqueWithoutWorkerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutWorkerInput | ReviewUpdateManyWithWhereWithoutWorkerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsAsCustomerInput = {
    create?: XOR<UserCreateWithoutBookingsAsCustomerInput, UserUncheckedCreateWithoutBookingsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsCustomerInput
    connect?: UserWhereUniqueInput
  }

  export type WorkerProfileCreateNestedOneWithoutBookingsInput = {
    create?: XOR<WorkerProfileCreateWithoutBookingsInput, WorkerProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutBookingsInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsAsCustomerNestedInput = {
    create?: XOR<UserCreateWithoutBookingsAsCustomerInput, UserUncheckedCreateWithoutBookingsAsCustomerInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsAsCustomerInput
    upsert?: UserUpsertWithoutBookingsAsCustomerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsAsCustomerInput, UserUpdateWithoutBookingsAsCustomerInput>, UserUncheckedUpdateWithoutBookingsAsCustomerInput>
  }

  export type WorkerProfileUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutBookingsInput, WorkerProfileUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutBookingsInput
    upsert?: WorkerProfileUpsertWithoutBookingsInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutBookingsInput, WorkerProfileUpdateWithoutBookingsInput>, WorkerProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type WorkerProfileCreateNestedOneWithoutReviewsInput = {
    create?: XOR<WorkerProfileCreateWithoutReviewsInput, WorkerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutReviewsInput
    connect?: WorkerProfileWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsGivenNestedInput = {
    create?: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsGivenInput
    upsert?: UserUpsertWithoutReviewsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsGivenInput, UserUpdateWithoutReviewsGivenInput>, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type WorkerProfileUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<WorkerProfileCreateWithoutReviewsInput, WorkerProfileUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: WorkerProfileCreateOrConnectWithoutReviewsInput
    upsert?: WorkerProfileUpsertWithoutReviewsInput
    connect?: WorkerProfileWhereUniqueInput
    update?: XOR<XOR<WorkerProfileUpdateToOneWithWhereWithoutReviewsInput, WorkerProfileUpdateWithoutReviewsInput>, WorkerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type WorkerProfileCreateWithoutUserInput = {
    id?: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutWorkerInput
    reviews?: ReviewCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutWorkerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutUserInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateWithoutCustomerInput = {
    id?: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    worker: WorkerProfileCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    workerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCustomerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    worker: WorkerProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCustomerInput = {
    id?: string
    bookingId: string
    workerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewCreateManyCustomerInputEnvelope = {
    data: ReviewCreateManyCustomerInput | ReviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type WorkerProfileUpsertWithoutUserInput = {
    update: XOR<WorkerProfileUpdateWithoutUserInput, WorkerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<WorkerProfileCreateWithoutUserInput, WorkerProfileUncheckedCreateWithoutUserInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutUserInput, WorkerProfileUncheckedUpdateWithoutUserInput>
  }

  export type WorkerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutWorkerNestedInput
    reviews?: ReviewUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutWorkerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    customerId?: StringFilter<"Booking"> | string
    workerId?: StringFilter<"Booking"> | string
    service?: StringFilter<"Booking"> | string
    description?: StringNullableFilter<"Booking"> | string | null
    scheduledDate?: DateTimeFilter<"Booking"> | Date | string
    scheduledTime?: StringFilter<"Booking"> | string
    address?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    amount?: FloatNullableFilter<"Booking"> | number | null
    paymentStatus?: EnumPaymentStatusFilter<"Booking"> | $Enums.PaymentStatus
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    bookingId?: StringFilter<"Review"> | string
    customerId?: StringFilter<"Review"> | string
    workerId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutWorkerProfileInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingsAsCustomer?: BookingCreateNestedManyWithoutCustomerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutWorkerProfileInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookingsAsCustomer?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutWorkerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
  }

  export type BookingCreateWithoutWorkerInput = {
    id?: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutBookingsAsCustomerInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutWorkerInput = {
    id?: string
    customerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutWorkerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput>
  }

  export type BookingCreateManyWorkerInputEnvelope = {
    data: BookingCreateManyWorkerInput | BookingCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutWorkerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    customer: UserCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutWorkerInput = {
    id?: string
    bookingId: string
    customerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutWorkerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput>
  }

  export type ReviewCreateManyWorkerInputEnvelope = {
    data: ReviewCreateManyWorkerInput | ReviewCreateManyWorkerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkerProfileInput = {
    update: XOR<UserUpdateWithoutWorkerProfileInput, UserUncheckedUpdateWithoutWorkerProfileInput>
    create: XOR<UserCreateWithoutWorkerProfileInput, UserUncheckedCreateWithoutWorkerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkerProfileInput, UserUncheckedUpdateWithoutWorkerProfileInput>
  }

  export type UserUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingsAsCustomer?: BookingUpdateManyWithoutCustomerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookingsAsCustomer?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutWorkerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutWorkerInput, BookingUncheckedUpdateWithoutWorkerInput>
    create: XOR<BookingCreateWithoutWorkerInput, BookingUncheckedCreateWithoutWorkerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutWorkerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutWorkerInput, BookingUncheckedUpdateWithoutWorkerInput>
  }

  export type BookingUpdateManyWithWhereWithoutWorkerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutWorkerInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutWorkerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutWorkerInput, ReviewUncheckedUpdateWithoutWorkerInput>
    create: XOR<ReviewCreateWithoutWorkerInput, ReviewUncheckedCreateWithoutWorkerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutWorkerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutWorkerInput, ReviewUncheckedUpdateWithoutWorkerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutWorkerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutWorkerInput>
  }

  export type UserCreateWithoutBookingsAsCustomerInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutBookingsAsCustomerInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutBookingsAsCustomerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsAsCustomerInput, UserUncheckedCreateWithoutBookingsAsCustomerInput>
  }

  export type WorkerProfileCreateWithoutBookingsInput = {
    id?: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    reviews?: ReviewCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutBookingsInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutBookingsInput, WorkerProfileUncheckedCreateWithoutBookingsInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutReviewsGivenInput
    worker: WorkerProfileCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: string
    customerId: string
    workerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type UserUpsertWithoutBookingsAsCustomerInput = {
    update: XOR<UserUpdateWithoutBookingsAsCustomerInput, UserUncheckedUpdateWithoutBookingsAsCustomerInput>
    create: XOR<UserCreateWithoutBookingsAsCustomerInput, UserUncheckedCreateWithoutBookingsAsCustomerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsAsCustomerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsAsCustomerInput, UserUncheckedUpdateWithoutBookingsAsCustomerInput>
  }

  export type UserUpdateWithoutBookingsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsAsCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type WorkerProfileUpsertWithoutBookingsInput = {
    update: XOR<WorkerProfileUpdateWithoutBookingsInput, WorkerProfileUncheckedUpdateWithoutBookingsInput>
    create: XOR<WorkerProfileCreateWithoutBookingsInput, WorkerProfileUncheckedCreateWithoutBookingsInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutBookingsInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutBookingsInput, WorkerProfileUncheckedUpdateWithoutBookingsInput>
  }

  export type WorkerProfileUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    reviews?: ReviewUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutReviewInput = {
    id?: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutBookingsAsCustomerInput
    worker: WorkerProfileCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: string
    customerId: string
    workerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type UserCreateWithoutReviewsGivenInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileCreateNestedOneWithoutUserInput
    bookingsAsCustomer?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    fullName: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    profilePicture?: string | null
    address?: string | null
    city?: string | null
    pincode?: string | null
    isActive?: boolean
    isEmailVerified?: boolean
    isPhoneVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workerProfile?: WorkerProfileUncheckedCreateNestedOneWithoutUserInput
    bookingsAsCustomer?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutReviewsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
  }

  export type WorkerProfileCreateWithoutReviewsInput = {
    id?: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkerProfileInput
    bookings?: BookingCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileUncheckedCreateWithoutReviewsInput = {
    id?: string
    userId: string
    skills?: WorkerProfileCreateskillsInput | string[]
    experience: string
    bio?: string | null
    hourlyRate?: number | null
    verificationStatus?: $Enums.VerificationStatus
    idProofUrl?: string | null
    addressProofUrl?: string | null
    skillCertificates?: WorkerProfileCreateskillCertificatesInput | string[]
    rating?: number
    totalReviews?: number
    totalBookings?: number
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutWorkerInput
  }

  export type WorkerProfileCreateOrConnectWithoutReviewsInput = {
    where: WorkerProfileWhereUniqueInput
    create: XOR<WorkerProfileCreateWithoutReviewsInput, WorkerProfileUncheckedCreateWithoutReviewsInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutBookingsAsCustomerNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutReviewsGivenInput = {
    update: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<UserCreateWithoutReviewsGivenInput, UserUncheckedCreateWithoutReviewsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsGivenInput, UserUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type UserUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUpdateOneWithoutUserNestedInput
    bookingsAsCustomer?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    isPhoneVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workerProfile?: WorkerProfileUncheckedUpdateOneWithoutUserNestedInput
    bookingsAsCustomer?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type WorkerProfileUpsertWithoutReviewsInput = {
    update: XOR<WorkerProfileUpdateWithoutReviewsInput, WorkerProfileUncheckedUpdateWithoutReviewsInput>
    create: XOR<WorkerProfileCreateWithoutReviewsInput, WorkerProfileUncheckedCreateWithoutReviewsInput>
    where?: WorkerProfileWhereInput
  }

  export type WorkerProfileUpdateToOneWithWhereWithoutReviewsInput = {
    where?: WorkerProfileWhereInput
    data: XOR<WorkerProfileUpdateWithoutReviewsInput, WorkerProfileUncheckedUpdateWithoutReviewsInput>
  }

  export type WorkerProfileUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkerProfileNestedInput
    bookings?: BookingUpdateManyWithoutWorkerNestedInput
  }

  export type WorkerProfileUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    skills?: WorkerProfileUpdateskillsInput | string[]
    experience?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    hourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    idProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    addressProofUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skillCertificates?: WorkerProfileUpdateskillCertificatesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    totalReviews?: IntFieldUpdateOperationsInput | number
    totalBookings?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutWorkerNestedInput
  }

  export type BookingCreateManyCustomerInput = {
    id?: string
    workerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCustomerInput = {
    id?: string
    bookingId: string
    workerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    worker?: WorkerProfileUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    worker?: WorkerProfileUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    workerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyWorkerInput = {
    id?: string
    customerId: string
    service: string
    description?: string | null
    scheduledDate: Date | string
    scheduledTime: string
    address: string
    status?: $Enums.BookingStatus
    amount?: number | null
    paymentStatus?: $Enums.PaymentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyWorkerInput = {
    id?: string
    bookingId: string
    customerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutBookingsAsCustomerNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledTime?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    customer?: UserUpdateOneRequiredWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutWorkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}