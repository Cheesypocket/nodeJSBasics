//Youtube Lesson 7 Code

//Extra Notes will be below


const fileSystem = require('fs');

let fileDirectory = "./NodeJSFileInputExamples/Lesson7fileInput.txt";

readSingleFile(fileDirectory);


//function will read single file, but in this lesson asyncronysly
function readSingleFile(file)
{
    //this goes in the format of [file, file format, callback (in this case an anonymous funciton) that takes the two default parameters]

    //Here the file contents will be the data from the file.
    //Use an if statement too for the error if you are expecting on reading from a particular file
    //you might suspect could be missing/or corrupted.

    //here because the lesson is not apeparently using promises I will use a try catch.
        //try-catch scenarios tend to have a lot of overhead, try to use promises
        //when you can in need of this situation. Will link below this file.

    /*
        To explain what it is happening here:
         -readFile function is an async method. so what is happening is in three steps:
           1. The reading of the data is put to the background

           2. Console.log outputs reading file as specified

           3. When the readfile function is done in the background it will bring console.log to the front
              and the file contents will be logged to the console provided the file exists

              -> if the file DOES NOT exist this the anonymous function will instead using this try-catch
                 output the error message.

              ->it is advisable to tweak and change the file name here, or the actual file and see the
                error in action
    */
    fileSystem.readFile(file,`utf-8` ,(err, fileContents) => {
        try {
            console.log(fileContents);
        } catch (error) {
            console.log(err.message);
        }
    })
    console.log("reading file...")
}



//#region Extra Notes

/*
    Extra documentation will be provided here.

    -Youtubers are noting that a video or resources for promises are not linked in video description.
     Here I will amend that for those looking to learn

    *documentation on promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

    -First documentation with mozilla mdn
    *documentation on Async: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

    -Second documentation relavent with first still with mozilla MDN
    *documentation on using promises: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
*/

//#endregion