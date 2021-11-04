const domGenerator = function () {
  const allProjectElements = [];

  const createTodo = function (todo) {
    let html = `
    <div class="front-todo">
      <input type="checkbox" />
      <p class="todo-name">${todo.title}</p>
    </div>
    <div class="back-todo">
      <p class="todo-date">${todo.dueDate}</p>
      <img src="../src/resource/trash.png" alt="icon-trash" />
    </div>
  `;

    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.innerHTML = html;
    document.querySelector(".todos-container").appendChild(newTodo);
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
        <div class="todo">
          <div class="front-todo">
            <input type="checkbox" />
            <p class="todo-name">Name todo</p>
          </div>
          <div class="back-todo">
            <p class="todo-date">3 months ago</p>
            <img src="../src/resource/trash.png" alt="icon-trash" />
          </div>
        </div>
        <div class="todo">
          <div class="front-todo">
            <input type="checkbox" />
            <p class="todo-name">Name todo</p>
          </div>
          <div class="back-todo">
            <p class="todo-date">3 months ago</p>
            <img src="../src/resource/trash.png" alt="icon-trash" />
          </div>
        </div>
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
        <button type="submit" id="add-box-btn">Add a todo</button>
      </form>
    </div>
  `;

    const newProject = document.createElement("main");
    newProject.classList.add("todo-section");
    newProject.setAttribute("data-num", project.projecNum);
    newProject.innerHTML = html;
    document.querySelector(".app-container").appendChild(newProject);
    console.log(newProject);
    allProjectElements.push(newProject);
  };

  const createProjectLabel = function (project) {
    let html = `
      <p class="project-name">${project.name}</p>
      <img src="../src/resource/trash.png" alt="trash" />
    `;
    //crea label y la pega en los ejemlos
    const label = document.createElement("div");
    label.classList.add("project-el");
    label.innerHTML = html;
    label.setAttribute("data-num", project.projecNum);
    document.querySelector(".project-container").appendChild(label);

    //event listener para cambiar el proyecto al hacer click en label
    label.addEventListener("click", () => {
      changeDisplayContent(project);
    });
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
    createProjectContent(project);
    createProjectLabel(project);
    console.log(project);
  };

  return {
    createTodo,
    createProjectContent,
    createProjectLabel,
    generateNewProjectAndChange,
  };
};

export { domGenerator };
