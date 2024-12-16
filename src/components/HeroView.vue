<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ref } from 'vue'
import { type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

// init CarouselAPI for auto play
const api = ref<CarouselApi>()

const setApi = (val: CarouselApi) => {
  api.value = val
}

const IMAGES: {
  img: string
  alt: string
  header: string
  description: string
}[] = [
  {
    img: 'SoftwareDevelopment2.webp',
    alt: 'Software Development',
    header: 'Building innovative Software Solutions',
    description:
      'Empowering businesses with custom software tailored to your needs.',
  },
  {
    img: 'AIPoweredSoftwareDevelopment.png',
    alt: 'Integrating applications',
    header: 'Integrating AI in Enterpise solutions',
    description:
      'We help our customers integrate AI models and tools seamlessly into their existing workloads.',
  },
]
</script>

<template>
  <main class="flex w-[100%]">
    <!-- <TheWelcome /> -->
    <Carousel
      @init-api="setApi"
      :plugins="[Autoplay({ delay: 100000 })]"
      v-slot="{ canScrollNext }"
      class="w-full min-w-5xl max-w-5xl m-auto"
      :opts="{
        align: 'start',
        loop: true,
      }"
    >
      <CarouselContent>
        <CarouselItem v-for="(val, index) in IMAGES" :key="index">
          <Card>
            <CardContent class="flex items-center justify-center">
              <div
                class="p-10 w-[80vw] -m-6 flex flex-col"
                :style="{
                  backgroundImage: 'url(' + val.img + ')',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: '100% 100%',
                  backgroundBlendMode: 'lighten',
                }"
              >
                <div
                  class="absolute w-full max-w-[90%] top-24 text-green-950 flex flex-col gap-4 bg-gray-100 m-auto p-4 rounded-lg drop-shadow-md bg-opacity-85"
                >
                  <h1 class="text-4xl font-semibold mx-auto bg-opacity-75">
                    {{ val.header }}
                  </h1>
                  <p class="text-2xl text-green-950">
                    {{ val.description }}
                  </p>
                </div>
                <img :src="val.img" :alt="val.alt" class="w-full" />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext v-if="canScrollNext" />
    </Carousel>
  </main>
</template>
