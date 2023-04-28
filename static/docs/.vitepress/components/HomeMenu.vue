<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import SearchInput from './SearchInput.vue'

const { theme } = useData()

const keyword = ref('')
const menuList = (theme.value.nav[0].items as { text: string }[]).map(el => formatter(el.text))
const list = computed(() => {
  const s = keyword.value.trim().toLowerCase()
  if (s === '') return menuList
  return menuList.filter(el => el.raw.toLowerCase().includes(s))
})

function formatter (str: string) {
  const arr = str.match(/^([^(（]+)[(（]([^)）]+)/)
  if (arr) {
    return { title: arr[1], desc: arr[2], raw: str }
  }
  return { title: str, desc: '', raw: str }
}
</script>

<template>
  <div class="max-w-1152px mx-auto">
    <div class="pb-4">
      <SearchInput
        v-model="keyword"
        placeholder="输入关键词过滤"
      />
    </div>
    <div class="flex flex-wrap">
      <div
        v-for="item in list"
        :key="item.raw"
        class="item p-1"
      >
        <a
          :href="`/${item.raw}/index`"
          class="block item-content p-3 h-full rounded-md"
        >
          <div>{{ item.title }}</div>
          <div class="text-[var(--vp-c-text-2)] text-12px">{{ item.desc }}&nbsp;</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-soft);

  &:hover {
    color: var(--vp-c-brand);
  }
}

.item {
  width: 100%;
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .item {
    width: 50%;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .item {
    width: 33.33%;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .item {
    width: 20%;
  }
}
</style>
