/**
 * Javascript
 * 원시타입 : number, string, boolean, bigint, symbol, null, undefined
 * Object타입 : function, array ...
 */

 /**
  * typescript types
  */

 {

    // number
    const num:number = -6;

    // string
    const str:string = 'hee';

    // boolean
    const boal:boolean = false;

    // undefined 
    // 값이 있는지 없는지 결정 안 된 상태
    // 단독으로 사용하지 않는다
    // 데이터타입이 있고 없을 때 주로 사용하고, 함수에서 무언가를 찾을 때 리턴값으로 사용
    // let name: undefined; (사용하지 말 것 ❌)
    let age: number | undefined;
    age = undefined;
    age = 1;

    // null 
    // 텅 빈 값이 있는 상태
    // 단독으로 사용하지 않는다
    // 값이 있거나 그 값이 비어있을 때 사용
    //  let name: null; (사용하지 말 것 ❌)
    let person: string | null;
    person = null;
    person = 'name';

    // unknown (사용하지 말 것 ❌)
    // 알 수 없는 타입이고 사용을 지양
    // 자바스크립트에서 리턴하는 타입을 알 수 없을 때 사용

    // any (사용하지 말 것 ❌)
    // 무엇이로든 사용 가능

    // void
    // 어떤 값도 리턴하지 않음
    // 타입 생략 가능
    function print(): void {
        console.log('hh')
        return;
    }

    // never
    // 에러 핸들링할 때 사용
    // 이 함수를 호출하면 리턴하는 값이 없다고 의미
    function throwError(msg: string):never {
        throw new Error();
    }

    // object
    let obj: object; // (사용하지 말 것 ❌)
    function acceptionSomeObj(obj:object) {

    }
    acceptionSomeObj({name: 'sy'})
    acceptionSomeObj({name2: 'animal'})
}