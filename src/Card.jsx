
import React from 'react'

function Card() {

  const data =[
    {
      image:'https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Image 1",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero ipsa corporis!"
    },
    {
      image:'https://images.unsplash.com/photo-1712921673202-2b312e13cd19?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Image 2",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero ipsa corporis"
    },
    {
      image:'https://images.unsplash.com/photo-1713187340827-45c991f6eecd?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:"Image 3",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero ipsa corporis"
    }
  ]

  return (
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
     {data.map((elem,index) => (
      <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className='w-full h-full object-cover' src={elem.image} alt="" />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{elem.name}</h2>
          <p className='text-xs mt-3'>{elem.description}</p>
        </div>
      </div>
     ))}
      </div>
  )
}

export default Card
