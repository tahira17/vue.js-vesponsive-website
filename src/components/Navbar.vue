<template>
    
  <section class="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-Header bg-fixed md:w-auto sm:w-auto"
  >
  <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
           <img src="../../src/assets/Group4260.png" />
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-white-800
                hover:text-white-400
                focus:outline-none focus:text-white-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm text-2l font-light text-white-800 hover:text-blue-400">
            Products
          </li>
          <li class="text-sm text-2l font-light text-white-800 hover:text-blue-400">
            Pricing
          </li>
          <li class="text-sm text-2l font-light text-white-800 hover:text-blue-400">
            Integration
          </li>
          <li class="text-sm text-2l font-light text-white-800 hover:text-blue-400">
            Contact Us
          </li>
             <li class="text-sm text-2l font-light text-white-800 hover:text-blue-400">
            Sign In
          </li>

                     <li >
           <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:text-blue-700 focus:z-10 focus:ring-4 mt-4">Try it for free</button>
          </li>
        </ul>
      </nav>
  <div class="flex-1 flex items-center">
      <div class="text-center mx-auto">
        <h1 class="text-6xl font-semibold">Influencer Discovery</h1>
        <p class="font-light text-2xl mt-5">The fastest and most efficient method to find social media</p>
        <button type="button" class="text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500 mt-10">Try For Free Today!</button>
      </div>
    </div>

    <div class="lg:w-2/3 lg:h-[400px] sm:w-1/2 md:w-2/3">
    <video class="bg-video__content rounded-md lg:ml-60 md:m-8 sm:m-2" autoplay muted loop>
      <source src="../../src/assets/Video.mp4" type="video/mp4">
   </video>
   </div>

   


</section> 
<div class="bg-white w-full h-[600px] hidden lg:block "></div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
});

</script>
