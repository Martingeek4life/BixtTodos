import Utils from './Utils'
import Checklist from './Checklist'

export default class Card {
  constructor (arg) {
    let object = Utils.initiateObjectFromArgument(arg, 'Card', 'title')

    let card = Object.assign({
      title: '',
      description: '',
      members: [],
      checklists: [],
      coverImg: '',
      filesJoined: []
    }, object)

    for (let key in card) {
      this[key] = card[key]
    }
  }

  deleteChecklist (i) {
    this.checklists.splice(i, 1)
  }

  addChecklist (title) {
    this.checklists.push(new Checklist(title))
  }
  /* ma fonction pour la checklist */
  addChecklists (checklist) {
    this.checklists.push(checklist)
  }
}
