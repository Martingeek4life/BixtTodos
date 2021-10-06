import Card from './Card'
import Utils from './Utils'

export default class List {
  constructor (arg) {
    let object = Utils.initiateObjectFromArgument(arg, 'List', 'title')

    let list = Object.assign({
      title: '',
      cards: []
    }, object)

    for (let key in list) {
      this[key] = list[key]
    }
  }

  addCard (card = null) {
    this.cards.push(new Card(card))
  }
}
