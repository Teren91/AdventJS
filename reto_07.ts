function fixPackages(packages: string): string {
    
    while (packages.includes('(')) 
    { 
        packages = packages.replace(/\(([^()]*)\)/g, (_, subStr) => 
            subStr.split('').reverse().join('')); 
    } 
    return packages;
}

var packages: string;

packages = fixPackages('a(cb)de')
console.log(packages);
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

packages = fixPackages('a(bc(def)g)h')
console.log(packages);
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

packages = fixPackages('abc(def(gh)i)jk')
console.log(packages);
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

packages = fixPackages('a(b(c))e')
console.log(packages);
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"