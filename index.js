// closures + setTimeout

// function x(){
//     for (let i=1; i<=5; i++){
//     setTimeout(function(){
//             console.log(i);
//                 }, i* 1000);
//     }
//     console.log("Hello World");
// }
// x();



// function x() {
//     for(var i = 1; i <= 5; i++) { 
//         function close(x) {
//             setTimeout(function() {
//                 console.log(x);
//             }, x*1000); 
//         }
//             close(i); 
//     }
//     console.log("Hello World");
// }
// x();

// function pairSumSeq(n){
//     var sum = 0;
//     for (let i = 0; i < n; n++){
//         sum+=pairSum(i,i+1);}   
//         console.log(sum);
// function pairSum (a,b){
//       console.log(a+b);
//     }
//     pairSum(2,3);
// };
// pairSumSeq(5);
// function eventfull() {
//     let count=0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("You clicked me!",++count)
// });
// };
// eventfull();

// console.log("Start");
//  setTimeout(cb => {
//     console.log("Callback");
//  }, 5000);
//  console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
//   while(endDate < startDate + 10000){
//     endDate= new Date().getTime();
//   }
//   console.log("abbbbb");



// const radius = [3,1,2,4];

// const calculate = function (radius,logic){
//     const output = [];
//     for (i=0; i< radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
//     };

// const area = function (radius) {
//             return Math.PI * radius**2;
//         };

// const circumference = function (radius) {
//             return (2 * Math.PI * radius);
//         };

// const diameter = function (radius) {
//     return (2 * radius);
// };

// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));
// console.log(radius.map(diameter));


// const radius = [3,1,2,4];
// Array.prototype.calculate = function (logic){
//     const output = [];
//     for (i=0; i< this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
//  };

// const diameter = function (radius) {
//     return (2 * radius);
//  };

//  console.log(radius.calculate(diameter));
//  console.log(radius.map(diameter));


// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
//     draw() {
//         console.log(`Drawing a ${this.name}`);
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super('rectangle');
//         this.width = width;
//         this.height = height;
//     }
//     draw() {
//         console.log(`Drawing a ${this.name} with width 
//         ${this.width} and height ${this.height}`);
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super('circle');
//         this.radius = radius;
//     }
//     draw() {
//         console.log(`Drawing a ${this.name} with radius
//          ${this.radius}`);
//     }
// }

// let shape = new Shape('generic shape');
// let rectangle = new Rectangle(5, 10);
// let circle = new Circle(3);

// let shapes = [shape, rectangle, circle];

// for (let s of shapes) {
//     s.draw();
// }

// const myfunction = ()=> {
//     console.log(x);
//     const x = "whats the output"
//  }
//  mufunction();
//  console.log("qaiser");

const hourE1= document.getElementById("hour");
const minuteE1= document.getElementById("minutes");
const secondE1= document.getElementById("seconds");
const ampmE1= document.getElementById("ampm");
function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm= "AM"

    if(h >12){
        h=h-12
        ampm="PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    hourE1.innerText=h;
    minuteE1.innerText = m;
    secondE1.innerText=s;
    ampmE1,(innerText=ampm);
    setTimeout(() => {
        updateClock()
    }, 1000);

}
updateClock()