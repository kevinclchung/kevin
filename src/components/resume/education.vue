<script setup>
import { store } from '../../store'
const education = store.cv.education
</script>

<template>
  <div id="education" class="section">
    <h2>Education</h2>
    <template v-for="ed in education">
      <div class="ed" v-if="ed.id !== null">
        <div :class="['seal', ed.id]" />
        <h3>{{ ed.degree }}</h3>
        <h4>{{ ed.field }}</h4>
        <p>
          {{ ed.school }}<br />
          <span class="caption">{{ ed.dateGraduated }}</span><br />
          <span class="caption">{{ ed.honors }}</span>
        </p>
        <p>
          <ul v-if="ed.societies.length > 0">
              <li v-for="society in ed.societies">{{ society }}</li>
          </ul>
        </p>
      </div>
    </template>
  </div>
</template>
<style scoped>
.ed {
  margin-top: 2em;
}
.seal {
  height: calc(250px / 2);
  width: calc(250px / 2);
  margin: 0 1em 1em;
  border-radius: 50%;
  border: var(--resume-color) 3px solid;
  padding: 5px;

  @media only screen and (max-width: 800px) {
    height: calc(250px / 4);
    width: calc(250px / 4);
    /* margin: 0 auto 1em; */
  }
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: -25%;
    /* border-radius: 50%; */
  }
  &.edu-aau::before {
    background-image: url('../../assets/images/resume/aau-seal.png');
  }
  &.edu-uh::before {
    background-image: url('../../assets/images/resume/uhm-seal.png');
  }
}
</style>
