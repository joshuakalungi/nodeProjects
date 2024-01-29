const { readFile, writeFile } = require('fs');


// error-first callback function
const first = readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    const second = readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});