function funTest(x) {       
    firstNum = x.innerHTML;
    let secNum = 0;
    if (firstNum == "+") {
        sumNum = parseInt(document.getElementById("result").value);            
        document.getElementById("result").value = "";
        subNum = "";
        mulNum = "";
        divNum = "";
    } else if (firstNum == "-") {
        subNum = parseInt(document.getElementById("result").value);           
        document.getElementById("result").value = "";
        sumNum = "";
        mulNum = "";
        divNum = "";
    } else if (firstNum == "*") {
        mulNum = parseInt(document.getElementById("result").value);            
        document.getElementById("result").value = "";
        sumNum = "";
        subNum = "";
        divNum = "";            
    }else if (firstNum == "/") {
        divNum = parseInt(document.getElementById("result").value);            
        document.getElementById("result").value = "";
        sumNum = "";
        subNum = "";
        mulNum = "";            
    }else if (firstNum == "C") {            
        document.getElementById("result").value = "";
        sumNum = "";
        subNum = "";
        mulNum = "";  
        divNum = "";                      
    }        
    else if (firstNum == "=") {
        secNum = parseInt(document.getElementById("result").value);            
        if (!(sumNum == "")) {
            document.getElementById("result").value = sumNum + secNum;
        } else if (!(subNum == "")) {                
            document.getElementById("result").value = subNum - secNum;
        }else if (!(mulNum == "")) {                
            document.getElementById("result").value = mulNum * secNum;
        }else if (!(divNum == "")) {                
            document.getElementById("result").value = divNum / secNum;
        }
    }
    else {
        document.getElementById("result").value += firstNum;
    }
}