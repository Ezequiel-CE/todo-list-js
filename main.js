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
    //console.log(project, todo, todoContainer);
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
    newTodo.setAttribute("data-num", todo.num);

    const trashIcoTodo = newTodo.querySelector("img");
    trashIcoTodo.addEventListener("click", (e) => {
      deleteTodoHandler(e, project);
    });

    //si existe lo pega en el elemento que pasemos
    if (todoContainer) {
      todoContainer.appendChild(newTodo);
      return;
    }
    document.querySelector(".todos-container").appendChild(newTodo);
  };

  const deleteTodoHandler = function (e, project) {
    if (project.todos.length === 0) return;
    const TodoEl = e.target.closest(".todo");
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
    newProject.setAttribute("data-num", project.projecNum);
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
    const indexOfDeletedProject = _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.getIndexProjects(
      labelProyect.dataset.num
    );
    _proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.DeleteProject(labelProyect.dataset.num);
    deleteLabel(labelProyect);
    //condicion para que no siga borrando si no hay proyectos
    if (_proyectController__WEBPACK_IMPORTED_MODULE_1__.controller.projects.length === 0) {
      document.querySelector(".todo-section").innerHTML = "";
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
    this.checked = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNFOztBQUVqRCx5QkFBeUIsNERBQVk7O0FBRXJDO0FBQ0EscUJBQXFCLHdFQUF3Qjs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3RUFBd0I7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbUdlbmVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb3llY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm95ZWN0Q29udHJvbGxlclwiO1xuXG5jb25zdCBkb21HZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGFsbFByb2plY3RFbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAocHJvamVjdCwgdG9kbywgdG9kb0NvbnRhaW5lciA9IG51bGwpIHtcbiAgICAvL2NvbnNvbGUubG9nKHByb2plY3QsIHRvZG8sIHRvZG9Db250YWluZXIpO1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJmcm9udC10b2RvXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxwIGNsYXNzPVwidG9kby1uYW1lXCI+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFjay10b2RvXCI+XG4gICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL3Jlc291cmNlL3RyYXNoLnBuZ1wiIGFsdD1cImljb24tdHJhc2hcIiAvPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBuZXdUb2RvLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbmV3VG9kby5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCB0b2RvLm51bSk7XG5cbiAgICBjb25zdCB0cmFzaEljb1RvZG8gPSBuZXdUb2RvLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgdHJhc2hJY29Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZGVsZXRlVG9kb0hhbmRsZXIoZSwgcHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICAvL3NpIGV4aXN0ZSBsbyBwZWdhIGVuIGVsIGVsZW1lbnRvIHF1ZSBwYXNlbW9zXG4gICAgaWYgKHRvZG9Db250YWluZXIpIHtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG9IYW5kbGVyID0gZnVuY3Rpb24gKGUsIHByb2plY3QpIHtcbiAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBUb2RvRWwgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG9cIik7XG4gICAgcHJvamVjdC5kZWxldGVUb2RvKFRvZG9FbC5kYXRhc2V0Lm51bSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2Rvcy1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQoVG9kb0VsKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGVudCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPlxuICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS10aXR0bGVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvcy1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZC1wcm9qZWN0XCI+Kzwvc3Bhbj5cbiAgICAgIDwhLS0gZm9ybSAtLT5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlLXRvZG9cIj5Ub2RvIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZS10b2RvXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGVzY3JpcHRpb25cIj5Ub2RvIGRlc2NpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGUtdG9kb1wiPkRhdGUgdG9kbzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImRhdGUtdG9kb1wiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cIjIwMjEtMTEtMDRcIlxuICAgICAgICAgICAgbWluPVwiMTk2Ni0wMS0wMVwiXG4gICAgICAgICAgICBtYXg9XCIyMDI1LTEyLTMxXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYWRkLXRvZG8tYnRuXCI+QWRkIGEgdG9kbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInRvZG8tc2VjdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHByb2plY3QucHJvamVjTnVtKTtcbiAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAvL2FncmVnYSBsb3MgdG9kb3MgYWwgZGlzcGxheVxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBuZXdQcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb3MtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY3JlYXRlVG9kbyhwcm9qZWN0LCB0b2RvLCB0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vYWdyZWdhIGNyZWEgZWwgdG9kb1xuICAgIGNvbnN0IGZvcm1CdG5Ub2RvID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWJ0blwiKTtcbiAgICBmb3JtQnRuVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGFkZFRvZG9IYW5kbGVyKGUsIHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xuICB9O1xuXG4gIC8vLy8vL2NyZWF0ZSBhIHRvZG8gaGFkbGVcblxuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9IGZ1bmN0aW9uIChlLCBwcm9qZWN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIC8vY3JlYSB5IGRldmllbCBlbCBudWV2byB0b2RvXG4gICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgIGNyZWF0ZVRvZG8ocHJvamVjdCwgbmV3VG9kbyk7XG4gIH07XG5cbiAgLy8vLyBtb2RpZmljYXIgbm9tYnJlIHByb2plY3RvXG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdExhYmVsID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgaHRtbCA9IGBcbiAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9wPlxuICAgICAgPGltZyBzcmM9XCIuLi9zcmMvcmVzb3VyY2UvdHJhc2gucG5nXCIgYWx0PVwidHJhc2hcIiAvPlxuICAgIGA7XG4gICAgLy9jcmVhIGxhYmVsIHkgbGEgcGVnYSBlbiBsb3MgZWplbWxvc1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1lbFwiKTtcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHByb2plY3QubnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXIgcGFyYSBjYW1iaWFyIGVsIHByb3llY3RvIGFsIGhhY2VyIGNsaWNrIGVuIGxhYmVsXG4gICAgY29uc3QgTGFiZWxOYW1lID0gbGFiZWwucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gICAgTGFiZWxOYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VEaXNwbGF5Q29udGVudChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIC8vYm9ycmFyIGVsIHByb3llY3RvXG4gICAgY29uc3QgdHJhc2hJY28gPSBsYWJlbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIHRyYXNoSWNvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0SGFuZGxlcik7XG4gIH07XG5cbiAgLy9ib3JyYXIgcHJvamVjdCBoYW5kbGVyIGV2ZW50XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RIYW5kbGVyID0gKGUpID0+IHtcbiAgICBjb25zdCBsYWJlbFByb3llY3QgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtZWxcIik7XG4gICAgLy9lbmN1ZW50cmEgaW5kZXggZGVsIHByb2plY3RvIHkgbG8gYm9ycmFyIGRlbCBhcnJcbiAgICBjb25zdCBpbmRleE9mRGVsZXRlZFByb2plY3QgPSBjb250cm9sbGVyLmdldEluZGV4UHJvamVjdHMoXG4gICAgICBsYWJlbFByb3llY3QuZGF0YXNldC5udW1cbiAgICApO1xuICAgIGNvbnRyb2xsZXIuRGVsZXRlUHJvamVjdChsYWJlbFByb3llY3QuZGF0YXNldC5udW0pO1xuICAgIGRlbGV0ZUxhYmVsKGxhYmVsUHJveWVjdCk7XG4gICAgLy9jb25kaWNpb24gcGFyYSBxdWUgbm8gc2lnYSBib3JyYW5kbyBzaSBubyBoYXkgcHJveWVjdG9zXG4gICAgaWYgKGNvbnRyb2xsZXIucHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFuZ2VEaXNwbGF5Q29udGVudChjb250cm9sbGVyLnByb2plY3RzW2luZGV4T2ZEZWxldGVkUHJvamVjdCAtIDFdKTtcbiAgfTtcblxuICAvL2JvcnJhciBsYWJlbFxuXG4gIGNvbnN0IGRlbGV0ZUxhYmVsID0gKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChsYWJlbCk7XG4gIH07XG5cbiAgLy9zb2xvIGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBjaGFuZ2VEaXNwbGF5Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIC8vc2kgZXhpc3RlIGxvIHJlbXVldmUgeSBjb2xvY2EgZWwgbnVldm9cbiAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gICAgfVxuICAgIGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpO1xuICB9O1xuXG4gIC8vY3JlYSB5IGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICAvL2NyZWEgbGFiZWwgeSBjb250ZW5pZG8gcXVlbCBvIG1ldGUgZW4gYXJyYXlcbiAgICBhbGxQcm9qZWN0RWxlbWVudHMucHVzaChjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KSk7XG4gICAgY3JlYXRlUHJvamVjdExhYmVsKHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVG9kbyxcbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudCxcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwsXG4gICAgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tR2VuZXJhdG9yIH07XG4iLCJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWNOdW0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLm51bSA9IHByb2plY051bTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy50b2RvTnVtID0gMDtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEsIHRoaXMudG9kb051bSsrKTtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH1cblxuICBkZWxldGVUb2RvKHRvZG9OdW0pIHtcbiAgICB0aGlzLnRvZG9zLnNwbGljZSh0aGlzLmdldEluZGV4VG9kbyh0b2RvTnVtKSwgMSk7XG4gIH1cblxuICBnZXRJbmRleFRvZG8gPSAodG9kb051bWJlcikgPT4ge1xuICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KFxuICAgICAgKHRvZG8pID0+IHRvZG8ubnVtID09PSBwYXJzZUludCh0b2RvTnVtYmVyKVxuICAgICk7XG5cbiAgICByZXR1cm4gdG9kb0luZGV4O1xuICB9O1xuXG4gIG1vZGlmeVRvZG8oKSB7fVxufVxuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3ROdW0gPSAwO1xuXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdE51bSk7XG4gICAgLy9hdW1lbnRhIGVsIG51bWVybyBlbiBsYSBpbnN0YW5jaWEgeWEgY3JlYWRhXG4gICAgcHJvamVjdE51bSsrO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgLy9tdWVzdGEgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGEgbGFiZWxcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgZ2VuZXJhdG9yLmNyZWF0ZVByb2plY3QocHJvamVjdHNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IERlbGV0ZVByb2plY3QgPSAocHJvamVjdE51bWJlcikgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShnZXRJbmRleFByb2plY3RzKHByb2plY3ROdW1iZXIpLCAxKTtcbiAgfTtcblxuICAvL2RldnVlbHZlIGVsIGluZGV4IGRlbCBlbGVtZW50byBxdWUgcXVlcmVtb3NcbiAgY29uc3QgZ2V0SW5kZXhQcm9qZWN0cyA9IChwcm9qZWN0TnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHBybykgPT4gcHJvLm51bSA9PT0gcGFyc2VJbnQocHJvamVjdE51bWJlcilcbiAgICApO1xuXG4gICAgcmV0dXJuIHByb2plY3RJbmRleDtcbiAgfTtcbiAgY29uc3QgbW9kaWZ5UHJvamVjdCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBkaXNwbGF5UHJvamVjdCxcbiAgICBwcm9qZWN0cyxcbiAgICBEZWxldGVQcm9qZWN0LFxuICAgIGdldEluZGV4UHJvamVjdHMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb250cm9sbGVyIH07XG4iLCJjbGFzcyBUb2RvcyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgbnVtKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIC8vdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMubnVtID0gbnVtO1xuICB9XG5cbiAgZmluaXNoZWQoKSB7XG4gICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBUb2RvcyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkb21HZW5lcmF0b3IgfSBmcm9tIFwiLi9kb21HZW5lcmF0aW9uXCI7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vcHJveWVjdENvbnRyb2xsZXJcIjtcblxuY29uc3QgY29udGVudEdlbmVyYXRvciA9IGRvbUdlbmVyYXRvcigpO1xuXG5jb25zdCBleGFtcGxlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBleGFtcGxlUHJvID0gY29udHJvbGxlci5jcmVhdGVQcm9qZWN0KFwiRXhhbXBsZVwiLCBcIkV4YW1wbGUgZGVzY3JpcHRpb25cIik7XG5cbiAgZXhhbXBsZVByby5jcmVhdGVUb2RvKFwiZXhhbXBsZTFcIiwgXCJkZXNjcmlwdGlvblwiLCBcImFueSBkYXRlXCIpO1xuICBleGFtcGxlUHJvLmNyZWF0ZVRvZG8oXCJleGFtcGxlMlwiLCBcImRlc2NyaXB0aW9uXCIsIFwiYW55IGRhdGVcIik7XG5cbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0Q29udGVudChleGFtcGxlUHJvKTtcbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0TGFiZWwoZXhhbXBsZVBybyk7XG59O1xuXG5leGFtcGxlKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJveC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1wcm9qZWN0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgLy9jcmVhIGVsIG9iamV0byB5IGxvIGd1YXJkYSBlbiB1bmEgdmFyaWFibGVcbiAgY29uc3QgbmV3UHJvamVjdCA9IGNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZU5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgY29udGVudEdlbmVyYXRvci5nZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UobmV3UHJvamVjdCk7XG5cbiAgLy8gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIikpIHtcbiAgLy8gICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gIC8vICAgfVxuICAvLyAgIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdENvbnRlbnQobmV3UHJvamVjdCk7XG4gIC8vICAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0TGFiZWwobmV3UHJvamVjdCk7XG4gIC8vICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIucHJvamVjdHMsIG5ld1Byb2plY3QpO1xufSk7XG5cbi8vIGNvbnN0IHRvZG9Db250cm9sbGVyID0gY29udHJvbGxlcigpO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgdG9kb0NvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgpO1xuLy8gICB0b2RvQ29udHJvbGxlci5kaXNwbGF5UHJvamVjdCgpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IGdldFRvZG9EYXRhID0gKGUpID0+IHtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgIC8vZm9ybSBkYXRhXG4vLyAgIGNvbnN0IHRpdGxlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtdG9kb1wiKS52YWx1ZTtcbi8vICAgY29uc3QgZGVzY3JpcHRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuLy8gICBjb25zdCBkYXRlRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS10b2RvXCIpLnZhbHVlO1xuXG4vLyAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kb3ModGl0bGVEYXRhLCBkZXNjcmlwdGlvbkRhdGEsIGRhdGVEYXRhKTtcbi8vICAgZGVmYXVsdFByb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcblxuLy8gICBnZW5lcmF0b3IuY3JlYXRlVG9kbyhuZXdUb2RvKTtcbi8vICAgY29uc29sZS5sb2coZGVmYXVsdFByb2plY3QpO1xuLy8gICBmb3JtLnJlc2V0KCk7XG4vLyB9O1xuXG4vLyAvL2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBnZXRUb2RvRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=