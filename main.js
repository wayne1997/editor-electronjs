const {app, BrowserWindow} = require('electron');

function createWindow(){
    let win = new BrowserWindow({
        width: 700,
        height: 550,
        fullscreen: false,
        maximizable:false,
        resizable: false,
    });


    win.loadFile("editor.html");
};

app.whenReady().then(createWindow);