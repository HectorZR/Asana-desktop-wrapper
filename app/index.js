const { app, BrowserWindow } = require("electron");

function createWindow() {
    let window = new BrowserWindow({
        width: 1000,
        height: 600,
        minWidth: 800,
        minHeight: 600,
    });

    window.loadURL("https://app.asana.com");
}

app.allowRendererProcessReuse = true;

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().lenght === 0) {
        createWindow();
    }
});