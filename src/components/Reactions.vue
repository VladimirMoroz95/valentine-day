<template>
  <div :class="['reactions', { 'reactions-animated': animationIsDisabled}]">
    <div
        v-for="number in 80"
        :key="`reaction-${number}`"
        class="reaction"
        :style="{ top: `${Math.random() * 100 - 30}%`, left: `${Math.random() * 100}%`}"
    >
      <sad-smile v-if="iconType === 'sad'" />
      <heart-smile v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import HeartSmile from './icons/HeartSmile.vue';
import SadSmile from './icons/SadSmile.vue';

const iconType = ref('sad');
const animationIsDisabled = ref(false);

function startReaction(type: string): void {
  iconType.value = type;
  animationIsDisabled.value = true
  setTimeout(() => {
    animationIsDisabled.value = false
  }, 12000)
}

defineExpose({ startReaction });

</script>

<style lang="sass" scoped>
.reactions
  position: absolute
  left: 16px
  top: 200%
  width: 300px
  height: 100%
  pointer-events: none
  z-index: 15
  opacity: 0

.reactions-animated
  top: 100%
  animation: reactions-animated 12s
  opacity: 0

.reaction
  position: relative
  width: fit-content

@keyframes reactions-animated
  0%
    top: 100%
    opacity: 1
  50%
    opacity: 0.8
  70%
    opacity: 0.6
  90%
    opacity: 0.4
  99%
    top: 0
    opacity: 0.2
  100%
    top: 200%
    opacity: 0
</style>