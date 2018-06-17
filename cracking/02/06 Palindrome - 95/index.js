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
      curNode = curNode.next
    }
    return arr
  }

  toString() {
    return this.toArray().join(', ')
  }


  //*************
  isPalindrome() {
    let checkerList = new LinkedList()
    let runner = this.head
    for (let i=0; i<this.length/2; i++) {
      console.log('runner', runner)
      checkerList.addToHead(runner.value)
      runner = runner.next
    }
    console.log('checkerList', checkerList)
    console.log('this', this.toString())
    return 'apple'
  }

}


let testArr = [
  {
    list: new LinkedList(3, 2, 1, 2, 3),
    exp: true
  },
  {
    list: new LinkedList(3, 2, 1, 2, 3),
    exp: false
  },
]

for (let i=0; i<testArr.length; i++) {
  let inStr  = testArr[i].list.toArray().join(', ')
  console.log('\n*** test', i)
  console.log('in  ->', inStr)
  let exp = testArr[i].exp
  console.log('exp ->', exp)
  let out = testArr[i].list.isPalindrome()
  console.log('out ->', out)
  console.log("Pass? --", (out===exp)?'true':'false')
}



// wowsers - recursive?
