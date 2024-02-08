<template>
  <button :class="['button', type]" @click="emits('click')" :disabled="disabled">{{ props.text }}</button>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['click']);
</script>

<style lang="sass" scoped>
.primary
  background: #4b9a78

.cancel
  background: #dc5c3a
</style>