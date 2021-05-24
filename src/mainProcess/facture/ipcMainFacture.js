/****************************************/
// capture des evenements du ipcRenderer facture
/****************************************/
const { ipcMain, dialog } = require('electron');

const fs = require('fs-extra');
const path = require('path');

const manageDirectory = require(path.resolve('./src/mainProcess/services/manageDirectory.js'))
const manageFile = require(path.resolve('./src/mainProcess/services/manageFile.js'))

// crée un repertoir factures
ipcMain.on('create-facture-directory', () => {
    // creation du repertoire de base si il n'existe pas deja
    if(!fs.existsSync(manageDirectory.getFactureDirectory())){
        manageDirectory.createFactureDirectory();
    } else {
        dialog.showMessageBox({
            type: 'warning',
            title: 'Attention !',
            message: 'un dossier a deja été crée a l\'adresse suivante, ' + manageDirectory.getFactureDirectory(),
            buttons: ['ok']
        });
    }
})

// liste les fichiers du repertoire primes
ipcMain.handle('get-list-facture', () => {
    return manageFile.getList(manageDirectory.getFactureDirectory()); 
})

// ajouter un fichier au repertoir courant
ipcMain.on('add-file-facture', () => { 
    const files = dialog.showOpenDialogSync({ 
        properties: ['openFile', 'multiSelections'],
    });

    manageFile.addFiles(manageDirectory.getFactureDirectory(), files.map( filepath => {
        return {
            name: path.parse(filepath), //structure les attributs du fichier 
            path: filepath,
        }
    }));
})

// supprimer la facture
ipcMain.on('delete-file-facture', (event, file) => {
    
    dialog.showMessageBox({
        type: 'warning',
        title: 'delete file',
        message: `Voulez-vous vraiment supprimer le fichier : ${ file }`,
        buttons: ['Supprimer', 'Annuler']
    }).then(result => {
        if(result.response === 0) {
            manageFile.deleteFile(manageDirectory.getFactureDirectory(), file);
        }else{
            console.log('annulation de la suppression')
        }
    }).catch(error => {
        console.log('Erreur durant la suppression du fichier : ', error)
    })

})

// classer la facture
ipcMain.on('classify-facture', (event, files = []) => {
    //console.log(files)

   //manageDirectory
   //dirDestination, dirSource, files = []
   manageFile.classifyFile(manageDirectory.getArchiveDirectory(), manageDirectory.getFactureDirectory(), files)
   
})

