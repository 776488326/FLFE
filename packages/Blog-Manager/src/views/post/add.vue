<script setup lang="ts">
import { onMounted, reactive, ref, nextTick } from 'vue';
import { useUserInfo } from '@/stores/counter';
import Vditor from 'vditor';
import request from '@/lib/request'
import { useRoute, useRouter } from 'vue-router';
let userInfo = useUserInfo();
let route = useRoute();
let router = useRouter();
const form = reactive({
    id: '',
    title: '',
    slug: '',
    publish: false,
    body: '',
    authorId: ''
});
let vditor = ref(null);

onMounted(() => {
    vditor = new Vditor('vditor', {
        height: 600,
        mode: "sv", // 仅显示源码模式和实时预览模式
        lang: "zh_CN", // 设置语言为中文
        toolbar: [ // 仅保留程序员常用的功能
            "undo", "redo", "|",
            "headings", "bold", "italic", "strike", "|",
            "list", "ordered-list", "check", "|",
            "code", "inline-code", "insert-after", "|",
            "link", "table", "quote", "|",
            "preview", "fullscreen"
        ],
        preview: {
            hljs: {
            style: "monokai", // 代码高亮风格
            },
            theme: {
                current: "dark", // 主题
            }
        },
        cache: { // 自动保存草稿
            enable: false,
        },
        upload: { // 上传图片配置
            url: "/api/upload", // 后端上传图片的接口
            format: (files) => {
            const formData = new FormData();
            files.forEach(file => formData.append('file[]', file));
            return formData;
            },
        },
        placeholder: "开始编写您的技术文章吧...", // 输入框占位符

    });
    form.id = route.params.id;
    
    if (form.id) {
        request.get(`/api/post/${form.id}`).then(res => {
            form.title = res.data.title;
            form.slug = res.data.slug;
            form.publish = res.data.publish;
            form.body = res.data.body;
            vditor.setValue(res.data.body); 
        })
    }
})
function onSubmit() {
    form.body = vditor.getValue();
    form.authorId = userInfo.info.id;
    // TODO: 提交表单
    if (form.id) {
        let params = {...form};
        delete params.id;
        request.patch(`/api/post/${form.id}`, params).then(res => {
            $message
        })
    } else {
        request.post('/api/post', form).then(res => {
            router.push('/post')
        })
    }
}

</script>

<template>
    <el-row :gutter="20">
        <el-col :span="8" :offset="0">
            <el-form  :model="form" size="large" label-width="80px" :inline="false">
                <el-form-item label="标题" prop="title">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="简介" prop="slug">
                    <el-input v-model="form.slug"></el-input>
                </el-form-item>
                <el-form-item label="发布" prop="publish">
                    <el-switch v-model="form.publish" :active-value="true" :inactive-value="false" active-text="是" inactive-text="否">
                    </el-switch>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">{{form.id ? '修改': '新增'}}</el-button>
                    <el-button @click="$router.push('/post')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="16" :offset="0">
            <section id="vditor" style="width: 100%; min-height: 400px;"></section>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>

</style>

<style>
@import 'vditor/dist/index.css';
</style>
