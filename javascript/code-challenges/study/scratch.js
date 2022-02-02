function getHeight(bt) {
  let max = 0;
  let current = bt.root;

  function helper(node, height) {
    if (node.left || node.right) {
      height++;
      max = Math.max(height, max);
    }
    if (node.left) {
      helper(node.left, height);
    }
    if (node.right) {
      helper(node.right, height);
    }
    return max;
  }
  return helper(current, 0);
}

let tree = new BinarySearchTree();

tree.root = new Node(15);
tree.root.left = new Node(10);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(13);
tree.root.left.left.left = new Node(5);
tree.root.left.left.right = new Node(9);
tree.root.right = new Node(25);
tree.root.right.left = new Node(22);
tree.root.right.right = new Node(27);
tree.root.right.left.left = new Node(17);

// sum = 150

// console.log('Pre Order:');
// console.log(tree.preOrder());
// console.log('**********');
// console.log('In Order:');
// console.log(tree.inOrder());
// console.log('**********');
// console.log('Post Order:');
// console.log(tree.postOrder());

function sumTree(root, sum = 0) {
  sum = sum + root.value;
  if (root.left) sum = sumTree(root.left, sum);
  if (root.right) sum = sumTree(root.right, sum);
  return sum;
}

function sumTreeMain(root) {
  let sum = 0;
  function sumTree(root) {
    sum = sum + root.value;
    if (root.left) {
      sumTree(root.left);
    }
    if (root.right) {
      sumTree(root.right);
    }
    return sum;
  }
  sumTree(root);
  return sum;
}

// console.log(sumTree(tree.root));
console.log(getHeight(tree));
// console.log(tree.contains(5));
// console.log(tree.contains(17));
// console.log(tree.add(3));
// tree.preOrder(tree.root);

function fizzbuzzrecursive(tree) {
  let current = tree.root;
  let result = [];

  function helper(node) {
    if (node === null) return;

    if (node.value % 5 === 0 && node.value % 2 === 0) {
      node.value = 'fizzbuzz';
    } else if (node.value % 2 === 0) {
      node.value = 'fizz';
    } else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }
    helper(node.left);
    result.push(node.value);
    helper(node.right);
  }
  helper(current);
  return result;
}

function findMax(tree) {
  let max = 0;
  let currentNode = tree.root;
  function helper(current) {
    if (current === null) {
      return null;
    }
    if (current.value > max) {
      max = current.value;
    }
    helper(current.left);
    helper(current.right);
  }
  helper(currentNode);
  return max;
}

// function level(tree) {
//   // let leftcount = 0;
//   // let rightcount = 0;
//   let levels = 0;
//   let currentNode = tree.root;

//   function helper(current) {
//     let tmp = 0;
//     if (current === null) {
//       return null;
//     }
//     if (current.left || current.right) {
//       tmp++;
//       max = Math.max(tmp, max);
//     }

//     if (current.left) {
//       helper(current.left);
//     }
//     if (current.right) {
//       helper(current.right);
//     }
//   }
//   helper(currentNode);
//   console.log(levels);
// }

// level(tree);

module.exports = { Node, BinaryTree, BinarySearchTree };

function sprinker(node) {
  let current = node;
  let total = 0;
  function traverse(current) {
    if (current === null) {
      return;
    }
    total = total + current.value;
    traverse(current.left);
    traverse(current.right);
  }
  traverse(current);
  return total;
}

console.log(sprinker(tree.root));

function getHeight(bt) {
  let max = 0;
  let current = bt.root;

  function helper(node, height) {
    if (node.left || node.right) {
      height++;
      max = Math.max(height, max);
    }
    if (node.left) {
      helper(node.left, height);
    }
    if (node.right) {
      helper(node.right, height);
    }
    return max;
  }
  return helper(current, 0);
}

let tree = new BinarySearchTree();

tree.root = new Node(15);
tree.root.left = new Node(10);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(13);
tree.root.left.left.left = new Node(5);
tree.root.left.left.right = new Node(9);
tree.root.right = new Node(25);
tree.root.right.left = new Node(22);
tree.root.right.right = new Node(27);
tree.root.right.left.left = new Node(17);

// sum = 150

// console.log('Pre Order:');
// console.log(tree.preOrder());
// console.log('**********');
// console.log('In Order:');
// console.log(tree.inOrder());
// console.log('**********');
// console.log('Post Order:');
// console.log(tree.postOrder());

function sumTree(root, sum = 0) {
  sum = sum + root.value;
  if (root.left) sum = sumTree(root.left, sum);
  if (root.right) sum = sumTree(root.right, sum);
  return sum;
}

function sumTreeMain(root) {
  let sum = 0;
  function sumTree(root) {
    sum = sum + root.value;
    if (root.left) {
      sumTree(root.left);
    }
    if (root.right) {
      sumTree(root.right);
    }
    return sum;
  }
  sumTree(root);
  return sum;
}

// console.log(sumTree(tree.root));
console.log(getHeight(tree));
// console.log(tree.contains(5));
// console.log(tree.contains(17));
// console.log(tree.add(3));
// tree.preOrder(tree.root);

// A: [edge { vertex: {value: D},
//       weight: 0},
//     {  vertex: {value: C},
//             weight: 0},
//     }
//   ]
let input = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0],
];

function matrix2List(m) {
  for (let i = 0; i < m.length; i++) {
    let arr = [];
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === 1) {
        arr.push(j);
      }
    }
    let output = arr.map(num => (num + 10).toString(36));
    console.log(`${(i + 10).toString(36)}| -> ${output.join(' -> ')}`);
  }
}

matrix2List(input);

// function test() {
//   let arr = [];
//   for (let i = 0; i <= 5; i++) {
//     arr.push(i);
//     console.log(i);
//   }
//   console.log(arr);
// }

// test();
