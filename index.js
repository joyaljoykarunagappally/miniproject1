
// // document.getElementById("ij").textContent='hujnhhj';
// // console.log("hello")
// let name = "Joyal Joy";
// let age = 22;
// let student = true;

// document.getElementById("p1").textContent = `Your Name is : ${name}`;
// document.getElementById("p2").textContent = `You are ${age} Years is OLD`
// document.getElementById("p3").textContent = `Student : ${student}`
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const countlabel = document.getElementById("countlabel");

let count=0;

btn1.onclick = function(){
    count--;
    countlabel.textContent=count;

}
btn2.onclick = function(){
    count = 0;
    countlabel.textContent=count;

}
btn3.onclick = function(){
    count++;
    countlabel.textContent=count;

}