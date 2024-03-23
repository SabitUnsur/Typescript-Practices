//DATA TYPES

// let first: number = 123;
// let second : number = 0x37CF; //hexadecimal
// let third : number = 0o377; //octal
// let fourth : number = 0b111011; //binary

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// let employeeName: string = "John";
// let employeeDept: string = "HR";

// let employeeDesc1: string = `${employeeName} works in the ${employeeDept} department.`;

// console.log(employeeName);

// let isPresent: boolean = true;


//ARRAYS
let firstNames: string[] = ["John", "Marry", "James"];
let secondNames: Array<string> = ["John", "Marry", "James"]; //2. kullanım
let mixedArr: [string, number, boolean] = ["John", 123, true]; //tuple

let values: (string | number)[] = ["John", 123, "James"]; //union type
let values2: Array<string | number> = ["John", 123, "James"]; //union type

let arr = [1, true, "a"]; //any type
 

for (let i = 0; i < firstNames.length; i++) {
    console.log(firstNames[i]);
}

//TUPLE 
let Id:number=1;
let instructorName:string="John";
let instructor: [number, string] = [Id, instructorName];

let employee: [number, string][];
employee = [[1, "Steve"], [2, "James"]]; //array of tuples

/* <--------------------------------------------------------------------------------->*/ 

//Objects
type Person = { 
    name: string; 
    age: number; 
};

let person: Person = {
    name: "John",
    age: 30
};

//YA DA 
// let person2 = {
//     name: "John",
//     age: 30
// } as Person;

// //YA DA 
// let person3:{
//     name: string;
//     age: number;
// };

// person3 = {
//     name: "John",
//     age: 30
// };


//console.log(person.name); 

/* <--------------------------------------------------------------------------------->*/ 

//ENUM 

enum Media{
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

console.log(Media.Magazine); //2
console.log(Media[2]); //Magazine

enum PrintMedia { 
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}

console.log(PrintMedia.Magazine); //MAGAZINE
console.log(PrintMedia["Magazine"]); //MAGAZINE

/* <--------------------------------------------------------------------------------->*/ 

//UNION TYPE
//bir değişkenin birden fazla tipi olabilir

let code: (string | number);
// code = 123; //number
code = "ABC"; //string

console.log(code);

/* <--------------------------------------------------------------------------------->*/ 


//ANY TYPE
//herhangi bir tipte veri alabilir, bunu kullanma sebebimiz tip belirlemeden kullanmak

let something: any = 123;
something = "ABC";
something = true;
something = {
    firstName:'Steve',
    lastName:'Smith'
}
console.log(something);

let arr2: any[] = [1, true, "a"];

/* <--------------------------------------------------------------------------------->*/ 

//VOID TYPE
//fonksiyonun geri dönüş değeri yoksa kullanılır

function sayHi(): void {
    console.log('Hi');
}

sayHi();

/* <--------------------------------------------------------------------------------->*/ 

//NEVER TYPE
//fonksiyonun hiçbir zaman geri dönüş değeri olmayacaksa kullanılır,  belirttiğimiz bir hata döner.

//Never ve Void arasındaki fark: 
// void aslen geriye undefined veya null dönerken, never hiçbir zaman bir şey dönmez.

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

//throwError('This is an error');

// let something3 : void = null; //null ve undefined  voidde bir değişkene atanabilir
// let nothing :never = undefined; //hata, atama yapılamaz

/* <--------------------------------------------------------------------------------->*/ 

//TYPE INFERENCE
//değişkenin tipini belirtmezsek, typescript otomatik olarak tipini belirler

let counter = 0;
console.log(typeof counter); //number 

// function increment(counter: number){
//     return counter+1;
// }

function increment(counter: number): number{
    return counter+1;
}

//AYNI SONUCU VERİR

console.log(increment(1)); //2

// let a = 123;
// let b = "ABC";
// //a = b; //hata, farklı tipler

function add(a: number, b: number){ 
    return a+b;
}

let total : number = add(1,2);

/* <--------------------------------------------------------------------------------->*/ 

//TYPE ASSERTION 
//bir değişkenin tipini belirlemek için kullanılır

let code2: any = 123;
console.log(typeof(code2)); //number, inferance'dan geldi.

let employeeCode = <number> code2;
console.log(typeof(code2)); //number, type assertion'dan geldi

interface Employee {
    name: string,
    code: number
}

let employee2 = <Employee> {};
console.log(typeof(employee2)); //Employee döner.
employee2.name = "John"; 

/* <--------------------------------------------------------------------------------->*/ 

//CONDITION & LOOP

let x : number = 10;
let y : number = 20;

if(x>y){
    console.log('x is greater than y');
}
else if(x==y){ 
    console.log('x is equal to y');
}
else{
    console.log('y is greater than x');
}

x>y ? console.log('x is greater than y') : console.log('y is greater than x');


//SWITCH CASE

let day: number = 2;

switch(day){ 
    case 0: 
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    default:
        console.log('Invalid day');
        break;

}


//FOR LOOP
 for(let i=0; i<5; i++){
     console.log(i);
 }

//For in loop / For of loop
//For in loop: index numarasını döner
//For of loop: değeri döner

let arr3 = [10, 20, 30, 40];

for(let i in arr3){
    console.log(i); //0 1 2 3
}

for(let i of arr3){
    console.log(i); //10 20 30 40
}


//WHILE LOOP
let counters = 5;
while(counters>0){
    console.log(counters);
    counters--;
    if(counters==3){
        break;
    }
}

do{
    console.log(counters);
    counters++;
    if(counters==8){
        break;
    }
}while(counters>0);

//do, while döngüsünde, döngü en az bir kez çalışır, sonra koşula bakar.