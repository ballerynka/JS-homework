// PRODUCER -creates / offers data

function produce(){
    return 1000
}


// TRANSFORMER - receives / processes / returns

function transform(value){
    let res = value * 1000
    return res

}

// CONSUMER - receives / consumes
function consume (n){
    console.log('n' + n)
}

///////////////////// HW ///////////////////////

function randomInteger(){
return Math.floor(Math.random() * 10) + 1;
}

function devideInteger(value){
let result = Math.round(value / 2)
    return result
}

function resultInteger(value){
result.innerHTML = value
}
