namespace Reto24 {
  function isTreesSynchronized(
    tree1: { value: string; left?: any; right?: any } | undefined,
    tree2: { value: string; left?: any; right?: any } | undefined
  ): [boolean, string] {

    if (!tree1 || !tree2) {
      return [false, tree1 ? tree1.value : ''];
    }

    const areMirrors = (node1: any, node2: any): boolean => {
      if (!node1 && !node2) return true;
      if (!node1 || !node2) return false; 
      return ( 
        node1.value === node2.value 
        && areMirrors(node1.left, node2.right) 
        && areMirrors(node1.right, node2.left) 
      ); 
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
