<script lang="ts">
export default {
  data() {
    return {
      projects: [
        {
          name: 'Healthcare Analytics',
          industry: 'Healthcare',
          image: 'https://via.placeholder.com/300',
        },
        {
          name: 'E-commerce Platform',
          industry: 'E-commerce',
          image: 'https://via.placeholder.com/300',
        },
      ],
    }
  },
}
</script>

<template>
  <h2>Our Projects</h2>
  <div class="portfolio-grid">
    <div class="project-card" v-for="project in projects" :key="project.name">
      <img :src="project.image" :alt="project.name" />
      <h3>{{ project.name }}</h3>
      <p>{{ project.industry }}</p>
    </div>
  </div>
</template>

<style scoped>
.portfolio {
  text-align: center;
  padding: 50px 20px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.project-card img {
  width: 100%;
  border-radius: 10px;
}
</style>
