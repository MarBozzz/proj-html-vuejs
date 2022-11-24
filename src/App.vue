<script>
//import dello store
import { store } from './data/store'

//import dei main components
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name : 'App',
  data() {
    return {
      store
      //JS
    }
  },
  components : {
    AppHeader,
    AppJumbotron,
    AppMain,
    AppFooter
  },
  methods : {
    //functions
  }
}
</script>


<template>

  <AppHeader />
  <AppJumbotron />
  <AppMain />
  <AppFooter />

</template>


<style lang="scss">
  @use './styles/general' as *;
</style>