import { Success } from "../classes/Success";
import { Failure } from "../classes/Failure";

export const checkNull = <S, F>(o: {password?: string}) => {
    const {password} = o;
    return (password == undefined || typeof password != 'string') ? 
    new Failure(['비밀번호는 빈값일 수 없습니다']) : new Success(o)
}
