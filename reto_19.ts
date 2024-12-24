namespace Reto19 {

    function distributeWeight(weight: number): string {

        const boxRepresentations = {
            1: [" _ ", "|_|"],
            2: [" ___ ", "|___|"],
            5: [" _____ ", "|     |", "|_____|"],
            10: [" _________ ", "|         |", "|_________|"]
        }
        
        const boxes = [10, 5, 2, 1];
        const result: string[][] = [];
        for (const box of boxes)
        {
            while(weight >= box)
            {
                result.push(boxRepresentations[box]);
                weight -= box;
            }
        }

        //Reutilizar borde inferior de las cajas
        const finalResult: string[] = [];
        for (let i = 0; i < result.length; i++)
        {
            if(i === 0)
            {
                finalResult.push(...result[i]);
            }
            else{
                finalResult.push(result[i][0]);
                finalResult.push(result[i][1].replace('|', ' '));
                if(result[i].length > 2)
                {
                    finalResult.push(result[i][2]);
                }
            }
        }

        return finalResult.join("\n");
    }

    console.log(distributeWeight(1));
    // Devuelve:
    //  _
    // |_|

    console.log(distributeWeight(2));
    // Devuelve:
    //  ___
    // |___|

    console.log(distributeWeight(3));
    // Devuelve:
    //  _
    // |_|_
    // |___|

    console.log(distributeWeight(4));
    // Devuelve:
    //  ___
    // |___|
    // |___|

    console.log(distributeWeight(5));
    // Devuelve:
    //  _____
    // |     |
    // |_____|

    console.log(distributeWeight(6));
    // Devuelve:
    //  _
    // |_|___
    // |     |
    // |_____|
}

