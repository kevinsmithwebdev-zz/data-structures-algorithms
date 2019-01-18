// Given an array of size N in which every number is between 1 and N, determine
// if there are any duplicates in it.  You are allowed to destroy the array
// if you like.

const hasDupes = arr => {
  let slot = 1
  for (let i = 0 ; i < arr.length; i++) {
    console.log('\nslot', slot, 'arr[slot-1]', arr[slot-1])
    if (arr[slot-1] === 0)
      return true
    slot = arr[slot-1]
    arr[slot-1] = 0
    console.log(arr)
  }
  return false
}

console.log(hasDupes([3, 2, 1, 3, 5, 6]))
