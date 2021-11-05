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


const domGenerator = function () {
  const allProjectElements = [];

  const createTodo = function (todo, todoContainer = null) {
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
    //si existe lo pega en el elemento que pasemos
    if (todoContainer) {
      todoContainer.appendChild(newTodo);
      return;
    }
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

    const todoContainer = newProject.querySelector(".todos-container");
    //agrega los todos al display
    project.todos.forEach((todo) => {
      createTodo(todo, todoContainer);
    });

    //agrega crea el todo
    const formBtnTodo = newProject.querySelector("#add-todo-btn");

    formBtnTodo.addEventListener("click", function (e) {
      e.preventDefault();
      const titleData = document.getElementById("title-todo").value;
      const descriptionData = document.getElementById("todo-description").value;
      const dateData = document.getElementById("date-todo").value;
      console.log(titleData, descriptionData, dateData);
      //crea y deviel el nuevo todo
      const newTodo = project.createTodo(titleData, descriptionData, dateData);
      createTodo(newTodo);
    });

    document.querySelector(".app-container").appendChild(newProject);
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
    this.projecNum = projecNum;
    this.todos = [];
    this.todoNum = 0;
  }

  createTodo(title, description, data) {
    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.Todos(title, description, data, this.todoNum++);
    this.todos.push(newTodo);
    return newTodo;
  }

  deleteTodo() {}

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


const controller = function () {
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

  const DeleteProject = () => {};
  const modifyProject = () => {};

  return { createProject, displayProject, projects };
};




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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




const contentGenerator = (0,_domGeneration__WEBPACK_IMPORTED_MODULE_0__.domGenerator)();
const projectManager = (0,_proyectController__WEBPACK_IMPORTED_MODULE_1__.controller)();

const example = function () {
  const examplePro = projectManager.createProject(
    "Example",
    "Example description"
  );

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
  const newProject = projectManager.createProject(titleName, description);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSk87O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0NBQUs7QUFDN0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJpQjs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCOzs7Ozs7O1VDZmpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNFO0FBQ2xCOztBQUUvQix5QkFBeUIsNERBQVk7QUFDckMsdUJBQXVCLDhEQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21HZW5lcmF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm95ZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kb3MgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGRvbUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvLCB0b2RvQ29udGFpbmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJmcm9udC10b2RvXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxwIGNsYXNzPVwidG9kby1uYW1lXCI+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFjay10b2RvXCI+XG4gICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL3Jlc291cmNlL3RyYXNoLnBuZ1wiIGFsdD1cImljb24tdHJhc2hcIiAvPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBuZXdUb2RvLmlubmVySFRNTCA9IGh0bWw7XG4gICAgLy9zaSBleGlzdGUgbG8gcGVnYSBlbiBlbCBlbGVtZW50byBxdWUgcGFzZW1vc1xuICAgIGlmICh0b2RvQ29udGFpbmVyKSB7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGVudCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPlxuICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS10aXR0bGVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvcy1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZC1wcm9qZWN0XCI+Kzwvc3Bhbj5cbiAgICAgIDwhLS0gZm9ybSAtLT5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlLXRvZG9cIj5Ub2RvIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZS10b2RvXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGVzY3JpcHRpb25cIj5Ub2RvIGRlc2NpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGUtdG9kb1wiPkRhdGUgdG9kbzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImRhdGUtdG9kb1wiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cIjIwMjEtMTEtMDRcIlxuICAgICAgICAgICAgbWluPVwiMTk2Ni0wMS0wMVwiXG4gICAgICAgICAgICBtYXg9XCIyMDI1LTEyLTMxXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYWRkLXRvZG8tYnRuXCI+QWRkIGEgdG9kbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInRvZG8tc2VjdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHByb2plY3QucHJvamVjTnVtKTtcbiAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgICAvL2FncmVnYSBsb3MgdG9kb3MgYWwgZGlzcGxheVxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY3JlYXRlVG9kbyh0b2RvLCB0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vYWdyZWdhIGNyZWEgZWwgdG9kb1xuICAgIGNvbnN0IGZvcm1CdG5Ub2RvID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWJ0blwiKTtcblxuICAgIGZvcm1CdG5Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10b2RvXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4gICAgICAvL2NyZWEgeSBkZXZpZWwgZWwgbnVldm8gdG9kb1xuICAgICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgICAgY3JlYXRlVG9kbyhuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0TGFiZWwgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBodG1sID0gYFxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L3A+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9yZXNvdXJjZS90cmFzaC5wbmdcIiBhbHQ9XCJ0cmFzaFwiIC8+XG4gICAgYDtcbiAgICAvL2NyZWEgbGFiZWwgeSBsYSBwZWdhIGVuIGxvcyBlamVtbG9zXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5wcm9qZWNOdW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBwYXJhIGNhbWJpYXIgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGFiZWxcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlRGlzcGxheUNvbnRlbnQocHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9zb2xvIGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBjaGFuZ2VEaXNwbGF5Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIC8vc2kgZXhpc3RlIGxvIHJlbXVldmUgeSBjb2xvY2EgZWwgbnVldm9cbiAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gICAgfVxuICAgIGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpO1xuICB9O1xuXG4gIC8vY3JlYSB5IGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICAvL2NyZWEgbGFiZWwgeSBjb250ZW5pZG8gcXVlbCBvIG1ldGUgZW4gYXJyYXlcbiAgICBhbGxQcm9qZWN0RWxlbWVudHMucHVzaChjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KSk7XG4gICAgY3JlYXRlUHJvamVjdExhYmVsKHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVG9kbyxcbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudCxcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwsXG4gICAgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tR2VuZXJhdG9yIH07XG4iLCJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWNOdW0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByb2plY051bSA9IHByb2plY051bTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy50b2RvTnVtID0gMDtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEsIHRoaXMudG9kb051bSsrKTtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH1cblxuICBkZWxldGVUb2RvKCkge31cblxuICBtb2RpZnlUb2RvKCkge31cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3ROdW0gPSAwO1xuXG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBkZXNjcmlwdGlvbiwgcHJvamVjdE51bSk7XG4gICAgLy9hdW1lbnRhIGVsIG51bWVybyBlbiBsYSBpbnN0YW5jaWEgeWEgY3JlYWRhXG4gICAgcHJvamVjdE51bSsrO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgLy9tdWVzdGEgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGEgbGFiZWxcbiAgY29uc3QgZGlzcGxheVByb2plY3QgPSAoKSA9PiB7XG4gICAgZ2VuZXJhdG9yLmNyZWF0ZVByb2plY3QocHJvamVjdHNbMF0pO1xuICB9O1xuXG4gIGNvbnN0IERlbGV0ZVByb2plY3QgPSAoKSA9PiB7fTtcbiAgY29uc3QgbW9kaWZ5UHJvamVjdCA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVByb2plY3QsIGRpc3BsYXlQcm9qZWN0LCBwcm9qZWN0cyB9O1xufTtcblxuZXhwb3J0IHsgY29udHJvbGxlciB9O1xuIiwiY2xhc3MgVG9kb3Mge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIG51bSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAvL3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLm51bSA9IG51bTtcbiAgfVxuXG4gIGZpbmlzaGVkKCkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9kb3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZG9tR2VuZXJhdG9yIH0gZnJvbSBcIi4vZG9tR2VuZXJhdGlvblwiO1xuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL3Byb3llY3RDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgY29udGVudEdlbmVyYXRvciA9IGRvbUdlbmVyYXRvcigpO1xuY29uc3QgcHJvamVjdE1hbmFnZXIgPSBjb250cm9sbGVyKCk7XG5cbmNvbnN0IGV4YW1wbGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV4YW1wbGVQcm8gPSBwcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KFxuICAgIFwiRXhhbXBsZVwiLFxuICAgIFwiRXhhbXBsZSBkZXNjcmlwdGlvblwiXG4gICk7XG5cbiAgZXhhbXBsZVByby5jcmVhdGVUb2RvKFwiZXhhbXBsZTFcIiwgXCJkZXNjcmlwdGlvblwiLCBcImFueSBkYXRlXCIpO1xuICBleGFtcGxlUHJvLmNyZWF0ZVRvZG8oXCJleGFtcGxlMlwiLCBcImRlc2NyaXB0aW9uXCIsIFwiYW55IGRhdGVcIik7XG5cbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0Q29udGVudChleGFtcGxlUHJvKTtcbiAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0TGFiZWwoZXhhbXBsZVBybyk7XG59O1xuXG5leGFtcGxlKCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWJveC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS1wcm9qZWN0XCIpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgLy9jcmVhIGVsIG9iamV0byB5IGxvIGd1YXJkYSBlbiB1bmEgdmFyaWFibGVcbiAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QodGl0bGVOYW1lLCBkZXNjcmlwdGlvbik7XG4gIGNvbnRlbnRHZW5lcmF0b3IuZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlKG5ld1Byb2plY3QpO1xuXG4gIC8vICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpKSB7XG4gIC8vICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAvLyAgIH1cbiAgLy8gICBjb250ZW50R2VuZXJhdG9yLmNyZWF0ZVByb2plY3RDb250ZW50KG5ld1Byb2plY3QpO1xuICAvLyAgIGNvbnRlbnRHZW5lcmF0b3IuY3JlYXRlUHJvamVjdExhYmVsKG5ld1Byb2plY3QpO1xuICAvLyAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLnByb2plY3RzLCBuZXdQcm9qZWN0KTtcbn0pO1xuXG4vLyBjb25zdCB0b2RvQ29udHJvbGxlciA9IGNvbnRyb2xsZXIoKTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWVsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIHRvZG9Db250cm9sbGVyLmNyZWF0ZVByb2plY3QoKTtcbi8vICAgdG9kb0NvbnRyb2xsZXIuZGlzcGxheVByb2plY3QoKTtcbi8vIH0pO1xuXG4vLyBjb25zdCBnZXRUb2RvRGF0YSA9IChlKSA9PiB7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAvL2Zvcm0gZGF0YVxuLy8gICBjb25zdCB0aXRsZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXRvZG9cIikudmFsdWU7XG4vLyAgIGNvbnN0IGRlc2NyaXB0aW9uRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXNjcmlwdGlvblwiKS52YWx1ZTtcbi8vICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcblxuLy8gICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9zKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4vLyAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG5cbi8vICAgZ2VuZXJhdG9yLmNyZWF0ZVRvZG8obmV3VG9kbyk7XG4vLyAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcbi8vICAgZm9ybS5yZXNldCgpO1xuLy8gfTtcblxuLy8gLy9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0VG9kb0RhdGEpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9