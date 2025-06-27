import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-6 px-4 md:py-8 bg-gray-50'>
        <Container>
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">Create New Post</h1>
                <p className="text-gray-600 text-center mt-2">Share your thoughts with the world</p>
            </div>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost