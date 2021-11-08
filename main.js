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

  modifyTodo() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQjs7Ozs7OztVQ2ZqQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNFOztBQUVqRCx5QkFBeUIsNERBQVk7O0FBRXJDO0FBQ0EscUJBQXFCLHdFQUF3Qjs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3RUFBd0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUdlbmVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb3llY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm95ZWN0Q29udHJvbGxlclwiO1xuXG5jb25zdCBkb21HZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFsbFByb2plY3RFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAocHJvamVjdCwgdG9kbywgdG9kb0NvbnRhaW5lciA9IG51bGwpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidG9kb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImZyb250LXRvZG9cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxwIGNsYXNzPVwidG9kby1uYW1lXCI+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJhY2stdG9kb1wiPlxuICAgICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgPGltZyBjbGFzcz1cImRyb3BcIiBzcmM9XCIuLi9zcmMvcmVzb3VyY2UvY2hldnJvbi1kb3duLW91dGxpbmUuc3ZnXCIgYWx0PVwiaWNvbi1kcm9wXCIgLz5cbiAgICAgICAgPGltZyBjbGFzcz1cInRvZG8tdHJhc2hcIiBzcmM9XCIuLi9zcmMvcmVzb3VyY2UvdHJhc2gucG5nXCIgYWx0PVwiaWNvbi10cmFzaFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24gaGlkZVwiPlxuICAgIDxoMiBjbGFzcz1cInRpdHRsZS1kZXNcIj5EZXNjcmlwdGlvbjwvaDI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWRlc1wiID4ke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICAgIFxuICBgO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKFwiZnVsbC10b2RvXCIpO1xuICAgIG5ld1RvZG8uaW5uZXJIVE1MID0gaHRtbDtcbiAgICBuZXdUb2RvLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHRvZG8ubnVtKTtcblxuICAgIC8vZGVsZXRlIHRvZG9zXG4gICAgY29uc3QgdHJhc2hJY29Ub2RvID0gbmV3VG9kby5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tdHJhc2hcIik7XG4gICAgdHJhc2hJY29Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZGVsZXRlVG9kb0hhbmRsZXIoZSwgcHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvL2NvbXBsZXRhIHRvZG9zXG4gICAgY29uc3QgY2hlY2tCb3ggPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGZpbmlzaGVkVG9kb0hhbmRsZXIodG9kbywgbmV3VG9kbyk7XG4gICAgfSk7XG5cbiAgICAvL2FicmUgZGVzY3JpcHRpb25cbiAgICBjb25zdCBkcm9wRGVzY3JpcHRpb24gPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcFwiKTtcbiAgICBkcm9wRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRpc3BsYXlUb2RvRGVzY3JpcHRpb24obmV3VG9kbyk7XG4gICAgfSk7XG5cbiAgICAvL3NpIGV4aXN0ZSBsbyBwZWdhIGVuIGVsIGVsZW1lbnRvIHF1ZSBwYXNlbW9zXG4gICAgaWYgKHRvZG9Db250YWluZXIpIHtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUb2RvRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAobmV3VG9kbykge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWwgPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgZHJvcEljbyA9IG5ld1RvZG8ucXVlcnlTZWxlY3RvcihcIi5kcm9wXCIpO1xuICAgIGlmIChkZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIikpIHtcbiAgICAgIGRlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICBkcm9wSWNvLnNyYyA9IFwiLi4vc3JjL3Jlc291cmNlL2NoZXZyb24tdXAtb3V0bGluZS5zdmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzY3JpcHRpb25FbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIGRyb3BJY28uc3JjID0gXCIuLi9zcmMvcmVzb3VyY2UvY2hldnJvbi1kb3duLW91dGxpbmUuc3ZnXCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmlzaGVkVG9kb0hhbmRsZXIgPSAodG9kbywgbmV3VCkgPT4ge1xuICAgIHRvZG8uZmluaXNoZWQoKTtcbiAgICBpZiAodG9kby5jaGVja2VkKSB7XG4gICAgICBuZXdULmNsYXNzTGlzdC5hZGQoXCJmaW5pc2hlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VC5jbGFzc0xpc3QucmVtb3ZlKFwiZmluaXNoZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9IYW5kbGVyID0gZnVuY3Rpb24gKGUsIHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBUb2RvRWwgPSBlLnRhcmdldC5jbG9zZXN0KFwiLmZ1bGwtdG9kb1wiKTtcbiAgICBwcm9qZWN0LmRlbGV0ZVRvZG8oVG9kb0VsLmRhdGFzZXQubnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChUb2RvRWwpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RDb250ZW50ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kaXNwbGF5XCI+XG4gICAgICA8aDIgY2xhc3M9XCJkaXNwbGF5LXRpdHRsZVwiPiR7cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGVzY3JpcHRpb25cIj5cbiAgICAgICAgJHtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvZG9zLWNvbnRhaW5lclwiPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkLXByb2plY3RcIj4rPC9zcGFuPlxuICAgICAgPCEtLSBmb3JtIC0tPlxuICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgaWQ9XCJmb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGUtdG9kb1wiPlRvZG8gVGl0bGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRpdGxlLXRvZG9cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidG9kby1kZXNjcmlwdGlvblwiPlRvZG8gZGVzY2lwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwidG9kby1kZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaW5wdXRcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZS10b2RvXCI+RGF0ZSB0b2RvPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZGF0ZS10b2RvXCJcbiAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgIHZhbHVlPVwiMjAyMS0xMS0wNFwiXG4gICAgICAgICAgICBtaW49XCIxOTY2LTAxLTAxXCJcbiAgICAgICAgICAgIG1heD1cIjIwMjUtMTItMzFcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJhZGQtdG9kby1idG5cIj5BZGQgYSB0b2RvPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWN0aW9uXCIpO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5udW0pO1xuICAgIG5ld1Byb2plY3QuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIC8vYWdyZWdhIGxvcyB0b2RvcyBhbCBkaXNwbGF5XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIik7XG4gICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjcmVhdGVUb2RvKHByb2plY3QsIHRvZG8sIHRvZG9Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy9hZ3JlZ2EgY3JlYSBlbCB0b2RvXG4gICAgY29uc3QgZm9ybUJ0blRvZG8gPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRvZG8tYnRuXCIpO1xuICAgIGZvcm1CdG5Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVG9kb0hhbmRsZXIoZSwgcHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgLy8vLy8vY3JlYXRlIGEgdG9kbyBoYWRsZVxuXG4gIGNvbnN0IGFkZFRvZG9IYW5kbGVyID0gZnVuY3Rpb24gKGUsIHByb2plY3QpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10b2RvXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS10b2RvXCIpLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4gICAgLy9jcmVhIHkgZGV2aWVsIGVsIG51ZXZvIHRvZG9cbiAgICBjb25zdCBuZXdUb2RvID0gcHJvamVjdC5jcmVhdGVUb2RvKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4gICAgY3JlYXRlVG9kbyhwcm9qZWN0LCBuZXdUb2RvKTtcbiAgfTtcblxuICAvLy8vIG1vZGlmaWNhciBub21icmUgcHJvamVjdG9cblxuICBjb25zdCBjcmVhdGVQcm9qZWN0TGFiZWwgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBodG1sID0gYFxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L3A+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9yZXNvdXJjZS90cmFzaC5wbmdcIiBhbHQ9XCJ0cmFzaFwiIC8+XG4gICAgYDtcbiAgICAvL2NyZWEgbGFiZWwgeSBsYSBwZWdhIGVuIGxvcyBlamVtbG9zXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5udW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBwYXJhIGNhbWJpYXIgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGFiZWxcbiAgICBjb25zdCBMYWJlbE5hbWUgPSBsYWJlbC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgICBMYWJlbE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZURpc3BsYXlDb250ZW50KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgLy9ib3JyYXIgZWwgcHJveWVjdG9cbiAgICBjb25zdCB0cmFzaEljbyA9IGxhYmVsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgdHJhc2hJY28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RIYW5kbGVyKTtcbiAgfTtcblxuICAvL2JvcnJhciBwcm9qZWN0IGhhbmRsZXIgZXZlbnRcbiAgY29uc3QgZGVsZXRlUHJvamVjdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsUHJveWVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1lbFwiKTtcbiAgICAvL2VuY3VlbnRyYSBpbmRleCBkZWwgcHJvamVjdG8geSBsbyBib3JyYXIgZGVsIGFyclxuICAgIGxldCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBjb250cm9sbGVyLmdldEluZGV4UHJvamVjdHMoXG4gICAgICBsYWJlbFByb3llY3QuZGF0YXNldC5udW1cbiAgICApO1xuICAgIGNvbnRyb2xsZXIuRGVsZXRlUHJvamVjdChsYWJlbFByb3llY3QuZGF0YXNldC5udW0pO1xuICAgIGRlbGV0ZUxhYmVsKGxhYmVsUHJveWVjdCk7XG4gICAgLy9jb25kaWNpb24gcGFyYSBxdWUgbm8gc2lnYSBib3JyYW5kbyBzaSBubyBoYXkgcHJveWVjdG9zXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL2V2aXRhIHF1ZSBzZSByb21wYSBhbCBib3JyYXIgZXhhbXBsZSBxdWVkYW5kbyBvdHJvIHByb2plY3RvXG4gICAgaWYgKGluZGV4T2ZEZWxldGVkUHJvamVjdCA9PT0gMCkge1xuICAgICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3RdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbmdlRGlzcGxheUNvbnRlbnQoY29udHJvbGxlci5wcm9qZWN0c1tpbmRleE9mRGVsZXRlZFByb2plY3QgLSAxXSk7XG4gIH07XG5cbiAgLy9ib3JyYXIgbGFiZWxcblxuICBjb25zdCBkZWxldGVMYWJlbCA9IChsYWJlbCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGFiZWwpO1xuICB9O1xuXG4gIC8vc29sbyBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgY2hhbmdlRGlzcGxheUNvbnRlbnQgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KTtcbiAgfTtcblxuICAvL2NyZWEgeSBjYW1iaWEgZWwgcHJveWVjdG9cbiAgY29uc3QgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCkge1xuICAgICAgLy9zaSBleGlzdGUgbG8gcmVtdWV2ZSB5IGNvbG9jYSBlbCBudWV2b1xuICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQocHJvamVjdEVsKTtcbiAgICB9XG4gICAgLy9jcmVhIGxhYmVsIHkgY29udGVuaWRvIHF1ZWwgbyBtZXRlIGVuIGFycmF5XG4gICAgYWxsUHJvamVjdEVsZW1lbnRzLnB1c2goY3JlYXRlUHJvamVjdENvbnRlbnQocHJvamVjdCkpO1xuICAgIGNyZWF0ZVByb2plY3RMYWJlbChwcm9qZWN0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRvZG8sXG4gICAgY3JlYXRlUHJvamVjdENvbnRlbnQsXG4gICAgY3JlYXRlUHJvamVjdExhYmVsLFxuICAgIGdlbmVyYXRlTmV3UHJvamVjdEFuZENoYW5nZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGRvbUdlbmVyYXRvciB9O1xuIiwiaW1wb3J0IHsgVG9kb3MgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjTnVtKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5udW0gPSBwcm9qZWNOdW07XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMudG9kb051bSA9IDA7XG4gIH1cblxuICBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0YSkge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kb3ModGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhLCB0aGlzLnRvZG9OdW0rKyk7XG4gICAgdGhpcy50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuICAgIHJldHVybiBuZXdUb2RvO1xuICB9XG5cbiAgZGVsZXRlVG9kbyh0b2RvTnVtKSB7XG4gICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy5nZXRJbmRleFRvZG8odG9kb051bSksIDEpO1xuICB9XG5cbiAgZ2V0SW5kZXhUb2RvID0gKHRvZG9OdW1iZXIpID0+IHtcbiAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleChcbiAgICAgICh0b2RvKSA9PiB0b2RvLm51bSA9PT0gcGFyc2VJbnQodG9kb051bWJlcilcbiAgICApO1xuXG4gICAgcmV0dXJuIHRvZG9JbmRleDtcbiAgfTtcblxuICBtb2RpZnlUb2RvKCkge31cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0TnVtID0gMDtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3ROdW0pO1xuICAgIC8vYXVtZW50YSBlbCBudW1lcm8gZW4gbGEgaW5zdGFuY2lhIHlhIGNyZWFkYVxuICAgIHByb2plY3ROdW0rKztcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIC8vbXVlc3RhIGVsIHByb3llY3RvIGFsIGhhY2VyIGNsaWNrIGVuIGxhIGxhYmVsXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGdlbmVyYXRvci5jcmVhdGVQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgfTtcblxuICBjb25zdCBEZWxldGVQcm9qZWN0ID0gKHByb2plY3ROdW1iZXIpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoZ2V0SW5kZXhQcm9qZWN0cyhwcm9qZWN0TnVtYmVyKSwgMSk7XG4gIH07XG5cbiAgLy9kZXZ1ZWx2ZSBlbCBpbmRleCBkZWwgZWxlbWVudG8gcXVlIHF1ZXJlbW9zXG4gIGNvbnN0IGdldEluZGV4UHJvamVjdHMgPSAocHJvamVjdE51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm8pID0+IHByby5udW0gPT09IHBhcnNlSW50KHByb2plY3ROdW1iZXIpXG4gICAgKTtcblxuICAgIHJldHVybiBwcm9qZWN0SW5kZXg7XG4gIH07XG4gIGNvbnN0IG1vZGlmeVByb2plY3QgPSAoKSA9PiB7fTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZGlzcGxheVByb2plY3QsXG4gICAgcHJvamVjdHMsXG4gICAgRGVsZXRlUHJvamVjdCxcbiAgICBnZXRJbmRleFByb2plY3RzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29udHJvbGxlciB9O1xuIiwiY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIG51bSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvL3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bSA9IG51bTtcbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZG9tR2VuZXJhdG9yIH0gZnJvbSBcIi4vZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL3Byb3llY3RDb250cm9sbGVyXCI7XG5cbmNvbnN0IGNvbnRlbnRHZW5lcmF0b3IgPSBkb21HZW5lcmF0b3IoKTtcblxuY29uc3QgZXhhbXBsZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXhhbXBsZVBybyA9IGNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdChcIkV4YW1wbGVcIiwgXCJFeGFtcGxlIGRlc2NyaXB0aW9uXCIpO1xuXG4gIGV4YW1wbGVQcm8uY3JlYXRlVG9kbyhcImV4YW1wbGUxXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJhbnkgZGF0ZVwiKTtcbiAgZXhhbXBsZVByby5jcmVhdGVUb2RvKFwiZXhhbXBsZTJcIiwgXCJkZXNjcmlwdGlvblwiLCBcImFueSBkYXRlXCIpO1xuXG4gIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdENvbnRlbnQoZXhhbXBsZVBybyk7XG4gIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdExhYmVsKGV4YW1wbGVQcm8pO1xufTtcblxuZXhhbXBsZSgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1ib3gtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtcHJvamVjdFwiKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIC8vY3JlYSBlbCBvYmpldG8geSBsbyBndWFyZGEgZW4gdW5hIHZhcmlhYmxlXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBjb250cm9sbGVyLmNyZWF0ZVByb2plY3QodGl0bGVOYW1lLCBkZXNjcmlwdGlvbik7XG4gIGNvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlKG5ld1Byb2plY3QpO1xuXG4gIC8vICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpKSB7XG4gIC8vICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAvLyAgIH1cbiAgLy8gICBjb250ZW50R2VuZXJhdG9yLmNyZWF0ZVByb2plY3RDb250ZW50KG5ld1Byb2plY3QpO1xuICAvLyAgIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdExhYmVsKG5ld1Byb2plY3QpO1xuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLnByb2plY3RzLCBuZXdQcm9qZWN0KTtcbn0pO1xuXG4vLyBjb25zdCB0b2RvQ29udHJvbGxlciA9IGNvbnRyb2xsZXIoKTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIHRvZG9Db250cm9sbGVyLmNyZWF0ZVByb2plY3QoKTtcbi8vICAgdG9kb0NvbnRyb2xsZXIuZGlzcGxheVByb2plY3QoKTtcbi8vIH0pO1xuXG4vLyBjb25zdCBnZXRUb2RvRGF0YSA9IChlKSA9PiB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAvL2Zvcm0gZGF0YVxuLy8gICBjb25zdCB0aXRsZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXRvZG9cIikudmFsdWU7XG4vLyAgIGNvbnN0IGRlc2NyaXB0aW9uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbi8vICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcblxuLy8gICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4vLyAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG5cbi8vICAgZ2VuZXJhdG9yLmNyZWF0ZVRvZG8obmV3VG9kbyk7XG4vLyAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbi8vICAgZm9ybS5yZXNldCgpO1xuLy8gfTtcblxuLy8gLy9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0VG9kb0RhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9