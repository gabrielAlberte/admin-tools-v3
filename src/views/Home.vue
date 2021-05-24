<template>
  <div class="home">
    <!-- content -->
    <div class="w-full md:w-10/12 ml-auto">
      <div class="bg-gray-100 h-screen flex justify-top flex-col pl-5 pr-5">

        <div class="bg-gray-100">
          <h1 class="text-black text-xl leading-normal pl-5">Démarrage</h1>
          <p class="text-black leading-normal pl-5">Racine du dossier principale : {{ pathDirectory }}</p>
          <button class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 hover:bg-gray-300 text-gray-600 uppercase text-sm leading-normal rounded" @click="createDirectory">create the directory</button>
        </div>

      </div><!--/bg-color-->
    </div><!--/w-full-->

  </div><!--/Home-->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { ipcRenderer } from 'electron'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data() {
      return {
          pathDirectory: '',     
      }
  },
  methods: {

    // donne le chemain du repertoir courant
    getMainDirectory(){
      ipcRenderer.invoke('get-main-directory').then((path) => {
        this.pathDirectory = path;
      })
    },

    createDirectory(){
      this.createMainDirectory();
      this.createFactureDirectory();
      this.createPrimeDirectory();
      this.createArchiveDirectory();
    },
    
    // création du repertoire principale
    createMainDirectory(){
      ipcRenderer.send('create-main-directory');
    },

    // création du repertoire prime
    createFactureDirectory(){
      ipcRenderer.send('create-facture-directory');
    },

    // création du repertoire prime
    createPrimeDirectory(){
      ipcRenderer.send('create-prime-directory');
    },

    // création du repertoire archive
    createArchiveDirectory(){
      ipcRenderer.send('create-archive-directory');
    },
  },

  mounted(){
    this.getMainDirectory();
  },
}
</script>
