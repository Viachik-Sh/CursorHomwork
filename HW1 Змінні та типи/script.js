console.log('hi')
document.writeln('hello<br>')
const tent = 90.2345;
const backpack = 123.965;
const flashlight = 15.678;
const money = 500;


document.writeln("найдорожче - " + Math.max(tent, backpack, flashlight))

document.writeln("<br> найдешевше - " + Math.min(tent, backpack, flashlight))

const sum = tent + backpack + flashlight

document.writeln("<br> разом - " + sum )

const SumFloor = Math.floor(tent) + Math.floor( backpack) + Math.floor(flashlight)
document.writeln("<br> разом (заокругливши) - " + SumFloor )

document.writeln("<br> заокруглино до сотих - " +( Math.ceil((sum / 100)) * 100)+ "<br>")

if (SumFloor % 2 ==0){
  document.writeln("заокруглина сума є парною")
} 
  else {
    document.writeln("заокруглина сума не парна")
  }

let  remainder = money - sum
document.writeln("<br>решта - " + remainder)

document.writeln("<br> середнє - " + (sum/3).toFixed(2))

let discount = (Math.random()*10).toFixed(1)

document.writeln('<br>ваша знижка - ' + discount + "%" )
let payment = (sum - (sum /100 * discount)).toFixed(2)
document.writeln('<br>до cплати - ' + payment )

let profit = payment - (sum /2)
document.writeln("<br> прибуток - " + profit.toFixed(2))