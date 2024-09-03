<script setup lang="ts">
import { store } from '../../store'
const { org } = defineProps({ org: Object })
</script>

<template>
  <div
    v-for="(example, exampleIndex) in org?.examples"
    class="example"
    :class="
      org?.id === store.activeExample.id && exampleIndex == store.activeExample.exampleIndex
        ? 'active'
        : ''
    "
  >
    <h1>{{ example.title }}</h1>
    <template v-for="section in example.content">
      <p v-if="typeof section === 'string'">
        {{ section }}
      </p>
      <ul v-else-if="typeof section === 'object' && section.type === 'unordered-list'">
        <li v-for="contentLine in section.content">{{ contentLine }}</li>
      </ul>
      <div
        v-else-if="typeof section === 'object' && section.type === 'image'"
        class="image-section"
        :style="{
          width: `${section.width / section.scale + 2}px`,
          height: `${section.height / section.scale + 2 + 30}px`
        }"
      >
        <h3 v-if="section.title">{{ section.title }}</h3>
        <div class="image-container" :class="section.sizing === 'contain' ? 'contained' : ''">
          <div
            v-if="section.sizing === 'static'"
            :style="{
              'background-image': `url('/src/assets/images/resume/examples/${section.src}')`,
              'background-size': `${section.width / section.scale}px ${section.height / section.scale}px`,
              width: section.sizing === 'static' ? `${section.width / section.scale}px` : '100%',
              height: section.sizing === 'static' ? `${section.height / section.scale}px` : 'auto'
            }"
          />
          <img
            v-else-if="section.sizing === 'cover'"
            :src="`/src/assets/images/resume/examples/${section.src}`"
            class="covered"
          />
          <div
            v-if="section.sizing === 'contain'"
            :style="{
              'background-image': `url('/src/assets/images/resume/examples/${section.src}')`
            }"
          />
        </div>
      </div>
      <template v-else-if="typeof section === 'object' && section.type === 'pdf'">
        <h3 v-if="section.title">{{ section.title }}</h3>
        <object
          class="pdf-example"
          :data="`/src/assets/images/resume/examples/${section.src}`"
          type="application/pdf"
          width="100%"
          height="480px"
        >
          <p>
            <a :href="`/src/assets/images/resume/examples/${section.src}`">View the PDF</a>
          </p>
        </object>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.example {
  --section-max-width: 740px;

  width: 0;
  height: 0;
  overflow: auto;

  &.active {
    width: 100%; // calc(100% - (var(--pop-up-margin) * 2));
    height: 100%; // auto;
    padding: var(--pop-up-padding);

    > *:last-child {
      margin-bottom: 48px;
    }
  }
  > h1,
  > h2,
  > h3,
  > p,
  > ul {
    max-width: var(--section-max-width);
    margin-left: auto;
    margin-right: auto;
  }
  > p {
    font-size: 16px;
  }
  > .image-section {
    max-width: 100%;
    max-height: 510px;
    margin: 1em auto;

    > .image-container {
      max-width: 100%;
      max-height: 480px;
      overflow: scroll;
      border: 1px solid var(--pop-up-border-color);

      > .covered {
        width: 100%;
        height: auto;
      }
      &.contained {
        border: none;

        > div {
          width: 100%;
          height: 480px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
  > .pdf-example {
    border: 1px solid var(--pop-up-border-color);
  }
}
</style>
