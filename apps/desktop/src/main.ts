import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { fork } from 'child_process'

let mainWindow: BrowserWindow | null = null
let daemon: ReturnType<typeof fork> | null = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  const startUrl = `file://${join(__dirname, '../web/dist/index.html')}`
  mainWindow.loadURL(startUrl)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(() => {
  // Start daemon
  daemon = fork(join(__dirname, '../../daemon/dist/index.js'))

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (daemon) daemon.kill()
  if (process.platform !== 'darwin') app.quit()
})

// IPC handlers
ipcMain.handle('get-daemon-status', () => {
  return daemon ? 'connected' : 'disconnected'
})

ipcMain.handle('stop-daemon', () => {
  if (daemon) {
    daemon.kill()
    daemon = null
    return true
  }
  return false
})