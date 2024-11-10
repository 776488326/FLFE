'use client'
import ReactMarkdown from 'react-markdown'; // 新增：导入 react-markdown
import React from 'react';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css'; // 新增：引入 GitHub Markdown CSS

interface VditorRendererProps { 
    content: string; 
}
const VditorRenderer: React.FC<VditorRendererProps> = ({ content }) => {

    return (
        <div className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> {/* 使用 react-markdown 渲染内容 */}
        </div>
    );
};

export default VditorRenderer;