<script lang="ts">
export default {
  data() {
    return {
      services: [
        {
          title: 'Custom Software Development',
          description: 'Tailored solutions to solve business challenges.',
        },
        {
          title: 'Web Development',
          description: 'Modern, responsive, and scalable web applications.',
        },
        {
          title: 'Mobile App Development',
          description: 'iOS and Android apps built with precision.',
        },
        {
          title: 'Cloud Solutions',
          description: 'Secure and scalable cloud-based applications.',
        },
      ],
    }
  },
}
</script>

<template>
  <h2>Our Expertise</h2>
  <div class="services-grid">
    <div
      class="service-card h-52 gap-4 flex flex-col"
      v-for="service in services"
      :key="service.title"
    >
      <h3 class="text-xl text-green-900">{{ service.title }}</h3>
      <p class="text-lg">{{ service.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.services {
  text-align: center;
  padding: 50px 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
