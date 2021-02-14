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
 * 지정한 타입에서 필요한 것만 타입을 빼와서 지정해 주고 싶을 때 Partial 타입 이용
 */
