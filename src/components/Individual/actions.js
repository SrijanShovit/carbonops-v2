import Link from 'next/link'
import React from 'react'

const Actions = () => {
  return (
    <div className="flex flex-col h-fit justify-center items-center py-4 bg-[#163032] rounded-md" style={{zIndex:100}}>
    <Link href="#">
    <span className="text-2xl font-medium rounded-lg px-8 hover:bg-[#00BD57] flex justify-around items-start">
      Create<span>+</span>
    </span>
    </Link>
    <Link href="/events">
      <span className="text-2xl font-medium rounded-lg px-8 hover:bg-[#00BD57]">
        Events
      </span>
    </Link>
    <Link href="/feeds">
      <span className="text-2xl font-medium rounded-lg px-8 hover:bg-[#00BD57]">
        Feeds
      </span>
    </Link>
  </div>
  )
}

export default Actions