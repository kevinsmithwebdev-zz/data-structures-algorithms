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

  //*************

  kthPointer(k) {
    let runner = this.head
    for (let i=1; i<k; i++) {
      runner = runner.next
    }
    return runner
  }

  deleteMiddleNode(kth) {
    console.log(kth)
    kth.value = kth.next.value
    kth.next = kth.next.next
  }

}


let testArr = [
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 3,
    exp: [1, 2, 4, 5, 6, 7]
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 6,
    exp: [1, 2, 3, 4, 5, 7]
  },
  {
    list: new LinkedList(7, 6, 5, 4, 3, 2, 1),
    k: 2,
    exp: [1, 3, 4, 5, 6, 7]
  },

]


console.log('\n\n****** removeKtoLast1')
for (let i=0; i<testArr.length; i++) {
  let kth = testArr[i].list.kthPointer(testArr[i].k)
  let inStr  = testArr[i].list.toArray().join(', ')
  let expStr = testArr[i].exp.join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr, '   k = ', testArr[i].k)
  console.log('exp ->', expStr)
  testArr[i].list.deleteMiddleNode(kth)
  let outStr = testArr[i].list.toArray().join(', ')
  console.log('out ->', outStr)
  console.log("Pass? --", (outStr===expStr)?'true':'false')
}



// wowsers - recursive?
