<template>
  <!-- <section
    class="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-Header bg-fixed"
  >
    <div
      class="max-w-screen-xl flex gap-20 mx-auto p-4"
    >
      <span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >ContentStudio.io</span
      >

      <nav class="flex gap-5">
        <a>Product</a>
        <a>Pricing</a>
        <a>Integration</a>
        <a>Contact Us</a>
        <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Try it for free</button>
      </nav>
    </div>


  </section> --> 



  <section class="flex flex-col min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-Header bg-fixed"
  >
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-10">
     <a class="flex title-font font-bold items-center text-white-900 mb-4 md:mb-0">
     ContentStudio
     </a>
     <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <a class="mr-10 ml-80">Products</a>
       <a class="mr-10">Pricing</a>
       <a class="mr-10">Integration</a>
       <a class="mr-10">Contact Us</a>
       <a class="mr-15">Sign In</a>

     </div>
     <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Try it for free</button>
  </div>
  <div class="flex-1 flex items-center">
      <div class="text-center mx-auto">
        <h1 class="text-6xl font-semibold">Influencer Discovery</h1>
        <p class="font-light text-2xl mt-5">The fastest and most efficient method to find social media</p>
        <button type="button" class="text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500 mt-10">Try For Free Today!</button>
      </div>
    </div>
</section> 
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>
