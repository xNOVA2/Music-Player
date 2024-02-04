'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Card from '@/components/Card'
import { SongsStore } from '@/store/redux'
import { StoreState } from '@/types'
const FavouriteSongs = () => {

  const FavList = SongsStore((state: unknown) => (state as StoreState).favouriteList);

  return (
    <>
    
        <Sidebar/>
    <div className='ml-64'>
            <div className='p-4'>
                <h1 className='text-4xl font-bold '>Favourite List</h1>
            </div>
             <div className="flex gap-2 p-2 flex-wrap">
          
            {FavList.map((video)=>(
              <Card video={video} />
            ))}
        </div>
    </div>
    </>
  )
}

export default FavouriteSongs