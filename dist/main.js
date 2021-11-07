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

  const DeleteProject = () => {};
  const modifyProject = () => {};

  return { createProject, displayProject, projects };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSk87O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0NBQUs7QUFDN0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJpQjs7QUFFcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7QUMxQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUI7Ozs7Ozs7VUNmakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDRTs7QUFFakQseUJBQXlCLDREQUFZOztBQUVyQztBQUNBLHFCQUFxQix3RUFBd0I7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0VBQXdCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21HZW5lcmF0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm95ZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kb3MgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IGRvbUdlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdEVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvLCB0b2RvQ29udGFpbmVyID0gbnVsbCkge1xuICAgIGxldCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3M9XCJmcm9udC10b2RvXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxwIGNsYXNzPVwidG9kby1uYW1lXCI+JHt0b2RvLnRpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFjay10b2RvXCI+XG4gICAgICA8cCBjbGFzcz1cInRvZG8tZGF0ZVwiPiR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgIDxpbWcgc3JjPVwiLi4vc3JjL3Jlc291cmNlL3RyYXNoLnBuZ1wiIGFsdD1cImljb24tdHJhc2hcIiAvPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBuZXdUb2RvLmlubmVySFRNTCA9IGh0bWw7XG4gICAgLy9zaSBleGlzdGUgbG8gcGVnYSBlbiBlbCBlbGVtZW50byBxdWUgcGFzZW1vc1xuICAgIGlmICh0b2RvQ29udGFpbmVyKSB7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGVudCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPlxuICAgICAgPGgyIGNsYXNzPVwiZGlzcGxheS10aXR0bGVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZXBhcmF0b3JcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2Rvcy1jb250YWluZXJcIj5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZC1wcm9qZWN0XCI+Kzwvc3Bhbj5cbiAgICAgIDwhLS0gZm9ybSAtLT5cbiAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlLXRvZG9cIj5Ub2RvIFRpdGxlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0aXRsZS10b2RvXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInRvZG8tZGVzY3JpcHRpb25cIj5Ub2RvIGRlc2NpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRvZG8tZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWlucHV0XCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGUtdG9kb1wiPkRhdGUgdG9kbzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImRhdGUtdG9kb1wiXG4gICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT1cIjIwMjEtMTEtMDRcIlxuICAgICAgICAgICAgbWluPVwiMTk2Ni0wMS0wMVwiXG4gICAgICAgICAgICBtYXg9XCIyMDI1LTEyLTMxXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwiYWRkLXRvZG8tYnRuXCI+QWRkIGEgdG9kbzwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZChcInRvZG8tc2VjdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIHByb2plY3QucHJvamVjTnVtKTtcbiAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9zLWNvbnRhaW5lclwiKTtcbiAgICAvL2FncmVnYSBsb3MgdG9kb3MgYWwgZGlzcGxheVxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY3JlYXRlVG9kbyh0b2RvLCB0b2RvQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vYWdyZWdhIGNyZWEgZWwgdG9kb1xuICAgIGNvbnN0IGZvcm1CdG5Ub2RvID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10b2RvLWJ0blwiKTtcblxuICAgIGZvcm1CdG5Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGl0bGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10b2RvXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25EYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgY29uc3QgZGF0ZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdG9kb1wiKS52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRpdGxlRGF0YSwgZGVzY3JpcHRpb25EYXRhLCBkYXRlRGF0YSk7XG4gICAgICAvL2NyZWEgeSBkZXZpZWwgZWwgbnVldm8gdG9kb1xuICAgICAgY29uc3QgbmV3VG9kbyA9IHByb2plY3QuY3JlYXRlVG9kbyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuICAgICAgY3JlYXRlVG9kbyhuZXdUb2RvKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0TGFiZWwgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCBodG1sID0gYFxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L3A+XG4gICAgICA8aW1nIHNyYz1cIi4uL3NyYy9yZXNvdXJjZS90cmFzaC5wbmdcIiBhbHQ9XCJ0cmFzaFwiIC8+XG4gICAgYDtcbiAgICAvL2NyZWEgbGFiZWwgeSBsYSBwZWdhIGVuIGxvcyBlamVtbG9zXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWVsXCIpO1xuICAgIGxhYmVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgcHJvamVjdC5wcm9qZWNOdW0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lciBwYXJhIGNhbWJpYXIgZWwgcHJveWVjdG8gYWwgaGFjZXIgY2xpY2sgZW4gbGFiZWxcbiAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlRGlzcGxheUNvbnRlbnQocHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9zb2xvIGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBjaGFuZ2VEaXNwbGF5Q29udGVudCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QpIHtcbiAgICAgIC8vc2kgZXhpc3RlIGxvIHJlbXVldmUgeSBjb2xvY2EgZWwgbnVldm9cbiAgICAgIGNvbnN0IHByb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHAtY29udGFpbmVyXCIpLnJlbW92ZUNoaWxkKHByb2plY3RFbCk7XG4gICAgfVxuICAgIGNyZWF0ZVByb2plY3RDb250ZW50KHByb2plY3QpO1xuICB9O1xuXG4gIC8vY3JlYSB5IGNhbWJpYSBlbCBwcm95ZWN0b1xuICBjb25zdCBnZW5lcmF0ZU5ld1Byb2plY3RBbmRDaGFuZ2UgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAvL3NpIGV4aXN0ZSBsbyByZW11ZXZlIHkgY29sb2NhIGVsIG51ZXZvXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwLWNvbnRhaW5lclwiKS5yZW1vdmVDaGlsZChwcm9qZWN0RWwpO1xuICAgIH1cbiAgICAvL2NyZWEgbGFiZWwgeSBjb250ZW5pZG8gcXVlbCBvIG1ldGUgZW4gYXJyYXlcbiAgICBhbGxQcm9qZWN0RWxlbWVudHMucHVzaChjcmVhdGVQcm9qZWN0Q29udGVudChwcm9qZWN0KSk7XG4gICAgY3JlYXRlUHJvamVjdExhYmVsKHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVG9kbyxcbiAgICBjcmVhdGVQcm9qZWN0Q29udGVudCxcbiAgICBjcmVhdGVQcm9qZWN0TGFiZWwsXG4gICAgZ2VuZXJhdGVOZXdQcm9qZWN0QW5kQ2hhbmdlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZG9tR2VuZXJhdG9yIH07XG4iLCJpbXBvcnQgeyBUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBwcm9qZWNOdW0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByb2plY051bSA9IHByb2plY051bTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy50b2RvTnVtID0gMDtcbiAgfVxuXG4gIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRhKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGEsIHRoaXMudG9kb051bSsrKTtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH1cblxuICBkZWxldGVUb2RvKCkge31cblxuICBtb2RpZnlUb2RvKCkge31cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0TnVtID0gMDtcblxuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZGVzY3JpcHRpb24sIHByb2plY3ROdW0pO1xuICAgIC8vYXVtZW50YSBlbCBudW1lcm8gZW4gbGEgaW5zdGFuY2lhIHlhIGNyZWFkYVxuICAgIHByb2plY3ROdW0rKztcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIC8vbXVlc3RhIGVsIHByb3llY3RvIGFsIGhhY2VyIGNsaWNrIGVuIGxhIGxhYmVsXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGdlbmVyYXRvci5jcmVhdGVQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgfTtcblxuICBjb25zdCBEZWxldGVQcm9qZWN0ID0gKCkgPT4ge307XG4gIGNvbnN0IG1vZGlmeVByb2plY3QgPSAoKSA9PiB7fTtcblxuICByZXR1cm4geyBjcmVhdGVQcm9qZWN0LCBkaXNwbGF5UHJvamVjdCwgcHJvamVjdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbnRyb2xsZXIgfTtcbiIsImNsYXNzIFRvZG9zIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBudW0pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgLy90aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5udW0gPSBudW07XG4gIH1cblxuICBmaW5pc2hlZCgpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCB7IFRvZG9zIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRvbUdlbmVyYXRvciB9IGZyb20gXCIuL2RvbUdlbmVyYXRpb25cIjtcbmltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm95ZWN0Q29udHJvbGxlclwiO1xuXG5jb25zdCBjb250ZW50R2VuZXJhdG9yID0gZG9tR2VuZXJhdG9yKCk7XG5cbmNvbnN0IGV4YW1wbGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGV4YW1wbGVQcm8gPSBjb250cm9sbGVyLmNyZWF0ZVByb2plY3QoXCJFeGFtcGxlXCIsIFwiRXhhbXBsZSBkZXNjcmlwdGlvblwiKTtcblxuICBleGFtcGxlUHJvLmNyZWF0ZVRvZG8oXCJleGFtcGxlMVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiYW55IGRhdGVcIik7XG4gIGV4YW1wbGVQcm8uY3JlYXRlVG9kbyhcImV4YW1wbGUyXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJhbnkgZGF0ZVwiKTtcblxuICBjb250ZW50R2VuZXJhdG9yLmNyZWF0ZVByb2plY3RDb250ZW50KGV4YW1wbGVQcm8pO1xuICBjb250ZW50R2VuZXJhdG9yLmNyZWF0ZVByb2plY3RMYWJlbChleGFtcGxlUHJvKTtcbn07XG5cbmV4YW1wbGUoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYm94LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0aXRsZU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLXByb2plY3RcIikudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAvL2NyZWEgZWwgb2JqZXRvIHkgbG8gZ3VhcmRhIGVuIHVuYSB2YXJpYWJsZVxuICBjb25zdCBuZXdQcm9qZWN0ID0gY29udHJvbGxlci5jcmVhdGVQcm9qZWN0KHRpdGxlTmFtZSwgZGVzY3JpcHRpb24pO1xuICBjb250ZW50R2VuZXJhdG9yLmdlbmVyYXRlTmV3UHJvamVjdEFuZENoYW5nZShuZXdQcm9qZWN0KTtcblxuICAvLyAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvblwiKSkge1xuICAvLyAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb25cIik7XG4gIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcC1jb250YWluZXJcIikucmVtb3ZlQ2hpbGQocHJvamVjdEVsKTtcbiAgLy8gICB9XG4gIC8vICAgY29udGVudEdlbmVyYXRvci5jcmVhdGVQcm9qZWN0Q29udGVudChuZXdQcm9qZWN0KTtcbiAgLy8gICBjb250ZW50R2VuZXJhdG9yLmNyZWF0ZVByb2plY3RMYWJlbChuZXdQcm9qZWN0KTtcbiAgLy8gICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5wcm9qZWN0cywgbmV3UHJvamVjdCk7XG59KTtcblxuLy8gY29uc3QgdG9kb0NvbnRyb2xsZXIgPSBjb250cm9sbGVyKCk7XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1lbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICB0b2RvQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCk7XG4vLyAgIHRvZG9Db250cm9sbGVyLmRpc3BsYXlQcm9qZWN0KCk7XG4vLyB9KTtcblxuLy8gY29uc3QgZ2V0VG9kb0RhdGEgPSAoZSkgPT4ge1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgLy9mb3JtIGRhdGFcbi8vICAgY29uc3QgdGl0bGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZS10b2RvXCIpLnZhbHVlO1xuLy8gICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4vLyAgIGNvbnN0IGRhdGVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXRvZG9cIikudmFsdWU7XG5cbi8vICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2Rvcyh0aXRsZURhdGEsIGRlc2NyaXB0aW9uRGF0YSwgZGF0ZURhdGEpO1xuLy8gICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuXG4vLyAgIGdlbmVyYXRvci5jcmVhdGVUb2RvKG5ld1RvZG8pO1xuLy8gICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG4vLyAgIGZvcm0ucmVzZXQoKTtcbi8vIH07XG5cbi8vIC8vZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGdldFRvZG9EYXRhKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==