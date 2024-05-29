let output = document.getElementById("output");

function display(num){
    output.value += num;
}

function Calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert("Enter properly... ")
    }
}

function clr(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}
