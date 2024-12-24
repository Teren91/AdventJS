namespace Reto24 {
    function isTreesSynchronized(
        tree1: { value: string; left?: any; right?: any } | undefined,
        tree2: { value: string; left?: any; right?: any } | undefined
    ): [boolean, string] {


        // Code here
        return [false, '']
    }
    const tree = {
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
      }

      const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
      }
      
      const tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' }
      }
      
      console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']
      
      /*
        tree1          tree2
         🎄              🎄
        / \             / \
      ⭐   🎅         🎅   ⭐
      */
      
      const tree3 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '🎁' }
      }
      
      console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']
      
      const tree4 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
      }
      
      console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']
      
      console.log(isTreesSynchronized(
        { value: '🎅' },
        { value: '🧑‍🎄' }
      )); // [false, '🎅']
}
