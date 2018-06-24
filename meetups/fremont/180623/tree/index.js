class TreeNode {
	constructor(data) {
		this.data = data
		this.parent = null
		this.left = null
		this.right = null
	}
}


class Tree {
	constructor(data) {
		// if (Array.isArray(data)) {
		// 	let node = new TreeNode(data[0])
		// 	this._root = node
		//
		// 	console.log('array')
		// } else {
			let node = new TreeNode(data)
			this._root = node
		// }
	}

}

function traverse(node) {
	if (node.left)
		traverse(node.left)
	if (node.right)
		traverse(node.right)
}

let answer = []

function traverseDiag(node, level) {
	if(!answer[level]) {
		answer.push([])
	}
	answer[level].push(node.data)
	if (level%2===0) {
		if (node.right) {
			traverseDiag(node.right, level+1)
		}
		if (node.left) {
			traverseDiag(node.left, level+1)
		}
	} else {
		if (node.left) {
			traverseDiag(node.left, level+1)
		}
		if (node.right) {
			traverseDiag(node.right, level+1)
		}
	}
}

let tree = new Tree(3)

tree._root.left = new TreeNode(9)
tree._root.right = new TreeNode(20)
tree._root.right.left = new TreeNode(15)
tree._root.right.right = new TreeNode(7)

traverseDiag(tree._root, 0)

console.log(answer)
