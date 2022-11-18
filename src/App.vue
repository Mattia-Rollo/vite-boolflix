<template>
  <HeaderComponent />
  <ListComponent :array="store.ListMovie" :titolo="titoloMovie" />
  <ListComponent :array="store.ListSeries" :titolo="titoloSeries" />
  <ListComponent :array="store.popularTV" :titolo="populartv" />

</template>

<script>
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import ListComponent from './components/ListComponent.vue';

export default {
  components: { HeaderComponent, ListComponent },
  data() {
    return {
      store,
      titoloSeries: 'SeriesTV',
      titoloMovie: 'Movie',
      populartv: 'Popular TV'


    }
  },
  created() {
    store.getPopular();
    // store.endPoint = 'character';
    // store.getCharacters();
    //this.getCharacters()
  }
}
</script>

<style lang="scss" scoped>

</style>