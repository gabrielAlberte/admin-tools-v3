<template>
  <div class="relative md:fixed w-full md:w-2/12 min-h-screen inset-0">
      <div class="pl-20 pb-6">
          <img alt="logo admin tools" src="./assets/logoBlack.png" width="100" height="100"> 
      </div>

      <ul>
          <li class="pb-5">
             <router-link to="/" class="flex pl-20 w-full pr-10 pt-3 pb-3 bg-gray-200 hover:bg-gray-100">
              <div class="pr-5">
                <img alt="Vue logo" src="./assets/icone/home.svg" width="25" height="25">
              </div> 
                Home
              <div class="pl-12 pt-1">
                <img alt="Vue logo" src="./assets/icone/fleche.svg" width="15" height="15">
              </div> 
            </router-link>
          </li>

          <li class="pb-5">
           <router-link to="/facture" class="flex pl-20 w-full pr-10 pt-3 pb-3 bg-gray-200 hover:bg-gray-100">
              <div class="pr-5">
                <img alt="Vue logo" src="./assets/icone/facture.svg" width="25" height="25">
              </div> 
              Facture
              <div class="pl-12 pt-1">
                <img alt="Vue logo" src="./assets/icone/fleche.svg" width="15" height="15">
              </div> 
            </router-link>
          </li>

          <li class="pb-5">
            <router-link to="/prime" class="flex pl-20 w-full pr-10 pt-3 pb-3 bg-gray-200 hover:bg-gray-100">
              <div class="pr-5">
                <img alt="Vue logo" src="./assets/icone/prime.svg" width="25" height="25">
              </div> 
              Prime
              <div class="pl-12 pt-1">
                <img alt="Vue logo" src="./assets/icone/fleche.svg" width="15" height="15">
              </div> 
            </router-link>
          </li>

          <li class="pb-5">
            <router-link to="/decompte" class="flex pl-20 w-full pr-10 pt-3 pb-3 bg-gray-200 hover:bg-gray-100">
              <div class="pr-5">
                <img alt="Icone decompte" src="./assets/icone/decompte.svg" width="25" height="25">
              </div> 
              Décompte
              <div class="pl-10 pt-1">
                <img alt="Vue logo" src="./assets/icone/fleche.svg" width="15" height="15">
              </div> 
            </router-link>
          </li>

          <li class="pb-5">
            <router-link to="/archive" class="flex pl-20 w-full pr-10 pt-3 pb-3 bg-gray-200 hover:bg-gray-100">
              <div class="pr-5">
                <img alt="Vue logo" src="./assets/icone/archive.svg" width="25" height="25">
              </div> 
              Archive
              <div class="pl-12 pt-1">
                <img alt="Vue logo" src="./assets/icone/fleche.svg" width="15" height="15">
              </div> 
            </router-link>
          </li>

      </ul>
  </div>
  

  <router-view/>
</template>

<style src="./assets/tailwind.css"/>