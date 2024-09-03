<script setup lang="ts">
import { watch } from 'vue'
import Example from './single-example.vue'
import { store } from '../../store'
import ExampleThumbs from './example-thumbs.vue'

type PortfolioOrgType = {
  id: string
  company: string
  examples: any[]
}

const portfolio: PortfolioOrgType[] = []

function findOrgIndex() {
  let index = 0
  for (const org of portfolio) {
    if (org.id === store.activeExample.id) break
    index++
  }
  return index
}
function prev() {
  const portfolioOrgIndex = findOrgIndex()
  if (portfolioOrgIndex === 0 && store.activeExample.exampleIndex === 0) {
    /** first of all examples */
    return false
  }
  if (store.activeExample.exampleIndex > 0) {
    /** not first example of any org */
    store.updateActiveExample(store.activeExample.id, store.activeExample.exampleIndex - 1)
    return false
  }
  /** first example of not first org */
  store.updateActiveExample(
    portfolio[portfolioOrgIndex - 1].id,
    portfolio[portfolioOrgIndex - 1].examples.length - 1
  )
}
function next() {
  const portfolioOrgIndex = findOrgIndex()
  if (store.activeExample.exampleIndex === portfolio[portfolioOrgIndex].examples.length - 1) {
    if (portfolioOrgIndex === portfolio.length - 1) {
      /** last of all examples */
      return false
    }
    /** last example of not last org */
    store.updateActiveExample(portfolio[portfolioOrgIndex + 1].id, 0)
    return false
  }
  /** not last example of any org */
  store.updateActiveExample(store.activeExample.id, store.activeExample.exampleIndex + 1)
}

watch(
  () => store.activeExample.id,
  () => {
    const appStyle = document.getElementById('app')?.style
    if (store.activeExample.id === null) {
      appStyle?.setProperty('overflow', 'auto')
    } else {
      appStyle?.setProperty('overflow', 'hidden')
    }
  }
)

store.cv.experience.forEach((xp, xpIndex) => {
  if (Array.isArray(xp.examples)) {
    portfolio.push({
      id: xp.id,
      company: xp.company,
      examples: xp.examples
    })
  }
})
</script>

<template>
  <div v-if="store.activeExample.id !== null" class="pop-up-container">
    <div class="pop-up">
      <div class="toolbar">
        <h2>Portfolio</h2>
        <button class="close-button" @click="store.updateActiveExample(null, 0)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </button>
      </div>
      <div class="viewer">
        <Example v-for="org in portfolio" :org="org" />
      </div>
      <div class="selector">
        <button class="prev-button" @click="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>
        <button class="next-button" @click="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </button>
        <div v-for="org in portfolio" class="org-section">
          <h4>{{ org.company }}</h4>
          <ExampleThumbs :xp="org" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pop-up-container {
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: var(--pop-up-margin);

  .pop-up {
    position: absolute;
    width: calc(100% - (var(--pop-up-margin) * 2));
    height: calc(100% - (var(--pop-up-margin) * 2));
    background-color: var(--pop-up-bg-color);
    color: var(--pop-up-color);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.42);

    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: var(--toolbar-height);
      max-height: var(--toolbar-height);
      padding: 4px 0 4px var(--pop-up-padding);
      background-color: var(--toolbar-color);
      border-radius: 8px 8px 0 0;
      border-bottom: 1px solid var(--pop-up-border-color);

      > .close-button {
        width: var(--toolbar-height);
        height: var(--toolbar-height);
        margin: 0;
        padding: 0;
        border: 0;
        background-color: transparent;

        > svg {
          fill: var(--pop-up-color);
        }
      }
    }
    .viewer {
      height: calc(100% - var(--toolbar-height) - var(--selector-height));
      overflow: hidden;
    }
    .selector {
      display: flex;
      overflow: scroll;
      position: fixed;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
      bottom: var(--pop-up-margin);
      height: var(--selector-height);
      max-height: var(--selector-height);
      padding: 4px 8px;
      width: calc(100% - (var(--pop-up-margin) * 2));
      background-color: var(--toolbar-color);
      border-top: 1px solid var(--pop-up-border-color);
      border-radius: 0 0 8px 8px;

      > * {
        white-space: nowrap;
      }
      .org-section {
        > * {
          margin: 0 4px;
        }
      }
      > .prev-button,
      > .next-button {
        display: flex;
        position: fixed;
        bottom: calc((var(--pop-up-padding) * 0.5) + var(--selector-height) + var(--pop-up-margin));
        width: 44px;
        height: 44px;
        border: 1px solid var(--pop-up-border-color);
        border-radius: 50%;
        background-color: var(--toolbar-color);
        padding: 0;
        align-items: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.42);

        > svg {
          height: 32px;
          width: 32px;
          margin: 0 auto;
          fill: var(--pop-up-color);
        }
      }
      > .prev-button {
        left: calc(var(--pop-up-margin) + (var(--pop-up-padding) * 0.5));
      }
      > .next-button {
        right: calc(var(--pop-up-margin) + (var(--pop-up-padding) * 0.5));
      }
    }
  }

  @media only screen and (max-width: 767px) {
    --pop-up-margin: 0px;

    .pop-up {
      width: 100%;
      height: 100%;
      border-radius: 0;

      .toolbar {
        border-radius: 0;
      }
      .selector {
        width: 100%;
      }
    }
  }
}
</style>
