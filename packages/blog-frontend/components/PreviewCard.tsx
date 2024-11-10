import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const PreviewCard = ({post}) => {
  const { id, title, author: {id: authorId, name}, views, category, createdAt, description, image, slug } = post;
  function formatDate(params:Date) {
    return new Date(params).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return (
    <section className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5 overflow-hidden'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {name}
                    </p>
                </Link>
                <Link href={`/post/${id}`}>
                    <h3 className='text-26-semibold text-ellipsis whitespace-nowrap overflow-hidden'>
                        {title}
                    </h3>
                </Link>
            </div>
        </div>
        <Link href={`/post/${id}`}>
            <p className='startup-card-desc text-ellipsis whitespace-nowrap overflow-hidden'>
                {description}
            </p>
            <img src={image} alt='placeholder' className='startup-card_img' />
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link href={`/?search=${category?.toLowerCase()}`}>
                <p className='text-16-medium'>{category}</p>
            </Link>
            <Button>
                <Link className='text-white-100' href={`/post/${id}`}>详情</Link>
            </Button>
        </div>
    </section>
  )
}

export default PreviewCard
