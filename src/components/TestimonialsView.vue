<script lang="ts">
export default {
  data() {
    return {
      testimonials: [
        {
          quote:
            'The team transformed our vision into reality. Their expertise is unmatched!',
          name: 'John Doe',
          position: 'CEO at XYZ Company',
        },
        {
          quote:
            'We saw a 300% growth in efficiency thanks to their software solutions.',
          name: 'Jane Smith',
          position: 'CTO at ABC Corp',
        },
      ],
    }
  },
}
</script>

<template>
  <h2 class="mt-6 mb-0">What Our Clients Say</h2>
  <div class="testimonials-slider flex">
    <div
      class="testimonial-card"
      v-for="testimonial in testimonials"
      :key="testimonial.name"
    >
      <p>"{{ testimonial.quote }}"</p>
      <h4>- {{ testimonial.name }}, {{ testimonial.position }}</h4>
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  text-align: center;
  padding: 50px 20px;
  background-color: #f7f7f7;
}

.testimonial-card {
  margin: 20px auto;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-card p {
  font-style: italic;
}
</style>
