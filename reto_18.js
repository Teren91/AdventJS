var reto18;
(function (reto18) {
    function treeHeight(tree) {
        // Caso base -> si el árbol es nulo, su altura es 0
        if (tree === null)
            return 0;
        var leftHeight = treeHeight(tree.left);
        var rightHeight = treeHeight(tree.right);
        // +1 por el nodo actual
        return Math.max(leftHeight, rightHeight) + 1;
    }
    // Definición del árbol
    var tree = {
        value: '🎁',
        left: {
            value: '🎄',
            left: {
                value: '⭐',
                left: null,
                right: null
            },
            right: {
                value: '🎅',
                left: null,
                right: null
            }
        },
        right: {
            value: '❄️',
            left: null,
            right: {
                value: '🦌',
                left: null,
                right: null
            }
        }
    };
    // Representación gráfica del árbol:
    //        🎁
    //       /   \
    //     🎄     ❄️
    //    /  \      \
    //  ⭐   🎅      🦌
    // Llamada a la función
    console.log(treeHeight(tree));
    // Devuelve: 3
})(reto18 || (reto18 = {}));
