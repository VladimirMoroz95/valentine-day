<template>
  <div class="app">
    <audio src="/sound1.mp3" preload="auto" ref="audioRef" />
    <reactions ref="reactionsRef" />
    <div v-if="isShowPlaySound" class="app__confirm">
      <div class="app__confirm-dialog">
        <p class="text">Do you love Vladimir Moroz?</p>
        <v-button text="Yes" type="primary" @click="closeConfirmDialog" />
        <transition name="fade">
          <v-button
            v-show="isShowNowButton"
            text="No"
            type="cancel"
            @mouseenter="showSadReaction"
            @click="showSadReaction"
          />
        </transition>>
      </div>
    </div>
    <home-page />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomePage from './components/HomePage.vue';
import Reactions from './components/Reactions.vue';

const isShowPlaySound = ref(true);
const isShowNowButton = ref(true);
const reactionsRef = ref<InstanceType<typeof Reactions>>();
const audioRef = ref<HTMLAudioElement>();

onMounted(() => {
  document.documentElement.classList.add('scroll-lock');
});

function closeConfirmDialog(): void {
  document.documentElement.classList.remove('scroll-lock');
  isShowPlaySound.value = false;
  audioRef.value?.play();
  showLoveReaction();
}

function showLoveReaction(): void {
  if (!reactionsRef.value) return
  reactionsRef.value.startReaction('love');
}

function showSadReaction(): void {
  if (!isShowNowButton.value || !reactionsRef.value) return

  isShowNowButton.value = false;
  reactionsRef.value.startReaction('sad');
}

</script>

<style lang="sass" scoped>
.app
  background: white
  height: 100%

  &__confirm
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(0, 0, 0, 0.9)
    z-index: 10


  &__confirm-dialog
    display: flex
    flex-direction: column
    gap: 16px
    padding: 32px
    background: white
    height: 170px
    border-radius: 2%

    .text
      color: black
      width: 100%

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>
