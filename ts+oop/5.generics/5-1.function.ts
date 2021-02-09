{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error('유효하지 않은 숫자입니다');
    }
    return arg;
  }
  const result = checkNotNull(123);
  const result2 = checkNotNull(null);
  console.log(result);
  console.log(result2); // error

  function checkNotNullM<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('유효하지 않은 숫자입니다');
    }
    return arg;
  }

  // 컴파일 때 에러를 내지 않고 타입을 유연하게 보장 받으며 사용 가능하다
  const number: number = checkNotNullM(123);
  const bool: boolean = checkNotNullM(true);
}
