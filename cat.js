const fs = require('fs');

module.exports = function(cmd) {
    if(cmd.substring(0,3) === 'cat') {
        const file = cmd.substring(4);

        fs.readFile('./'+file, (err, data) => {
            if (err) {
                throw err
            } else {
                process.stdout.write(data);
                process.stdout.write('\nprompt > ');
            }
        })

        //process.stdout.write('cat command');
    }
}