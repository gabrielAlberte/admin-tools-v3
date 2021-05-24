/****************************************/
// capture des evenements du ipcRenderer prime
/****************************************/
const { ipcMain, dialog } = require('electron');

const fs = require('fs-extra');
const path = require('path');

const manageDirectory = require(path.resolve('./src/mainProcess/services/manageDirectory.js'))
const manageFile = require(path.resolve('./src/mainProcess/services/manageFile.js'))

// crée un repertoir primes
ipcMain.on('create-prime-directory', () => {  
    // creation du repertoire de base si il n'existe pas deja
    if(!fs.existsSync(manageDirectory.getPrimeDirectory())){
        manageDirectory.createPrimeDirectory();
    } else {
        dialog.showMessageBox({
            type: 'warning',
            title: 'Attention !',
            message: 'un dossier a deja été crée a l\'adresse suivante, ' + manageDirectory.getPrimeDirectory(),
            buttons: ['ok']
        });
    }
})

