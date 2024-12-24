
namespace reto21 {

    function treeHeight(tree: 
        { value: string; left: any; right: any } | null)
    : number 
    {
        // Caso base -> si el árbol es nulo, su altura es 0
        if (tree === null) return 0;

        const leftHeight = treeHeight(tree!.left);
        const rightHeight = treeHeight(tree!.right);
        // +1 por el nodo actual
        return Math.max(leftHeight, rightHeight) + 1;
    }


    // Definición del árbol
    const tree = {
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
    }

    // Representación gráfica del árbol:
    //        🎁
    //       /   \
    //     🎄     ❄️
    //    /  \      \
    //  ⭐   🎅      🦌

    // Llamada a la función
    console.log(treeHeight(tree));
    // Devuelve: 3
}