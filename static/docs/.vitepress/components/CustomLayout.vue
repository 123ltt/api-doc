<script setup lang="ts">
import { ref, watch, onBeforeMount, computed } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import defaultTheme, { DefaultTheme } from 'vitepress/theme'
import VPSidebarGroup from 'vitepress/dist/client/theme-default/components/VPSidebarGroup.vue'
import NavSearchBar from './NavSearchBar.vue'

const { Layout } = defaultTheme
const route = useRoute()
const router = useRouter()

const systemName = ref('')
const menuList = ref<DefaultTheme.SidebarGroup[]>([])
let prevFetchSystemName = ''

const showSearchBar = computed(() => router.route.path !== '/')

watch(() => route.path, setData)

onBeforeMount(setData)

function setData () {
  systemName.value = decodeURIComponent(location.pathname.split('/')[1] || '')
  fetchMenu()
}

function fetchMenu () {
  if (prevFetchSystemName === systemName.value || !systemName.value) return

  prevFetchSystemName = systemName.value
  fetch(`/sidebar/${systemName.value}.json`).then(res => res.json()).then(res => {
    menuList.value = res
  })
}
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <div class="flex-grow-1 ml-2">
        <NavSearchBar v-if="showSearchBar" />
      </div>
      <span class="mx-3 font-bold text-primary">{{ systemName }}</span>
    </template>
    <template #sidebar-nav-before>
      <div
        v-for="group in menuList"
        :key="group.text"
        class="group"
      >
        <VPSidebarGroup
          :text="group.text"
          :items="group.items"
          :collapsible="group.collapsible"
          :collapsed="group.collapsed"
        />
      </div>
    </template>
    <Content />
  </Layout>
</template>

<style scoped>
.group + .group {
  margin-top: 32px;
  border-top: 1px solid var(--vp-c-divider-light);
  padding-top: 10px;
}

@media (min-width: 960px) {
  .group {
    padding-top: 10px;
    width: calc(var(--vp-sidebar-width) - 64px);
  }

  .group + .group {
    margin-top: 24px;
  }
}
:deep(.VPSidebar > .nav > .group:last-child) {
  display: none;
}
</style>
