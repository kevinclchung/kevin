import { reactive, ref } from 'vue'
import { debounce } from '../../utils'
export default {
  setup() {
    /** These sizes would best be grabbed from css via
     * getComputedStyle(document
     *   .getElementsByClassName('galaga')[0])
     *   .getPropertyValue()
     */
    const gap = 10
    const shipSize = 50 /** png actual size: 250 */
    const beeSize = {
      width: 143 * (50 / 250),
      height: 154 * (50 / 250)
    }
    const shotHeight = 44 * (50 / 250)
    const shipPositionLimits = {
      left: gap,
      right: window.innerWidth - shipSize - gap
    }
    const movement = 5
    let shotCount = 0
    const state = reactive({
      isTouch: isTouchDevice(),
      shipPosition: gap,
      showInstructions: true,
      shots: new Map(),
      stars: new Map(),
      bees: new Map()
    })
    let moveLeftInterval: ReturnType<typeof setInterval> | null = null
    let moveRightInterval: ReturnType<typeof setInterval> | null = null
    const moveLeftEl = ref(null)
    const moveRightEl = ref(null)

    function generateStars() {
      /** You'll find that sometimes the starfield will stop generating.
       * This is because the client will stop Interval()s in sandboxes not
       * in use.
       */
      let starCount = 0
      function getNewStar(isInitial: Boolean) {
        return {
          position: {
            left: Math.random() * 100,
            top: isInitial ? Math.random() * 100 : 0
          },
          depth: Math.random() * 30 + 30
        }
      }
      while (starCount < 30) {
        starCount++
        const id = starCount
        state.stars.set(id, getNewStar(true))
      }
      setInterval(() => {
        starCount++
        const id = starCount
        state.stars.set(id, getNewStar(false))
      }, 1000)
    }
    function placeBee(index: number, position: number) {
      state.bees.set(index, {
        left: position,
        top: -beeSize.height,
        transition: false
      })
      const dropWait = Math.random() * 10 * 1000
      setTimeout(() => {
        const bee = state.bees.get(index)
        state.bees.set(
          index,
          Object.assign(state.bees.get(index), {
            top: gap /** We can see if the bee is "enabled" if .top > 0 */,
            transition: true
          })
        )
      }, dropWait)
    }
    function placeBees() {
      const beeGap = 50
      const windowWidth = window.innerWidth
      const numberBees = Math.floor(windowWidth / (beeSize.width + beeGap))
      let leftMargin = Math.floor(
        (windowWidth - ((beeSize.width + beeGap) * numberBees - beeGap)) / 2
      )
      let index = 0
      state.bees.clear()
      while (index < numberBees) {
        placeBee(index, leftMargin)
        leftMargin += Math.floor(beeSize.width + beeGap)
        index++
      }
    }
    function fire() {
      shotCount++
      const id = shotCount
      const windowHeight = window.innerHeight
      setTimeout(() => {
        const newPosition = state.shipPosition + shipSize / 2
        setTimeout(() => {
          /** Nested timeouts to give the ship time to complete its
           * transition to its new position
           */
          state.shots.set(id, {
            position: newPosition,
            enabled: true
          })
          let targetBeeId = null
          for (const [beeId, bee] of state.bees) {
            if (bee.left < newPosition && bee.left + beeSize.width > newPosition) {
              targetBeeId = beeId
              break /** for big Theta */
            }
          }
          if (targetBeeId !== null) {
            const travel = windowHeight - shipSize + shotHeight
            const howLongToBee = 5 * 1000 * ((travel - beeSize.height) / travel)
            setTimeout(() => {
              let targetBee = state.bees.get(targetBeeId)
              if (targetBee.top > 0) {
                state.shots.set(id, {
                  position: newPosition,
                  enabled: false
                })
                placeBee(targetBeeId, targetBee.left)
              }
            }, howLongToBee)
          }
        }, 200)
      }, 50)
    }
    function startMoveLeft() {
      moveTouchEnd()
      moveLeftInterval = setInterval(() => {
        state.shipPosition = state.shipPosition - movement
        if (state.shipPosition < shipPositionLimits.left) {
          state.shipPosition = shipPositionLimits.left
        }
      }, 10)
    }
    function startMoveRight() {
      moveTouchEnd()
      moveRightInterval = setInterval(() => {
        state.shipPosition = state.shipPosition + movement
        if (state.shipPosition > shipPositionLimits.right) {
          state.shipPosition = shipPositionLimits.right
        }
      }, 10)
    }
    function isTouchDevice() {
      /** Probably. You can't reallt detech touch devices. */
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }
    function moveTouchStart(event: TouchEvent) {
      if (event.target === moveLeftEl.value) {
        startMoveLeft()
      } else if (event.target === moveRightEl.value) {
        startMoveRight()
      }
    }
    /** Below function is temperamental, because of elementFromPoint. But
     * this would theorectically handle swipes between buttons.
     */
    // function moveTouchMove(event: TouchEvent) {
    //   const endTarget = document.elementFromPoint(
    //     event.targetTouches[0].pageX,
    //     event.targetTouches[0].pageY
    //   )
    //   if (endTarget === moveLeftEl.value) {
    //     debounce(startMoveLeft, 100)
    //   } else if (endTarget === moveRightEl.value) {
    //     debounce(startMoveRight, 100)
    //   }
    // }
    function moveTouchEnd() {
      if (moveLeftInterval) clearInterval(moveLeftInterval)
      if (moveRightInterval) clearInterval(moveRightInterval)
    }

    generateStars()
    placeBees()
    window.addEventListener('resize', () => {
      const rightLimit = window.innerWidth - shipSize - gap
      shipPositionLimits.right = rightLimit
      if (state.shipPosition > rightLimit) {
        state.shipPosition = rightLimit
      }
      placeBees()
      state.shots.clear()
    })
    window.addEventListener('keydown', (event) => {
      let didSomething = false
      if (!event.repeat) {
        /** Why not let the key repeat instead of using intervals?
         * Because if we listen to repeated keys, the user can't hold
         * down two keys at the same time. Shooting would stop movement.
         */
        switch (event.key) {
          case 'a':
          case 'ArrowLeft':
            startMoveLeft()
            didSomething = true
            break
          case 'd':
          case 'ArrowRight':
            startMoveRight()
            didSomething = true
            break
          case 'z':
          case '/':
            fire()
            didSomething = true
            break
        }
        if (state.showInstructions && didSomething) {
          console.log('"That man is playing Galaga! Thought we wouldn\'t notice ...but we did."')
          state.showInstructions = false
        }
      }
    })
    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft':
          if (moveLeftInterval) clearInterval(moveLeftInterval)
          break
        case 'd':
        case 'ArrowRight':
          if (moveRightInterval) clearInterval(moveRightInterval)
          break
      }
    })
    return Object.assign(state, {
      moveTouchStart,
      // moveTouchMove,
      moveTouchEnd,
      fire,
      moveLeftEl,
      moveRightEl
    })
  }
}
