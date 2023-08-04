<template>
  <div class="absolute w-full h-full">
    <NavbarVue />
    <SearchEngine />
  <ReachOutSection />
  </div>
  <div class="absolute w-[50%] h-[50%] inset-0 m-auto top-[80%]">
    <VideoSection />

  </div>

 
</template>
<script>
import NavbarVue from './components/Navbar.vue'
import SearchEngine from './components/SearchEngine.vue'
import ReachOutSection from './components/ReachOutSection'
import VideoSection from './components/VideoSection'


export default {
  name :"App",
  components:{
    NavbarVue,
    SearchEngine,
    ReachOutSection,
    VideoSection
  }
}
</script>
<style src="./assets/index.css"></style>