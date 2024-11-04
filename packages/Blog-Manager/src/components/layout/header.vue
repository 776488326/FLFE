<script lang="ts" setup>
import { onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
    function handleRun(e: any):any {
        let rabbit = document.querySelector('.rabbit') as HTMLElement;
        let nav = document.querySelector('#navbar') as HTMLElement;
        rabbit.style.left = `${e.clientX - nav.clientWidth - 50}px`;
        requestAnimationFrame(handleRun);
    }
    function handleReset():any {
        let rabbit = document.querySelector('.rabbit') as HTMLElement;
        rabbit.style.left = '0px';
    }
    onUnmounted(() => {
        let rabbit = document.querySelector('.rabbit') as HTMLElement;
        rabbit.style.animation = 'none';
    })
</script>
<template>
    <div class="nav">
        <section id="navbar">
            <el-button :class="['btn', $route.path === '/' ? 'active': '']" type="text" size="default" @click="$router.push('/')">首页</el-button>
            <el-button :class="['btn', $route.path === '/post' ? 'active': '']" type="text" size="default" @click="$router.push('/post')">文章管理</el-button>
            <el-button :class="['btn', $route.path === '/category' ? 'active': '']" type="text" size="default" @click="$router.push('/category')">分类管理</el-button>
        </section>
        <section class="navbg" @mousemove="handleRun" @mouseleave="handleReset">
            <div class="rabbit">
                <img src="@/assets/rabbit.webp" alt="rabbit" style="width: 100%; height: 100%;">
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.nav {
    width: 100%;
    display: flex;
    height: 64px;
    align-items: center;
    overflow: hidden;
}
.btn {
    color: #FFCF40; 
    font-size: 28px;
}
.btn:hover {
    text-shadow: 1px 1px 1px #000000;
    transition: all 0.5s ease;
}
.navbg {
    position: relative;
    flex: 1;
    height: 100%;
    overflow: hidden;
    margin-left: 50px;
    box-shadow: 0 0 10px 20px rgba($color: #000000, $alpha: .5);
    background: url('@/assets/navbg.jpg') no-repeat 0 80%;
    background-size: 100% auto;
    align-items: center;
    display: flex;
    border-radius: 20px 0 0 20px;
}
.rabbit {
    position: absolute;
    left: 10px;
    top: 16px;
    width: 32px;
    height: 32px;
    transition: all 0.5s ease;
    pointer-events: none;
    animation: rot 2s linear infinite;
    background-color: red;
    border-radius: 50%;
    overflow: hidden;
}
.navbar {
    display: flex;
    align-items: center;
}
@keyframes rot {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.active {
    text-shadow: 1px 1px 1px #000000;
    transform: scale(1.1);
    transition: all 0.5s ease;
}
</style>
