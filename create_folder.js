const fs = require('fs');

fs.mkdir('tutorial', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully created the folder');

        //? Create a file inside the folder
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully created file');
            }
        });
        
    }
});