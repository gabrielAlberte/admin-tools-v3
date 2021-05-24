
const { ipcMain, dialog } = require('electron');
const path = require('path');

const manageDirectory = require(path.resolve('./src/mainProcess/services/manageDirectory.js'))

const manageFile = require(path.resolve('./src/mainProcess/services/manageFile.js'))

// revoie le chemain du repertoir principal
ipcMain.handle('get-main-directory', () =>{
    let directory = manageDirectory.getMainDirectory();
    //console.log('repertoir courant: ', dir)
    return directory;
})


ipcMain.on('classify-facture', (event, files = []) => {
    //console.log(files)

   //manageDirectory
   //dirDestination, dirSource, files = []
   manageFile.classifyFile(manageDirectory.getArchiveDirectory(), manageDirectory.getFactureDirectory(), files)
   
})
