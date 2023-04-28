---
layout: home
sidebar: false
---
<script setup>
import { useData } from 'vitepress'
import HomeMenu from './.vitepress/components/HomeMenu.vue'

const { page } = useData()
</script>

<HomeMenu />
