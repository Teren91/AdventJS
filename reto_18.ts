namespace Reto18 {

    function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
        const lines = agenda.split('\n');
        const matches : { name: string; address: string }[] = [];

        for (const line of lines){
            const phoneNumber = line.match(/\+?\d{1,2}-\d{3}-\d{3}-\d{3}/);
            if(!phoneNumber) continue;

            const cleanPhoneNumber = phoneNumber[0];
            if(!cleanPhoneNumber.includes(phone)) continue;


            const nameMatch = line.match(/<.*?>/);
            if(!nameMatch) continue;

            const name = nameMatch[0].slice(1, -1);
            const address = line.replace(cleanPhoneNumber, '').replace(nameMatch[0], '').trim();
            
            matches.push({ name, address});
        }

        if(matches.length === 1){
            return matches[0];
        }
    

        return null;
    }


    
    const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

    console.log(findInAgenda(agenda, '34-600-123-456'));
    // { name: "Juan Perez", address: "Calle Gran Via 12" }

    console.log(findInAgenda(agenda, '600-987'));
    // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

    console.log(findInAgenda(agenda, '111'));
    // null
    // Explicación: No hay resultados

    console.log(findInAgenda(agenda, '1'));
    // null
    // Explicación: Demasiados resultados
}