const { app, BrowserWindow } = require('electron');
const path = require("path");

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 650,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.loadFile('./public/index.html');
  win.loadFile(path.join(__dirname, 'public/index.html'),);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});
