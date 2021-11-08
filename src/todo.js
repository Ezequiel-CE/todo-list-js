class Todos {
  constructor(title, description, dueDate, num) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    //this.priority = priority;
    this.checked = false;
    this.num = num;
  }

  finished() {
    this.checked = !this.checked;
  }

  changeName(name) {
    this.name = name;
  }

  changeDescription(description) {
    this.description = description;
  }

  changeDate(date) {
    this.dueDate = date;
  }
}

export { Todos };
