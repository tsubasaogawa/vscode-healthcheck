const vscode = require('vscode');
const webserver = require('./webserver');
let server;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	[
		vscode.commands.registerCommand('vscode-healthcheck.start', function () {
			const config = vscode.workspace.getConfiguration('vscode-healthcheck');
			server = webserver.create(config.response);
			server.listen(config.port);
			vscode.window.showInformationMessage('healthcheck started');
		}),
		vscode.commands.registerCommand('vscode-healthcheck.stop', function () {
			server.close();
			vscode.window.showInformationMessage('healthcheck stopped');
		}),
		vscode.commands.registerCommand('vscode-healthcheck.reload', function () {
			server.close();
			const config = vscode.workspace.getConfiguration('vscode-healthcheck');
			server = webserver.create(config.response);
			server.listen(config.port);
			vscode.window.showInformationMessage('healthcheck restarted');
		}),
	].forEach((disposable) => { context.subscriptions.push(disposable); });
}

function deactivate() {
	server.close();
}

module.exports = {
	activate,
	deactivate
}
