<script setup lang="ts">
import { computed } from 'vue'
import { Search } from '@icon-park/vue-next'

type TEmits = {
  (e: 'update:modelValue', val: string): void
  (e: 'input', val: string): void;
  (e: 'focus'): void;
}

const emits = defineEmits<TEmits>()

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const value = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emits('update:modelValue', val)
  }
})

</script>

<template>
  <div class="inline-flex items-center bg-[var(--vp-c-bg-alt)] p-2 rounded-md text-14px">
    <Search
      class="mr-2 text-muted"
      :size="16"
    />
    <input
      v-model="value"
      class="border-none bg-transparent"
      :placeholder="placeholder"
      @input="emits('input', value)"
      @focus="emits('focus')"
    >
  </div>
</template>
