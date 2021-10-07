import Utils from '@/classes/Utils'
import Project from '@/classes/Project'

export default class Workspace {
  constructor (arg) {
    let object = Object.assign({
      title: '',
      projects: []
    }, Utils.initiateObjectFromArgument(arg, 'Workspace', 'title'))

    for (let key in object) {
      this[key] = object[key]
    }
  }

  addProject (project) {
    this.projects.push(new Project(project))
  }
}
