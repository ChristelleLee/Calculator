var cal = "";
var result = "";
var isOperatorPressed = true;
var isDotPressed = true;
var isEqualPressed = false;

function clickBtn(num){
    var display = $("#output").html();
    if(isEqualPressed = false){
        if(display == "0"){
            display = num;
            cal += num;
        }
        else{
           display += num;
           cal += num;

        }
    }
    $("#output").html(display);
    isOperatorPressed = false;
    isDotPressed = false;
}

function clickOP(OP) {
    var display = $("#output").html();
    if(isOperatorPressed == false){
        display += OP;
        operatorReplacer(OP);
    } 
    else {
        display = display.substring(0, display.length-1);
        display += OP;
        operatorReplacer(OP);
    } 
    $("#output").html(display);
    isOperatorPressed = true;
}

function operatorReplacer(OP){
    if(isOperatorPressed){
        cal = cal.substring(0, cal.length-1);
    }
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

function clickDot(dot){
    var display = $("#output").html();
    if (isDotPressed == false && isOperatorPressed == false){
        display += dot;
    } else {
        display = display.substring(0, display.length-1);
        display += dot;
    }
    $("#output").html(display);
    isDotPressed = true;
    isOperatorPressed = true;
}

function calc() {
    if (isEqualPressed = false){
        result = eval(cal);
        cal = result;
        $("#output").html(result);
    }
}

function cleanDisplay(){
    cal = "";
    display = "0";
    $("#output").html(display);
    isOperatorPressed = false;
    isDotPressed = false;
    isEqualPressed = false;
}
