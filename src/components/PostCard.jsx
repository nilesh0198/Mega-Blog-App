import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (    
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] hover:bg-blue-50'>
          <div className='w-full justify-center mb-4 overflow-hidden aspect-w-16 aspect-h-9'>
              {featuredImage ? (
                  <img 
                      src={appwriteService.getFilePreview(featuredImage)} 
                      alt={title}
                      className='rounded-xl w-full h-full object-cover bg-gray-50'
                      onError={(e) => {
                          console.error('Image loading error:', featuredImage);
                          e.target.src = 'https://via.placeholder.com/800x400?text=Blog+Post';
                      }}
                      loading="lazy"
                  />
              ) : (
                  <div className='rounded-xl w-full h-full bg-gray-100 flex items-center justify-center'>
                      <span className='text-gray-400'>No image available</span>
                  </div>
              )}
          </div>
          <h2 className='text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200'>{title}</h2>
          <div className='mt-2 flex justify-between items-center'>
              <span className='text-sm text-gray-500'>Read More →</span>
              <div className='h-1 w-12 bg-blue-500 rounded'></div>
          </div>
      </div>
    </Link>
  )
}

export default PostCard