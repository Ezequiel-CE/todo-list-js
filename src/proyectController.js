import { Project } from "./project";

const controller = (function () {
  let projectNum = 0;

  const projects = [];

  const createProject = (name, description) => {
    const project = new Project(name, description, projectNum);
    //aumenta el numero en la instancia ya creada
    projectNum++;
    projects.push(project);
    return project;
  };

  //muesta el proyecto al hacer click en la label
  const giveMethodOfTodo = function (name, description, num) {
    const project = new Project(name, description, num);
    return project;
  };

  const DeleteProject = (projectNumber) => {
    projects.splice(getIndexProjects(projectNumber), 1);
    localStorage.setItem("Projects", JSON.stringify(projects));
  };

  //devuelve el index del elemento que queremos
  const getIndexProjects = (projectNumber) => {
    const projectIndex = projects.findIndex(
      (pro) => pro.num === parseInt(projectNumber)
    );

    return projectIndex;
  };

  return {
    createProject,

    projects,
    DeleteProject,
    getIndexProjects,
    giveMethodOfTodo,
  };
})();

export { controller };
