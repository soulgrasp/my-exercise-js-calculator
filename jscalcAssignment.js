function doOperation(inNumber1, inNumber2, operation){
    if (operation === 1){
        return inNumber1 + inNumber2;
    }
    else if (operation === 2){
        return inNumber1 - inNumber2;
    }
    else if (operation === 3) {
        return inNumber1 * inNumber2;
    }
    else if (operation === 4){
        return inNumber1 / inNumber2;
    }
    else{
        alert("Invalid operation input, please try again (ctrl + r)");
        return "";
    }
};

console.log("Here start the Calc things, bien venido");

const inNumber1 = window.parseInt(prompt("Type a number"));

const inNumber2 = window.parseInt(prompt("Type one more"));

const operationType = window.parseInt(prompt("Choose type of operation \n 1(addition) \n 2(subtraction) \n 3(multiply) \n 4(divide)")); 

const result = doOperation(inNumber1, inNumber2, operationType);

alert(`The result is: ${result}`);
    
//console.log(inNumber);

alert("hasta la vista");