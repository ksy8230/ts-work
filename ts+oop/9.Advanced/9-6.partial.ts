{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return {
      ...todo,
      ...fieldsToUpdate,
    };
  }

  const todo: Todo = {
    title: 'learn typescript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}

/**
 * 지정한 타입의 모든 키가 선택사항으로 적용이 된다
 * 특정 키가 필수적이지 않고 제한 사항이 없을 때 유용하다
 */
