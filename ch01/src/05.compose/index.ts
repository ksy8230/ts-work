import { compose } from "./compose";
import { h,g,f } from "./f-g-h";

const Compose = () => {
    const composedFGH = compose(h,g,f);
    console.log(composedFGH('x')) // h(g(f(x)))
    
    // compose 에서 (...functions: readonly Function[]): Function 부분이 해소된 1차 함수가 됩니다. 즉
    // composeFGH는 <T>(x:T): T => {...} 형태의 1차함수입니다.
    const inc = x => x + 1;
    const composed = compose(inc, inc, inc);
    console.log(composed(1))
}

export default Compose;

