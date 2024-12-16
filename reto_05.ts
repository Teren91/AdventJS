type Shoe = {
    type: 'I' | 'R'
    size: number
  };


  function organizeShoes(shoes: Shoe[]): number[] {

    var currentPair: number[] = [];
    var currentSize: number = 0;
    var currentTpye: string = '';

    while(shoes.includes(shoes.find(size => size.type == 'I')!, 0)) 
    {
      shoes.forEach(shoe => {
  
        currentSize = shoe.size;
        currentTpye = shoe.type;
  
        if(currentTpye === 'I')
        {   
          if(shoes.find(size => size.size == currentSize && size.type == 'I')) 
          {
            if(shoes.find(size => size.size == currentSize && size.type == 'R')) 
            {
              currentPair.push(currentSize);
              shoes.splice(shoes.findIndex(size => size.size === currentSize && size.type === 'I'), 1);            
             
              shoes.splice(shoes.findIndex(size => size.size === currentSize && size.type === 'R'), 1);
            }
            else{
              shoes.splice(shoes.findIndex(size => size.size === currentSize && size.type === 'I'), 1);            
             
            }
          }
        }
      });

    }
    currentPair.sort();

    return currentPair;
  }

   var pairShoes: number[] = [];

  
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  pairShoes =organizeShoes(shoes)

  console.log(pairShoes)
  // [38, 42]
  
  const shoes2: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  // [38, 38]
  pairShoes =organizeShoes(shoes2)
  console.log(pairShoes)

  const shoes3: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
   pairShoes = organizeShoes(shoes3)

  console.log(pairShoes)
  //[]

  const shoes4: Shoe[] = [
    { type: 'I', size: 35 },
    { type: 'R', size: 35 },
    { type: 'I', size: 35 },
    { type: 'R', size: 35 },
    { type: 'I', size: 35 },
    { type: 'R', size: 35 }
  ]
  
   pairShoes = organizeShoes(shoes4)

  console.log(pairShoes)

  const shoes5: Shoe[] = [
    { type: 'I', size: 40 },
    { type: 'R', size: 40 },
    { type: 'I', size: 41 },
    { type: 'R', size: 41 },
    { type: 'I', size: 42 },
    { type: 'R', size: 42 },
    { type: 'I', size: 42 }
  ]
  
   pairShoes = organizeShoes(shoes5)

  console.log(pairShoes)