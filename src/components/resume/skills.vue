<script setup>
import { store } from '../../store'
const skills = store.cv.skills
</script>

<template>
  <div id="skills" class="section">
    <h2>Skills</h2>
    <p>
      <ul class="skill-list">
        <li v-for="skill in skills">
          {{ skill }}
        </li>
      </ul>
    </p>
  </div>
</template>
