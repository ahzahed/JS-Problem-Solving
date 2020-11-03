let str = '3+5+2+4+1';
// let distructStr = [...str];
// const [a,,b,,c,,d,,e] = distructStr;

// const newStr = [a,b,c,d,e].sort()
// console.log(`${newStr[0]}+${newStr[1]}+${newStr[2]}+${newStr[3]}+${newStr[4]}`);

// ShortCut
console.log(str.split('+').sort().join('+'));