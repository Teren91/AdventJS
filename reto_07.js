function fixPackages(packages) {
    // var packagesOrdered: string = 
    //     packages.substring(0, packages.indexOf('('));
    // var reverse: string = '';
    // var packagesSubstring: string = '';
    // if(packages.indexOf('(') > 0)
    // {
    //     packagesOrdered += fixPackages(
    //         packages.substring(packages.indexOf('(')));
    // }
    // else{
    //     packagesSubstring = packages.substring(0, packages.indexOf(')'));
    //     for(let i = packagesSubstring.length - 1; i > 0; i--)
    //     {
    //         reverse += packagesSubstring[i];
    //     }
    //     packagesOrdered = reverse;
    //     if(packages.indexOf(')') == packages.lastIndexOf(')'))
    //     {
    //         packagesOrdered += packages.substring(packages.indexOf(')') + 1);
    //     }
    // }
    //    return packagesOrdered;
    while (packages.includes('(')) {
        packages = packages.replace(/\(([^()]*)\)/g, function (_, subStr) {
            return subStr.split('').reverse().join('');
        });
    }
    return packages;
}
var packages;
packages = fixPackages('a(cb)de');
console.log(packages);
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis
packages = fixPackages('a(bc(def)g)h');
console.log(packages);
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"
packages = fixPackages('abc(def(gh)i)jk');
console.log(packages);
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"
packages = fixPackages('a(b(c))e');
console.log(packages);
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
