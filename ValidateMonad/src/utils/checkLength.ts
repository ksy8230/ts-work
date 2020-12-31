import { Success } from "../classes/Success";
import { Failure } from "../classes/Failure";

export const checkLength = <S, F>(o: {password?: string}, minLength: number = 6) => {
    const {password} = o;
    return (!password || password.length < minLength) ? 
    new Failure(['비밀번호는 최소 6자리입니다']) : new Success(o)
}
