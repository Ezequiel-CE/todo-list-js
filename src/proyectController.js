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

export { controller };
