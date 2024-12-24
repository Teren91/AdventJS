var Reto18;
(function (Reto18) {
    function findInAgenda(agenda, phone) {
        var lines = agenda.split('\n');
        var matches = [];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            var phoneNumber = line.match(/\+?\d{1,2}-\d{3}-\d{3}-\d{3}/);
            if (!phoneNumber)
                continue;
            var cleanPhoneNumber = phoneNumber[0];
            if (!cleanPhoneNumber.includes(phone))
                continue;
            var nameMatch = line.match(/<.*?>/);
            if (!nameMatch)
                continue;
            var name_1 = nameMatch[0].slice(1, -1);
            var address = line.replace(cleanPhoneNumber, '').replace(nameMatch[0], '').trim();
            matches.push({ name: name_1, address: address });
        }
        if (matches.length === 1) {
            return matches[0];
        }
        return null;
    }
    var agenda = "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York";
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
})(Reto18 || (Reto18 = {}));
