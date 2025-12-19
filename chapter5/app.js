function start() {
    var num1 = 3
    var num2 = 5
    var sum = num1 + num2

    document.write("<h2>Sum</h2>")
    document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + sum )
}

function second() {
    var num1 = 3
    var num2 = 5
    var subtract = num1 - num2

    document.write("<h2>Subtraction</h2>")
    document.write("Subtraction of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + subtract )


    var num1 = 3
    var num2 = 5
    var multiplication = num1 * num2

    document.write("<h2>Multiplication</h2>")
    document.write("multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + multiplication )


    var num1 = 3
    var num2 = 5
    var division = num1 / num2

    document.write("<h2>Division</h2>")
    document.write("division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + division )


    var num1 = 3
    var num2 = 5
    var modulus = num1 % num2

    document.write("<h2>Modulus</h2>")
    document.write("modulus of" + " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + modulus )
    

}

function third() {
    var some = 5;
    
    document.write("Value after variable declaration is : some <br>")
    document.write("Initial Value is : " + some + "<br>")
    
    var inc = ++some;
    document.write("Value after increment is: " + inc + "<br>")

    var add = some + 7;
    document.write("Value after addition of 7 is :" + "<b>" + add + "</b>" + "<br>")

    var dec = --some;
    document.write("Value after decrement is: " + dec)

    var div = some / 3;
    document.write("After Divide By 3 is The remainder is : " + div)
}

function forth() {
    var ticket = 600

    var ticket5 = 600*5
    document.write("Total Cost to buy 5 tickets to a movie is : " + ticket5)
}

function five() {
    t5 = 5
    onet = t5 * 1;
    twot = t5 * 2;
    threet = t5 * 3;
    fourt = t5 * 4;
    fivet = t5 * 5 ;
    sixt = t5 * 6;
    sevent = t5 * 7;
    eightt = t5 * 8;
    ninet = t5 * 9;
    tent = t5 * 10;


    document.write("<h2> Table Of 5 is </h2> <br>")
    document.write( t5 + " x 1 = " + onet + "<br>" )
    document.write( t5 + " x 2 = " + twot + "<br>" )
    document.write( t5 + " x 3 = " + threet + "<br>" )
    document.write( t5 + " x 4 = " + fourt + "<br>" )
    document.write( t5 + " x 5 = " + fivet + "<br>" )
    document.write( t5 + " x 6 = " + sixt + "<br>" )
    document.write( t5 + " x 7 = " + sevent + "<br>" )
    document.write( t5 + " x 8 = " + eightt + "<br>" )
    document.write( t5 + " x 9 = " + ninet + "<br>" )
    document.write( t5 + " x 10= " + tent + "<br>" )
}

function six() {
    var c = 30
    var f = 70

    var nnc_nnf = (c*9/5) + 32
    var nnf_nnc = (f-32) * 5/9

    document.write(c + "°C" + " is " + nnc_nnf + "°F" + "<br>")
    document.write(f + "°F" + " " + nnf_nnc + "°C")
}

function seven() {
    var price1 = 700
    var price2 = 250
    var order1 = 3
    var order2 = 2
    var shipping = 120
    var total = (price1 * order1) + (price2 * order2) + shipping

    document.write("<h2>Shopping Cart</h2>")
    document.write("Price of item 1 is " + price1 + "<br>")
    document.write("Ordered quantity of item 1 is " + order1 + "<br>")
    document.write("Price of item 2 is " + price2 + "<br>")
    document.write("Ordered quantity of item 2 is " + order2 + "<br>")
    document.write("Shipping charges is " + shipping + "<br>")
    document.write("<br>")
    document.write("Total coast of your order is " + total)
}


function eight() {
    var totalmarks = 1080
    var marksobtain = 924
    var percentage = (marksobtain * 100) / totalmarks

    document.write("<h2>Marks Sheet</h2>")
    document.write("Total Marks: " + totalmarks + "<br>")
    document.write("Marks Obtain: " + marksobtain + "<br>")
    document.write("Percentage: " + percentage)
}

function nine() {
    var dollar = 10
    var riyal = 25
    var pkr = (104.80 * dollar) + (riyal * 28)

    document.write("<h1>Currency in PKR</h1>")
    document.write("Total currency in PKR: " + pkr)
}

function ten() {
    var value = 10
    var totalvalue = ((10 + 5) * 10) / 2

    document.write("<h1>Arithmetic Equation</h1>")
    document.write("The calculated value: " + totalvalue)
}

function eleven() {
    var currentyear = 2026
    var birthyear = 1992
    var yourage = currentyear - birthyear

    document.write("<h1>The Age Calculator</h1>")
    document.write("curren year: " + currentyear + "<br>")
    document.write("Birth Year: " + birthyear + "<br>")
    document.write("Your Age is: " + yourage)
}

function bara() {
    var radius = 20
    var circumference = 2*3.142 * radius
    var area = 3.142 * (radius ^ 2)

    document.write("<h2>The Geometrizer</h2>")
    document.write("Radius Of a circle: " + radius + "<br>")
    document.write("The circumference of a circle: " + circumference + "<br>")
    document.write("The area of a circle: " + area + "<br>")
}

function tira() {
    var snack = "super"
    var currentage = 16
    var estimatedage = 65
    var amountofsnack = 2
    var totalsnack = (365*2)*(estimatedage - currentage)

    document.write("<h2>The Lifetime Supply Calculator</h2>")
    document.write("favorite snack: " + snack + "<br>")
    document.write("current age: " + currentage + "<br>")
    document.write("maximum age: " + estimatedage + "<br>")
    document.write("Amount of snack per day: " + amountofsnack + "<br>")
    document.write("You will need " + totalsnack + " to last you until the ripe old age of " + estimatedage  + "<br>")
}