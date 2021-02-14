{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    // todo.title = 'jaja'; // 매개변수 타입이 readonly이기 때문에 수정이 불가능하다
  }
}
