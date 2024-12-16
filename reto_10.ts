function compile (instructions: string[]): number | undefined {
    
    var C: number = 0;
    var A: number = 0;
    var salir: boolean = true;
    var incrementar: boolean = false;
    var indice: number = 0;
    var instruccion: string = '';
    
    for(var i = 0; i < instructions.length; i++)
    {
        if(instructions[i].includes('A'))
        {
           salir = false;
        }
    }

    if(salir)
    {
        return undefined;
    }

    while(!salir)
    {   
        instruccion = instructions[indice].split(' ')[0];
        incrementar = true;
        
        if(indice == instructions.length -1)
        {
            salir = true;;
        }

        if(instruccion =='MOV') 
        {
            if(instructions[indice].split(' ')[2] == 'A') 
            {
                A = C;
                console.log(indice + ': paso Mov 0: ' + C);

            }else{
                
                if(isNumber(instructions[indice].split(' ')[1]))
                {
                    C = parseInt(instructions[indice].split(' ')[1]);
                    console.log(indice + ':paso Mov X: ' + C);
                }else{
                    C = A;
                    console.log(indice + ':paso Mov <> 0: ' + C);
                }
            }
        }
        else if(instruccion == 'INC')
        {
            if(instructions[indice].includes('A'))
            {
                A++;
            }else{

                C++;
            }
            console.log(indice + ':paso INC: ' + C);
        }
        else if(instruccion == 'DEC') 
        {
            if(instructions[indice].includes('A'))
            {
                A--;
            }else{
                C--;
            }
            console.log(indice + ':paso DEC: ' + C);
        }

        else if(instruccion == 'JMP')
        {
            if(C == 0)
            {
                console.log(indice + ':paso JUMP: ' + C);
                incrementar = false;
                indice = parseInt(instructions[indice].split(' ')[2]);
                continue;
            }
            else {
                console.log(indice + ':paso JUMP <> 0: ' + C);
            }
        }
        
        if(incrementar)
            indice++;   
    }
    function isNumber(n: string): boolean {
      return /^[0-9]+$/.test(n);
    }

    return A ;
  }

    var result: number | undefined = 0;
  const instructions = [
    'MOV -1 C', // copia -1 al registro 'C', //0
    'INC C', // incrementa el valor del registro 'C' //1
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'MOV C A', // copia el registro 'C' al registro 'a', //3
    'INC A' // incrementa el valor del registro 'a' //4
  ]
  
  result = compile(instructions) // -> 2

  console.log(result)

  const instructions2 = [
    'INC A', // incrementa el valor del registro 'C' //1
    'INC A', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'DEC A', // copia el registro 'C' al registro 'a', //3
    'MOV A B' // incrementa el valor del registro 'a' //4
  ]
  result = compile(instructions2) // -> 1
  console.log(result)

  const instructions3 = [
    'MOV 5 B', // incrementa el valor del registro 'C' //1
    'DEC B', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'MOV B A', // copia el registro 'C' al registro 'a', //3
    'INC A' // incrementa el valor del registro 'a' //4
  ]
  result = compile(instructions3) // -> 5
  console.log(result)

  const instructions4 = [
    'MOV 2 X', // incrementa el valor del registro 'C' //1
    'DEC X', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'DEC X ', // copia el registro 'C' al registro 'a', //3
    'JMP X 1', // incrementa el valor del registro 'a' //4
    'MOV X A'
  ]
  result = compile(instructions4) // -> -2
  console.log(result)

  const instructions5 = [
    'MOV 10 Z', // incrementa el valor del registro 'C' //1
    'DEC Z', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'DEC Z ', // copia el registro 'C' al registro 'a', //3
    'MOV Z A'
  ]
  result = compile(instructions5) // -> 8
  console.log(result)
 
  
  const instructions6 = [
    'INC C', // incrementa el valor del registro 'C' //1
    'DEC B', // salta a la instrucción en el índice 1 si 'C' es 0 //2
    'MOV C Y ', // copia el registro 'C' al registro 'a', //3
    'INC Y'
  ]
  result = compile(instructions6) // -> 8
  console.log(result)