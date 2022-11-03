const vscode = require('vscode');
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/json"
    });

    const responseMessage = '{"hello": "world"}';
    response.end(responseMessage);
    console.log(`Sent a response : ${responseMessage}`);
});

module.exports = {
    server,
}
