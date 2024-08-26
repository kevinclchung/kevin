<script lang="ts" src="./galaga.ts"></script>

<template>
  <div class="galaga">
    <div
      v-for="[_, bee] in bees"
      class="bee"
      :style="{
        left: `${bee.left}px`,
        top: `${bee.top}px`,
        transition: bee.transition ? 'top 2s' : 'none'
      }"
    />
    <div
      v-if="isTouch"
      class="move-buttons"
      @touchstart.prevent="moveTouchStart"
      @touchend="moveTouchEnd"
    >
      <div ref="moveLeftEl" class="move-left" />
      <div ref="moveRightEl" class="move-right" />
    </div>
    <div v-if="isTouch" class="fire-button" @touchstart.prevent="fire"></div>
    <div></div>
    <p v-if="!isTouch" class="instructions" :style="{ opacity: showInstructions ? '1' : '0' }">
      Move: Left/Right<br />
      Shoot: /
    </p>
    <div class="ship" :style="{ left: `${shipPosition}px` }" />
    <div
      v-for="[_, shot] in shots"
      class="shot"
      :style="{
        left: `calc(${shot.position}px - (var(--shot-width) / 2))`,
        opacity: shot.enabled ? 1 : 0
      }"
    />
    <div
      v-for="[_, star] in stars"
      class="star"
      :style="{
        left: `${star.position.left}vw`,
        'margin-top': `${star.position.top}vh`,
        'animation-duration': `${star.depth}s`,
        width: `calc(3px * ${star.depth} / 30)`,
        height: `calc(3px * ${star.depth} / 30)`
      }"
    ></div>
  </div>
</template>

<style scoped src="./galaga.scss" />
