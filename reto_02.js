function createFrame(names) {
    var maxLength = 0;
    var extraLength = 4;
    var nameLength = 0;
    var frame = "";
    var finalFrame = "";
    names.forEach(function (name) {
        if (name.length > maxLength) {
            maxLength = name.length;
        }
    });
    //Contenido del marco y bordes
    names.forEach(function (name) {
        frame += "* " + name.padEnd(maxLength, " ") + " *" + "\n";
    });
    //Montar el marco
    finalFrame = "".padEnd(maxLength + extraLength, "*") + "\n" +
        frame + "".padEnd(maxLength + extraLength, "*");
    return finalFrame;
}
console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
console.log(createFrame(['midu']));
console.log(createFrame(['a', 'bb', 'ccc']));
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']));
