<template>
 <div name='SearchEngine' class='w-full h-screen bg-[#eaf0f8]'>
    <div class='flex flex-col justify-center items-center w-full h-full'>
        <div class='max-w-[1500px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
          <div class='flex flex-col justify-center items-center w-full h-full'>
            <img src="../../src/assets/Group.png"/>
          </div>
          <div class='items-center w-full h-full text-left lg:mt-40 md:mt-10 sm:mt-20'>
            <p class='text-4xl font-bold : text-gray-700'>The Influencer Search Engine </p>
            <p class='text-gray-500 font-sans'>Find authentic influencers in seconds and leverage their reach to grow your business.</p>  
            <p class='font-bold : text-gray-700 font-sans'>SUPPORTED NETWORKS </p>
            <ul class='list-disc : text-gray-500 font-sans ml-10'>
                <li>
                    Twitter(soon)
                </li>
                <li>
                    Instagram(soon)
                </li> <li>
                    Youtube(soon)
                </li>
            </ul>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
name:'SearchEngine'
})
</script>