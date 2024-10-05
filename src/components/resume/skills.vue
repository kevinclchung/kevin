<script setup lang="ts">
import { store } from '../../store'
const skills = store.cv.skills
</script>

<template>
  <div id="skills" class="section">
    <h2>Skills</h2>
    <div class="skill-list">
      <div>
        <p>
          <b>UI/UX Design:</b>
        </p>
        <ul>
          <li v-for="skill in skills.design">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div>
        <p>
          <b>Development:</b>
        </p>
        <ul>
          <li v-for="skill in skills.development">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
