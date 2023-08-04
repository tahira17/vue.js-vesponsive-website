<template>
  <div
    name="reachoutSection"
    class="w-full h-screen bg-[#f6f6f7] text-gray-300"
  >
    <div
      class="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
    >
      <div>
        <p class="py-4 : text-black">Search and reach out...</p>
      </div>

      <div
        class="h-[300px] w-[200px] max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 hover:scale-110 duration-500 bg-MaskGroup46"
    
      >
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg "
          src="../../src/assets/Group14190.png"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Unlimited 
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400"
          >search and find</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReachOutSection",
});
</script>
