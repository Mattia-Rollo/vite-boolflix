<template>
    <form class="d-flex align-content-center flex-wrap"
        @submit.prevent="store.search.query ? store.getMovie() : store.getPopular()">
        <div class="col-auto">
            <select class="myform-select " v-model="store.categorySelected">
                <option selected value=''>Open this select menu</option>
                <option v-for="item in store.genres" :value="item.id">{{ item.name }}</option>

            </select>
        </div>
        <div class="col-auto">
            <input type="text" class="h-100" id="Search" placeholder="Search" v-model.trim="store.search.query">
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-danger"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </form>
</template>

<script>
// import axios from 'axios';
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
            // console.log(newVal, OldVal);
            if (newVal == '') {
                // store.series = true;
                store.getPopular();
                store.ListMovie = [];
                store.ListSeries = [];
            } else {
                // store.series = false;
                store.getMovie();
            }
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
form {
    gap: 5px;
}

.myform-select {
    height: 100%;
    padding: 0 0.5rem;
}
</style>