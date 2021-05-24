/****************************************/
// capture des evenements du ipcRenderer 
/****************************************/
//const { ipcMain, dialog } = require('electron');

const fs = require('fs-extra');

//const os = require('os');

const path = require('path');


// lite le(s) fichier(s) du repertoire choisi
exports.getList = (directory) =>{
    let filesList = [];

    let files = fs.readdirSync(directory)
    files.forEach(file => {
        filesList.push(file)
    })
    console.log("contenu message ---> " + filesList.length);
    return filesList
};

// ajoute de(s) fichier(s) au repertoir choisi
exports.addFiles = (directory, files = []) => {
    files.forEach(file => {
        console.log('fichier ajouter :', file.name.base);
        
        // varable avec le chemain du fichier 
        let pathFile = file.path;
        //console.log('path pathFile: ', pathFile);
        
        // varable avec la destination du fichier concatené avec le nom et l'extensions du fichier
        let pathDestination = path.resolve(directory, file.name.base)
        //console.log('pathDestination: ', pathDestination);
        
        //enregistrement des fichiers
        fs.copyFileSync(
            pathFile, 
            pathDestination,
            fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE,
        );
        console.log('fichier(s) ajoute avec success !');      
    })
}

// delete file ...
exports.deleteFile = (directory, filename) => {
    
    const filePath = path.resolve(directory, filename);

    // supprime le fichier du file system
    if(fs.existsSync(filePath)) {
        fs.removeSync(filePath);
    }
    console.log('suppression du fichier: ',filename + 'filepath', filePath)
}

// archiver fichier 
exports.classifyFile = (dirDestination, dirSource, files = []) => {
    
    //console.log('fichier archiver dans : ', dirDestination);
    

    this.addFiles(dirDestination, files.map( filename => {
        const filePath = path.resolve(dirSource, filename)
        //const fileStats = fs.stat(filePath)
        /*
        console.log('*******************************************')
        console.log('dirSource: ', dirSource)
        console.log('dirDestination: ', dirDestination)
        console.log('filename: ', filename)
        console.log('filePath: ', filePath)
        console.log('*******************************************')
        */
        
        return {
            name: path.parse(filename), //structure les attributs du fichier 
            path: filePath,
        }
        
    }))
    
    
    // supprimer les fichier archivé...
    console.log('fichier supprime du dossier : ', dirDestination);
    files.forEach(item => {
        this.deleteFile(dirSource, item)
    })
}

