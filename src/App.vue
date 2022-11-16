<template>
  <HeaderComponent />
  <ListComponent />

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import ListComponent from './components/ListComponent.vue';

export default {
  components: { HeaderComponent, ListComponent },
  data() {
    return {

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