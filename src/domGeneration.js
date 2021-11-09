import { controller } from "./proyectController";
import trashIcon from "./resource/trash.png";
import dropIcon from "./resource/chevron-down-outline.svg";
import upIco from "./resource/chevron-up-outline.svg";

const domGenerator = function () {
  const allProjectElements = [];

  const createTodo = function (project, todo, todoContainer = null) {
    let html = `
    <div class="todo">
      <div class="front-todo">
        <input type="checkbox" />
        <p class="todo-name">${todo.title}</p>
        <input class="todo-title-change hide"  type="text" />
      </div>
      <div class="back-todo">
        <p class="todo-date">${todo.dueDate}</p>
        <input class="todo-date-change hide"  type="date" value="2021-11-04" min="1966-01-01" max="2025-12-31" />
        <img class="drop" src="${dropIcon}" alt="icon-drop" />
        <img class="todo-trash" src="${trashIcon}" alt="icon-trash" />
      </div>
    </div>
    <div class="description hide">
    <h2 class="tittle-des">Description</h2>
    <p class="text-des" >${todo.description}</p>
    <input class="todo-description-change hide"  type="text" />
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

    //modificar titulo del todos
    modifyTodoTittle(newTodo, todo);

    //modificar la description
    modifyTodoDescription(newTodo, todo);

    //modificar date
    modifyTodoDate(newTodo, todo);

    //si existe lo pega en el elemento que pasemos
    if (todoContainer) {
      todoContainer.appendChild(newTodo);
      return;
    }
    document.querySelector(".todos-container").appendChild(newTodo);
  };

  const modifyTodoDate = function (todoEl, todo) {
    const todoDate = todoEl.querySelector(".todo-date");
    const inputEL = todoEl.querySelector(".todo-date-change");
    todoDate.addEventListener("click", () => {
      todoDate.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        todoDate.textContent = e.target.value;
        todo.changeDate(e.target.value);
        //actualiza store cuando cambia fecha
        localStorage.setItem("Projects", JSON.stringify(controller.projects));

        todoDate.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const modifyTodoDescription = function (todoEl, todo) {
    const todoDescription = todoEl.querySelector(".text-des");
    const inputEL = todoEl.querySelector(".todo-description-change");
    todoDescription.addEventListener("click", () => {
      todoDescription.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        todoDescription.textContent = e.target.value;
        todo.changeDescription(e.target.value);
        //actualiza store cuando descripcion
        localStorage.setItem("Projects", JSON.stringify(controller.projects));

        todoDescription.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const modifyTodoTittle = function (todoEl, todo) {
    const tittleTodo = todoEl.querySelector(".todo-name");
    const inputEL = todoEl.querySelector(".todo-title-change");
    tittleTodo.addEventListener("click", () => {
      tittleTodo.classList.add("hide");
      inputEL.classList.remove("hide");
    });

    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        tittleTodo.textContent = e.target.value;
        todo.changeName(e.target.value);
        //actualiza store cuando descripcion
        localStorage.setItem("Projects", JSON.stringify(controller.projects));

        tittleTodo.classList.remove("hide");
        inputEL.classList.add("hide");
      }
    });
  };

  const displayTodoDescription = function (newTodo) {
    const descriptionEl = newTodo.querySelector(".description");
    const dropIco = newTodo.querySelector(".drop");
    if (descriptionEl.classList.contains("hide")) {
      descriptionEl.classList.remove("hide");
      dropIco.src = upIco;
    } else {
      descriptionEl.classList.add("hide");
      dropIco.src = dropIcon;
    }
  };

  const finishedTodoHandler = (todo, newT) => {
    todo.finished();
    if (todo.checked) {
      newT.classList.add("finished");
    } else {
      newT.classList.remove("finished");
    }
    //actualiza store cuando cambia el check
    localStorage.setItem("Projects", JSON.stringify(controller.projects));
  };

  const deleteTodoHandler = function (e, project) {
    if (project.todos.length === 0) return;
    const TodoEl = e.target.closest(".full-todo");
    project.deleteTodo(TodoEl.dataset.num);
    document.querySelector(".todos-container").removeChild(TodoEl);
    //actualiza el local storage
    localStorage.setItem("Projects", JSON.stringify(controller.projects));
  };

  const createProjectContent = function (project) {
    let html = `
    <div class="project-display">
      <h2 class="display-tittle">${project.name}</h2>
      <input class="title-change hide"  type="text" />
      <p class="display-description">
        ${project.description}
      </p>
      <div class="separator"></div>
      <div class="todos-container">
      
      </div>
      <span class="add-todo">+</span>
      <!-- form -->
      <form class="form hide" id="form-todo">
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
      //
    });

    //agrega crea el todo
    const formTodo = newProject.querySelector("#form-todo");
    formTodo.addEventListener("submit", (e) => {
      const addBtn = newProject.querySelector(".add-todo");
      addTodoHandler(e, project);
      addBtn.classList.remove("hide");
      formTodo.classList.add("hide");
      formTodo.reset();
    });

    //edita titulo
    const titleEl = newProject.querySelector(".display-tittle");
    titleEl.addEventListener("click", () => {
      editProjectTittle(newProject, titleEl, project);
    });

    //muestra form
    displayForm(newProject, formTodo);

    // //agrega al storage los proyectos
    localStorage.setItem("Projects", JSON.stringify(controller.projects));

    document.querySelector(".app-container").appendChild(newProject);
  };

  const displayForm = function (projectEl, formEL) {
    const addBtn = projectEl.querySelector(".add-todo");
    addBtn.addEventListener("click", () => {
      formEL.classList.remove("hide");
      addBtn.classList.add("hide");
    });
  };

  const editProjectTittle = function (project, tittle, projectObj) {
    const inputEL = project.querySelector(".title-change");
    tittle.classList.add("hide");
    inputEL.classList.remove("hide");
    inputEL.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        tittle.textContent = e.target.value;
        projectObj.modifyTittle(e.target.value);
        const labelOfProject = [
          ...document.querySelectorAll(".project-el"),
        ].find((label) => label.dataset.num === project.dataset.num);
        labelOfProject.children[0].textContent = e.target.value;
        tittle.classList.remove("hide");
        inputEL.classList.add("hide");
        //actualiza store cuando cambia nombre
        localStorage.setItem("Projects", JSON.stringify(controller.projects));
      }
    });
  };

  //////create a todo hadle

  const addTodoHandler = function (e, project) {
    e.preventDefault();
    const titleData = document.getElementById("title-todo").value;
    const descriptionData = document.getElementById("todo-description").value;
    const dateData = document.getElementById("date-todo").value;

    //crea y deviel el nuevo todo
    const newTodo = project.createTodo(titleData, descriptionData, dateData);
    createTodo(project, newTodo);
    //actualiza el storage al crear un todo
    localStorage.setItem("Projects", JSON.stringify(controller.projects));
  };

  //// modificar nombre projecto

  const createProjectLabel = function (project) {
    let html = `
      <p class="project-name">${project.name}</p>
      <img src="${trashIcon}" alt="trash" />
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

  const example = function () {
    const examplePro = controller.createProject(
      "Example",
      "Example description"
    );

    examplePro.createTodo("example1", "description", "any date");
    examplePro.createTodo("example2", "description", "any date");

    localStorage.setItem("Projects", JSON.stringify([examplePro]));

    createProjectContent(examplePro);
    createProjectLabel(examplePro);
  };

  const init = function () {
    lookForStorage();

    const formProject = document.querySelector("#form-project");
    const btnProject = document.querySelector(".add-project");
    formProject.addEventListener("submit", (e) => {
      e.preventDefault();
      const titleName = document.getElementById("title-project").value;
      const description = document.getElementById("project-description").value;
      //crea el objeto y lo guarda en una variable
      const newProject = controller.createProject(titleName, description);

      generateNewProjectAndChange(newProject);
      formProject.classList.add("hide");
      btnProject.classList.remove("hide");

      formProject.reset();
    });

    btnProject.addEventListener("click", () => {
      btnProject.classList.add("hide");
      formProject.classList.remove("hide");
    });
  };

  //se fija si existe un local storage
  const lookForStorage = () => {
    if (localStorage.getItem("Projects")) {
      const projectStorage = JSON.parse(localStorage.getItem("Projects"));
      projectStorage.forEach((project) => {
        //crea los objetos con los metodos necesarios

        const objWithMethods = controller.createProject(
          project.name,
          project.description
        );
        //pega nuevamente los valores
        objWithMethods.todoNum = project.todoNum;
        objWithMethods.todos = project.todos;
        //agrega nuevamente los metodos a los todos del objeto
        objWithMethods.todos.forEach((todo, i) => {
          const todoWithMetods = objWithMethods.giveMethodOfTodo(
            todo.title,
            todo.description,
            todo.dueDate,
            todo.num
          );
          objWithMethods.todos[i] = todoWithMetods;
        });

        generateNewProjectAndChange(objWithMethods);
      });
      // //hace que siempre se ponga el examples
      // changeDisplayContent(projectStorage[0]);
    } else {
      example();
    }
  };

  return {
    createTodo,
    createProjectContent,
    createProjectLabel,
    generateNewProjectAndChange,
    example,
    init,
  };
};

export { domGenerator };
