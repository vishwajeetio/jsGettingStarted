// print hello world
console.log('\n\n\n');
document.body.style.backgroundColor = "#241c4a";
var cars = ["BMW", "Audi", "Lamborgini", "Ferrari", "Bugatti", "RollsRoyace", "Cheverlate", "Ford"];
var text = "";
var i;
const timer = ms => new Promise(res => setTimeout(res, ms))
async function test() {
    for (i = 0; i < cars.length; i++) {
        text += "<h1>" + cars[i] + "</h1>";
        console.log(text);
        document.getElementById("forLoop").style.color = "#32a850";
        
        document.getElementById("forLoop").innerHTML = text;
        await timer(2000);
    }
}
test()

let c = 4
let a = 5 + c;
console.log(('test ' + c).toUpperCase())