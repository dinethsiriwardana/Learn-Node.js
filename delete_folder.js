const fs = require("fs");

//? Delete the file because,
//? we can't delete a folder with a file inside it
// fs.unlink("./tutorial/example.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted the file");

//         //? Delete the folder
//         fs.rmdir("tutorial", (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Successfully Deleted Folder");
//             }
//         });

//     }
// });

fs.readdir("tutorial", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    for (let file of files) {
      fs.unlink("./tutorial/" + file, (err) => {
        if (err) console.log(err);
        else console.log("Successfully deleted " + file);
      });
    }
    fs.rmdir("tutorial", (err) => {
      if (err) console.log(err);
      else console.log("Successfully deleted folder");
    });
  }
});
