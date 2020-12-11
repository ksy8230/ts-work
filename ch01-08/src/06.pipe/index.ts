import { pipe } from "./pipe";
import { h,g,f } from "../05.compose/f-g-h";

const Pipe = () => {
    const piped = pipe(h,g,f);
    console.log(piped('x'));
};

export default Pipe;
