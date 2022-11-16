<template>
    <form class="row gx-3 align-items-center m-0" @submit.prevent="searchMovie">
        <div class="col-auto">
            <label class="visually-hidden" for="Search">Name</label>
            <input type="text" class="form-control" id="Search" placeholder="Search" v-model.trim="search.query">
        </div>

        <div class="col-auto">
            <button type="submit" class="btn btn-secondary">Submit</button>
        </div>
    </form>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SearchComponent',
    data() {
        return {
            store,
            search: {
                query: ''
            }
        }
    },
    methods: {
        searchMovie() {
            // store.params = { ...this.search };
            //facciamo una copia di this.earch per non cancellarne le proprietà
            const search = { ...this.search }
            //cicliamo sull'array delle chiavi dell'oggetto e se il valore è vuoto cancelliamo la proprietà
            Object.keys(search).forEach((val) => {
                if (!search[val]) delete search[val]
            })
            //cloniamo in params l'oggetto con le proprietà valorizzate
            store.params = { ...search };

            console.log(store.params)
            store.getMovie()
            //this.$emit('filterchar');
        },
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