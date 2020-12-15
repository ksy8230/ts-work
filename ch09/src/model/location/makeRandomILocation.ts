import { makeRandomICoordinates } from "../coordinates";
import { makeILocation } from "./makeILocation";
import Chance from 'chance';
import { ILocation } from "./ILocation";

const c = new Chance;
export const makeRandomILocation = (): ILocation => makeILocation(c.country(), c.city(), c.address(), makeRandomICoordinates());