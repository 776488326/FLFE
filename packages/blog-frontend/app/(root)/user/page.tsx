import React from 'react';
import PersonalResume, { ResumeProps } from '../../../components/PersonalResume';

const Post = async () => {
    const resume : ResumeProps= {
        name: '冯亮',
        title: '前端开发工程师',
        photo: 'https://avatars.githubusercontent.com/u/40347810?v=4&size=64',
        socialMedia: [],
        workExperience: [],
        education: [],
        services: [],
        skills: [],
        latestProject: {
            name: '项目名称',
            techUsed: '技术栈',
            image: '/p1.png',
            livePreview: 'http://www.776488326.github.io/',
            sourceCode: 'https://github.com/776488326/FLFE',
        }
    };
    return <div>
        <PersonalResume {...resume}/>
    </div>
}

export default Post;