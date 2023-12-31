const readline = require('readline');


//Lecture 4 youtube code: URL https://www.youtube.com/watch?v=VP55JN3y6uI&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=4&ab_channel=procademy

DisplayUserPrompt();

//added this function as my own additional part of this code
function verifyNumInput(numInput)
{
    if(!(numInput === typeof(Number)))
    {
        return "Error NOT A NUMBER";
    }

    return numInput;
}

//added this function as my own additional part of this code
//This makes the functioning code where it is actually being called from cleaner and makes a seperation of responsability in code

function DisplayUserPrompt()
{
    const textInterface = readline.createInterface({input: process.stdin, output: process.stdout});

    textInterface.question("please write a number: ", (number) =>{
        console.log(`${verifyNumInput(number)}`);
        textInterface.close();
    });
    //textInterface.question("please write a number: ", (number) => {console.log(`${verifyNumInput(number)}`)});
}