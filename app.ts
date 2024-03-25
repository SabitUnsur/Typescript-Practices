// //DATA TYPES

// // let first: number = 123;
// // let second : number = 0x37CF; //hexadecimal
// // let third : number = 0o377; //octal
// // let fourth : number = 0b111011; //binary

// // console.log(first);
// // console.log(second);
// // console.log(third);
// // console.log(fourth);

// // let employeeName: string = "John";
// // let employeeDept: string = "HR";

// // let employeeDesc1: string = `${employeeName} works in the ${employeeDept} department.`;

// // console.log(employeeName);

// // let isPresent: boolean = true;


// //ARRAYS
// let firstNames: string[] = ["John", "Marry", "James"];
// let secondNames: Array<string> = ["John", "Marry", "James"]; //2. kullanım
// let mixedArr: [string, number, boolean] = ["John", 123, true]; //tuple

// let values: (string | number)[] = ["John", 123, "James"]; //union type
// let values2: Array<string | number> = ["John", 123, "James"]; //union type

// let arr = [1, true, "a"]; //any type


// for (let i = 0; i < firstNames.length; i++) {
//     console.log(firstNames[i]);
// }

// //TUPLE 
// let Id:number=1;
// let instructorName:string="John";
// let instructor: [number, string] = [Id, instructorName];

// let employee: [number, string][];
// employee = [[1, "Steve"], [2, "James"]]; //array of tuples

// /* <--------------------------------------------------------------------------------->*/ 

// //Objects
// type Person = { 
//     name: string; 
//     age: number; 
// };

// let person: Person = {
//     name: "John",
//     age: 30
// };

// //YA DA 
// // let person2 = {
// //     name: "John",
// //     age: 30
// // } as Person;

// // //YA DA 
// // let person3:{
// //     name: string;
// //     age: number;
// // };

// // person3 = {
// //     name: "John",
// //     age: 30
// // };


// //console.log(person.name); 

// /* <--------------------------------------------------------------------------------->*/ 

// //ENUM 

// enum Media{
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// }

// console.log(Media.Magazine); //2
// console.log(Media[2]); //Magazine

// enum PrintMedia { 
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }

// console.log(PrintMedia.Magazine); //MAGAZINE
// console.log(PrintMedia["Magazine"]); //MAGAZINE

// /* <--------------------------------------------------------------------------------->*/ 

// //UNION TYPE
// //bir değişkenin birden fazla tipi olabilir

// let code: (string | number);
// // code = 123; //number
// code = "ABC"; //string

// console.log(code);

// /* <--------------------------------------------------------------------------------->*/ 


// //ANY TYPE
// //herhangi bir tipte veri alabilir, bunu kullanma sebebimiz tip belirlemeden kullanmak

// let something: any = 123;
// something = "ABC";
// something = true;
// something = {
//     firstName:'Steve',
//     lastName:'Smith'
// }
// console.log(something);

// let arr2: any[] = [1, true, "a"];

// /* <--------------------------------------------------------------------------------->*/ 

// //VOID TYPE
// //fonksiyonun geri dönüş değeri yoksa kullanılır

// function sayHi(): void {
//     console.log('Hi');
// }

// sayHi();

// /* <--------------------------------------------------------------------------------->*/ 

// //NEVER TYPE
// //fonksiyonun hiçbir zaman geri dönüş değeri olmayacaksa kullanılır,  belirttiğimiz bir hata döner.

// //Never ve Void arasındaki fark: 
// // void aslen geriye undefined veya null dönerken, never hiçbir zaman bir şey dönmez.

// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg);
// }

// //throwError('This is an error');

// // let something3 : void = null; //null ve undefined  voidde bir değişkene atanabilir
// // let nothing :never = undefined; //hata, atama yapılamaz

// /* <--------------------------------------------------------------------------------->*/ 

// //TYPE INFERENCE
// //değişkenin tipini belirtmezsek, typescript otomatik olarak tipini belirler

