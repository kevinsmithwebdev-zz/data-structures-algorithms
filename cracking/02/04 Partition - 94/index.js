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
    this.length++
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
      curNode = curNode.next
    }
    return arr
  }

  toString() {
    return this.toArray().join(', ')
  }

  //*************

  kthPointer(k) {
    let runner = this.head
    for (let i=1; i<k; i++) {
      runner = runner.next
    }
    return runner
  }

  partition(p) {
    console.log('p', p)
    let l1 = new LinkedList()
    let l2 = new LinkedList()

    let tailOfL1
    let runner = this.head

    while (runner) {
      if (runner.value<p) {
        l1.addToHead(runner.value)
        if (!tailOfL1)
          tailOfL1 = l1.head
      } else {
        l2.addToHead(runner.value)
      }
      runner = runner.next
    }
    tailOfL1.next = l2.head
    this.head = l1.head
  }
}

let testArr = [
  {
    list: new LinkedList(3, 5, 8, 5, 10, 2, 1),
    partition: 5
  }
]


for (let i=0; i<testArr.length; i++) {
  console.log('sanity:')
  console.log(testArr[i].list)
  let kth = testArr[i].list.kthPointer(testArr[i].k)
  let inStr  = testArr[i].list.toString()
  testArr[i].list.partition(testArr[i].partition)
  let outStr  = testArr[i].list.toString()
  console.log('\n*** test', i)
  console.log('in  ->', inStr, '   partition =', testArr[i].partition)
  console.log('out ->', outStr)
}



// wowsers - recursive?
