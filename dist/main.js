/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domGeneration.js":
/*!******************************!*\
  !*** ./src/domGeneration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domGenerator": () => (/* binding */ domGenerator)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _proyectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyectController */ "./src/proyectController.js");



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
      <input class="title-change hide"  type="text" />
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

    //edita titulo
    const titleEl = newProject.querySelector(".display-tittle");
    titleEl.addEventListener("click", () => {
      editProjectTittle(newProject, titleEl, project);
    });

    document.querySelector(".app-container").appendChild(newProject);
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
      }
    });
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
    let indexOfDeletedProject = _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.getIndexProjects(
      labelProyect.dataset.num
    );
    _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.DeleteProject(labelProyect.dataset.num);
    deleteLabel(labelProyect);
    //condicion para que no siga borrando si no hay proyectos
    if (_proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.projects.length === 0) {
      document.querySelector(".todo-section").innerHTML = "";
      return;
    }
    //evita que se rompa al borrar example quedando otro projecto
    if (indexOfDeletedProject === 0) {
      changeDisplayContent(_proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.projects[indexOfDeletedProject]);
      return;
    }
    changeDisplayContent(_proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.projects[indexOfDeletedProject - 1]);
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




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project {
  constructor(name, description, projecNum) {
    this.name = name;
    this.description = description;
    this.num = projecNum;
    this.todos = [];
    this.todoNum = 0;
  }

  createTodo(title, description, data) {
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todos(title, description, data, this.todoNum++);
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




/***/ }),

/***/ "./src/proyectController.js":
/*!**********************************!*\
  !*** ./src/proyectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const controller = (function () {
  let projectNum = 0;

  const projects = [];

  const createProject = (name, description) => {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(name, description, projectNum);
    //aumenta el numero en la instancia ya creada
    projectNum++;
    projects.push(project);
    return project;
  };

  //muesta el proyecto al hacer click en la label
  const displayProject = () => {
    generator.createProject(projects[0]);
  };

  const DeleteProject = (projectNumber) => {
    projects.splice(getIndexProjects(projectNumber), 1);
  };

  //devuelve el index del elemento que queremos
  const getIndexProjects = (projectNumber) => {
    const projectIndex = projects.findIndex(
      (pro) => pro.num === parseInt(projectNumber)
    );

    return projectIndex;
  };
  const modifyProject = () => {};

  return {
    createProject,
    displayProject,
    projects,
    DeleteProject,
    getIndexProjects,
  };
})();




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todos": () => (/* binding */ Todos)
/* harmony export */ });
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
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domGeneration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domGeneration */ "./src/domGeneration.js");
/* harmony import */ var _proyectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proyectController */ "./src/proyectController.js");



const contentGenerator = (0,_domGeneration__WEBPACK_IMPORTED_MODULE_0__.domGenerator)();

const example = function () {
  const examplePro = _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.createProject("Example", "Example description");

  examplePro.createTodo("example1", "description", "any date");
  examplePro.createTodo("example2", "description", "any date");

  contentGenerator.createProjectContent(examplePro);
  contentGenerator.createProjectLabel(examplePro);
};

example();

document.querySelector("#add-box-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const titleName = document.getElementById("title-project").value;
  const description = document.getElementById("project-description").value;
  //crea el objeto y lo guarda en una variable
  const newProject = _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.createProject(titleName, description);
  contentGenerator.generateNewProjectAndChange(newProject);

  //   if (document.querySelector(".todo-section")) {
  //     const projectEl = document.querySelector(".todo-section");
  //     document.querySelector(".app-container").removeChild(projectEl);
  //   }
  //   contentGenerator.createProjectContent(newProject);
  //   contentGenerator.createProjectLabel(newProject);
  //   console.log(projectManager.projects, newProject);
});

// const todoController = controller();

// document.querySelector(".project-el").addEventListener("click", () => {
//   todoController.createProject();
//   todoController.displayProject();
// });

// const getTodoData = (e) => {
//   e.preventDefault();

//   //form data
//   const titleData = document.getElementById("title-todo").value;
//   const descriptionData = document.getElementById("todo-description").value;
//   const dateData = document.getElementById("date-todo").value;

//   const newTodo = new Todos(titleData, descriptionData, dateData);
//   defaultProject.addTodo(newTodo);

//   generator.createTodo(newTodo);
//   console.log(defaultProject);
//   form.reset();
// };

