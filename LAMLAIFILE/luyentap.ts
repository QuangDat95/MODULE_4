/*//III. Variables & Data Type
//Basic Type
    //Boolean
let free:boolean = true;
free = false;
    //Number
let score:number = 10;
    //string
let elm:string = "ABC";
elm = 'ABC 123';
elm = `Free: ${free} - Score: ${score}`;

console.log(free);
console.log(score);
console.log(elm);
//Array
let arrNumber: Array<number> = [1,5,8];
let arrString: string[] = ["java","android","es6"];

console.log(arrNumber);
console.log(arrString);

console.log(arrString.push("typescript"));
console.log(arrString);
//Tuple
let x:[string, number, boolean];
x = ["abc", 10, true];
console.log(x);
//Enum
enum STATUS {created = 100, process = 900, finish = 500};
let todoStatus: STATUS = STATUS.created;
console.log(todoStatus);
//Any
let mVariable: any = 4;
mVariable = "ABC";
mVariable = true;
let mArray : any[] = [1, true, "ABC"];
console.log(mVariable);
console.log(mArray);
//Void
function showInfo(): void{
    console.log("Hello");
}
showInfo();
//Type assertions
let mvariable: any = "Typescript training";
let total = (mvariable as string).length;
console.log(total);
//Interface object
let objOne:any = {};
console.log(objOne);
interface CourseInterface{
    name:string;
    time:string;
    free?:boolean;
}
let objTwo: CourseInterface;
objTwo = {
    name: "ES6",
    time: "5h"
};
let objThree: CourseInterface = {
    name: "Typescript",
    time: "6h",
    free:true
}
console.log(objTwo);
console.log(objThree);
//Interface array
interface CourseList{
    [index:number]:number;
}
let course: CourseList = [1,2];
console.log(course);
//IV. Functions
//1.	Return – Sự trả về của hàm
function funcNoReturn(): void{
    console.log("funcNoReturn");
}
function funcReturnNumber(): number{
    return 2;
}
function funcReturnArray(): string[]{
    return ["a","b"];
}
function funcReturnAny(): any{
    console.log("funcReturnAny");
}
funcNoReturn();
console.log(funcReturnNumber());
console.log(funcReturnArray());
console.log(funcReturnAny());
//2. truyền tham số trong hàm
//đầy đủ các tham số
function userInfo1(name: string, age: number): string{
    return `My name is ${name}, ${age} year old`;
}
//giá trị mặc định cho các tham số
function userInfo2(name: string = "john", age: number = 69): string{
    return `My name is ${name}, ${age} years old`;
}
//tham số khuyết
function userInfo3(name: string = "john", age?:number):string{
    if(age == null){
        return `My name is ${name}`;
    }else{
        return `My name is ${name}, ${age} years old`;
    }
}
function totalLength(x: (string | any[]), y: (string[] | string)):number{
    return x.length + y.length;
}
console.log(totalLength('abc',['123']));
console.log(totalLength([1, "abc", "def"], ['123','def']));
console.log(totalLength([1,"ab","ef"],"123"));
console.log(userInfo1("Peter",20));
console.log(userInfo2());
console.log(userInfo3());
//3.Rest parameter
function showStudentInfo(name: string, ...course: string[]):string{
    return name + " study " + course.join(", ");
}
console.log(showStudentInfo("John", "es6", "php"));
//4.Types – Các dạng khai báo hàm
function userinfo1(name: string, age: number): string {
    return `My name is ${name}, ${age} years old`;
}
let userinfo2 = function(name: string, age: number): string {
    return `My name is ${name}, ${age} years old`;
}
let userinfo3: (name: string, age: number)=> string = 
    function(pname, page){
        return `My name is ${pname}, ${page} years old`;
    }
console.log(userinfo1("Dat",28));
console.log(userinfo2("Hoan",19));
console.log(userinfo3("Hung",20));
//5.Arrow Function
let f1 = function(i:number):number{return i * i;}
let f2 = function(i:number){return i*i;}
let f3 = (i:number):number => {return i*i;}
let f4 = (i:number) => {return i*i;}
let f5 = (i:number) => i*i;
console.log(f5(5));
//6.Overload
function funcAbc(x: string): number;
function funcAbc(x: number): string;
function funcAbc(x: boolean): boolean;
function funcAbc(x: any):any{
    if(typeof x == "string"){
        return 100;
    }else if(typeof x == "number"){
        return "abc";
    }else{
        return true;
    }
}
console.log(funcAbc(false));
//V. OOP – Lập trình hướng đối tượng
//class
//basic
class Task{
    id:number;
    name: string;
    state: string;
    constructor(id:number, name: string, state: string){
        this.id = id;
        this.name = name;
        this.state = state;
    }
        showtaskinfo(){
            console.log(`${this.id} - ${this.name} - ${this.state}`);
        }
    }
let taskObj1 = new Task(69, "Coding","created");
taskObj1.showtaskinfo();
console.log(taskObj1);
//Advantage
enum TaskState{
    Created = 100,
    Active,
    InActive,
    Process,
    Finish
}
interface TaskInterface{
    id:number;
    name: string;
    state?: TaskState;
}
class TaskService{
    tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]){
        this.tasks = tasks;
    }
    getItems(){
        return this.tasks;
    }
}

let task1: TaskInterface = {id: 1, name: "Coding"};
let task2: TaskInterface = {id: 2, name: "Study ES6"};

let tasks: TaskInterface[] = [
    task1,
    task2,
    {id: 3, name: "Kiss my girl", state: TaskState.Finish}
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
//2.Static
enum TaskState{ Created = 100, Active, InActive, Process, Finish}
interface TaskInterface{
    id: number;
    name: string;
    state?:TaskState;
}
class TaskService{
    public static username: string = "peter";
    static tasks: TaskInterface[];
    constructor(tasks:TaskInterface[]){
        TaskService.tasks = tasks;
    }
    getItems(){
        return TaskService.tasks;
    }
    static showItemInfo():void{
        for(let task of TaskService.tasks){
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}
let taskServiceObj = new TaskService([
    {id: 1, name: "Coding"},
    {id: 2, name: "Study ES6"},
    {id: 3, name: "Kiss my girl", state: TaskState.Finish}
]);
TaskService.showItemInfo();
console.log(TaskService.username);
console.log(taskServiceObj.getItems());*/
//3.Inheritance – Thừa kế
class Course{
    id:string;
    name: string;
    price: number;

    constructor(id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourceInfo():void{
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}