var Reto24;
(function (Reto24) {
    function isTreesSynchronized(tree1, tree2) {
        if (!tree1 || !tree2) {
            return [false, tree1 ? tree1.value : ''];
        }
        var areMirrors = function (node1, node2) {
            if (!node1 && !node2)
                return true;
            if (!node1 || !node2)
                return false;
            return (node1.value === node2.value
                && areMirrors(node1.left, node2.right)
                && areMirrors(node1.right, node2.left));
        };
        return [areMirrors(tree1, tree2), tree1.value];
    }
    // const tree = {
    //   value: '⭐️',
    //   left: {
    //     value: '🎅'
    //     // left: {...}
    //     // right: { ... }
    //   },
    //   right: {
    //     value: '🎁'
    //     // left: { ... }
    //     // right: { ...&nbsp;}
    //   }
    // }
    var tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
    };
    var tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' }
    };
    console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']
    /*
      tree1          tree2
       🎄              🎄
      / \             / \
    ⭐   🎅         🎅   ⭐
    */
    var tree3 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '🎁' }
    };
    console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']
    var tree4 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
    };
    console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']
    console.log(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })); // [false, '🎅']
})(Reto24 || (Reto24 = {}));
