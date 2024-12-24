namespace reto22 {
    function generateGiftSets(gifts: string[]): string[][] {
        const result: string[][] = [];

        function backtrack(start: number, currentSet: string[]) {
            if (currentSet.length > 0) {
                result.push([...currentSet]);
            }

            for (let i = start; i < gifts.length; i++) {
                currentSet.push(gifts[i]);
                backtrack(i + 1, currentSet);
                currentSet.pop();
            }
        }
        backtrack(0, []);
        return result.sort((a, b) => { 
            if (a.length !== b.length) { 
                return a.length - b.length; 
            } 
            
            for (let i = 0; i < a.length; i++) { 
                if (a[i] !== b[i]) { 
                    return gifts.indexOf(a[i]) - gifts.indexOf(b[i]); 
                } 
            } 
            return 0; 
        });
    }

    console.log(generateGiftSets(['car', 'doll', 'puzzle']));
    // [
    //   ['car'],
    //   ['doll'],
    //   ['puzzle'],
    //   ['car', 'doll'],
    //   ['car', 'puzzle'],
    //   ['doll', 'puzzle'],
    //   ['car', 'doll', 'puzzle']
    // ]

    console.log(generateGiftSets(['ball']));
    // [
    //   ['ball']
    // ]

    console.log(generateGiftSets(['game', 'pc']));
    // [
    //   ['game'],
    //   ['pc'],
    //   ['game', 'pc']
    // ]
}