() => {
    /**
     * Union Types: OR
     */

     type Direction = 'left' | 'right' | 'up' | 'down';
     function move(direction: Direction) {
         console.log(direction)
     }
     move('down') // Direction 에 지정된 타입의 string만 가능

     // Union 예제
     type SuccessState = {
         response: {
             body: string;
         }
     };
     type FailState = {
         reason: string;
     };

     type LoginState = SuccessState | FailState;

     function login(): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        }
     };
     // printLoginState(state:LoginState)
     // 성공 시 -> body
     // 실패 시 -> reason
     function printLoginState(state: LoginState):void {
        if('response' in state) {
            console.log(`${state.response.body}`)
        } else {
            console.log(`${state.reason}`)
        }
     }

}