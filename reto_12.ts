function calculatePrice(ornaments: string): number | undefined {

    const prices = new Map<string, number>([
        ["*", 1],
        ["o", 5],
        ["^", 10],
        ["#", 50],
        ["@", 100]
    ]);

    let result: number = 0;
    let currentOrnament: string = "";
    let nextOrnament: string = "";

    for (let i = 0; i < ornaments.length; i++) { 
         currentOrnament = ornaments[i];
         nextOrnament = ornaments[i+1];   
         
         if(!prices.has(currentOrnament)){
             return undefined;
         }

        const currentPrice = prices.get(currentOrnament)!;
        
        if( nextOrnament && prices.get(nextOrnament)! > prices.get(currentOrnament)!)         
        {
            result -= currentPrice;
        }
        else{        
            result += currentPrice;
        }   
    }
    return result;
  }

calculatePrice('***');  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)

// calculatePrice('#@*o@#@') // 50 - 100 + 1 - 5 - 100 + 50 - 100

