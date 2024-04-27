var cal = "";
var result = "";
var isOperatorPressed = true;
var isDotPressed = true;
var isEqualPressed = false;

function clickBtn(num){
    var display = $("#output").html();
    if(display == "0"){
        display = num;
        cal += num;
    } else {
        if(isEqualPressed == false){
            display += num;
            cal += num;
        }else{
            display = num;
            cal = num; 
            isEqualPressed = false;
        }

    }
    $("#output").html(display);
    isOperatorPressed = false;
    isDotPressed = false;
}

function clickOP(OP) {
    var display = $("#output").html();
    if(isEqualPressed == false){    
        if(isOperatorPressed == false || isDotPressed == false){
            display += OP;
            operatorReplacer(OP);
        } 
        else {
            display = display.substring(0, display.length-1);
            display += OP;
            operatorReplacer(OP);
        } 
    } else {
        display += OP;
        operatorReplacer(OP);
        isEqualPressed = false;
    }
    $("#output").html(display);
    isOperatorPressed = true;
}

function operatorReplacer(OP){
    if(isOperatorPressed){
        cal = cal.substring(0, cal.length-1);
    }
    if (OP === "+"){
        cal += "+";
    } else if(OP === "-"){
        cal += "-";
    } else if(OP === "×"){
        cal += "*";
    } else if(OP === "÷"){
        cal += "/";
    }
}

function clickDot(dot){
    var display = $("#output").html();
    if (isEqualPressed == false) {
        if (isDotPressed == false || isOperatorPressed == false){
            display += dot;
            cal += dot;
        } else {
            display = display.substring(0, display.length-1);
            display += dot;
            cal += dot;
            
        }      
    } else {
        display += dot;
        cal += dot;
        isEqualPressed = false;
    }
    $("#output").html(display);
    isDotPressed = true;
}

function calc() {
    result = eval(cal);
    cal = result;
    $("#output").html(result);
    isEqualPressed = true;

}

function cleanDisplay(){

    cal = "";
    display = "0";
    $("#output").html(display);
    isOperatorPressed = false;
    isDotPressed = false;
    isEqualPressed = false;
}
