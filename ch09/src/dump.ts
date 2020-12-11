import * as R from 'ramda';

export const Dump = () => {
    // 포인트가 없는 함수
    const dump = R.pipe(
        R.tap(n => console.log(n))
    );

    // 테스트 코드
    dump(R.range(1, 10));

    // dump 함수를 포인트가 있는 익숙한 함수로 바꿔보기
    const dumpPoint = <T>(array: T[]): T[] => R.pipe(
        R.tap(n => console.log(n))
    )(array) as T[];
    // 타입 단언을 사용해 R.pipe(...)(array)가 반환하는 타입을 any가 아니라 T[]로 바꿔준다

    // 테스트 코드
    dumpPoint(R.range(1, 10));
}
