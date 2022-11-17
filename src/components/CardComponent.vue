<template>

    <div class="mycard shadow-lg position-relative" @mouseover="store.activeIndex = index">

        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="" class="" @error="loadImageFailed">
        <div class="card-body" ref='index'>

            <h4>{{ item.title ? item.title : item.name }}</h4>
            <div class="position-relative "
                v-if="(item.original_title !== item.title) || (item.original_name !== item.name)">{{ item.original_title
                        ?
                        item.original_title :
                        item.original_name
                }}</div>
            <img class="flag" :src="store.getCountryFlag(item.original_language)" alt="">
            <!-- <div class="text-center position-relative ">{{ item.original_language }}</div> -->

            <div class=" position-relative ">voto: {{ item.vote_average }}</div>
            <div class="">
                <span v-for="n in 5"><i class="fa-star"
                        :class="n <= vote(item.vote_average) ? 'fa-solid' : 'fa-regular'"></i></span>
            </div>
            <div>{{ item.overview }}</div>
        </div>
    </div>

</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['item', 'classe'],
    data() {
        return {
            store
        }
    },
    methods: {
        loadImageFailed(e) {
            e.target.src = "/6324728.jpg";
        },
        vote(vote) {
            return Math.ceil(vote / 2);
        }
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
    transition: all 0.5s;
    cursor: pointer;


    h4 {
        // padding: 0.5rem 0;
    }

    h4~div {
        color: #ffffff;
    }

    &:hover {
        transform: scale(130%);
        box-shadow: 0px 0px 15px 5px black;
        // width: 300px;
        // height: 600px;
        z-index: 100;
    }

    &:hover img:not(.flag) {
        // height: 200px;
        // width: 300px;
    }

    &:hover .card-body {
        // height: 150px;
        // width: 300px;
        opacity: 1;
    }
}

img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: top;
    transition: all 0.5s;
}

.card-body {
    position: absolute;
    // display: none;
    bottom: 0;
    overflow-y: auto;
    padding: 0.8rem;
    // justify-content: center;
    // margin: 0 auto;
    height: 100%;
    width: 100%;
    // top: 0;
    // left: 50%;
    // transform: translate(-50%, -50%);
    background-color: rgba($color: #000000, $alpha: 0.8);

    opacity: 0;
    transition: all 0.3s;

    &:hover {
        // opacity: 1;
        // display: block;
        // height: 100px;
    }

}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
    scrollbar-width: auto;
    scrollbar-color: #a81010 #ffffff00;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 8px;
}

*::-webkit-scrollbar-track {
    background: rgba($color: #212121, $alpha: 0.3);
}

*::-webkit-scrollbar-thumb {
    background-color: #800101;
    border-radius: 10px;
    border: 3px solid #ffffff00;
}

.flag {
    // display: block;
    // margin: 0 auto;
    width: 60px;
    // object-fit: fill;
    height: 40px;
    margin: .6rem 0;
}
</style>