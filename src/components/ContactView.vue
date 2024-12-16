<script lang="ts">
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      alert('Message sent successfully!')
      this.form = { name: '', email: '', phone: '', message: '' }
    },
  },
}
</script>
<template>
  <h2>Let’s Work Together</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.name" placeholder="Your Name" required />
    <input
      type="email"
      v-model="form.email"
      placeholder="Your Email"
      required
    />
    <input type="tel" v-model="form.phone" placeholder="Your Phone" />
    <textarea
      v-model="form.message"
      placeholder="Your Message"
      required
    ></textarea>
    <button type="submit">Send Message</button>
  </form>
  <div class="contact-info">
    <p><strong>Email:</strong> info@tukulllc.com</p>
    <p><strong>Phone:</strong>+15712790014</p>
  </div>
</template>

<style scoped>
.contact {
  text-align: center;
  padding: 50px 20px;
  background-color: #f7f7f7;
}

form {
  max-width: 500px;
  margin: 20px auto;
}

form input,
form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

form button:hover {
  opacity: 0.8;
}

.contact-info {
  margin-top: 20px;
}
</style>
