<template>
    <div class="container">
        <div class="bg-loading" v-if="store.loading">
            <div class="ring">Loading
                <span></span>
            </div>
        </div>
        <!-- <div v-if="!store.ListMovie.length > 0">{{ store.errormessage }}</div> -->
        <h2 v-if="store.ListMovie.length > 0">{{ titolo }}</h2>
        <Transition name="slide-fade">
            <div v-if="!store.loading" class="row row-cols-3 row-cols-md-4 row-cols-lg-5 g-3 py-2">
                <div v-for="(item, index) in array" class="col" :key="index">
                    <div class="mycard">
                        <img :src="`https://image.tmdb.org/t/p/w400${item.poster_path}`" alt="" class="pb-3 g-3"
                            @error="loadImageFailed">
                        <div class="card-body">
                            <h4>{{ item.title ? item.title : item.name }}</h4>
                            <div class="text-center position-relative ">{{ item.original_title ? item.original_title :
                                    item.original_name
                            }}</div>
                            <div class="text-center position-relative ">{{ item.original_language }}</div>
                            <div class="text-center position-relative ">{{ Math.floor(item.vote_average / 2) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ListComponent',
    props: ['array', 'titolo'],
    data() {
        return {
            store,
            apiUrlFlag: 'https://countryflagsapi.com/png/br'

        }
    },
    methods: {
        loadImageFailed(e) {
            e.target.src = '/public/6324728.jpg'
        },
        getFlag() {
            store.ListMovie.filter((item) => {
                axios.get(this.apiUrlFlag, {
                    params: {

                    }
                })
            })
        }

    },
    created() {
        store.getMovie();
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

h2 {
    color: aliceblue;
}

.container {
    padding-top: 100px;
}

.container .bg-loading {
    background: #262626;
    min-height: 500px;
    position: relative;


}

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
    height: 380px;
    object-fit: contain;
    object-position: top;

}



.ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    font-family: sans-serif;
    font-size: 20px;
    color: #fff000;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-shadow: 0 0 10px #fff000;
    box-shadow: 0 0 20px rgba(0, 0, 0, .5);
}

.ring:before {
    // content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
}

span {

    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
}

span:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff000;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #fff000;
}

@keyframes animateC {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate {
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
}

.slide-fade-enter-active {
    transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}
</style>