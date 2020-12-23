export interface ISquare {tag: 'square', size: number}
export interface IRectangle {tag: 'rectangle', width: number, height:number}
export interface ICircle {tag: 'circle', radius: number}
// 식별 합집합 구문을 사용하려면 합집합 타입을 구성하는 인터페이스들이 같은 속성을 갖고 있어야 한다
export type IShape = ISquare | IRectangle | ICircle;
