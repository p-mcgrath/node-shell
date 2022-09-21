const request = require('request');

module.exports = function(cmd) {
    if(cmd.substring(0,4) === 'curl') {
        const url = cmd.substring(5);

        request(url, (err, response, body) => {
            if (err) {
                throw err
            } else {
                process.stdout.write(body);
                process.stdout.write('\nprompt > ');
            }
        })
        
       // process.stdout.write('curl command');
    }
}