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
    alt: 'AI Powered development',
    header: 'AI Powered Applications',
    description: 'Building Solutions that leverage AI tools.',
  },
]
</script>

<template>
  <main class="flex w-[100%]">
    <!-- <TheWelcome /> -->
    <Carousel
      @init-api="setApi"
      :plugins="[Autoplay({ delay: 5000 })]"
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
                class="p-10 h-[60vh] w-[80vw] -m-6"
                :style="{
                  backgroundImage: 'url(' + val.img + ')',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'fixed',
                  backgroundSize: '100% 100%',
                  backgroundBlendMode: 'lighten',
                }"
              >
                <div class="top-24 text-slate-950 flex flex-col gap-4">
                  <h1
                    class="text-4xl font-semibold p-4 m-auto bg-gray-100 bg-opacity-25"
                  >
                    {{ val.header }}
                  </h1>
                  <p>{{ val.description }}</p>
                </div>
                <!-- <img :src="val.img" :alt="val.alt" class="w-full" /> -->
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
