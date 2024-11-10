import React from 'react';
import VditorRenderer from '../VditorRenderer';

interface IPost {
    body: string;
    title: string;
}

const Post = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    let id = (await params).id;
    let post: IPost = {
        body: "",
        title: ""
    };

    async function getPostData() {
        return fetch(`http://localhost:3000/post/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => {
            post = res;
            // console.log('post.body', post.body); // 输出返回的 Markdown 数据
        });
    }

    if (id) {
        await getPostData();
    }

    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold text-center mb-6">{post.title}</h1> 
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <VditorRenderer content={post.body} />
            </div>
        </div>
    );
}

export default Post;