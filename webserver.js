const vscode = require('vscode');
const http = require('http');

function create(resp) {
    return http.createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/json" });
        response.end(resp);
        console.log(`Sent a response: ${resp}`);
    });
}

module.exports = {
    create,
}