// let counter = 0;
// console.log(typeof counter); //number 

// // function increment(counter: number){
// //     return counter+1;
// // }

// function increment(counter: number): number{
//     return counter+1;
// }

// //AYNI SONUCU VERİR

// console.log(increment(1)); //2

// // let a = 123;
// // let b = "ABC";
// // //a = b; //hata, farklı tipler

// function add(a: number, b: number){ 
//     return a+b;
// }

// let total : number = add(1,2);

// /* <--------------------------------------------------------------------------------->*/ 

// //TYPE ASSERTION 
// //bir değişkenin tipini belirlemek için kullanılır

// let code2: any = 123;
// console.log(typeof(code2)); //number, inferance'dan geldi.

// let employeeCode = <number> code2;
// console.log(typeof(code2)); //number, type assertion'dan geldi

// interface Employee {
//     name: string,
//     code: number
// }

// let employee2 = <Employee> {};
// console.log(typeof(employee2)); //Employee döner.
// employee2.name = "John"; 

// /* <--------------------------------------------------------------------------------->*/ 

// //CONDITION & LOOP

// let x : number = 10;
// let y : number = 20;

// if(x>y){
//     console.log('x is greater than y');
// }
// else if(x==y){ 
//     console.log('x is equal to y');
// }
// else{
//     console.log('y is greater than x');
// }

// x>y ? console.log('x is greater than y') : console.log('y is greater than x');


// //SWITCH CASE

// let day: number = 2;

// switch(day){ 
//     case 0: 
//         console.log('Sunday');
//         break;
//     case 1: 
//         console.log('Monday');
//         break;
//     case 2: 
//         console.log('Tuesday');
//         break;
//     default:
//         console.log('Invalid day');
//         break;

// }


// //FOR LOOP
//  for(let i=0; i<5; i++){
//      console.log(i);
//  }

// //For in loop / For of loop
// //For in loop: index numarasını döner
// //For of loop: değeri döner

// let arr3 = [10, 20, 30, 40];

// for(let i in arr3){
//     console.log(i); //0 1 2 3
// }

// for(let i of arr3){
//     console.log(i); //10 20 30 40
// }


// //WHILE LOOP
// let counters = 5;
// while(counters>0){
//     console.log(counters);
//     counters--;
//     if(counters==3){
//         break;
//     }
// }

// do{
//     console.log(counters);
//     counters++;
//     if(counters==8){
//         break;
//     }
// }while(counters>0);

// //do, while döngüsünde, döngü en az bir kez çalışır, sonra koşula bakar.

// /* <--------------------------------------------------------------------------------->*/

// //FUNCTIONS

// function add2(a: number, b: number): number {
//     return a + b;
// }

// let sum = add2(10, 20);

// function bastir(): void {
//     console.log('Hello');
// }

// function birlestir(ad: string, soyad: string): string {
//     return  `${ad} ${soyad}`; 
// }

// let ad = birlestir('John', 'Doe');
// console.log(ad);


// function add3(a: number, b: number = 10): number {
//     return a + b;
// }

// let sum2 = add3(10, 20); //2.parametreyi ezdi

// //OPTIONAL PARAMETER
// //parametrelerin sonuna ? ekleyerek, o parametrenin opsiyonel olduğunu belirtiriz.

// function add4(a: number, b?: number): number {
//     if(b){
//         return a + b;
//     }
//     return a;
// }

// let sum3 = add4(10); //10

// //Arrow Function

// let add5 = (a: number, b: number): number => a + b;

// let bos = (): void => console.log('Hello');

// //FUNCTION OVERLOADING

// function test(a: number): number;
// function test(a: string): string;
// function test(a:any): any{
//     return a;
// }

// //REST PARAMETER
// //fonksiyona sınırsız sayıda parametre alabilir
// //rest parametreler, fonksiyonun son parametresi olmalıdır.

// function add6(...nums: number[]): number{
//     let sum = 0;
//     nums.forEach(element => {
//         sum+=element;
//     });
//     return sum;
// }

