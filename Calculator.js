var display = "";
var cal = "";
var result = "";
var DP = "0"

function clickBtn(num){
    display += num;
    cal += num;
    $("#output").html(display);
}

function clickOP(OP) {
    display += OP;
    $("#output").html(display);
    if (OP === "+"){
        cal += " + ";
    } else if(OP === "-"){
        cal += " - ";
    } else if(OP === "×"){
        cal += " * ";
    } else if(OP === "÷"){
        cal += " / ";
    }
}

function calc() {
    result = eval(cal);
    display = result;
    $("#output").html(result)
}

function clear(){
    console.log("Clearing calculator...");
    
    // Reset variables
    cal = "";
    result = '0';
    display = result;

    // Update display
    console.log("Display after clearing:", display);
    $("#output").html(display);
}

clear();
