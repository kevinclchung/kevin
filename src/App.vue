<script setup lang="ts">
import ResumeContainer from './components/resume/resume-container.vue'
import GalagaContainer from './components/galaga/galaga.vue'
import { store } from './store'
</script>

<template>
  <ResumeContainer />
  <GalagaContainer v-if="store.activeExample.id === null" />
</template>

<style lang="scss" src="./assets/z-index.scss" />
