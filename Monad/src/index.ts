import { Identity } from "./classes/Identity";

const one = new Identity(1);
const two = new Identity(2);
console.log(
    one.equals(two), // false
    one, // Identity { _value: 1 }
    one.value(), // 1
    one.equals(null)
)