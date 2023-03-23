const fs = require('fs');

fs.rename('example.txt', 'example2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully renamed the file');
    }
});