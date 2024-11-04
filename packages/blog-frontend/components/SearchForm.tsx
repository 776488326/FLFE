import React from 'react'
import Form from 'next/form';
import ResetSearchForm from './ResetSearchForm';
import { Search } from 'lucide-react';
const SearchForm = ({search}: {search?: string}) => {
  return (
    <Form 
      action="/"
      scroll={false}
      className='search-form'
      
    >
      <input
        name='search'
        type="text" 
        placeholder="搜索你感兴趣的！！！"
        className='search-input'
      />
      <div className='flex gap-2'>
        {
          search && <ResetSearchForm />
        }
        <button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
