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

export default class Table {
  constructor (arg) {
    let object = Utils.initiateObjectFromArgument(arg, 'Table', 'title')
    let table = Object.assign({
      title: 'New Table',
      lists: [new List({title: 'To-do', ...test}), new List({title: 'Doing'}), new List('Test'), new List('done')],
      cover: 'default-table-cover'
    }, object)

    for (let obj in table) {
      this[obj] = table[obj]
    }
  }

  get link () {
    return S(this.title).slugify().s
  }
  addList (list = null) {
    this.lists.push(new List(list))
  }
}
