<template>
    
  <section class="flex flex-col h-[1000px] justify-center content-center text-white bg-center bg-cover bg-blend-overlay bg-Header md:w-auto sm:w-auto relative z-0"
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
<div class="w-1/2 bottom-20 left-40  lg:h-[400px] md:h-[400px] sm:h-[200px] absolute z-10 lg:top-[50%] lg:left-[25%] md:top-[50%] md:left-[25%] sm:top-[70%] sm:left-[25%]">

  <div class="aspect-w-16 aspect-h-9">
  <iframe src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

</div>

<div class="w-full  h-[400px] hidden lg:block md:block"></div>
 

   


</section> 

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
