<script setup>
const props = defineProps({
  isActive: Boolean,
  isBlank: Boolean,
  size: Number
})
</script>

<template>
  <div
    class="timeline-dot"
    :class="{ active: isActive, blank: isBlank }"
    :style="`height: calc(var(--timeline-dot-size) * ${size})`"
  />
</template>

<style scoped>
.timeline-dot {
  background-color: rgb(89, 89, 89);
  height: var(--timeline-dot-height);
  width: var(--timeline-dot-size);
  border-radius: var(--timeline-dot-size);
  transform-origin: top;

  &.active {
    background-color: var(--resume-color);
  }
  &.blank {
    opacity: 0;
  }
}
</style>