// function birlestir2(message: string, ...args: string[]): string{
//     return message + args.join(',');
// }


// /* <--------------------------------------------------------------------------------->*/

// CLASSES

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


class Employee extends Person {
    private empCode: number;

    constructor(name: string, age: number, code: number) {
        super(name, age);
        this.empCode = code;
    }

    display(): void {
        super.display();
        console.log(`Employee Code: ${this.empCode}`);
    }
}

let emp = new Employee('John', 30, 123);//Name: John, Age: 30, Employee Code: 123
console.log(emp.display());

//parent classın metotlarını kullanmak için super.display() kullanılır.

//let person3 = new Person('John', 30);

//console.log(person3.age); //30
//readonly olduğu için değiştirilemez.


//STATIC MEMBERS
//buradaki static kullanım mantıgı, bir sınıftan oluşturulan tüm nesnelerde aynı değeri paylaşmaktır.


// class Circle{
//     static pi: number = 3.14;
//     pi = 3.14;

//     constructor(){
//         Circle.pi++;        
//     }

//     static calculateArea(radius: number): number{
//         return this.pi * radius * radius;
//     }
// }   

// let objem = new Circle(); 
// let objem2 = new Circle(); 

// console.log(objem.pi); //3.14 
// console.log(Circle.pi); //5.14


// let area = Circle.calculateArea(5);


//ABSTRACT CLASS
//abstract classlar, diğer sınıflar için bir şablon görevi görürler. Yeni bir nesne oluşturulamazlar.

abstract class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(`Department name: ${this.name}`);
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting Department");
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department = new AccountingDepartment();
department.printName(); //Department name: Accounting Department
department.printMeeting(); //The Accounting Department meets each Monday at 10am.

let department2: Department;
//abstract class olduğu için, bu şekilde tanımlanabilir. Bu tanımlama, sadece abstract classlar için geçerlidir. Sadece abstract classlar içindeki metotlar kullanılabilir.
department2.printMeeting(); //The Accounting Department meets each Monday at 10am.
department2.printName(); //Department name: Accounting Department


//INTERFACE
//bir sınıfın nasıl olması gerektiğini belirler, bir sınıf birden fazla interface'i implement edebilir.
//Tip güvenliği sağlar.

interface IEmployee {
    empCode: number;
    name: string;
}


let person = {
    empCode: 1,
    name: 'Steve',
    age: 30
};

function getEmployee(employee: IEmployee) {
    console.log(`Employee Code: ${employee.empCode}, Name: ${employee.name}`);
}

console.log(getEmployee(person)); //Employee Code: 1, Name: Steve

//OPTIONAL PROPERTIES
//interface içindeki bir property'i opsiyonel yapmak için ? kullanılır.

interface IEmployee2 {
    empCode: number;
    name: string;
    age?: number;
}

let person2 = {
    empCode: 1,
    name: 'Steve'
};


//Fonksiyonlar için interface

interface stringFormat {
    (str: string, isUpper: boolean): string;
}

let formatter: stringFormat = function (str: string, isUpper: boolean) {
    return isUpper ? str.toUpperCase() : str.toLowerCase();
}

console.log(formatter('Hello', true)); //HELLO

//EXTEND VE IMPLEMENT KULLANIMI
//extendde propertyleri ve metotları alır, implementde sadece metotları alır.


interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee3 extends IPerson {
    empCode: number;
}

let empObj: IEmployee3 = {
    empCode: 1,
    name: 'Steve',
    gender: 'male'
}

class Employee2 implements IEmployee3 {
    empCode: number;
    name: string;
    gender: string;
    constructor(empCode: number, name: string, gender: string) {
        this.empCode = empCode;
        this.name = name;
        this.gender = gender;
    }
}

let empObj2 = new Employee2(1, 'Steve', 'male');
console.log(empObj2);

//TYPE INTERSECTION
//iki tipi birleştirmek için kullanılır.

