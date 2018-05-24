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

  removeKtoLast1(k) {
    console.log('&&&', this.length)
    if (k>this.length) {
      return undefined
    } else {
      let runner = this.head
      for (let i=0; i<this.length-k; i++) {
        runner = runner.next
      }
      return runner.value
    }
  }
  removeKtoLast2(k) {
    if (k>this.length) {
      return undefined
    } else {
      let runner = this.head
      for (let i=0; i<this.length-k; i++) {
        runner = runner.next
      }
      return runner.value
    }
  }

}


let testArr = [
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 3,
    exp: 5
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 2,
    exp: 6
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 10,
    exp: undefined
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 7,
    exp: 1
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 1,
    exp: 7
  },
]

console.log('\n\n****** removeKtoLast1')
for (let i=0; i<testArr.length; i++) {
  let inStr  = testArr[i].list.toArray().join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr, '   k = ', testArr[i].k)
  console.log('exp ->', testArr[i].k)
  let output = testArr[i].list.removeKtoLast1(testArr[i].k)
  console.log('out ->', output)
  console.log("Pass? --", (output===testArr[i].exp)?'true':'false')
}

testArr = [
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 3,
    exp: 5
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 2,
    exp: 6
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 10,
    exp: undefined
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 7,
    exp: 1
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 1,
    exp: 7
  },
]

console.log('\n\n****** removeKtoLast2')
for (let i=0; i<testArr.length; i++) {
  let inStr  = testArr[i].list.toArray().join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr, '   k = ', testArr[i].k)
  console.log('exp ->', testArr[i].k)
  let output = testArr[i].list.removeKtoLast2(testArr[i].k)
  console.log('out ->', output)
  console.log("Pass? --", (output===testArr[i].exp)?'true':'false')
}

// wowsers - recursive?
