/****************************************/
// capture des evenements du ipcRenderer facture
/****************************************/
const { ipcMain, dialog } = require('electron');

const fs = require('fs-extra');
const path = require('path');

const manageDirectory = require(path.resolve('./src/mainProcess/services/manageDirectory.js'))
const manageFile = require(path.resolve('./src/mainProcess/services/manageFile.js'))

// crée un repertoir archives
ipcMain.on('create-archive-directory', () => {
    // creation du repertoire de base si il n'existe pas deja
    if(!fs.existsSync(manageDirectory.getArchiveDirectory())){
        manageDirectory.createArchiveDirectory();
    } else {
        dialog.showMessageBox({
            type: 'warning',
            title: 'Attention !',
            message: 'un dossier a deja été crée a l\'adresse suivante, ' + manageDirectory.getArchiveDirectory(),
            buttons: ['ok']
        });
    }
})

// liste les fichiers du repertoire archives
ipcMain.handle('get-list-archive', () => {
    return manageFile.getList(manageDirectory.getArchiveDirectory()); 
})

// ajouter un fichier au repertoir courant
ipcMain.on('add-file-archive', () => { 
    const files = dialog.showOpenDialogSync({ 
        properties: ['openFile', 'multiSelections'],
    });

    manageFile.addFiles(manageDirectory.getArchiveDirectory(), files.map( filepath => {
        return {
            name: path.parse(filepath), //structure les attributs du fichier 
            path: filepath,
        }
    }));
})
