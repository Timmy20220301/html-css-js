//變數
document.write("<h1>變數</h1>");
var my_name = "小白";
var my_age = 87;
var is_male = true;
document.write(my_name+" "+my_age+" "+is_male);
document.write("<br/>")

//基本資料型態
document.write("<h1>基本資料型態</h1>");
var phrase = "Hello World";
document.write(phrase.length);
document.write("<br/>");
document.write(phrase.toUpperCase);
document.write("<br/>");
document.write(phrase.toLowerCase);
document.write("<br/>");
document.write(phrase.charAt(0));
document.write("<br/>");
document.write(phrase.substring(2,10));
document.write("<br/>");

//數字
document.write("<h1>數字</h1>");
var number = -6;
var random_number = Math.random()
document.write(Math.abs(number));
document.write("<br/>");
document.write(Math.max(2,31,2143,58,66,441,57))
document.write("<br/>");
document.write(Math.round(8.5));
document.write("<br/>");
document.write(Math.pow(4,3))
document.write("<br/>");
document.write(Math.sqrt(64))
document.write("<br/>");
document.write(random_number)
document.write("<br/>");
document.write(Math.round(random_number*10));
document.write("<br/>");

//prompt互動
document.write("<h1>prompt互動</h1>");
var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");
num1 = parseFloat(num1); //轉換成Float
num2 = parseFloat(num2);
document.write(num1+num2);
document.write("<br/>");

//陣列array
document.write("<h1>陣列array</h1>");
var scores = [80,60,20,30,50];
document.write(scores);
document.write("<br/>");
scores[0] = 20;
document.write(scores[0]);
document.write("<br/>");
document.write(scores.length);

//函式function
document.write("<h1>函式function</h1>");
function hello(name,age){
    document.write("你好"+name+"你今年"+age+"歲");
}
hello("小白","3");
document.write("<br/>");

function hello(num1,num2){
    return num1+num2;
}
document.write(hello(3,7));
document.write("<br/>");

//物件object
document.write("<h1>物件object</h1>");
var person = {
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        return(this.name+this.age);
    }
}
document.write(person);
document.write("<br/>");
document.write(person.print_name());
document.write("<br/>");

//真實世界物件
document.write("<h1>真實世界物件</h1>");
var movie = {
    title:"刻在你心裡的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ]
};
document.write(movie.actors[1].name);
document.write("<br/>");

//物件的模板class
document.write("<h1>物件的模板class</h1>");
class Phone {
    constructor(number, year, is_waterproof){
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2022 - this.year;
    }
}

var phone1 = new Phone("02-1532921", 2020, false);
document.write(phone1.phone_age());
document.write("<br/>");

//全域物件:window
/* window.document.write("<br/>");
window.prompt("哈哈")*/
var h2 = document.getElementById("header"); //id要在<script>上面才找得到
h2.innerText = "小白超帥";
h2.style.backgroundColor = "red";
h2.style.color = "blue";
var link = document.getElementById("link");
link.href = "https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ";
console.log(link); //f12找到標籤

//事件監聽器even listener(可以查w3c js events list)
//第一種
function handle_click(element){
    // alert("叫你按就按啊?");
    element.innerText = "按屁啊!";
    element.style.color = "red";
}
//第二種
var bbb = document.getElementById("bbb");
bbb.addEventListener("click", function(){
    // alert("教你按就按啊?");
    this.innerText = "按沙小";
})

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){ //mouseover事件
    this.src = "rabbit-care-sheet.jpg";
})