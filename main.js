const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
	win = new BrowserWindow({
		show: false,
		width: 800,
		height: 600
	});
	
	win.loadFile('index.html');
	
	//win.webContents.openDevTools();
	
	win.on('ready-to-show', () => {
		win.show();
	});
	
	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

// for mac
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit();
	}
});

// for mac
app.on('activate', () => {
	if(win === null) {
		createWindow();
	}
});
