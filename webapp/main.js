let result = document.querySelector("#result")

counter = 0
result.innerHTML = counter

function reset(){
    counter = 0;
    result.innerHTML = counter;
}

function plus(){
    counter++;
    result.innerHTML = counter;
}

function minus(){
    counter--;
    result.innerHTML = counter;
}