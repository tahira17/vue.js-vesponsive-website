<template>
    <div class="m-10 w-100% h-auto">
    <video class="bg-video__content" autoplay muted loop>
      <source src="../../src/assets/Video.mp4" type="video/mp4">
   </video>
</div>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'VideoSection'
})
</script>
