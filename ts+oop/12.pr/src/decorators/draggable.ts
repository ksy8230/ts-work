import { Component } from '../components/base';
import { Draggable } from '../components/common/type';

type GConstructor<T = {}> = {
  new (...args: any[]): T;
};
type DraggableClass = GConstructor<Component & Draggable>;

/**
 * EnableDragging 데코레이터 함수는 드래깅을 가능하게 해 주는 함수이므로
 * 아무런 클래스나 되는 것이 아니라 DraggableClass 클래스에서만 가능하다
 *
 * DraggableClass 클래스 타입은 Component이면서 Draggable한 타입을 갖는다
 */
export function EnableDragging<TBase extends DraggableClass>(Base: TBase): TBase {
  return class DraggableItem extends Base {
    constructor(...args: any[]) {
      // 기존의 클래스 생성자를 그대로 호출
      super(...args);
      // 이 클래스의 this에 registerEventListener 를 이용해서 dragstart 시 이 클래스의 onDragStart 이벤트 호출
      this.registerEventListener('dragstart', (event: DragEvent) => {
        this.onDragStart(event);
      });
      this.registerEventListener('dragend', (event: DragEvent) => {
        this.onDragEnd(event);
      });
    }
  };
}
