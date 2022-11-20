<template>
    <div class="d-flex flex-wrap">
        <div class="display-3 fw-semibold">Boolflix</div>
        <div class="me-auto">
            <select class="myform-select " v-model="store.categorySelected">
                <option selected value=''>Open this select menu</option>
                <option v-for="item in store.genres" :value="item.id">{{ item.name }}</option>

            </select>
        </div>
        <SearchComponent />
    </div>
</template>

<script>
import { store } from '../store'
import SearchComponent from './SearchComponent.vue'
export default {
    name: 'HeaderComponent',
    components: {
        SearchComponent
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
div.d-flex {
    align-items: center;
    min-height: 80px;
    background-image: linear-gradient(#000, rgba(0, 0, 0, 0));
    color: rgb(164, 11, 11);
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0;
    padding: 0 1rem;

    div {
        text-shadow: 0px 0px 10px #000;
    }

    backdrop-filter: blur(5px);
}
</style>