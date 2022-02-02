const EventEmitter=require('events');
const event=new EventEmitter();

event.on("sayHello",()=>{
    console.log("Hello World!!!");
});

event.on("sayHello",()=>{
    console.log("Hello World Harry!!!");
});

event.on("checkPage",(chk,code)=>{
    console.log(`The status code is ${chk} & the page is ${code}`);
});

event.emit("sayHello");

event.emit("checkPage",200,"ok");