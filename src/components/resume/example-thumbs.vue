<script setup lang="ts">
import { store } from '../../store'
const { xp } = defineProps({ xp: Object })
</script>

<template>
  <button
    v-for="(example, exampleIndex) in xp?.examples"
    class="example-thumb"
    :class="
      xp?.id === store.activeExample.id && exampleIndex == store.activeExample.exampleIndex
        ? 'active'
        : ''
    "
    :style="{ 'background-image': `url('/src/assets/images/resume/examples/${example.thumb}')` }"
    @click="store.updateActiveExample(xp?.id, exampleIndex)"
  />
</template>

<style scoped>
.example-thumb {
  width: 100px;
  height: 50px;
  padding: 0;
  background-size: contain;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.87);

  &:hover,
  &.active {
    transform: scale(1.1);
  }
}
</style>
