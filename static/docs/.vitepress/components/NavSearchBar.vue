<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { Pound } from '@icon-park/vue-next'
import SearchInput from './SearchInput.vue'

type TItemData = { path: string; title: string; desc: string }

const router = useRouter()

const keyword = ref('')
let preKeyword = ''
const list = ref<TItemData[]>([])
const visible = ref(false)
const loading = ref(false)
const noData = ref(false)

onMounted(() => {
  document.documentElement.addEventListener('click', () => {
    visible.value = false
  })
})

let ac: AbortController
const onSearch = debounce(() => {
  const k = keyword.value.trim()
  if (k === preKeyword) {
    return
  }

  const [, systemName] = location.pathname.split('/')
  preKeyword = k
  noData.value = false
  if (k === '') {
    list.value = []
    return
  }
  if (ac) ac.abort()
  ac = new AbortController()
  loading.value = true
  fetch(`/api/search?s=${k}&n=${systemName}&_=${Date.now()}`, { signal: ac.signal })
    .then(res => res.json() as Promise<{ status: boolean; data: { path: string; content: string }[] }>)
    .then(res => {
      const reg = new RegExp(keyword.value, 'gi')

      noData.value = res.data.length === 0
      list.value = res.data.map(item => {
        return {
          path: item.path,
          title: item.path.split('/').slice(2).join(' / '),
          desc: item.content.replace(reg, $0 => `<span class="text-primary">${$0}</span>`)
        }
      })
    })
    .finally(() => {
      loading.value = false
    })
})

function debounce (fn: (...args: any[]) => void, time = 250) {
  let f: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    clearTimeout(f)
    f = setTimeout(() => fn(...args), time)
  }
}

function onJump (path: string) {
  visible.value = false
  keyword.value = ''
  router.go(path + '.html')
}

</script>

<template>
  <div class="relative">
    <div>
      <SearchInput
        v-model="keyword"
        placeholder="搜索"
        @click.stop
        @input="onSearch"
        @focus="visible = true"
      />
    </div>
    <Transition name="slide-fade">
      <div
        v-show="visible"
        class="absolute py-1 px-2 w-500px dropdown-box rounded shadow-lg"
      >
        <div
          v-if="noData"
          class="tip-content"
        >
          未匹配到结果
        </div>
        <div
          v-else-if="loading"
          class="tip-content"
        >
          <div class="loader" />
        </div>
        <div
          v-else-if="list.length === 0"
          class="tip-content"
        >
          请输入关键词搜索
        </div>
        <a
          v-for="item in list"
          :key="item.path"
          :href="item.path + '.html'"
          class="block item rounded p-2 my-2"
          @click.prevent="onJump(item.path)"
        >
          <div class="title flex items-center text-14px">
            <Pound class="mr-2" /> {{ item.title }}
          </div>
          <div
            class="text-12px lh-150% text-muted break-all"
            v-html="item.desc"
          />
        </a>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-box {
  top: calc(var(--vp-nav-height-desktop) / 2);
  max-width: calc(90vw - 100px);
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider-light);
  max-height: 80vh;
  overflow-y: auto;
}

.tip-content {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

a.item {
  transition: all 0.5s;
  background-color: var(--vp-c-bg);

  .title {
    color: var(--vp-c-brand);
  }

  &:hover {
    background-color: var(--vp-c-brand);

    .title {
      color: #fff;
    }

    .desc {
      color: var(--vp-button-brand-text);
    }
  }
}
.loader {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 2px solid;
  border-left-color: transparent!important;
  animation: spin 0.7s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
</style>
