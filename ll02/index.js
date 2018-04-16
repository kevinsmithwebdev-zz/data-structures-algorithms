// const list = {
//   value: 'uno',
//   next: {
//     value: 'dos',
//     next: {
//       value: 'tres',
//       next: {
//         value: 'quatro',
//         next: {
//           value: 'cinco',
//           next: null
//         }
//       }
//     }
//   }
// }


class LinkedList {
  constructor(...values) {
    this.head = null
    this.length = 0
    this.addToHead(...values)
  }

  _addSingleToHead(value) {
    const newNode = { value }
    newNode.next = this.head
    this.head = newNode
  }

  addToHead(...values) {
    values.forEach(value => this._addSingleToHead(value))
    return this
  }

  toArray() {
    let arr = []
    let curNode = this.head
    while (curNode) {
      arr.push(curNode.value)
      this.length++
      curNode = curNode.next
    }
    return arr
  }

  find(value) {
    let curNode = this.head
    while (curNode) {
      if (curNode.value === value)
        return curNode
      curNode = curNode.next
    }
    return null
  }

  removeFromHead() {
    if (this.length === 0)
      return null
    let ret = this.head.value
    this.head = this.head.next
    this.length--
    return ret
  }

  remove(value) {
    if (this.length === 0)
      return null

    if (this.head.value === value)
      this.removeFromHead()

    let prevNode = this.head
    let curNode = prevNode.next

    while (curNode) {
      if (curNode.value === value) {
        prevNode.next = curNode.next
        return curNode
      }
      prevNode = curNode
      curNode = curNode.next
    }
    return null
  }


}

const list = new LinkedList('apple', 'banana', 'candy', 'dill pickles', 'elephat ears')

console.log(list.toArray())
console.log(list.remove('banana'))
console.log(list.toArray())
