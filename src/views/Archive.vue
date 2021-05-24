<template>
  <div class="archive">
    <!--content-->
    <div class="w-full md:w-10/12 ml-auto">
        
      <div class="flex flex-wrap content-start bg-gray-200 mb-10">
          
          <router-link to="/facture" class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 mb-1">
            Facture
            <div class="pl-12 pt-1">
              
            </div> 
          </router-link>

          <router-link to="/archive" class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 mb-1">
            Archive facture
            <div class="pl-12 pt-1">
              <img alt="fleche" src="../assets/icone/flecheBas.svg" width="15" height="15">
            </div> 
          </router-link>

          <router-view/>
      </div>


      <div class="bg-gray-100">
          <button class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 text-gray-600 uppercase text-sm leading-normal rounded" @click="addFile">Ajouter</button>
      </div>

      <div class="bg-gray-100 h-screen flex justify-top items-center flex-col pl-5 pr-5">
        

        <!--Tableau-->
        <div class="w-full lg:w-6/6">
            <div class="bg-white shadow-md rounded my-6">
                <table class="min-w-max w-full table-auto">
                    <thead>
                        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th class="py-3 px-6 text-left">Nom du fichier</th>
                            <th class="py-3 px-6 text-center">Edition</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      <ul v-for="file in fileClassify" :key="file.name">
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img alt="Fichier" src="../assets/icone/file.svg" width="25" height="25">                       
                                    </div>
                                    <span class="font-medium">{{ file.name }}</span>
                                </div>
                            </td>
                          
                          
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <!--
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                    -->
                                </div>
                            </td>
                        </tr>  
                        </ul>      
                    </tbody>
                </table>
            </div>
        </div>
        <!--Fin tableau-->


      </div><!--/bg-color-->
    </div><!--/w-10/12/-->
  </div><!--Archive-->
</template>

<script>
// @ is an alias to /src

import { ipcRenderer } from 'electron'


export default {
  name: 'Archive',
  components: {

  },
  data() {
      return {
          fileClassify: [
            /*
            { 
              name: null,
            }
            */
          ],
      }
  },
  methods: {
    
    //Liste les fichiers du repertoire courant
    getListArchiveDirectory(){

      ipcRenderer.invoke('get-list-archive').then((message = []) => {
        
        console.log('ipcRenderer callback-->' + message)
    
        this.fileClassify.forEach(element => {
          console.log('contenu de fileClassify: ' + element.name)
        })

        message.forEach(item => {
          this.fileClassify.push({name: item});
        })
      })
    },

    //Ajouter un fichier au repertoire
    addFile(){
        ipcRenderer.send('add-file-archive'); 
        //this.getListFactureDirectory();
    }

  },
  mounted(){
    this.getListArchiveDirectory();
  },

  
}
</script>