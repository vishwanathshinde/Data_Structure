// Vishwanath Manik Shinde
// 2301179

class TreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      this.root = this._insert(this.root, data);
    }
  
    _insert(root, data) {
      if (root === null) {
        return new TreeNode(data);
      }
  
      if (data < root.data) {
        root.left = this._insert(root.left, data);
      } else if (data > root.data) {
        root.right = this._insert(root.right, data);
      }
  
      return root;
    }
  
    search(data) {
      return this._search(this.root, data);
    }
  
    _search(root, data) {
      if (root === null || root.data === data) {
        return root;
      }
  
      if (data < root.data) {
        return this._search(root.left, data);
      } else {
        return this._search(root.right, data);
      }
    }
  
    delete(data) {
      this.root = this._delete(this.root, data);
    }
  
    _delete(root, data) {
      if (root === null) {
        return null;
      }
  
      if (data < root.data) {
        root.left = this._delete(root.left, data);
      } else if (data > root.data) {
        root.right = this._delete(root.right, data);
      } else {
        // Node with only one child or no child
        if (root.left === null) {
          return root.right;
        } else if (root.right === null) {
          return root.left;
        }
  
        // Node with two children
        root.data = this._minValueNode(root.right).data;
  
        // Delete the in-order successor
        root.right = this._delete(root.right, root.data);
      }
  
      return root;
    }
  
    _minValueNode(root) {
      let current = root;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    inOrderTraversal() {
      const result = [];
      this._inOrderTraversal(this.root, result);
      return result;
    }
  
    _inOrderTraversal(root, result) {
      if (root !== null) {
        this._inOrderTraversal(root.left, result);
        result.push(root.data);
        this._inOrderTraversal(root.right, result);
      }
    }
  }
  
  // Example usage
  const bst = new BinarySearchTree();
  
  bst.insert(50);
  bst.insert(30);
  bst.insert(70);
  bst.insert(20);
  bst.insert(40);
  bst.insert(60);
  bst.insert(80);
  
  console.log("In-order traversal:", bst.inOrderTraversal());
  
  const searchResult = bst.search(40);
  console.log("Search result for 40:", searchResult ? "Found" : "Not Found");
  
  bst.delete(30);
  console.log("In-order traversal after deleting 30:", bst.inOrderTraversal());
  