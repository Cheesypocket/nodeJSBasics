const readline = require('readline');

//#region executing code
let fileDirectory = './NodeJSFileInputExamples/Lesson5FileInput.txt';

DisplayOutput(ReadSingleFile(fileDirectory));

let userMessage = ReadUserInput();

WriteToSingleFile(userMessage, fileDirectory);

DisplayOutput(ReadSingleFile(fileDirectory));


//#endregion executing code

//reads a single file in utf8 format and returns a string value of the stored input

/*
   * It is important to note how this function is written. Typically a function typed as an action.
     Say for example: ReadInput(), or CaluclateHypotenuse()

   * Any parameters like any variable should be a noun and should self describe what it is.
     Say for example: sideLengthA, userInput, or enemyAI.

   * Functions should generally do one task. So here in ReadSingleFile, it literally reads one
     single file from the directory that is input. It will return the text from said file

   * Also note conventions here. Functions are all capitalized. Variables are camel cased (secondary word is capitalized)

   * Functions are generally important as when put where the code will actually be executed it will:
     1: reduce the redundency in the code
     2: make code more readable
     3: make code easier to debug because of 1 and 2.

*/
function ReadSingleFile(fileDir){
    const fileSystem = require('fs');

    text = fileSystem.readFileSync(fileDir, 'utf8');

    return text;
}

function DisplayOutput(output){
    console.log(output);
}

//appends a string value to a file
function WriteToSingleFile(inputText, fDirectory)
{
    const fileSystem = require('fs');

    fileSystem.writeFileSync(fDirectory, `\n${inputText} | Written at: ${new Date()}`);
}

function ReadUserInput()
{
    const textInterface = readline.createInterface({input:process.stdin, output:process.stdout});

    let userText = "text";

    textInterface.question("please write some text: ", (uInput) => {
            userText = uInput;
            textInterface.close();
        });

    return userText;
}
