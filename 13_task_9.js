const fs = require('fs');

fs.writeFile("abc.txt", "Today\n", (err) => {
    if (err) {
        console.error("Error write ", err);
    } else {
        console.log(" written successfully.");

        setTimeout(() => {
            fs.appendFile("abc.txt", " Is ?", (err) => {
                if (err) {
                    console.error("Error append ", err);
                } else {
                    console.log(" appended successfully.");

                    setTimeout(() => {
                        fs.readFile("abc.txt", (err, data) => {
                            if (err) {
                                console.error("Error  read ", err);
                            } else {
                                console.log("File");
                                console.log(data.toString());
                            }
                        });
                    }, 1000); 
                }
            });
        }, 1000); 
    }
});
console.log("File operations initiated.");
