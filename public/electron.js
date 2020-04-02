const { app, BrowserWindow, Menu } = require('electron')
const path = require("path")
const isDev = require("electron-is-dev")

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL(
    isDev ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`
  );

   // Quit app when closed
   win.on("closed", function() {
    app.quit();
  });

  // builds menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // insert menu
  Menu.setApplicationMenu(mainMenu);

  // hide menu
  win.setMenuBarVisibility(false);

  // // Open the DevTools.
  // win.webContents.openDevTools()
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

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
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


///
/// Creates menu template
///
const mainMenuTemplate = [
  {
    label: "Menu",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];

// if mac, add empty object to menu
if (process.platform === "darwin") {
  mainMenuTemplate.unshift({});
}

// add developer tools item if not in prod
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: "reload"
      }
    ]
  });
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.