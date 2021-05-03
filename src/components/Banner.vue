<template>
<div class="banner">
    <swiper
        :space-between="50"
        navigation
    >
        <swiper-slide>
            <div class="relative">
                <img src="https://source.unsplash.com/1920x900/?nature,water" alt="">
                <div class="banner-text absolute container top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white px-8 text-6xl">
                    Slide 1
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="https://source.unsplash.com/random/1920x900" alt="">
                <div class="banner-text absolute container top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white px-8 text-6xl">
                    Slide 2
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="https://source.unsplash.com/1920x900/?girls" alt="">
                <div class="banner-text absolute container top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white px-8 text-6xl">
                    Slide 3
                </div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

export default {
    name: "Banner",
    components:{
        Swiper,
        SwiperSlide
    }
}
</script>

<style scoped>
    .banner .banner-text {

    }
</style>