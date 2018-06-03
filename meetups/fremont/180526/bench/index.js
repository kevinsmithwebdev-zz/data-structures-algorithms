function benchTest(bench) {
	let results = {
		front: {
			space: 0,
			end: 0
		},
		back: {
			space: 0,
			start: 0
		},
		midMax: {
			space: 0,
			start: 0
		}
	}
	// check front
	for (let i=0; i<bench.length; i++) {
		if (bench[i]) {
			results.front.space = i
			results.front.end = i
			console.log('front break', results.front.end)
			break
		}
	}

	if (results.front.space===bench.length)
		return 0

	// back
	for (let i=bench.length-1; i>results.front.space; i--) {
		if (bench[i]) {
			results.back.space = i
			results.back.start = i
			console.log('back break', results.back.end)
			break
		}
	}

	let curStart = results.front.end+1
	let curSpace = 0
	console.log('here1')
	console.log(results.front.end)
	console.log(results.back.start)
	for (let i=results.front.end+1; i<results.back.start-1; i++) {
		console.log('mid ', curSpace, curStart, results.midMax)
		if (!bench[i]) {
			curSpace++
			curStart++
		} else if (curSpace>results.midMax.space) {
			results.midMax.space = curSpace
			results.midMax.start = curStart
			console.log('new mid', results.midMax)
			curSpace = 0
			curStart = 0

		}
	}
	results.midMax.space = Math.floor(results.midMax/2)

	if (results.front.space>=results.back.space && results.front.space>=results.midMax.space)
		return 0

	if (results.back.space>=results.midMax.space)
		return bench.length-1

	return results.midMax.start + results.midMax.space

}









const testArr = [ 0, 0, 1, 0, 0, 0, 1, 0 ]

console.log(benchTest(testArr))
