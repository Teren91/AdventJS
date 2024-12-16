function createFrame(names: string[]): string {

    var maxLength : number = 0;
    var extraLength : number = 4;
    var frame: string = "";
    var finalFrame: string = "";

    names.forEach(name => {
        if (name.length > maxLength) {
            maxLength = name.length;
        }
    });

    //Contenido del marco y bordes
    names.forEach(name => {
        frame += "* " +name.padEnd(maxLength, " ") + " *" + "\n";
    });

    //Montar el marco
    finalFrame = 
        "".padEnd(maxLength + extraLength, "*") + "\n" + //superior
        frame + //interior
        "".padEnd(maxLength + extraLength, "*"); //inferior

    return finalFrame;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
console.log(createFrame(['midu']));
console.log(createFrame(['a', 'bb', 'ccc']));
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));