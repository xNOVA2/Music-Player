import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Music, Home } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="fixed h-screen w-64 flex-col overflow-y-auto border-r bg-slate-200 px-5 py-8">
      <Link href="/" className='flex gap-2 items-center'>
      <Music size={40}/>
      <h1 className='text-3xl'>Music Star</h1>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href={'/Dashboard'}
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Home</span>
            </Link>
        
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href={'/favourite'}
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium"> Favourite Songs</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href={'/history'}
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Recently Played</span>
            </Link>
           
          </div>

         
           
      
        </nav>
        </div>
    </aside>
  )
}
