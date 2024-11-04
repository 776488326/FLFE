<script setup>
import emptyImg from '../../assets/empty.png';

</script>

<template>
    <div style="display: flex; align-items: center; justify-content: center; height: 100%">
		<el-empty :image="emptyImg" image-size="500">
			<template #description>
				<h1 style="font-size: 36px">啥也没有别找了</h1>
			</template>
		</el-empty>
    </div>
</template>

<style lang="scss" scoped>
</style>