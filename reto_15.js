var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function drawTable(data) {
    if (data.length === 0)
        return '';
    var headers = Object.keys(data[0]);
    var capitalizedHeaders = headers.map(function (header) { return header.charAt(0).toUpperCase() + header.slice(1); });
    console.log(capitalizedHeaders);
    var columnWidths = headers.map(function (header) { return Math.max.apply(Math, __spreadArray(__spreadArray([], data.map(function (row) { return String(row[header]).length; }), false), [header.length], false)); });
    var drawLine = function () { return '+' + columnWidths.map(function (width) { return '-'.repeat(width + 2); }).join('+') + '+'; };
    var drawRow = function (row) { return '| '
        + row.map(function (cell, i) { return cell.padEnd(columnWidths[i]); }).join(' | ')
        + ' |'; };
    var headerRow = drawRow(capitalizedHeaders);
    var dataRows = data.map(function (row) { return drawRow(headers.map(function (header) { return String(row[header]); })); });
    return __spreadArray(__spreadArray([drawLine(), headerRow, drawLine()], dataRows, true), [drawLine()], false).join('\n');
}
var result2 = '';
result2 = drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
]);
console.log(result2);
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
]);
console.log(result2);
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
