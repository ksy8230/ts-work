{
    /**
     * Enum
     */
    // 여러가지 값들을 한 곳에 모아서 타이핑하는 것

    // Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // Typescript
    enum Days {
        Monday, // 0 부터 시작해서 Monday = 0 으로 할당된다
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    // ts에서 Enum은 대부분 아래와 같은 Union 타입으로 대체 가능
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Saturday';
    console.log(Days.Monday)
    let day: Days = Days.Wednesday;
    day = Days.Sunday;
    day = 100; // 에러가 나지 않아 타입 보장이 되지 않는다
    console.log(day)

    let dayOfWeek: DaysOfWeek = 'Monday'; // 자동으로 코드 완성
    dayOfWeek = 'Saturday';
}