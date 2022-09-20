function Add(){
    let a = parseInt(document.getElementById("firstnumber").value)
    let b = parseInt(document.getElementById("secondnumber").value)
    document.getElementById("res").innerHTML = "THE RESULT IS: "+(a+b);
}
function Sub(){
    let a = parseInt(document.getElementById("firstnumber").value)
    let b = parseInt(document.getElementById("secondnumber").value)
    document.getElementById("res").innerHTML = "THE RESULT IS: "+(a-b);
}
function Div(){
    let a = parseInt(document.getElementById("firstnumber").value)
    let b = parseInt(document.getElementById("secondnumber").value)
    document.getElementById("res").innerHTML = "THE RESULT IS: "+(a/b);
}
function Mul(){
    let a = parseInt(document.getElementById("firstnumber").value)
    let b = parseInt(document.getElementById("secondnumber").value)
    document.getElementById("res").innerHTML = "THE RESULT IS: "+(a*b);
}