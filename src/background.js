'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'
const {globalShortcut} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let max = true
const electron = require('electron')
// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })
function createWindow () {
    // Create the browser window.
    let w=electron.screen.getPrimaryDisplay().size.width/3;
    let h=electron.screen.getPrimaryDisplay().size.height;
    win = new BrowserWindow({ titleBarStyle: 'hidden',width: w,
        height: h, x:0, y:0});
    //win.maximize();
    //win.show();

    //icon setting
    win.setIcon('src/assets/ikonka.png')

    //disabling development tools
    win.webContents.on("devtools-opened", () => {
        win.webContents.closeDevTools();
    });
    win.setResizable(true)

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./HelloWorld.html')
    }

    win.on('closed', () => {
        win = null
    })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        await installVueDevtools()
    }
    createWindow()
})

//shortcut - ctrl+k
app.on('ready', ()=>{
    globalShortcut.register('Ctrl+K', () =>{
        if(max == false){
            win.show();
            max = true
            console.log("show")
        }else{
            if(max == true){
                win.hide();
                max = false
                console.log("hide")
            }}
    })
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}
