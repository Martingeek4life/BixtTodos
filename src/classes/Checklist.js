import Utils from './Utils'

class Task {
  constructor (arg) {
    let task = Object.assign({title: '', done: false}, Utils.initiateObjectFromArgument(arg))

    for (let key in task) {
      this[key] = task[key]
    }
  }
}

export default class Checklist {
  constructor (arg) {
    let object = Object.assign({
      title: '',
      tasks: []
    }, Utils.initiateObjectFromArgument(arg))

    for (let key in object) {
      this[key] = object[key]
    }
  }

  get tasksDone () {
    return this.tasks.filter(el => el.done)
  }

  get tasksUndone () {
    return this.tasks.filter(el => !el.done)
  }

  get progress () {
    return parseInt(this.tasksDone.length * 100 / this.tasks.length)
  }

  addTask (title) {
    this.tasks.push(new Task(title))
  }

  deleteTask (i) {
    this.tasks.splice(i, 1)
  }
}
