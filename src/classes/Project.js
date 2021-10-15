import List from './List'
import Utils from './Utils'
import Card from './Card'
const S = require('string')
// const Utils = require('./Utils')s

let test = {
  cards: [
    new Card('my cards'),
    new Card(5),
    new Card(
      {
        title: 'title card',
        checklists:
        [
          {
            title: 'checklist1',
            tasks: [
              {
                title: 'task1 of checklist1',
                done: false
              },
              {
                title: 'task2 of checklist1',
                done: true
              }
            ]
          }
        ]
      }
    )
  ]
}

export default class Project {
  constructor (arg) {
    let object = Utils.initiateObjectFromArgument(arg, 'Project', 'title')
    let project = Object.assign({
      title: 'New Project',
      lists: [new List({title: 'To-do', ...test}), new List({title: 'Doing'}), new List('Test'), new List('done')],
      cover: 'default-project-cover.jpg'
    }, object)

    for (let key in project) {
      this[key] = project[key]
    }
  }

  get link () {
    return S(this.title).slugify().s
  }
  addList (list = null) {
    this.lists.push(new List(list))
  }
}
