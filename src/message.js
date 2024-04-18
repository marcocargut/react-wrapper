const fs = require('fs');
const { exec } = require('child_process');

const filename = 'hello.txt';
const content = 'Hello!';

// Create the file
fs.writeFile(filename, content, (err) => {
    if (err) throw err;

    console.log(`${filename} created successfully.`);

    // Open the file using the default text editor
    exec(`open ${filename}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error opening file: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
    });
});
