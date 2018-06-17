let nums1 = [4,5,8,0,0,0]
let nums2 = [1,2,3]
let m = 3
let n = 3

function mergeSorted(nums1, nums2, m, n) {
	let i1 = m-1
	let i2 = n-1

	while (i1>=0 && i2>=0) {
		if (nums1[i1]>nums2[i2])
			nums1[i1+i2+1] = nums1[i1--]
		else
			nums1[i1+i2+1] = nums2[i2--]
	}

	if (i2>=0)
		for (let i=0; i<=i2; i++) {
			nums1[i]=nums2[i]
		}

	return nums1
}

console.log('answer', mergeSorted(nums1, nums2, m, n))







let exp = [1,2,2,3,5,6]
