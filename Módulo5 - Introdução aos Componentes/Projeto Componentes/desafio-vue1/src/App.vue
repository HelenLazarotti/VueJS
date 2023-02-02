<template>
  <v-app>
    <app-menu/>

    <app-toolbar/>

    <v-content>
      <app-carousel/>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Carousel from './components/Carousel.vue'
import Toolbar from './components/Toolbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'app-menu': Menu,
    'app-carousel': Carousel,
    'app-toolbar': Toolbar,
    'app-footer': Footer,
    
  }
}
</script>
