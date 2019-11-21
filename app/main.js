import { app, BrowserWindow } from 'electron';

/** @type {Electron.BrowserWindow | null} */
let browserWindow = null;

app.on('ready', () => {
  browserWindow = new BrowserWindow({
    width: 300,
    height: 600,
    minWidth: 300,
    minHeight: 600,
    show: false,
  });
  browserWindow.loadURL(`file://${__dirname}/index.html`);
  browserWindow.once('ready-to-show', () => {
    browserWindow.show();
  });
});
