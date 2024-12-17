function drawTable(data: Array<Record<string, string | number>>): string {


    if (data.length === 0) return ''; 
    const headers = Object.keys(data[0]); 

    const capitalizedHeaders = 
        headers.map(header => header.charAt(0).toUpperCase() + header.slice(1)); 
    

    const columnWidths = 
        headers.map(header => Math.max(...data.map(row => String(row[header]).length), header.length)); 
        
    //Pintar cabecera
    const drawLine = () => '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+'; 
    //Pintar el contenido de la tabla
    const drawRow = (
        row: string[]) => '| ' 
        + row.map((cell, i) => cell.padEnd(columnWidths[i])).join(' | ') 
        + ' |'; 
        
    const headerRow = drawRow(capitalizedHeaders); 
    const dataRows = data.map(row => drawRow(headers.map(header => String(row[header])))); 
    
    return [drawLine(), headerRow, drawLine(), ...dataRows, drawLine()].join('\n');

}

var result2: string = '';
result2 = drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
])
console.log(result2)
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

result2 = drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
])
console.log(result2)
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+