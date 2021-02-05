{
    /**
     * Union Types: OR
     */

     type Direction = 'left' | 'right' | 'up' | 'down';
     function move(direction: Direction) {
         console.log(direction)
     }
     move('down') // Direction 에 지정된 타입의 string만 가능

    // Union 예제
    // 공통된 프로퍼티를 가짐으로서 구분하기 쉽게 만든다
    type SuccessState = {
        result: 'success'; //
        response: {
            body: string;
        }
    };
    type FailState = {
        result: 'fail'; //
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!'
            }
        }
    };
    // printLoginState(state:LoginState)
    // 성공 시 -> body💓
    // 실패 시 -> reason💦
    function printLoginState(state: LoginState):void {
        if(state.result === 'success') {
            console.log(`${state.response.body}💓`)
        } else {
            console.log(`${state.reason}💦`)
        }
    }
}