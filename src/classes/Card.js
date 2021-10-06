import Utils from './Utils'

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
}
