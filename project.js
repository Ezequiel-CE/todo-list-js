import { Todos } from "./todo";

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todos = [];
  }

  addTodo() {
    const newtod = new Todos("CAR", "hcer caca", "20-15-12", "high");
    this.todos.push(newtod);
  }
}

// const project1 = new Project("project1", "hacer cachina");
