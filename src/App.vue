<template>

    <NavbarVue />
    <!-- <VideoSection /> -->
    <SearchEngine />
  <ReachOutSection />
  <Pricing />
  <QuestionSection />
  <Footer />

 
</template>
<script>
import NavbarVue from './components/Navbar.vue'
import SearchEngine from './components/SearchEngine.vue'
import ReachOutSection from './components/ReachOutSection'
import Pricing from './components/Pricing.vue'
import QuestionSection from './components/Questionsection.vue'
import Footer from './components/Footer.vue'
import VideoSection from './components/VideoSection.vue'

export default {
  name :"App",
  components:{
    NavbarVue,
    SearchEngine,
    ReachOutSection,
    Pricing,
    QuestionSection,
    Footer,
    VideoSection
  }
}
</script>
<style src="./assets/index.css"></style>