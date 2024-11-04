<script setup lang="ts">
import footerVue from "./footer.vue";
import headerVue from "./header.vue";
</script>

<template>
    <el-container class="container" style="display: flex; flex-direction: column; height: 100vh;">
        <el-header class="header">
            <headerVue />
        </el-header>
        <el-main style="flex: 1">
            <router-view />
        </el-main>
        <el-footer class="footer" style="padding: 0; height: 64px; border-top-left-radius: 15px; border-top-right-radius: 15px;">
            <footerVue />
        </el-footer>
    </el-container>
</template>

<style lang="scss" scoped>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        background-color: #c1bead;
        flex-direction: column;
    }
    .header {
        padding: unset;
        padding-left: 16px;
    }
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #515151;
        background-color: #FFCFA0;
        font-size: 20px;
    }
    
</style>