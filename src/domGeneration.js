import { Todos } from "./todo";
import { controller } from "./proyectController";

const domGenerator = function () {
  const allProjectElements = [];

  const createTodo = function (project, todo, todoContainer = null) {
    let html = `
    <div class="todo">
      <div class="front-todo">
        <input type="checkbox" />
        <p class="todo-name">${todo.title}</p>
      </div>
      <div class="back-todo">
        <p class="todo-date">${todo.dueDate}</p>
        <img class="drop" src="../src/resource/chevron-down-outline.svg" alt="icon-drop" />
        <img class="todo-trash" src="../src/resource/trash.png" alt="icon-trash" />
      </div>
    </div>
    <div class="description hide">
    <h2 class="tittle-des">Description</h2>
    <p class="text-des" >${todo.description}</p>
    </div>
    
  `;

    const newTodo = document.createElement("div");
    newTodo.classList.add("full-todo");
    newTodo.innerHTML = html;
    newTodo.setAttribute("data-num", todo.num);

    //delete todos
    const trashIcoTodo = newTodo.querySelector(".todo-trash");
    trashIcoTodo.addEventListener("click", (e) => {
      deleteTodoHandler(e, project);
    });

    //completa todos
    const checkBox = newTodo.querySelector("input");
    checkBox.addEventListener("change", () => {
      finishedTodoHandler(todo, newTodo);
    });

    //abre description
    const dropDescription = newTodo.querySelector(".drop");
    dropDescription.addEventListener("click", () => {
      displayTodoDescription(newTodo);
    });

    //si existe lo pega en el elemento que pasemos
    if (todoContainer) {
      todoContainer.appendChild(newTodo);
      return;
    }
    document.querySelector(".todos-container").appendChild(newTodo);
  };

  const displayTodoDescription = function (newTodo) {
    const descriptionEl = newTodo.querySelector(".description");
    const dropIco = newTodo.querySelector(".drop");
    if (descriptionEl.classList.contains("hide")) {
      descriptionEl.classList.remove("hide");
      dropIco.src = "../src/resource/chevron-up-outline.svg";
    } else {
      descriptionEl.classList.add("hide");
      dropIco.src = "../src/resource/chevron-down-outline.svg";
    }
  };

  const finishedTodoHandler = (todo, newT) => {
    todo.finished();
    if (todo.checked) {
      newT.classList.add("finished");
    } else {
      newT.classList.remove("finished");
    }
  };

  const deleteTodoHandler = function (e, project) {
    if (project.todos.length === 0) return;
    const TodoEl = e.target.closest(".full-todo");
    project.deleteTodo(TodoEl.dataset.num);
    document.querySelector(".todos-container").removeChild(TodoEl);
  };

  const createProjectContent = function (project) {
    let html = `
    <div class="project-display">
      <h2 class="display-tittle">${project.name}</h2>
      <p class="display-description">
        ${project.description}
      </p>
      <div class="separator"></div>
      <div class="todos-container">
      
      </div>
      <span class="add-project">+</span>
      <!-- form -->
      <form class="form" id="form">
        <div class="container-input">
          <label for="title-todo">Todo Title</label>
          <input id="title-todo" type="text" required />
        </div>

        <div class="container-input">
          <label for="todo-description">Todo desciption</label>
          <input id="todo-description" type="text" required />
        </div>
        <div class="container-input">
          <label for="date-todo">Date todo</label>
          <input
            id="date-todo"
            type="date"
            value="2021-11-04"
            min="1966-01-01"
            max="2025-12-31"
            required
          />
        </div>
        <button type="submit" id="add-todo-btn">Add a todo</button>
      </form>
    </div>
  `;

    const newProject = document.createElement("main");
    newProject.classList.add("todo-section");
    newProject.setAttribute("data-num", project.num);
    newProject.innerHTML = html;

    //agrega los todos al display
    const todoContainer = newProject.querySelector(".todos-container");
    project.todos.forEach((todo) => {
      createTodo(project, todo, todoContainer);
    });

    //agrega crea el todo
    const formBtnTodo = newProject.querySelector("#add-todo-btn");
    formBtnTodo.addEventListener("click", (e) => {
      addTodoHandler(e, project);
    });

    document.querySelector(".app-container").appendChild(newProject);
  };

  //////create a todo hadle

  const addTodoHandler = function (e, project) {
    e.preventDefault();
    const titleData = document.getElementById("title-todo").value;
    const descriptionData = document.getElementById("todo-description").value;
    const dateData = document.getElementById("date-todo").value;
    console.log(titleData, descriptionData, dateData);
    //crea y deviel el nuevo todo
    const newTodo = project.createTodo(titleData, descriptionData, dateData);
    createTodo(project, newTodo);
  };

  //// modificar nombre projecto

  const createProjectLabel = function (project) {
    let html = `
      <p class="project-name">${project.name}</p>
      <img src="../src/resource/trash.png" alt="trash" />
    `;
    //crea label y la pega en los ejemlos
    const label = document.createElement("div");
    label.classList.add("project-el");
    label.innerHTML = html;
    label.setAttribute("data-num", project.num);
    document.querySelector(".project-container").appendChild(label);

    //event listener para cambiar el proyecto al hacer click en label
    const LabelName = label.querySelector(".project-name");
    LabelName.addEventListener("click", () => {
      changeDisplayContent(project);
    });

    //borrar el proyecto
    const trashIco = label.querySelector("img");
    trashIco.addEventListener("click", deleteProjectHandler);
  };

  //borrar project handler event
  const deleteProjectHandler = (e) => {
    const labelProyect = e.target.closest(".project-el");
    //encuentra index del projecto y lo borrar del arr
    let indexOfDeletedProject = controller.getIndexProjects(
      labelProyect.dataset.num
    );
    controller.DeleteProject(labelProyect.dataset.num);
    deleteLabel(labelProyect);
    //condicion para que no siga borrando si no hay proyectos
    if (controller.projects.length === 0) {
      document.querySelector(".todo-section").innerHTML = "";
      return;
    }
    //evita que se rompa al borrar example quedando otro projecto
    if (indexOfDeletedProject === 0) {
      changeDisplayContent(controller.projects[indexOfDeletedProject]);
      return;
    }
    changeDisplayContent(controller.projects[indexOfDeletedProject - 1]);
  };

  //borrar label

  const deleteLabel = (label) => {
    const projectContainer = document.querySelector(".project-container");
    projectContainer.removeChild(label);
  };

  //solo cambia el proyecto
  const changeDisplayContent = (project) => {
    const currentProject = document.querySelector(".todo-section");
    if (currentProject) {
      //si existe lo remueve y coloca el nuevo
      const projectEl = document.querySelector(".todo-section");
      document.querySelector(".app-container").removeChild(projectEl);
    }
    createProjectContent(project);
  };

  //crea y cambia el proyecto
  const generateNewProjectAndChange = (project) => {
    const currentProject = document.querySelector(".todo-section");
    if (currentProject) {
      //si existe lo remueve y coloca el nuevo
      const projectEl = document.querySelector(".todo-section");
      document.querySelector(".app-container").removeChild(projectEl);
    }
    //crea label y contenido quel o mete en array
    allProjectElements.push(createProjectContent(project));
    createProjectLabel(project);
  };

  return {
    createTodo,
    createProjectContent,
    createProjectLabel,
    generateNewProjectAndChange,
  };
};

export { domGenerator };
