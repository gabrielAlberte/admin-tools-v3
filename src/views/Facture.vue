<template>
  <div class="facture">
   
    <!--content-->
    <div class="w-full md:w-10/12 ml-auto">

      <div class="flex flex-wrap content-start bg-gray-200 mb-10">
          
          <router-link to="/facture" class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 mb-1">
            Facture
            <div class="pl-12 pt-1">
              <img alt="fleche" src="../assets/icone/flecheBas.svg" width="15" height="15">
            </div> 
          </router-link>

          <router-link to="/archive" class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 mb-1">
            Archive facture
            <div class="pl-12 pt-1">
              <!--<img alt="fleche" src="../assets/icone/fleche.svg" width="15" height="15">-->
            </div> 
          </router-link>

          <router-view/>
      </div>

      <div class="bg-gray-100">
          <button class="flex pl-10 pr-10 pt-3 pb-3 ml-5 bg-gray-200 hover:bg-gray-300 text-gray-600 uppercase text-sm leading-normal rounded" @click="addFile">Ajouter</button>
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
                    <div v-for="file in fileApi" :key="file.name">
                      <tr class="border-b border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="mr-2">
                                  <img alt="Fichier" src="../assets/icone/file.svg" width="25" height="25">                       
                                </div>
                                <span class="font-medium">{{ file.name }}</span>

                            </div>
                        </td>

                        <td class="py-3 px-6 text-center ">
                            <div class="flex item-center justify-center">

                              <div class="w-4  transform hover:text-purple-500 hover:scale-110 ml-20">   
                                <input class="form-checkbox h-4 w-4" type="checkbox" :value="file.name" v-model="checkedItem" :key="file.name">        
                              </div>
                  
                              <div class="w-4  transform hover:scale-110  mr-20">            
                                  <button  class="pl-10 pr-10 pt-1 pb-1 ml-5 bg-gray-200 text-gray-600 uppercase text-sm leading-normal rounded"  @click="classifyFile">archiver</button>
                              </div>
                              
                              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 ml-20">
                                  <button class="pl-10 pr-10 pt-1 pb-1 ml-20 m bg-red-300 text-gray-600 uppercase text-sm leading-normal rounded" @click="deleteFile(file.name)">supprimer</button>
                              </div>
                            </div>
                        </td>
                      </tr> 
                    </div>
                  </tbody>
              </table>
          </div>
        </div>
        <!--Fin tableau-->

      </div><!--/bg-color-->
    </div><!--/w-10/12/-->
  </div>
</template>

<script>
// @ is an alias to /src

import { ipcRenderer } from 'electron'

export default {
  name: 'Facture',
  components: {

  },
  data() {
      return {
          fileApi: [
           /*
           { 
              name: null,
            }
            */
          ],
          checkedItem: [
            
          ],

      }
  },
  methods: {
    
    //Liste les fichiers du repertoire courant
    
    
    getListFactureDirectory(){
      ipcRenderer.invoke('get-list-facture').then((message = []) => {
        message.forEach(item => {
          //this.fileApi.push({name: item});
          this.fileApi.push({name: item});
        })
      })
    },
      
    

    //Ajouter un fichier au repertoire
    addFile(){
        ipcRenderer.send('add-file-facture'); 
        //this.getListFactureDirectory();
        
    },

    deleteFile(file){
      console.log(file)
      ipcRenderer.send('delete-file-facture', file)
      
    },

    //Archiver fichier
    classifyFile(){
      
      let tab = []  
      this.checkedItem.forEach( item => {
        console.log(item)
        tab.push(item)

          ipcRenderer.send('classify-facture', tab)
          //ipcRenderer.send('classify-facture', item)
        })

        //ipcRenderer.send('classify-facture', this.checkedItem)

        
    },

  },
  mounted(){
    this.getListFactureDirectory();
    
  },
  updated() {
    //this.getListFactureDirectory();
  },
  
}
</script>