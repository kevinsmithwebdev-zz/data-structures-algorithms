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
  removeDup1() {
    if (!this.head)
      return false

    let valSet = new Set()
    valSet.add(this.head.value)
    let curNode = this.head.next
    let prevNode = this.head

    while (curNode) {
      if (valSet.has(curNode.value)) {
        prevNode.next = curNode.next
        curNode = curNode.next
        this.length--
      } else {
        valSet.add(curNode.value)
        prevNode = curNode
        curNode = curNode.next
      }
    }
  }
  removeDup2() {
    let curNode = this.head
    let count = 0

    while (curNode) {
      let runner = curNode
      while (runner.next) {
        if (runner.next.value===curNode.value) {
          runner.next=runner.next.next
        } else {
          runner = runner.next
        }
      }

      curNode = curNode.next
    }
  }
}


const testArr = [
  {
    list: new LinkedList(6, 7, 7, 1, 4, 7),
    exp: [7, 4, 1, 6]
  },
  {
    list: new LinkedList(3, 2, 1),
    exp: [1, 2, 3]
  },
  {
    list: new LinkedList(9, 5, 3, 6, 5, 2, 3, 3, 5),
    exp: [5, 3, 2, 6, 9]
  },
  {
    list: new LinkedList(3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1),
    exp: [1, 2, 3]
  }
]

console.log('\n\n****** Test 1')
for (let i=0; i<testArr.length; i++) {
  let inStr  = testArr[i].list.toArray().join(', ')
  let expStr = testArr[i].exp.join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr)
  console.log('exp ->', expStr)
  testArr[i].list.removeDup1()
  let outStr = testArr[i].list.toArray().join(', ')
  console.log('out ->', outStr)
  console.log("Pass? --", (outStr===expStr)?'true':'false')
}

console.log('\n\n****** Test 2')
for (let i=0; i<testArr.length; i++) {
  let inStr  = testArr[i].list.toArray().join(', ')
  let expStr = testArr[i].exp.join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr)
  console.log('exp ->', expStr)
  testArr[i].list.removeDup2()
  let outStr = testArr[i].list.toArray().join(', ')
  console.log('out ->', outStr)
  console.log("Pass? --", (outStr===expStr)?'true':'false')
}
