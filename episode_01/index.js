let { app, BrowserWindow } = require("electron")

function createWindow(){
    let win = new BrowserWindow({})
    win.maximize()
    win.loadFile("index.html")
}

app.on("ready", createWindow)

app.on("window-all-closed", () =>{
    app.quit()
})