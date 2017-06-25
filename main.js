'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const frameworkURL = "index.html"
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/'+frameworkURL);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
 mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  // Standard behaviour on OSX is to leave the application running unless you CMD+Q it.
  // If you want this behaviour invert comments in the next 4 lines, my preference is to exit on all platforms
  // if (process.platform !== 'darwin') {
  //   app.quit();
  // }
  app.quit();
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