// interface BusinessPartner {
//     name: string;
//     credit: number;
// }

// interface Identity {
//     name: string;
//     id: number;
// }

// interface Contact {
//     email: string;
//     phone: string;
// }

// type Employee4 = Identity & Contact & BusinessPartner; //Type intersection

// let kisi : Employee4 = { 
//     name: 'Steve',
//     id: 1,
//     email: 'sda@gmail.com',
//     phone: '123456',
//     credit: 1000
// }

//TYPE GUARDS
//bir değişkenin tipini kontrol etmek için kullanılır.

// type tip = string | number;

// function isString(x: tip): x is string { //x is string kullanımı, x'in tipini kontrol eder.
//     return typeof x === 'string';
// }

// //instanceof kullanımı
// //bir nesnenin bir sınıfa ait olup olmadığını kontrol eder. typeof ile farkı, typeof sadece primitive tipleri kontrol ederken, instanceof nesneleri (class vb.) kontrol eder.

// type BusinessPartner = Customer | Supplier;

// class Customer{
//     isCreditAllowed(): boolean{
//         return true;
//     }
// }


// class Supplier{ 
//     isInShortList(): boolean{
//         return true;
//     }
// }

// function signContract(partner: BusinessPartner){
//     if(partner instanceof Customer){
//         partner.isCreditAllowed();
//     }
//     else{
//         partner.isInShortList();
//     }
// }


//GENERICS

function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length); //0 ile items.length arasında rastgele bir sayı üretir.
    return items[randomIndex];
}

function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length); //0 ile items.length arasında rastgele bir sayı üretir.
    return items[randomIndex];
}

//Bunun yerine, generic kullanabiliriz. Bunu any ile de yapabiliriz, ancak any tip güvenliği sağlamaz.

//Generic kullanımı
function getRandomValue<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length); //0 ile items.length arasında rastgele bir sayı üretir.
    return items[randomIndex];
}

let numbers = [100, 200, 300, 400];
let names = ['John', 'Jane', 'Doe'];

console.log(getRandomValue<number>(numbers));
console.log(getRandomValue<string>(names));

//GENERIC CONSTRAINTS
//generic tipi sınırlamak için kullanılır.

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2 //obj1 ve obj2'nin propertylerini birleştirir.
        // spread operatoru, objeyi olduğu gibi kopyalar.
    }
}

let mergedObj = merge(
    { name: 'John' },
   { age: 22 }
   //21 //normalde hata vermesi gerekir, ancak vermediği için bunun kontrolünü yapmak için generic constraints kullanılır.
);


//GENERIC INTERFACE

interface Months<U,V> {
    key: U,
    value:V
}

let month: Months<number, string> = {
    key: 1,
    value: 'January'
}

interface collection<T>{ 
    add(item: T): void;
    remove(o: T): void;
}

class List<T> implements collection<T>{ 
    private items: T[] = [];
    add(item: T): void{
        this.items.push(item);
        console.log(this.items);
    }

    remove(o: T): void{
        let index = this.items.indexOf(o);
        this.items.splice(index, 1);
    }
}


let numbersList = new List<number>();
numbersList.add(1);
numbersList.remove(1);

//GENERIC CLASS

class Stack<T>{
    private items: T[] = [];

    constructor(private size: number){ 
    }

    isEmpty(): boolean{
        return this.items.length == 0;
    }

    isFull(): boolean{
        return this.items.length == this.size;
    }

    push(item: T): void{
        if(this.isFull()){
            throw new Error('Stack is full');
        }
        this.items.push(item);
    }

    pop(): T{
        if(this.isEmpty()){
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }
}

function randBetween(min: number, max: number): number{
    return Math.floor(Math.random() * (max-min+1)+min);
} //min ve max arasında rastgele bir sayı üretir.

let numberStack = new Stack<number>(3);

while(!numberStack.isFull()){
    numberStack.push(randBetween(1, 100));
}