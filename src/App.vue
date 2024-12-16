<script setup lang="ts">
import HeroView from './components/HeroView.vue'
import ContactView from './components/ContactView.vue'
import ServicesView from './components/ServicesView.vue'
import TestimonialsView from './components/TestimonialsView.vue'
import { useTemplateRef, onMounted } from 'vue'
const sections = [
  { id: 'hero', title: 'Home', navigateTo: 'app', component: HeroView },
  { id: 'services', title: 'Services', component: ServicesView },
  { id: 'testimonial', title: 'Testimonials', component: TestimonialsView },
  { id: 'contact', title: 'Contact', component: ContactView },
]

// the first argument must match the ref value in the template
const scrollToTopBtn = useTemplateRef('scrollTopButton')

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const handleScroll = () => {
  const { scrollHeight, clientHeight = 0 } =
    document.getElementById('header') || {}
  console.log(
    `scrollY:${window.scrollY}, scrollHeight:${scrollHeight}, clientHeight:${clientHeight}`,
  )
  if (scrollY > clientHeight)
    scrollToTopBtn.value?.classList.remove('invisible')
  else scrollToTopBtn.value?.classList.add('invisible')
}
</script>
<template>
  <div id="app" class="flex flex-col p-8 max-w-screen-2xl m-auto">
    <header
      id="header"
      class="w-full z-1000 flex flex-end bg-slate-600 text-2xl text-green-50 p-6 rounded-md drop-shadow-md"
    >
      <div id="logo" class="m-auto ml-14">
        <a href="/">Tukul llc</a>
      </div>
      <div class="flex-grow"></div>
      <nav class="m-auto border-l-slate-100">
        <ul class="list-none flex gap-4">
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.navigateTo || section.id}`">{{
              section.title
            }}</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="w-full h-20"></div>
    <section v-for="section in sections" :key="section.id" :id="section.id">
      <component v-bind:is="section.component"></component>
    </section>

    <div
      ref="scrollTopButton"
      class="invisible sticky bottom-[2px] right-[4em] flex gap-1 justify-end pb-3 p-[5em] transition"
    >
      <!-- <span>scroll to top</span> -->
      <div
        class="border-solid bg-green-50 drop-shadow-xl h-16 w-16 p-2 rounded-full hover:text-blue-400 transition"
      >
        <button
          @click="scrollToTop"
          class="absolute top-[40%] border-[1.5em] border-solid border-green-700 border-t-0 border-r-transparent border-l-transparent"
        ></button>
      </div>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

section {
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
section h2 {
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 10px;
  color: rgb(21 128 61 / var(--tw-border-opacity, 1));
  font-size: 24px;
  font-weight: 700;
}
</style>
