/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {


    function search(root, elem) {
        if (!root) {
            return false
        }
        if (root.val === elem) {
            return true
        }

        if (root.val < elem) {
            return search(root.right, elem)
        }

        if (root.val > elem) {
            return search(root.left, elem)
        }

    }

    function find(root, k, parent) {
        if (!root) {
            return false
        }

        let elem = k - root.val

        let isPresent = search(parent, elem)
        if (elem === root.val) {
            return find(root.left, k, parent) || find(root.right, k, parent)

        }
        if (isPresent) {
            return true
        } else {
            return find(root.left, k, parent) || find(root.right, k, parent)

        }

    }

    return find(root, k, root)

};