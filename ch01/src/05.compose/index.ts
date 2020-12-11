import { compose } from "./compose";
import { h,g,f } from "./f-g-h";

const Compose = () => {
    const composedFGH = compose(h,g,f);
    console.log(composedFGH('x')) // h(g(f(x)))
}

export default Compose;

