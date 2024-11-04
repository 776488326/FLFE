<script setup lang="ts">
import request from "@/lib/request"
import { ref } from "vue"
import { onMounted } from "vue";
import emptyImg from '../../assets/empty.png';
const loading = ref(false);
const tableData = ref([]);
const columns = [
    {
        id: 'title',
        label: '标题'
    },
    {
        id: 'author',
        label: '作者',
        render: (row: any) => {
            return row.author.name;
        }
    },
    {
        id: 'body',
        label: '内容'
    },
    {
        id: 'createdAt',
        label: '创建时间'
    }
];
onMounted(() => {
    getData();
})
const getData = () => {
    loading.value = true;
    request.get('/api/post').then(res => {
        tableData.value = res.data;
        loading.value = false;
    })
}
const handleDelete = (id: number) => {
    request.delete(`/api/post/${id}`).then(res => {
        console.log('res',res);
        getData();
    })
}

</script>

<template>
    <div>
        <el-button style="--el-color-primary: #725707; margin-bottom: 20px;" type="primary" size="default" @click="$router.push('/post/add')">
            新建文章
        </el-button>
        
        <el-table :data="tableData"
            v-loading="loading"
			border
			max-height="800"
            min
            class="myTable"
		>
            <el-table-column v-for="col in columns"
                :prop="col.id"
                :key="col.id"
                :label="col.label">
                <template #default="scope">
                    <span v-if="col.render">{{ col.render(scope.row) }}</span>
                    <span v-else>{{ scope.row[col.id] }}</span>
                </template>
            </el-table-column>
            <el-table-column
                fiexd="right"
                label="操作"
                width="100">
                <template #default="scope">
                    <el-button @click="$router.push(`/post/edit/${scope.row.id}`)" link style="color: #725707;" type="primary" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.row.id)" link type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
            <template #empty="scope">
                <el-empty description="空啦，老铁整点数据吧" :image="emptyImg"/>
            </template>
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
</style>

<style>
.myTable {
    --el-table-bg-color: transparent !important;
    --el-table-tr-bg-color: transparent !important;
    --el-table-header-bg-color: transparent !important;
    --el-table-header-text-color: #725707 !important;
    --el-text-color-secondary: #725707 !important;
    --el-table-row-hover-bg-color: #f3e9d2 !important;
    --el-mask-color: rgba(0, 0, 0, 0.5) !important;
    --el-color-primary: #ffbf00 !important;
}
</style>