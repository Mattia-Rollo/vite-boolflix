<template>

    <div class="mycard shadow-lg">
        <img :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" alt="" class="pb-3 g-3"
            @error="loadImageFailed">
        <div class="card-body">
            <h4>{{ item.title ? item.title : item.name }}</h4>
            <div class="text-center position-relative ">{{ item.original_title ? item.original_title :
                    item.original_name
            }}</div>
            <div class="text-center position-relative ">{{ item.original_language }}</div>
            <img class="flag" :src="store.getCountryFlag(item.original_language)" alt="">
            <div class="text-center position-relative ">{{ Math.floor(item.vote_average / 2) }}</div>
        </div>
    </div>

</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['item'],
    data() {
        return {
            store
        }
    },
    methods: {
        loadImageFailed(e) {
            e.target.src = "/6324728.jpg";
        },
    }
}
</script>

<style lang="scss" scoped>
.mycard {
    // padding: 1rem;
    background-color: #2e3a46;
    color: whitesmoke;
    height: 100%;
    // border-radius: 10px;

    h4 {
        text-align: center;
    }

    h4~div {
        color: #fff000;
    }
}

img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;

}

.flag {
    display: block;
    margin: 0 auto;
    width: 80px;
    // object-fit: fill;
    height: 50px;
}
</style>