<template>
    <form class="d-flex row align-content-center gx-2" @submit.prevent="store.getMovie">
        <div class="col-auto">
            <label class="visually-hidden" for="Search">Name</label>
            <input type="text" class="h-100" id="Search" placeholder="Search" v-model.trim="store.search.query">
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-danger">Submit</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            // search: {
            //     query: 'a',
            //     language: 'it-IT'
            // }
        }
    },
    watch: {
        'store.search.query'(newVal, OldVal) {
            console.log(newVal, OldVal);
            store.getMovie();
        }
    },
    methods: {
        // searchMovie() {
        //     // store.params = { ...this.search };
        //     //facciamo una copia di this.earch per non cancellarne le proprietà
        //     const search = { ...this.search }
        //     //cicliamo sull'array delle chiavi dell'oggetto e se il valore è vuoto cancelliamo la proprietà
        //     Object.keys(search).forEach((val) => {
        //         if (!search[val]) delete search[val]
        //     })
        //     //cloniamo in params l'oggetto con le proprietà valorizzate
        //     console.log(this.search)
        //     store.params = { ...this.search };

        //     // console.log(store.params)
        //     store.getMovie()
        //     //this.$emit('filterchar');
        // },
        getFlag() {

        }
        // resetSearch() {
        //     this.search.status = '';
        //     this.search.name = '';
        //     store.params = {};
        //     store.getCharacters()
        //     // store.search.status = '';
        //     // store.search.name = '';
        //     //this.$emit('filterchar')
        // }
    }

}
</script>

<style lang="scss" scoped>

</style>