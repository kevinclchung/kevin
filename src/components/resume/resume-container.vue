<script setup>
import Timeline from './timeline.vue'
import Summary from './summary.vue'
import Skills from './skills.vue'
import Education from './education.vue'
import Experience from './experience.vue'
import { store } from '../../store'
import { debounce } from '../../utils'
const experience = store.cv.experience
function evalScrollPosition() {
  for (const id of store.cv.ids) {
    const elPosition = document.getElementById(id).getBoundingClientRect().top
    if (elPosition > 0) {
      store.updateActiveId(id)
      break
    }
  }
}
window.addEventListener('scroll', (event) => {
  debounce(evalScrollPosition, 250)
})
</script>

<template>
  <div class="resume-container">
    <Timeline />
    <div class="details">
      <Summary />
      <Skills />
      <Experience v-for="xp in experience" :xp="xp" />
      <Education />
    </div>
  </div>
</template>

<style scoped>
.resume-container {
  display: flex;
  position: relative;
  max-width: var(--resume-container-width);
  margin: 88px auto;

  .details {
    max-width: calc(var(--resume-container-width) - (var(--timeline-dot-size) * 3));
    margin-left: calc(var(--timeline-dot-size) * 5);
    margin-bottom: 23vh;
  }
}
</style>
<style>
.section {
  padding: 36px 0;

  .skill-list {
    column-count: 2;

    @media only screen and (max-width: 800px) {
      column-count: 1;
    }
  }
}
</style>
