import { Todos } from "./todo";

class Project {
  constructor(name, description, projecNum) {
    this.name = name;
    this.description = description;
    this.num = projecNum;
    this.todos = [];
    this.todoNum = 0;
  }

  createTodo(title, description, data) {
    const newTodo = new Todos(title, description, data, this.todoNum++);
    this.todos.push(newTodo);
    return newTodo;
  }

  deleteTodo(todoNum) {
    this.todos.splice(this.getIndexTodo(todoNum), 1);
  }

  getIndexTodo = (todoNumber) => {
    const todoIndex = this.todos.findIndex(
      (todo) => todo.num === parseInt(todoNumber)
    );

    return todoIndex;
  };

  modifyTittle(newTittle) {
    this.name = newTittle;
  }
}

export { Project };
