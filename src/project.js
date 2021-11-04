import { Todos } from "./todo";

class Project {
  constructor(name, description, projecNum) {
    this.name = name;
    this.description = description;
    this.projecNum = projecNum;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo() {}

  modifyTodo() {}
}

export { Project };
