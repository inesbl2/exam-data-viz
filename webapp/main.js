let result = document.querySelector("#result")

counter = 0
result.innerHTML = counter

function clear(){
    result.innerHTML = 0;
}

function plus(){
    counter++;
    result.innerHTML = counter;
}

function minus(){
    counter--;
    result.innerHTML = counter;
}