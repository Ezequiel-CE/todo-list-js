(()=>{"use strict";class t{constructor(t,e,n){this.name=t,this.description=e,this.projecNum=n,this.todos=[]}addTodo(t){this.todos.push(t)}deleteTodo(){}modifyTodo(){}}const e=function(){const t=[],e=function(e){let n=`\n    <div class="project-display">\n      <h2 class="display-tittle">${e.name}</h2>\n      <p class="display-description">\n        ${e.description}\n      </p>\n      <div class="separator"></div>\n      <div class="todos-container">\n        <div class="todo">\n          <div class="front-todo">\n            <input type="checkbox" />\n            <p class="todo-name">Name todo</p>\n          </div>\n          <div class="back-todo">\n            <p class="todo-date">3 months ago</p>\n            <img src="../src/resource/trash.png" alt="icon-trash" />\n          </div>\n        </div>\n        <div class="todo">\n          <div class="front-todo">\n            <input type="checkbox" />\n            <p class="todo-name">Name todo</p>\n          </div>\n          <div class="back-todo">\n            <p class="todo-date">3 months ago</p>\n            <img src="../src/resource/trash.png" alt="icon-trash" />\n          </div>\n        </div>\n      </div>\n      <span class="add-project">+</span>\n      \x3c!-- form --\x3e\n      <form class="form" id="form">\n        <div class="container-input">\n          <label for="title-todo">Todo Title</label>\n          <input id="title-todo" type="text" required />\n        </div>\n\n        <div class="container-input">\n          <label for="todo-description">Todo desciption</label>\n          <input id="todo-description" type="text" required />\n        </div>\n        <div class="container-input">\n          <label for="date-todo">Date todo</label>\n          <input\n            id="date-todo"\n            type="date"\n            value="2021-11-04"\n            min="1966-01-01"\n            max="2025-12-31"\n            required\n          />\n        </div>\n        <button type="submit" id="add-box-btn">Add a todo</button>\n      </form>\n    </div>\n  `;const o=document.createElement("main");o.classList.add("todo-section"),o.setAttribute("data-num",e.projecNum),o.innerHTML=n,document.querySelector(".app-container").appendChild(o),console.log(o),t.push(o)},n=function(t){let e=`\n      <p class="project-name">${t.name}</p>\n      <img src="../src/resource/trash.png" alt="trash" />\n    `;const n=document.createElement("div");n.classList.add("project-el"),n.innerHTML=e,n.setAttribute("data-num",t.projecNum),document.querySelector(".project-container").appendChild(n),n.addEventListener("click",(()=>{o(t)}))},o=t=>{if(document.querySelector(".todo-section")){const t=document.querySelector(".todo-section");document.querySelector(".app-container").removeChild(t)}e(t)};return{createTodo:function(t){let e=`\n    <div class="front-todo">\n      <input type="checkbox" />\n      <p class="todo-name">${t.title}</p>\n    </div>\n    <div class="back-todo">\n      <p class="todo-date">${t.dueDate}</p>\n      <img src="../src/resource/trash.png" alt="icon-trash" />\n    </div>\n  `;const n=document.createElement("div");n.classList.add("todo"),n.innerHTML=e,document.querySelector(".todos-container").appendChild(n)},createProjectContent:e,createProjectLabel:n,generateNewProjectAndChange:t=>{if(document.querySelector(".todo-section")){const t=document.querySelector(".todo-section");document.querySelector(".app-container").removeChild(t)}e(t),n(t),console.log(t)}}}(),n=function(){let e=1;const n=[];return{createProject:(o,c)=>{const d=new t(o,c,e);return e++,n.push(d),d},displayProject:()=>{generator.createProject(n[0])},projects:n}}();document.querySelector("#add-box-btn").addEventListener("click",(t=>{t.preventDefault();const o=document.getElementById("title-project").value,c=document.getElementById("project-description").value,d=n.createProject(o,c);e.generateNewProjectAndChange(d)}))})();