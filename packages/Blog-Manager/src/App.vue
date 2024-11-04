<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutVue from './components/layout/index.vue'
import { useUserInfo } from './stores/counter';
const userInfo = useUserInfo();
onMounted(() => {
    userInfo.updateUserInfo();
})
</script>

<template>
    <LayoutVue />
</template>
