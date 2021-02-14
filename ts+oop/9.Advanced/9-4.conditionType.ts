{
  type Check<T> = T extends string ? boolean : number;
  type BoolType = Check<string>; // boolean

  type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : 'object';

  type T0 = TypeName<'a'>; // "string" 타입
  /**
   * 조건이 맞으면 어떤 타입을 지정한다
   */
}
