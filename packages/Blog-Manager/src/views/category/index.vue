<script setup>
import request from '@/lib/request'
import { ElDialog, ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
    const dialogVisible = ref(false);
    const tags = ref();
    const name = ref();
    onMounted(() => {
        getCategoryData();
    })
    async function getCategoryData() {
        let res = await fetch("/api/category", {
            method: "GET",
            headers: {
                "Content-Type": "text/json"
            }
        }).then(res => res.json());
        console.log('res',res);
        tags.value = res || null;
    }
    function handleClose() {
        dialogVisible.value = false;
    }
    function handleAdd() {
        request.post('/api/category', {name: name.value}).then(res =>{
            ElMessage.success({
                message: "添加成功"
            })
            handleClose();
            getCategoryData();
        })
    }
</script>
<template>
    <div class="">
        <el-button type="success" size="mini" @click="()=>{dialogVisible = true}">添加分类</el-button>
        
        <div class="tag-container">
            <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag.name }}</span>
        </div>
        <el-dialog
            v-model="dialogVisible"
            title="添加分类"
            width="500"
            :before-close="handleClose"
        >
            <el-input v-model="name" placeholder="请输入分类名称" size="normal" clearable></el-input>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="handleClose">取消</el-button>
                    <el-button type="primary" @click="handleAdd">
                    添加
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}
.tag {
  background-color: #f0f0f0;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
}
</style>