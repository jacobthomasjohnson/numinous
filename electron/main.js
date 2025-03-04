const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    title: "Numinous | Simple Mental Health Journaling",
    resizable: true,
    maximizable: true,
    minimizable: true,
    closable: true,
    alwaysOnTop: false,
    frame: false,
    icon: path.join(__dirname, "icon.png"),
    backgroundColor: "#181818",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Load Preload Script
      contextIsolation: true, // Protect from unsafe access
      nodeIntegration: false, // Prevent direct Node.js access
    },
  });

  const nextAppURL = "http://localhost:3000";
  mainWindow.loadURL(nextAppURL);
  mainWindow.webContents.openDevTools({ mode: "detach" });

  mainWindow.on("closed", () => (mainWindow = null));
});

// Handle Minimize & Close Events
ipcMain.on("window-minimize", () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on("window-close", () => {
  if (mainWindow) mainWindow.close();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
