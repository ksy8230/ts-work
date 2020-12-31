import { Validation } from "./classes/Validation"
import { checkLength } from "./utils/checkLength"
import { checkNull } from "./utils/checkNull"

// checkNull, checkLength가 모두 Success 타입 객체를 반환하는지 판별
export const checkPassword = (o): [object, string[]] => {
    const result = Validation.of(a => b => o)
        .ap(checkNull(o))
        .ap(checkLength(o));
        console.log('checkPassword=', result);
    
    return result.isSuccess ? [result.value, undefined] : [undefined, result.value]
}
