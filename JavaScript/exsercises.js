/*1-a.*/
var x = 2;
var y = 5;
var z = x + y;
console.log(z);
/*1-b*/
var string1 = 'Yes';
var string2 = 'No';
var string3 = string1 + '' + string2;
console.log(string3);
/*1-c*/
var stringA = 'Hello';
var stringB = 'Goodbye';
var lengthSum = stringA.length + stringB.length;
console.log(lengthSum);
/*2-a.*/
var stringA = 'I live in the area';
var stringB = stringA.toUpperCase();
console.log(stringB);
/*2-b*/
var stringB = 'Trees Grass';
var shortStringB = stringB.substring(0,5);
console.log(shortStringB);
/*2-c*/
var stringC = 'One Four Six';
var shortStringC = stringC.substr(-3);
console.log(shortStringC);
/*3-d*/
var textstring = 'welcome to your new home';
var newTextstring = textstring.substring(0,1).toUpperCase() + textstring.substring(1 ).toLowerCase();
console.log(newTextstring);
/*3-e*/
var stringE = 'You are now leaving'
var blanckSpace = stringE.indexOf('');
console.log(blanckSpace);
/*3-f*/
var stringF = 'welcome home';
var stringX = stringF.indexOf(7,4);
var stringFEdit = stringF.substring(0,1).toUpperCase() + stringF.substr(1,6).toLowerCase() + 
stringF.substring(0,9).toUpperCase() + stringF.substr(-4).toLowerCase();
console.log(stringFEdit);
/*4-a*/
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre',
'Noviembre', 'Diciembre'];
console.log(months[4]);
console.log(months[10]);
/*4-b*/
console.log(months.sort());
/*4-c*/
months.push('Birthdays');
months.unshift('Weddings')
console.log(months);
/*4-d*/
months.shift();
months.pop();
console.log(months);
/*4-e*/
months = months.reverse();
console.log(months);
/*4-f*/
var unitedMonths = months.join('-');
console.log(unitedMonths);
/*4-g*/
var sliceMonths = months.slice(4,11);
console.log(sliceMonths);
/*5-a*/
var arrayF = ['one', 'two', 'three', 'four', 'five'];
for(var x = 0; x< 5; x++) {
    alert(arrayF[x]);
}
/*5-b*/
for(var x = 0; x < 5; x++) 
{alert(arrayF[x ][0].toUpperCase() + arrayF[x].substring(1,arrayF[x].length))}
    
/*5-c*/
var sentece = ('');
for (x = 0; x < 5; x++){
    sentence += arrayF[x];
}
alert(sentence);
/*5-d*/
var arrayD = [];
for (x = 0; x < 10; x++){
    arrayD.push(x);
}
console.log(arrayD);