// //form.addEventListener("submit", getTodoData);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0N0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCOzs7Ozs7O1VDZmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0U7O0FBRWpELHlCQUF5Qiw0REFBWTs7QUFFckM7QUFDQSxxQkFBcUIsd0VBQXdCOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdFQUF3QjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tR2VuZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJveWVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL3Byb3llY3RDb250cm9sbGVyXCI7XG5cbmNvbnN0IGRvbUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uIChwcm9qZWN0LCB0b2RvLCB0b2RvQ29udGFpbmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0b2RvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZnJvbnQtdG9kb1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPHAgY2xhc3M9XCJ0b2RvLW5hbWVcIj4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmFjay10b2RvXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidG9kby1kYXRlXCI+JHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICA8aW1nIGNsYXNzPVwiZHJvcFwiIHNyYz1cIi4uL3NyYy9yZXNvdXJjZS9jaGV2cm9uLWRvd24tb3V0bGluZS5zdmdcIiBhbHQ9XCJpY29uLWRyb3BcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzPVwidG9kby10cmFzaFwiIHNyYz1cIi4uL3NyYy9yZXNvdXJjZS90cmFzaC5wbmdcIiBhbHQ9XCJpY29uLXRyYXNoXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbiBoaWRlXCI+XG4gICAgPGgyIGNsYXNzPVwidGl0dGxlLWRlc1wiPkRlc2NyaXB0aW9uPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtZGVzXCIgPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgPC9kaXY+XG4gICAgXG4gIGA7XG5cbiAgICBjb25zdCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJmdWxsLXRvZG9cIik7XG4gICAgbmV3VG9kby5pbm5lckhUTUwgPSBodG1sO1xuICAgIG5ld1RvZG8uc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgdG9kby5udW0pO1xuXG4gICAgLy9kZWxldGUgdG9kb3NcbiAgICBjb25zdCB0cmFzaEljb1RvZG8gPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10cmFzaFwiKTtcbiAgICB0cmFzaEljb1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBkZWxldGVUb2RvSGFuZGxlcihlLCBwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vY29tcGxldGEgdG9kb3NcbiAgICBjb25zdCBjaGVja0JveCA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgZmluaXNoZWRUb2RvSGFuZGxlcih0b2RvLCBuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIC8vYWJyZSBkZXNjcmlwdGlvblxuICAgIGNvbnN0IGRyb3BEZXNjcmlwdGlvbiA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi5kcm9wXCIpO1xuICAgIGRyb3BEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVRvZG9EZXNjcmlwdGlvbihuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIC8vc2kgZXhpc3RlIGxvIHBlZ2EgZW4gZWwgZWxlbWVudG8gcXVlIHBhc2Vtb3NcbiAgICBpZiAodG9kb0NvbnRhaW5lcikge1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRvZG9EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uIChuZXdUb2RvKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25FbCA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbiAgICBjb25zdCBkcm9wSWNvID0gbmV3VG9kby5xdWVyeVNlbGVjdG9yKFwiLmRyb3BcIik7XG4gICAgaWYgKGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgZGVzY3JpcHRpb25FbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgIGRyb3BJY28uc3JjID0gXCIuLi9zcmMvcmVzb3VyY2UvY2hldnJvbi11cC1vdXRsaW5lLnN2Z1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgZHJvcEljby5zcmMgPSBcIi4uL3NyYy9yZXNvdXJjZS9jaGV2cm9uLWRvd24tb3V0bGluZS5zdmdcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluaXNoZWRUb2RvSGFuZGxlciA9ICh0b2RvLCBuZXdUKSA9PiB7XG4gICAgdG9kby5maW5pc2hlZCgpO1xuICAgIGlmICh0b2RvLmNoZWNrZWQpIHtcbiAgICAgIG5ld1QuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdULmNsYXNzTGlzdC5yZW1vdmUoXCJmaW5pc2hlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kb0hhbmRsZXIgPSBmdW5jdGlvbiAoZSwgcHJvamVjdCkge1xuICAgIGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IFRvZG9FbCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIuZnVsbC10b2RvXCIpO1xuICAgIHByb2plY3QuZGVsZXRlVG9kbyhUb2RvRWwuZGF0YXNldC5udW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKFRvZG9FbCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdENvbnRlbnQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXlcIj5cbiAgICAgIDxoMiBjbGFzcz1cImRpc3BsYXktdGl0dGxlXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInRpdGxlLWNoYW5nZSBoaWRlXCIgIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAke3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9kb3MtY29udGFpbmVyXCI+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGQtcHJvamVjdFwiPis8L3NwYW4+XG4gICAgICA8IS0tIGZvcm0gLS0+XG4gICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cImZvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZS10b2RvXCI+VG9kbyBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwidGl0bGUtdG9kb1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b2RvLWRlc2NyaXB0aW9uXCI+VG9kbyBkZXNjaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0b2RvLWRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1pbnB1dFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLXRvZG9cIj5EYXRlIHRvZG88L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJkYXRlLXRvZG9cIlxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9XCIyMDIxLTExLTA0XCJcbiAgICAgICAgICAgIG1pbj1cIjE5NjYtMDEtMDFcIlxuICAgICAgICAgICAgbWF4PVwiMjAyNS0xMi0zMVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cImFkZC10b2RvLWJ0blwiPkFkZCBhIHRvZG88L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlY3Rpb25cIik7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBwcm9qZWN0Lm51bSk7XG4gICAgbmV3UHJvamVjdC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgLy9hZ3JlZ2EgbG9zIHRvZG9zIGFsIGRpc3BsYXlcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgdG9kbywgdG9kb0NvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvL2FncmVnYSBjcmVhIGVsIHRvZG9cbiAgICBjb25zdCBmb3JtQnRuVG9kbyA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIiNhZGQtdG9kby1idG5cIik7XG4gICAgZm9ybUJ0blRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBhZGRUb2RvSGFuZGxlcihlLCBwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vZWRpdGEgdGl0dWxvXG4gICAgY29uc3QgdGl0bGVFbCA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LXRpdHRsZVwiKTtcbiAgICB0aXRsZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBlZGl0UHJvamVjdFRpdHRsZShuZXdQcm9qZWN0LCB0aXRsZUVsLCBwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdFRpdHRsZSA9IGZ1bmN0aW9uIChwcm9qZWN0LCB0aXR0bGUsIHByb2plY3RPYmopIHtcbiAgICBjb25zdCBpbnB1dEVMID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNoYW5nZVwiKTtcbiAgICB0aXR0bGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgaW5wdXRFTC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICBpbnB1dEVMLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICB0aXR0bGUudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgcHJvamVjdE9iai5tb2RpZnlUaXR0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBsYWJlbE9mUHJvamVjdCA9IFtcbiAgICAgICAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZWxcIiksXG4gICAgICAgIF0uZmluZCgobGFiZWwpID0+IGxhYmVsLmRhdGFzZXQubnVtID09PSBwcm9qZWN0LmRhdGFzZXQubnVtKTtcbiAgICAgICAgbGFiZWxPZlByb2plY3QuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGl0dGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICBpbnB1dEVMLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vLy8vL2NyZWF0ZSBhIHRvZG8gaGFkbGVcblxuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9IGZ1bmN0aW9uIChlLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIC8vY3JlYSB5IGRldmllbCBlbCBudWV2byB0b2RvXG4gICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgbmV3VG9kbyk7XG4gIH07XG5cbiAgLy8vLyBtb2RpZmljYXIgbm9tYnJlIHByb2plY3RvXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdExhYmVsID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgPGltZyBzcmM9XCIuLi9zcmMvcmVzb3VyY2UvdHJhc2gucG5nXCIgYWx0PVwidHJhc2hcIiAvPlxuICAgIGA7XG4gICAgLy9jcmVhIGxhYmVsIHkgbGEgcGVnYSBlbiBsb3MgZWplbWxvc1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lbFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHByb2plY3QubnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXIgcGFyYSBjYW1iaWFyIGVsIHByb3llY3RvIGFsIGhhY2VyIGNsaWNrIGVuIGxhYmVsXG4gICAgY29uc3QgTGFiZWxOYW1lID0gbGFiZWwucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gICAgTGFiZWxOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VEaXNwbGF5Q29udGVudChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vYm9ycmFyIGVsIHByb3llY3RvXG4gICAgY29uc3QgdHJhc2hJY28gPSBsYWJlbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIHRyYXNoSWNvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0SGFuZGxlcik7XG4gIH07XG5cbiAgLy9ib3JyYXIgcHJvamVjdCBoYW5kbGVyIGV2ZW50XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBsYWJlbFByb3llY3QgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtZWxcIik7XG4gICAgLy9lbmN1ZW50cmEgaW5kZXggZGVsIHByb2plY3RvIHkgbG8gYm9ycmFyIGRlbCBhcnJcbiAgICBsZXQgaW5kZXhPZkRlbGV0ZWRQcm9qZWN0ID0gY29udHJvbGxlci5nZXRJbmRleFByb2plY3RzKFxuICAgICAgbGFiZWxQcm95ZWN0LmRhdGFzZXQubnVtXG4gICAgKTtcbiAgICBjb250cm9sbGVyLkRlbGV0ZVByb2plY3QobGFiZWxQcm95ZWN0LmRhdGFzZXQubnVtKTtcbiAgICBkZWxldGVMYWJlbChsYWJlbFByb3llY3QpO1xuICAgIC8vY29uZGljaW9uIHBhcmEgcXVlIG5vIHNpZ2EgYm9ycmFuZG8gc2kgbm8gaGF5IHByb3llY3Rvc1xuICAgIGlmIChjb250cm9sbGVyLnByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9ldml0YSBxdWUgc2Ugcm9tcGEgYWwgYm9ycmFyIGV4YW1wbGUgcXVlZGFuZG8gb3RybyBwcm9qZWN0b1xuICAgIGlmIChpbmRleE9mRGVsZXRlZFByb2plY3QgPT09IDApIHtcbiAgICAgIGNoYW5nZURpc3BsYXlDb250ZW50KGNvbnRyb2xsZXIucHJvamVjdHNbaW5kZXhPZkRlbGV0ZWRQcm9qZWN0XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNoYW5nZURpc3BsYXlDb250ZW50KGNvbnRyb2xsZXIucHJvamVjdHNbaW5kZXhPZkRlbGV0ZWRQcm9qZWN0IC0gMV0pO1xuICB9O1xuXG4gIC8vYm9ycmFyIGxhYmVsXG5cbiAgY29uc3QgZGVsZXRlTGFiZWwgPSAobGFiZWwpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxhYmVsKTtcbiAgfTtcblxuICAvL3NvbG8gY2FtYmlhIGVsIHByb3llY3RvXG4gIGNvbnN0IGNoYW5nZURpc3BsYXlDb250ZW50ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgLy9zaSBleGlzdGUgbG8gcmVtdWV2ZSB5IGNvbG9jYSBlbCBudWV2b1xuICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQocHJvamVjdEVsKTtcbiAgICB9XG4gICAgY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCk7XG4gIH07XG5cbiAgLy9jcmVhIHkgY2FtYmlhIGVsIHByb3llY3RvXG4gIGNvbnN0IGdlbmVyYXRlTmV3UHJvamVjdEFuZENoYW5nZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIC8vc2kgZXhpc3RlIGxvIHJlbXVldmUgeSBjb2xvY2EgZWwgbnVldm9cbiAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gICAgfVxuICAgIC8vY3JlYSBsYWJlbCB5IGNvbnRlbmlkbyBxdWVsIG8gbWV0ZSBlbiBhcnJheVxuICAgIGFsbFByb2plY3RFbGVtZW50cy5wdXNoKGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpKTtcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwocHJvamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUb2RvLFxuICAgIGNyZWF0ZVByb2plY3RDb250ZW50LFxuICAgIGNyZWF0ZVByb2plY3RMYWJlbCxcbiAgICBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UsXG4gIH07XG59O1xuXG5leHBvcnQgeyBkb21HZW5lcmF0b3IgfTtcbiIsImltcG9ydCB7IFRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY051bSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMubnVtID0gcHJvamVjTnVtO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB0aGlzLnRvZG9OdW0gPSAwO1xuICB9XG5cbiAgY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEpIHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0YSwgdGhpcy50b2RvTnVtKyspO1xuICAgIHRoaXMudG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICByZXR1cm4gbmV3VG9kbztcbiAgfVxuXG4gIGRlbGV0ZVRvZG8odG9kb051bSkge1xuICAgIHRoaXMudG9kb3Muc3BsaWNlKHRoaXMuZ2V0SW5kZXhUb2RvKHRvZG9OdW0pLCAxKTtcbiAgfVxuXG4gIGdldEluZGV4VG9kbyA9ICh0b2RvTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoXG4gICAgICAodG9kbykgPT4gdG9kby5udW0gPT09IHBhcnNlSW50KHRvZG9OdW1iZXIpXG4gICAgKTtcblxuICAgIHJldHVybiB0b2RvSW5kZXg7XG4gIH07XG5cbiAgbW9kaWZ5VGl0dGxlKG5ld1RpdHRsZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld1RpdHRsZTtcbiAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3ROdW0gPSAwO1xuXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdE51bSk7XG4gICAgLy9hdW1lbnRhIGVsIG51bWVybyBlbiBsYSBpbnN0YW5jaWEgeWEgY3JlYWRhXG4gICAgcHJvamVjdE51bSsrO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgLy9tdWVzdGEgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGEgbGFiZWxcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgZ2VuZXJhdG9yLmNyZWF0ZVByb2plY3QocHJvamVjdHNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IERlbGV0ZVByb2plY3QgPSAocHJvamVjdE51bWJlcikgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShnZXRJbmRleFByb2plY3RzKHByb2plY3ROdW1iZXIpLCAxKTtcbiAgfTtcblxuICAvL2RldnVlbHZlIGVsIGluZGV4IGRlbCBlbGVtZW50byBxdWUgcXVlcmVtb3NcbiAgY29uc3QgZ2V0SW5kZXhQcm9qZWN0cyA9IChwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHBybykgPT4gcHJvLm51bSA9PT0gcGFyc2VJbnQocHJvamVjdE51bWJlcilcbiAgICApO1xuXG4gICAgcmV0dXJuIHByb2plY3RJbmRleDtcbiAgfTtcbiAgY29uc3QgbW9kaWZ5UHJvamVjdCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBkaXNwbGF5UHJvamVjdCxcbiAgICBwcm9qZWN0cyxcbiAgICBEZWxldGVQcm9qZWN0LFxuICAgIGdldEluZGV4UHJvamVjdHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb250cm9sbGVyIH07XG4iLCJjbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbnVtKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIC8vdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMubnVtID0gbnVtO1xuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZDtcbiAgfVxufVxuXG5leHBvcnQgeyBUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkb21HZW5lcmF0b3IgfSBmcm9tIFwiLi9kb21HZW5lcmF0aW9uXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vcHJveWVjdENvbnRyb2xsZXJcIjtcblxuY29uc3QgY29udGVudEdlbmVyYXRvciA9IGRvbUdlbmVyYXRvcigpO1xuXG5jb25zdCBleGFtcGxlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBleGFtcGxlUHJvID0gY29udHJvbGxlci5jcmVhdGVQcm9qZWN0KFwiRXhhbXBsZVwiLCBcIkV4YW1wbGUgZGVzY3JpcHRpb25cIik7XG5cbiAgZXhhbXBsZVByby5jcmVhdGVUb2RvKFwiZXhhbXBsZTFcIiwgXCJkZXNjcmlwdGlvblwiLCBcImFueSBkYXRlXCIpO1xuICBleGFtcGxlUHJvLmNyZWF0ZVRvZG8oXCJleGFtcGxlMlwiLCBcImRlc2NyaXB0aW9uXCIsIFwiYW55IGRhdGVcIik7XG5cbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0Q29udGVudChleGFtcGxlUHJvKTtcbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0TGFiZWwoZXhhbXBsZVBybyk7XG59O1xuXG5leGFtcGxlKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJveC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1wcm9qZWN0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgLy9jcmVhIGVsIG9iamV0byB5IGxvIGd1YXJkYSBlbiB1bmEgdmFyaWFibGVcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZU5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgY29udGVudEdlbmVyYXRvci5nZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UobmV3UHJvamVjdCk7XG5cbiAgLy8gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIikpIHtcbiAgLy8gICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdENvbnRlbnQobmV3UHJvamVjdCk7XG4gIC8vICAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0TGFiZWwobmV3UHJvamVjdCk7XG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIucHJvamVjdHMsIG5ld1Byb2plY3QpO1xufSk7XG5cbi8vIGNvbnN0IHRvZG9Db250cm9sbGVyID0gY29udHJvbGxlcigpO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgdG9kb0NvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgpO1xuLy8gICB0b2RvQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdCgpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IGdldFRvZG9EYXRhID0gKGUpID0+IHtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgIC8vZm9ybSBkYXRhXG4vLyAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbi8vICAgY29uc3QgZGVzY3JpcHRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuLy8gICBjb25zdCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS10b2RvXCIpLnZhbHVlO1xuXG4vLyAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kb3ModGl0bGVEYXRhLCBkZXNjcmlwdGlvbkRhdGEsIGRhdGVEYXRhKTtcbi8vICAgZGVmYXVsdFByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcblxuLy8gICBnZW5lcmF0b3IuY3JlYXRlVG9kbyhuZXdUb2RvKTtcbi8vICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuLy8gICBmb3JtLnJlc2V0KCk7XG4vLyB9O1xuXG4vLyAvL2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRUb2RvRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=