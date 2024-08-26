<script setup lang="ts">
import TimelineDot from './timeline-dot.vue'
import { store } from '../../store'
const education = store.cv.education
const experience = store.cv.experience
</script>

<template>
  <div>
    <!-- This div is here for flex layout reasons. -->
  </div>
  <div class="timeline">
    <TimelineDot :isActive="store.activeId === 'summary'" :size="1" />
    <TimelineDot :isActive="store.activeId === 'skills'" :size="1" />
    <div class="education-and-experience">
      <div class="background-line"></div>
      <div>
        <TimelineDot
          v-for="edu in education"
          :isActive="store.activeId === 'education'"
          :isBlank="edu.id === null"
          :size="edu.years"
        />
      </div>
      <div class="background-line"></div>
      <div>
        <TimelineDot
          v-for="xp in experience"
          :isActive="store.activeId === xp.id"
          :isBlank="xp.id === null"
          :size="xp.years"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: fixed;

  > * {
    &:not(:last-child) {
      margin-bottom: var(--timeline-dot-size);
    }
    &:not(.education-and-experience) {
      margin-left: var(--timeline-dot-size);
    }
  }

  .education-and-experience {
    display: flex;
    align-items: stretch;

    > * {
      width: var(--timeline-dot-size);

      &.background-line {
        width: var(--timeline-dot-size);
        border-radius: var(--timeline-dot-size);
        background-color: var(--resume-color);
        opacity: 0.23;
        transform: scaleX(0.3);
      }
      &:not(.background-line) {
        transform: translateX(calc(-1 * var(--timeline-dot-size)));
      }
    }
  }
}
</style>
