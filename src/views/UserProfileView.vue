<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main>
    <h1>Welcome {{ route.params?.name }}</h1>
  </main>
</template>
<style lang=""></style>
