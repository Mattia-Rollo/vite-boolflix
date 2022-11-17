<template>

    <div class="mycard shadow-lg position-relative">

        <img :src="`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="" class="" @error="loadImageFailed">
        <div class="card-body">
            <img class="flag" :src="store.getCountryFlag(item.original_language)" alt="">

            <h4>{{ item.title ? item.title : item.name }}</h4>
            <div class="text-center position-relative ">{{ item.original_title ? item.original_title :
                    item.original_name
            }}</div>
            <!-- <div class="text-center position-relative ">{{ item.original_language }}</div> -->

            <div class="text-center position-relative ">{{ Math.ceil(item.vote_average / 2) }}</div>
            <div class="text-center">
                <span v-for="n in 5"><i class="fa-star"
                        :class="n <= vote(item.vote_average) ? 'fa-solid' : 'fa-regular'"></i></span>
            </div>
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

    h4 {
        text-align: center;
    }

    h4~div {
        color: #ffffff;
    }
}

img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;

    &:hover {
        transform: scale(30%);
    }

}

.card-body {
    position: absolute;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 0 auto;
    height: 300px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #000000, $alpha: 0.6);
    opacity: 0;
    transition: all 0.3s;

    &:hover {
        opacity: 1;
    }
}


.flag {
    display: block;
    margin: 0 auto;
    width: 80px;
    // object-fit: fill;
    height: 50px;
}
</style>