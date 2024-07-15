import React from 'react'

const Header = () => {
  return (
    <div  className='bg-black text-white'>
        <h1 className='text-2xl ps-8 pt-6'>E-comp</h1>
        <div className='text-center flex-row h-40'>
        <a>Products</a> -
        <a> My purchases</a>
        </div>
    </div>
  )
}

export default Header