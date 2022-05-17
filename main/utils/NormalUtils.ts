export function findNode<T extends Node = Node>(treeNode: T, callback: (node: T) => boolean): T | undefined {
    if (!treeNode) {
        return;
    }
    const findIt = callback(treeNode);
    let childNodes;
    if (findIt) {
        return treeNode;
    }
    if (!childNodes) {
        childNodes = treeNode.childNodes;
    }
    if (childNodes) {
        for (let i = 0; i < childNodes.length; i++) {
            const result = findNode(childNodes[i], callback);
            if (result) {
                return result;
            }
        }
    }
}
