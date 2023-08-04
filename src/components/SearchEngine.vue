<template>
 <div name='SearchEngine' class='w-full h-screen bg-[#eaf0f8] text-gray-300'>
    <div class='flex flex-col justify-center items-center w-full h-full'>

        <div class='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div class='sm:text-right text-4xl font-bold'>
            <img src="../../src/assets/Group.png"/>
          </div>
          <div>
            <p class='text-4xl font-bold : text-black'>The Influencer </p>
            <p class='text-black'>Find authentic influencers in seconds and leverage their reach to grow your business</p>  
            <p class='text-1xl font-bold : text-black'>SUPPORTED NETWORKS </p>
            <ul class='list-disc : text-black p-4'>
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