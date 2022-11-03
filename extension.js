const vscode = require('vscode');
const webserver = require('./webserver');
const server = webserver.server;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "vscode-healthcheck" is now active!');
	const config = vscode.workspace.getConfiguration('vscode-healthcheck');

	let disposable = vscode.commands.registerCommand('vscode-healthcheck.start', function () {
		server.listen(config.port);
		vscode.window.showInformationMessage('Hello World from vscode-healthcheck!');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('vscode-healthcheck.stop', function () {
		server.close();
		vscode.window.showInformationMessage('Hello World from vscode-healthcheck!');
	});
	context.subscriptions.push(disposable);
}

function deactivate() {
	server.close();
}

module.exports = {
	activate,
	deactivate
}
