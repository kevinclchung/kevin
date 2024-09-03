<script setup lang="ts">
// import { ref, onMounted } from 'vue'
import { store } from '../../store'
const name = store.cv.summary.name
const statement = store.cv.summary.statement
// onMounted(() => {
//   const summary = ref(summary)
//   console.log(summary)
//   console.log(summary.);

// })
</script>

<template>
  <div id="summary" class="section">
    <div class="me" />
    <h1>{{ name }}</h1>
    <p v-for="line in statement">
      {{ line }}
    </p>
    <p>
      Framework aside, all code for this site was written by me. No CMS was used. To view the code
      for this site, see GitHub:
      <a target="_blank" href="https://github.com/kevinclchung/kevin"
        >github.com/kevinclchung/kevin</a
      >
    </p>
    <p>
      <span class="bold">I am actively looking for new opportunities.</span>
      To contact me, please message me through my LinkedIn profile:
      <a target="_blank" href="https://linkedin.com/in/kevinclchung"
        >linkedin.com/in/kevinclchung</a
      >
    </p>
  </div>
</template>

<style scoped>
.me {
  height: calc(250px / 2);
  width: calc(250px / 2);
  margin: 0 1em 1em;
  border-radius: 50%;
  border: var(--resume-color) 3px solid;
  padding: 5px;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background-image: url('../../assets/images/resume/kevin.jpeg');
    background-size: cover;
    background-position: -25%;
    border-radius: 50%;
  }
}
</style>
