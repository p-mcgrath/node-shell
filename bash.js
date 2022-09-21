
process.stdout.write('prompt > ');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const fs = require('fs');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    pwd(cmd);
    ls(cmd);
    cat(cmd);
    curl(cmd);

});