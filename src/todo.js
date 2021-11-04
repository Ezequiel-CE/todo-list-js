class Todos {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    //this.priority = priority;
    this.checked = false;
  }

  finished() {
    this.checked = true;
  }
}

export { Todos };
