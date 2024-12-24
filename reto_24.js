var Reto24;
(function (Reto24) {
    function isTreesSynchronized(tree1, tree2) {
        // Code here
        return [false, ''];
    }
    var tree = {
        value: '⭐️',
        left: {
            value: '🎅'
            // left: {...}
            // right: { ... }
        },
        right: {
            value: '🎁'
            // left: { ... }
            // right: { ...&nbsp;}
        }
    };
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
