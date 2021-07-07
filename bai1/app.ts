 //***let vs var***   
    //   var score = 100;
    //   if(score > 50){
    //       var msg = "WIN";
    //       console.log(msg);
    //   }
    //   console.log(score);
    //   console.log(msg);

    // let score = 100;
    // let msg = "";
    // if(score > 50){
    //     msg = "WIN";
    //     console.log(msg);
    // }
    // console.log(score);
    // console.log(msg);
       //TEMPLACE STRING
    // let name1 = "Typescript123";
    // let price = 25;
    // element = `<div>Cource name: <b>${name1}</b>,
    //     price: <b style="color:red">${price} USD</b></div>`;
    // document.write(element);

    // let todo={
    //     id: 169,
    //     name: "Play football",
    //     status: false
    // }
    // elm = `<div id="todo-id-${todo.id}">
    //     <i class="${ todo.status == true ? "hidden" : ""} gyphicon glyphicon-ok"></i>
    //     <span class="name">${todo.name}</span>
    //     </div>`;
    //     document.write(elm);
//FOR
// let todoArr = [
//     "Play football",
//     "Coding",
//     "Study TypeScript"
// ];
  /*--case1--*/
// let length = todoArr.length;
//     for(let i=0; i<length;i++){
//         console.log(todoArr[i]);
//     }
/*--case2--*/
// for(let index in todoArr){
//     console.log(index + ": " + todoArr[index]);
// }
/*--case3--*/
// for(let todo in todoArr){
//     console.log(todo);
// }
//spread
//    let a = [1,2,3,"abc"];
//    let b = [5,6,7,"def"];
//    let c = [...a,...b];
//    console.log(c);

// let d = [1,2,3,4,5,6];
// let [a,b,...c] = d;
// console.log(a,b,c);

// let arr = [133, "ES6", false];
// let [id,name,free] = arr;
// console.log(id + "-" + name + "-" + free);

// let obj = {
//     id:456,
//     name:"ES6",
//     free: false,
//     create:"admin123"
// }
// let {name, id, free, create="admin"} = obj;
// console.log(id + "-" + name + "-" + free + "-" + create);

//function
// function showInfo(name = "ES6", price = 20){
//     return `Cource name: ${name}, price:${price}`;
// }
// console.log( showInfo() );

//resparam
// function caculate(action, ...values){
//     let result = 0;
//     switch(action){
//         case "+":
//             for(let value of values) result += value;
//             break;
//         case "-":
//             for(let value of values) result -= value;
//         result += values[0];
//         break;
//     }
//     return result;
// }
// console.log(caculate("+",1,2,3,4,5));

//Arrows function
// function func01(name, age){
//     return `func01 My name is ${name}, ${age} year old`;
// }
// var func02 = function(name, age){
//     return `func02 My name is ${name}, ${age} year old`;
// }
// var func03 = (name, age) => {
//     return `func03 My name is ${name}, ${age} year old`;
// }
// var func04 = (name, age) => `func04 My name is ${name}, ${age} year old`;
// var func05 = name => {
//     return `func05 My name is ${name}`;
// }
// var func06 = () => {
//     return `func06 My name is`;
// }
// console.log(func01("Đạt",27));
// console.log(func02("Hùng",20));
// console.log(func03("Hoàn",19));
// console.log(func04("Châu",25));
// console.log(func05("Tâm"));
// console.log(func06());

let courses = ["Android", "Php", "java", "angular"];
console.log(
courses.map( course => {
    return course.toUpperCase();
})
);