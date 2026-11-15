<template>
  <div
    class="flex flex-col h-full justify-center content-center text-white bg-center bg-cover bg-blend-overlay bg-Header md:w-auto sm:w-auto relative z-0"
  >
    <!-- <nav
      class="container lg:px-6 lg:py-8 md:mt-10 sm:mt-10 mx-auto md:flex md:justify-between md:items-center lg:mb-55 sm:mb-50"
    > -->
    <nav
      class="container lg:px-6 lg:py-8 md:mt-10 sm:mt-10 mx-auto md:flex md:justify-between md:items-center lg:mb-55 sm:mb-50 relative z-50"
    >
      <div class="flex items-center justify-between">
        <img src="../../src/assets/Group4260.png" />
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden lg:hidden">
          <button
            type="button"
            class="text-white-800 hover:text-white-400 focus:outline-none focus:text-white-400"
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
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 lg:space-x-10 xl:space-x-10 md:mt-0"
      >
        <!-- <li
          class="text-sm text-2l font-light text-white-800 hover:text-blue-400"
        >
          Products
        </li>
        <li
          class="text-sm text-2l font-light text-white-800 hover:text-blue-400"
        >
          Pricing
        </li>
        <li
          class="text-sm text-2l font-light text-white-800 hover:text-blue-400"
        >
          Integration
        </li>
        <li
          class="text-sm text-2l font-light text-white-800 hover:text-blue-400"
        >
          Contact Us
        </li>
        <li
          class="text-sm text-2l font-light text-white-800 hover:text-blue-400"
        >
          Sign In
        </li>

        <li>
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:text-blue-700 focus:z-10 focus:ring-4 mt-4"
          >
            Try it for free
          </button>
        </li> -->

        <li>
          <a
            @click="scrollToSection('WhatYouGet')"
            class="text-sm font-light text-white hover:text-blue-400 cursor-pointer"
          >
            What we Offer
          </a>
        </li>
        <li>
          <a
            @click="scrollToSection('Pricing')"
            class="text-sm font-light text-white hover:text-blue-400 cursor-pointer"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            @click="scrollToSection('RoadMap')"
            class="text-sm font-light text-white hover:text-blue-400 cursor-pointer"
          >
            Our RoadMap
          </a>
        </li>
        <li>
          <a
            @click="scrollToSection('contact')"
            class="text-sm font-light text-white hover:text-blue-400 cursor-pointer"
          >
            Contact Us
          </a>
        </li>

        <li>
          <button
            type="button"
            @click="scrollToSection('Pricing')"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border hover:text-blue-700 mt-4 cursor-pointer"
          >
            Try it for free
          </button>
        </li>
      </ul>
    </nav>

    <div class="w-full h-screen">
      <div class="flex flex-col justify-center items-center w-full h-full">
        <div class="max-w-[1500px] w-full grid sm:grid-cols-1 gap-8 p-4">
          <div
            class="flex flex-col justify-center items-center text-center w-full h-full"
          >
            <h1 class="text-6xl font-semibold mt-40">Influencer Discovery</h1>
            <p class="font-light text-2xl mt-5">
              The fastest and most efficient method to find social media
            </p>
            <!-- <button
              type="button"
              class="text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500 mt-10"
            >
              Try For Free Today!
            </button> -->
            <button
              type="button"
              @click="scrollToSection('Pricing')"
              class="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer mt-10"
            >
              Try For Free Today!
            </button>
          </div>

          <!-- video  -->

          <div
            class="items-center w-full h-full relative rounded-xl overflow-auto lg:p-6 md:p-4 sm:p-0 bg-white shadow-2xl"
          >
            <div class="aspect-w-16 aspect-h-9 shadow-2xl">
              <iframe
                class="rounded-2xl mb-10 shadow-2xl"
                src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0"
                frameborder="10"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="h-[50px] lg:h-[300px] md:h-[50px] sm:h-[30px]"></div> -->
</template>
<!-- <script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
});
</script> -->
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    scrollToSection(id) {
      this.showMenu = false;
      const element = document.getElementById(id);
      console.log("Looking for element:", id, element); // Check your browser F12 Console!

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with ID "${id}" was not found!`);
      }
    },
    handleAction() {
      alert("Figma Landing Page Demo — Button clicked!");
    },
  },
});
</script>
