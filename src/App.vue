<template>
  <NavbarVue />
  <SearchEngine />
  <ReachOutSection />
</template>
<script>
import NavbarVue from './components/Navbar.vue'
import SearchEngine from './components/SearchEngine.vue'
import ReachOutSection from './components/ReachOutSection'

export default {
  name :"App",
  components:{
    NavbarVue,
    SearchEngine,
    ReachOutSection
  }
}
</script>
<style src="./assets/index.css"></style>