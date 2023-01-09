function funSubmit(){    
    if(document.getElementById("q1b").checked){
        document.getElementById("resultQ1").innerHTML = "Correct";
        document.getElementById("resultQ1").style.color = "green";
    } else{
        document.getElementById("resultQ1").innerHTML = "Wrong";
        document.getElementById("resultQ1").style.color = "red";
    }
    if(document.getElementById("q2d").checked){
        document.getElementById("resultQ2").innerHTML = "Correct";
        document.getElementById("resultQ2").style.color = "green";
    } else{
        document.getElementById("resultQ2").innerHTML = "Wrong";
        document.getElementById("resultQ2").style.color = "red";
    }
    if(document.getElementById("q3a").checked){
        document.getElementById("resultQ3").innerHTML = "Correct";
        document.getElementById("resultQ3").style.color = "green";
    } else{
        document.getElementById("resultQ3").innerHTML = "Wrong";
        document.getElementById("resultQ3").style.color = "red";
    }
    if(document.getElementById("q4a").checked){
        document.getElementById("resultQ4").innerHTML = "Correct";
        document.getElementById("resultQ4").style.color = "green";
    } else{
        document.getElementById("resultQ4").innerHTML = "Wrong";
        document.getElementById("resultQ4").style.color = "red";
    }
    if(document.getElementById("q5d").checked){
        document.getElementById("resultQ5").innerHTML = "Correct";
        document.getElementById("resultQ5").style.color = "green";
    } else{
        document.getElementById("resultQ5").innerHTML = "Wrong";
        document.getElementById("resultQ5").style.color = "red";
    }
    if(document.getElementById("q6a").checked && document.getElementById("q6b").checked){
        document.getElementById("resultQ6").innerHTML = "Correct";
        document.getElementById("resultQ6").style.color = "green";
    } else{
        document.getElementById("resultQ6").innerHTML = "Wrong";
        document.getElementById("resultQ6").style.color = "red";
    }    
    if(document.getElementById("q7a").value == "const"){
        document.getElementById("resultQ7").innerHTML = "Correct";
        document.getElementById("resultQ7").style.color = "green";
    } else{
        document.getElementById("resultQ7").innerHTML = "Wrong";
        document.getElementById("resultQ7").style.color = "red";
    }
}