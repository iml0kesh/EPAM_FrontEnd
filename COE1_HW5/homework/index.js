// Your code goes here
function storeNames(){
    return arguments;
}

function getDifference(num1 , num2){
    return num1-num2;
}

function negativeCount(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}

function letterCount(word , letter){
    let count = 0;
    for(let i = 0 ; i < word.length ; i++){
        if(word[i] == letter){
            count++;
        }
    }
    return count;
}

