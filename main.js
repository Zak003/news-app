const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
    var win = new BrowserWindow({
        fullscreen: true,
        icon: '',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./test.html')
}

ipcMain.on('request-app-close', event=> {
    app.quit();
});

app.on('ready', createWindow)