{
    /**
     * Type Assertions ❌
     */
    function test():any {
        // return 2; 숫자를 넣어도 개발하는 동안에도 에러가 나지 않는다
        return 'hello';
    }

    const result = test();
    (result as string).length; // type 장담을 했기 때문에
    // 타입 장담은 정말 장담할 수 있을 때 사용해야 한다

    function findNumbers(): number [] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // !를 작성하는 건 무조건 저 변수에 값이 있다고 장담하는 것
}