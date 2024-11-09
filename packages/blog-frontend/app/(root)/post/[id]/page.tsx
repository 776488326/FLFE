import React from 'react'
import markdown from 'markdown-it';
interface IPost {
    body: string,
    title: string
}
const md = markdown();
const Post = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    let id = (await params).id;
    let post: IPost = {
        body: "",
        title: ""
    };
    let body = "";
    async function getPostData() {
        return fetch(`http://localhost:3000/post/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => {
            post = res;
            console.log('post.body',post.body);
            body = md.render(post.body);
        })
    }

    if(id) {
        await getPostData();
    }
    return (
        <div>
            <h1>{post.title}</h1>
            {
                body ? (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: body }}></div>
                    </>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default Post
