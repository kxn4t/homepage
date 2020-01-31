<template>
  <div :style="style" class="min-h-screen min-w-full">
    <TheNavbar />
    <div
      class="container mx-auto px-5 lg:px-24 xl:px-32 text-base tracking-wide"
    >
      <main>
        <nuxt />
      </main>
    </div>
    <Background :colors="colors" />
    <!-- for contact / a little help for the Netlify bots -->
    <form
      name="contact"
      netlify-honeypot="bot-field"
      data-netlify="true"
      hidden
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <input type="text" name="name" />
      <input type="text" name="email" />
      <textarea name="message"></textarea>
    </form>
  </div>
</template>

<script>
import TheNavbar from '~/components/organisms/TheNavbar'
import Background from '~/components/atoms/Background'

// TODO: change color
const colors = {
  green: '#ADC965',
  blue: '#89D5C9',
  yellow: '#FAC172',
  orange: '#FF8357',
  red: '#E25B45'
}

function randomColor() {
  const arr = Object.values(colors)
  return arr[Math.floor(Math.random() * Math.floor(arr.length))]
}

export default {
  components: {
    TheNavbar,
    Background
  },
  data() {
    return {
      style: {
        '--accent-color': randomColor()
      },
      colors: Object.values(colors)
    }
  }
}
</script>
