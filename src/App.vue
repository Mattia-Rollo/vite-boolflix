<template>
  <HeaderComponent />
  <ListComponent :array="store.ListMovie" :titolo="titoloMovie" />
  <ListComponent :array="store.ListSeries" :titolo="titoloSeries" />

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

    }
  },
  created() {
    // store.endPoint = 'character';
    // store.getCharacters();
    //this.getCharacters()
  }
}
</script>

<style lang="scss" scoped>

</style>