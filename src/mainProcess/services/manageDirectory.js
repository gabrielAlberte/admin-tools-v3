//Utilitaires
const path = require('path');
const fs = require('fs-extra');
const os = require('os');

// repertoire de l'application
const mainDirectory = path.resolve(os.homedir(), 'AdminToolsRepo');
const factureDirectory = path.resolve(os.homedir(), `${mainDirectory}/Factures`);
const primeDirectory = path.resolve(os.homedir(), `${mainDirectory}/Primes`);
const archiveDirectory = path.resolve(os.homedir(), `${mainDirectory}/Archives`);

/***********/
/* Getter */
/***********/

// donne l'adresse du repertoir principale 'AdminToolsRepo'
exports.getMainDirectory = () =>{
    //console.log('chemain de mainDirectoy : ', mainDirectory);
    return mainDirectory;
}

// donne l'adresse du repertoir 'Factures'
exports.getFactureDirectory = () => {
    //console.log('chemain du repertoir Facture : ', factureDirectory);
    return factureDirectory
}

// donne l'adresse du repertoir 'Primes'
exports.getPrimeDirectory = () => {
   //console.log('chemain du repertoir Facture : ', primeDirectory);
    return primeDirectory;
}

// donne l'adresse du repertoir 'Archives'
exports.getArchiveDirectory = () => {
    //console.log('chemain du repertoir Facture : ', archiveDirectory);
    return archiveDirectory;
}

/*******************/
/* Create  directory methodes */
/*******************/

// crée un repertoire principale pour l'application
exports.createMainDirectory = () =>{
    console.log('creation du repertoir principale');
    fs.mkdir(mainDirectory);
}

exports.createFactureDirectory = () =>{
    console.log('creation du repertoir Factures');
    fs.mkdir(factureDirectory);
}

exports.createPrimeDirectory = () =>{
    console.log('creation du repertoir Primes');
    fs.mkdir(primeDirectory);
}

exports.createArchiveDirectory = () =>{
    console.log('creation du repertoir Archives');
    fs.mkdir(archiveDirectory);
}




