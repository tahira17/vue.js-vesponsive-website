<template>
  <div
    class="bg-blue-900 bg-cover lg:h-screen md:h-screen sm:w-2/3 lg:w-full md:w-full"
  >
    <div>
      <h1 class="text-4xl text-white text-center py-20">Road Map</h1>
      <p class="text-white text-center ml-10">
        The priority of features on roadmap can change based upon the user's
        feedback.
      </p>
    </div>
    <div class="grid lg:grid-cols-5 gap-0 md:grid-cols-1 sm:grid-cols-1 mt-10">
      <!-- first div -->
      <div
        class="h-50 w-50 text-right font-light w-full h-full lg:ml-20 md:ml-10 sm:ml-2"
      ></div>
      <!-- 2nd  -->
      <div class="text-right font-light lg:w-full lg:h-[200px] sm:w-1/2 sm:h-1/2">
        <h3 class="text-bold text-blue-400">Youtube Influencers Discovery</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
      <div
        class="h-50 w-50 text-right font-light w-full h-[200px] lg:ml-20 md:ml-10 sm:ml-2"
      >
        <h3 class="text-bold text-blue-400">Influencer's Contact Info</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
      <div
        class="rounded-lg h-50 w-50 text-right font-light w-full h-[200px] lg:ml-20 md:ml-10 sm:ml-2"
      >
        <h3 class="text-bold text-blue-400">Integration with other tools</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
      <div class="rounded-lg h-12"></div>

      <div
        class="rounded-lg h-50 w-50 text-left font-light w-full h-[200px] lg:ml-20 md:ml-10 sm:ml-2"
      >
        <img
          src="../../src/assets/step1.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />

        <h3 class="text-bold text-blue-400 mt-10">Instagram Influencers</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-14">
        <img
          src="../../src/assets/step2.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />
        <img
          src="../../src/assets/step456.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />
      </div>
      <div
        class="rounded-lg h-50 w-50 text-left font-light w-full h-[200px] lg:ml-20 md:ml-10 sm:ml-2"
      >
        <img
          src="../../src/assets/step456.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />
        <h3 class="text-bold text-blue-400 mt-10">Cost Estimation CPM</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
      <div class="rounded-lg h-12">
        <img
          src="../../src/assets/step456.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />
      </div>
      <div class="rounded-lg h-12">
        <img
          src="../../src/assets/step456.png"
          class="ml-20 h-[40px] hidden md:hidden lg:block"
        />
      </div>
      <div class="rounded-lg h-12"></div>

      <div
        class="h-50 w-50 text-right font-light lg:w-full lg:h-full sm:w-[200px] sm:h-[200px] md:w-full md:h-[200px]"
      >
        <h3 class="text-bold text-blue-400 text-right">Data Export in CSV</h3>
        <p class="text-white">Q4-2019-Done</p>
        <p class="text-white mb-10">
          You'll be able to find and connect with authentic Influencers on
          youtube.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Roadmap",
});
</script>
