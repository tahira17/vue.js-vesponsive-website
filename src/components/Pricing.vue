<template>
  <!-- main div -->
  <div class='flex flex-col justify-center items-center w-full h-full'>
  <div
    class="max-w-[1320px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 lg:gap-10 sm:gap-5 items-center"
  >
  <!-- left section -->
    <div class="max-w-[1320px] mx-auto">
      <h1 class="text-2xl text-center mt-20">Simple & Transparent Pricing</h1>

      <ul class="space-y-4 text-center text-gray-500 py-20">
        <li
          v-for="item in items"
          v-bind:key="item.id"
          class="flex items-center space-x-3"
        >
          <svg
            class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span>{{ item.message }}</span>
        </li>
      </ul>
    </div>
  <!-- right section -->
  <div class="relative overflow-hidden rounded-lg shadow-lg h-[350px] w-[350px] lg:mt-40 md:mt-40 sm:mt-20">
	<img class="h-[350px] w-[350px]" src="../../src/assets/PriceCard.png"/>
	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-xl font-semibold tracking-tight text-yellow-500">WAS</h4>
      <p class="mb-3 text-xl font-semibold tracking-tight text-yellow-500">$199/lifetime</p>
	  <p class="mb-3 text-xl font-semibold tracking-tight text-white">__</p>
	  <p class="mb-3 text-xl font-semibold tracking-tight text-white">Now</p>
	  <p class="mb-3 text-xl font-semibold tracking-tight text-white">$99/lifetime</p>
<br />
<br />
<br />


	</div>
  <p class="mb-3 text-xl font-semibold text-black-900 text-right absolute bottom-5 right-5">BUY NOW</p>
  </div>
  </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pricing",
  data: function () {
    return {
      items: [
        { message: "Unlimited Searches", id: 0 },
        { message: "Unlimited Saved lists", id: 1 },
        { message: "Twitter Influencers", id: 2 },
        { message: "Instagram Influencers", id: 3 },
        { message: "Youtube Influencers (soon)", id: 4 },
        { message: "Export Data", id: 5 },
        { message: "Influencer's grandular details", id: 6 },
        { message: "CPM estimation", id: 7 },
        { message: "3rd party Integration", id: 8 },
        { message: "Future Update included", id: 9 },
      ],
    };
  },
});
</script>
