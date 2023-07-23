const readline = require('readline');

//#region executing code
let fileDirectory = './NodeJSFileInputExamples/Lesson5FileInput.txt';

DisplayOutput(ReadSingleFile(fileDirectory));

let userMessage = ReadUserInput();

WriteToSingleFile(userMessage, fileDirectory);

DisplayOutput(ReadSingleFile(fileDirectory));


//#endregion executing code

//reads a single file in utf8 format and returns a string value of the stored input
function ReadSingleFile(fDirectory){
    const fileSystem = require('fs');

    text = fileSystem.readFileSync(fDirectory, 'utf8');

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
