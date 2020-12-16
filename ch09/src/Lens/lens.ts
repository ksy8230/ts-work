import * as R from 'ramda';

// 렌즈 만들기
type ILens =  (propName: string) => R.Lens;
export const makeLens:ILens = (propName: string) => R.lens(R.prop(propName), R.assoc(propName));

export const getter = (lens) => R.view(lens);
export const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue);
export const setterUsingFunc = (lens) => <T, R>(func: (T) => R) => R.over(lens, func);