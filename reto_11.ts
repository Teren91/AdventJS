function decodeFilename(filename: string): string {
    
    var result: string = '';

    const indexInicial: number = filename.indexOf('_') + 1;
    const indexFinal: number = filename.indexOf('.', filename.indexOf('.') +1 );
    
    return filename.substring(indexInicial, indexFinal);
  }

  var test: string = '';
  
test = decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
console.log(test)
// ➞ "sleighDesign.png"

test = decodeFilename('42_chimney_dimensions.pdf.hack2023')
console.log(test)
// ➞ "chimney_dimensions.pdf"

test = decodeFilename('987654321_elf-roster.csv.tempfile')
console.log(test)
// ➞ "elf-roster.csv"